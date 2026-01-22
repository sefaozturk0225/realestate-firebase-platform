/**
 * ═══════════════════════════════════════════════════════════════════
 * ⚙️ FIREBASE CLOUD FUNCTIONS - BZK Yapı Website
 * ═══════════════════════════════════════════════════════════════════
 */

const {setGlobalOptions} = require("firebase-functions");
const {onRequest, onCall} = require("firebase-functions/v2/https");
const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");

// Initialize Firebase Admin
admin.initializeApp();

// Global Options
setGlobalOptions({
  maxInstances: 10,
  region: "europe-west1", // En yakın region
  memory: "256MiB",
  timeoutSeconds: 60,
});

// ═══════════════════════════════════════════════════════════════════
// 📧 EMAIL NOTIFICATION - Teklif İsteği Geldiğinde
// ═══════════════════════════════════════════════════════════════════

exports.sendInquiryNotification = onDocumentCreated(
    {
      document: "inquiries/{inquiryId}",
      region: "europe-west1",
    },
    async (event) => {
      const inquiry = event.data.data();
      const inquiryId = event.params.inquiryId;

      logger.info("New inquiry received", {inquiryId, inquiry});

      try {
        // Email gönderme (SendGrid, Nodemailer vs. entegre edilebilir)
        // Şu an için sadece log

        logger.info("Inquiry notification sent", {
          to: "admin@bzkyapi.com",
          inquiry: {
            name: inquiry.name,
            email: inquiry.email,
            phone: inquiry.phone,
          },
        });

        // Realtime Database'e de yazalım
        await admin.database()
            .ref(`inquiries/${inquiryId}`)
            .set({
              ...inquiry,
              createdAt: Date.now(),
              status: "new",
            });

        return {success: true};
      } catch (error) {
        logger.error("Error sending inquiry notification", error);
        throw error;
      }
    },
);

// ═══════════════════════════════════════════════════════════════════
// 🖼️ IMAGE OPTIMIZATION (Gelecekte kullanım için)
// ═══════════════════════════════════════════════════════════════════

exports.optimizeImage = onCall(
    {
      region: "europe-west1",
      cors: true,
    },
    async (request) => {
      const {imageUrl, width, height} = request.data;

      logger.info("Image optimization requested", {imageUrl, width, height});

      // TODO: Image optimization implementasyonu
      // Sharp, ImageMagick vs. kullanılabilir

      return {
        success: true,
        optimizedUrl: imageUrl, // Placeholder
      };
    },
);

// ═══════════════════════════════════════════════════════════════════
// 📊 ANALYTICS - Günlük İstatistik Hesaplama
// ═══════════════════════════════════════════════════════════════════

exports.calculateDailyStats = onRequest(
    {
      region: "europe-west1",
      cors: true,
    },
    async (req, res) => {
      try {
        const db = admin.firestore();
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Bugünkü inquiry sayısı
        const inquiriesSnapshot = await db.collection("inquiries")
            .where("createdAt", ">=", admin.firestore.Timestamp.fromDate(today))
            .get();

        // Toplam proje sayısı
        const projectsSnapshot = await db.collection("projects").get();

        const stats = {
          date: today.toISOString(),
          totalInquiries: inquiriesSnapshot.size,
          totalProjects: projectsSnapshot.size,
          activeProjects: projectsSnapshot.docs
              .filter((doc) => doc.data().status === "ongoing").length,
          completedProjects: projectsSnapshot.docs
              .filter((doc) => doc.data().status === "completed").length,
        };

        logger.info("Daily stats calculated", stats);

        res.json({success: true, stats});
      } catch (error) {
        logger.error("Error calculating stats", error);
        res.status(500).json({success: false, error: error.message});
      }
    },
);

// ═══════════════════════════════════════════════════════════════════
// 🧹 CLEANUP - Eski Logları Temizle (Scheduled)
// ═══════════════════════════════════════════════════════════════════

// Gelecekte scheduled function olarak eklenebilir
// exports.cleanupOldLogs = onSchedule("every day 00:00", async () => {
//   const db = admin.firestore();
//   const oneMonthAgo = new Date();
//   oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
//
//   const snapshot = await db.collection("logs")
//     .where("timestamp", "<", admin.firestore.Timestamp.fromDate(oneMonthAgo))
//     .get();
//
//   const batch = db.batch();
//   snapshot.docs.forEach((doc) => {
//     batch.delete(doc.ref);
//   });
//
//   await batch.commit();
//   logger.info(`Cleaned up ${snapshot.size} old logs`);
// });

// ═══════════════════════════════════════════════════════════════════
// 🔒 RATE LIMITING - API Koruma
// ═══════════════════════════════════════════════════════════════════

const rateLimitMap = new Map();

/**
 * Rate limiting middleware
 * @param {string} identifier - IP veya user ID
 * @param {number} maxRequests - Maksimum istek sayısı
 * @param {number} windowMs - Zaman penceresi (ms)
 * @return {boolean} - Rate limit aşıldı mı?
 */
function checkRateLimit(identifier, maxRequests = 10, windowMs = 60000) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(identifier) || [];

  // Eski istekleri temizle
  const recentRequests = userRequests.filter((time) => now - time < windowMs);

  if (recentRequests.length >= maxRequests) {
    return false; // Rate limit aşıldı
  }

  recentRequests.push(now);
  rateLimitMap.set(identifier, recentRequests);

  return true; // İzin ver
}

exports.submitInquiry = onCall(
    {
      region: "europe-west1",
      cors: true,
    },
    async (request) => {
      const clientIp = request.rawRequest.ip;

      // Rate limiting kontrolü
      if (!checkRateLimit(clientIp, 5, 3600000)) { // 5 istek/saat
        logger.warn("Rate limit exceeded", {ip: clientIp});
        throw new Error("Too many requests. Please try again later.");
      }

      const {name, email, phone, message, projectId} = request.data;

      // Validation
      if (!name || !email || !phone) {
        throw new Error("Missing required fields");
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Invalid email format");
      }

      try {
        const db = admin.firestore();
        const inquiryRef = await db.collection("inquiries").add({
          name,
          email,
          phone,
          message: message || "",
          projectId: projectId || null,
          status: "new",
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          source: "website",
          ipAddress: clientIp,
        });

        logger.info("Inquiry created", {id: inquiryRef.id});

        return {
          success: true,
          inquiryId: inquiryRef.id,
          message: "Talebiniz başarıyla alındı!",
        };
      } catch (error) {
        logger.error("Error creating inquiry", error);
        throw new Error("Inquiry could not be created");
      }
    },
);

// ═══════════════════════════════════════════════════════════════════
// 📱 WHATSAPP REDIRECT
// ═══════════════════════════════════════════════════════════════════

exports.whatsappRedirect = onRequest(
    {
      region: "europe-west1",
      cors: true,
    },
    (req, res) => {
      const {phone, message} = req.query;
      const whatsappNumber = phone || "+90 532 XXX XX XX";
      const encodedMessage = encodeURIComponent(
          message || "Merhaba, web sitenizden ulaşıyorum.",
      );

      const whatsappUrl =
        `https://wa.me/${whatsappNumber.replace(/\s/g, "")}?text=${encodedMessage}`;

      res.redirect(whatsappUrl);
    },
);

// ═══════════════════════════════════════════════════════════════════
// 🏥 HEALTH CHECK
// ═══════════════════════════════════════════════════════════════════

exports.healthCheck = onRequest(
    {
      region: "europe-west1",
      cors: true,
    },
    (req, res) => {
      res.json({
        status: "healthy",
        timestamp: new Date().toISOString(),
        version: "1.0.0",
      });
    },
);
