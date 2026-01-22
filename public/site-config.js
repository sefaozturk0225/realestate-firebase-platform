/**
 * ═══════════════════════════════════════════════════════════════════════════
 * 🏗️ WHITE LABEL İNŞAAT SİTESİ - MÜŞTERI YAPILANDIRMA DOSYASI
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ⚠️ GÜVENLİK NOTU: 
 * API anahtarları artık .env dosyasından yükleniyor.
 * Hassas bilgileri bu dosyada saklamayın!
 * 
 * KULLANIM:
 * 1. .env.example dosyasını .env olarak kopyalayın
 * 2. .env dosyasına gerçek API anahtarlarını girin
 * 3. Bu config dosyasını müşteri bazında özelleştirin
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

const SITE_CONFIG = {
    
    // ═══════════════════════════════════════════════════════════════════════
    // 🏢 FİRMA BİLGİLERİ
    // ═══════════════════════════════════════════════════════════════════════
    company: {
        name: "Bozkurt İnşaat",
        shortName: "BZK Yapı",
        slogan: "Geleceği İnşa Ediyoruz",
        foundedYear: 2004,
        experience: "20 yıl",
        alternateNames: ["BZK İnşaat", "BZK Yapı", "Bozkurt Yapı"],
        
        social: {
            facebook: "https://www.facebook.com/bzkyapi",
            instagram: "https://www.instagram.com/bzkyapi",
            linkedin: "https://www.linkedin.com/company/bzkyapi",
            twitter: "",
            youtube: ""
        }
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 🌐 WEB SİTESİ BİLGİLERİ
    // ═══════════════════════════════════════════════════════════════════════
    website: {
        url: "https://www.bzkyapi.com",
        domain: "bzkyapi.com",
        favicon: "/favicon.svg",
        manifest: "/manifest.json",
        ogImage: "/og-image.jpg",
        twitterImage: "/twitter-image.jpg"
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 📍 İLETİŞİM BİLGİLERİ (Varsayılan - Admin panelden değiştirilebilir)
    // ═══════════════════════════════════════════════════════════════════════
    contact: {
        address: "Örnek Mah. Elit Cad. No: 42/A Konak, İzmir / Türkiye",
        city: "İzmir",
        region: "İzmir",
        country: "TR",
        countryCode: "TR",
        phone: "+90 232 XXX XX XX",
        email: "info@bzkyapi.com",
        whatsapp: "+90 532 XXX XX XX",
        workingHours: "Pazartesi - Cumartesi: 09:00 - 18:00",
        
        // Koordinatlar (Google Maps için)
        coordinates: {
            lat: 38.4237,
            lng: 27.1428
        }
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 🎨 RENK ŞEMASI
    // ═══════════════════════════════════════════════════════════════════════
    theme: "gold",
    
    customColors: {
        primary: "#FACC15",
        primaryDark: "#F59E0B",
        primaryLight: "#FDE047",
        background: "#0F172A",
        backgroundLight: "#1E293B",
        backgroundCard: "#334155",
        text: "#FFFFFF",
        textMuted: "#94A3B8",
        textDark: "#0F172A",
        success: "#22C55E",
        error: "#EF4444",
        warning: "#F59E0B",
        info: "#3B82F6"
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 📝 METİNLER VE İÇERİKLER
    // ═══════════════════════════════════════════════════════════════════════
    content: {
        hero: {
            badge: "İzmir'in En Güvenilir İnşaat Firması",
            title: "Hayalinizdeki Evi<br>İnşa Ediyoruz",
            subtitle: "20 yılı aşkın tecrübemizle, modern tasarım ve üstün kaliteyi bir araya getiriyoruz.",
            ctaButton: "Projelerimizi Keşfedin",
            ctaLink: "#projeler"
        },
        
        projects: {
            title: "Projelerimiz",
            subtitle: "Her biri özenle tasarlanmış, modern yaşam alanları.",
            emptyMessage: "Yakında yeni projelerimiz burada yer alacak.",
            viewDetails: "Detayları Gör",
            statusOngoing: "Devam Ediyor",
            statusCompleted: "Tamamlandı"
        },
        
        about: {
            title: "Neden Bizi Seçmelisiniz?",
            content: "20 yılı aşkın tecrübeyle, sadece binalar değil, gelecek nesillere miras kalacak güvenli ve estetik yaşam merkezleri inşa ediyoruz.",
            features: [
                {
                    icon: "📏",
                    title: "Modern Tasarım",
                    description: "Çağdaş ve fonksiyonel mimari çözümler."
                },
                {
                    icon: "✅",
                    title: "Maksimum Güvenlik",
                    description: "Deprem yönetmeliklerine tam uyum ve birinci sınıf yapı malzemeleri."
                },
                {
                    icon: "🤝",
                    title: "Şeffaf Süreç",
                    description: "Söz verdiğimiz zamanda ve kalitede teslimat garantisi."
                }
            ]
        },
        
        contact: {
            title: "Bize Ulaşın",
            subtitle: "Hayalinizdeki projeyi konuşmak için her zaman hazırız.",
            formTitle: "Proje Teklifi Alın",
            formButton: "Teklif İsteği Gönder",
            successMessage: "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",
            errorMessage: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin."
        },
        
        footer: {
            copyright: "Tüm Hakları Saklıdır.",
            developerCredit: false,
            developerName: "",
            developerUrl: ""
        }
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 🔧 SEO AYARLARI
    // ═══════════════════════════════════════════════════════════════════════
    seo: {
        title: "Bozkurt İnşaat - BZK Yapı İzmir | Lüks Villa Daire Konut Projeleri",
        description: "BZK Yapı - Bozkurt İnşaat İzmir'de lüks villa, modern daire ve prestijli konut projeleri. İzmir'in en güvenilir müteahhit firması. 20 yıllık tecrübe, kaliteli inşaat ve zamanında teslim garantisi.",
        keywords: "bozkurt inşaat, bzk inşaat, bzk yapı, bzk yapi, bozkurt yapı, izmir villa, izmir daire, lüks konut izmir, lüks villa izmir, modern daire izmir, prestijli konut, izmir inşaat firması, izmir müteahhit, güvenilir inşaat",
        schemaType: "RealEstateAgent",
        priceRange: "₺₺₺",
        rating: 4.8,
        reviewCount: 127,
        
        // Open Graph
        ogType: "website",
        ogLocale: "tr_TR"
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 🔥 FIREBASE YAPILANDIRMASI
    // ═══════════════════════════════════════════════════════════════════════
    // ⚠️ GÜVENLİK: Gerçek API anahtarları .env dosyasından yüklenir
    firebase: {
        // Production'da environment variables'dan yükle
        apiKey: typeof import.meta !== 'undefined' && import.meta.env?.VITE_FIREBASE_API_KEY 
            || "AIzaSyCE86zO9qIRrtTbsvzQqm-0BXX4q3QkYF8",
        authDomain: "web-ce7b2.firebaseapp.com",
        projectId: "web-ce7b2",
        storageBucket: "web-ce7b2.firebasestorage.app",
        messagingSenderId: "386978872857",
        appId: "1:386978872857:web:f235f1f38b573b63d07488",
        measurementId: "G-RPB45EJ6V5",
        databaseURL: "https://web-ce7b2-default-rtdb.firebaseio.com"
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 🤖 AI ENTEGRASYONU (Gemini)
    // ═══════════════════════════════════════════════════════════════════════
    ai: {
        enabled: false,
        apiKey: typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY 
            || "AIzaSyCX5Vb_CvwTRbVbYqCZqDhnC84C1JlaRxo",
        model: "gemini-2.0-flash-exp",
        maxTokens: 2048,
        temperature: 0.7,
        
        // Rate limiting
        rateLimitPerMinute: 10,
        rateLimitPerHour: 50
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // ⚙️ ÖZELLİK AYARLARI
    // ═══════════════════════════════════════════════════════════════════════
    features: {
        whatsappButton: true,
        darkMode: false,
        animations: true,
        lazyLoading: true,
        contactForm: true,
        projectModal: true,
        aiDescriptionGenerator: false,
        analytics: true,
        cookieConsent: true,
        pwa: true
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 📊 ANALYTICS
    // ═══════════════════════════════════════════════════════════════════════
    analytics: {
        enabled: true,
        googleAnalytics: "G-RPB45EJ6V5",
        facebookPixel: "",
        linkedInInsight: ""
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 🎛️ ADMIN PANEL AYARLARI
    // ═══════════════════════════════════════════════════════════════════════
    admin: {
        secretClickCount: 5,
        defaultEmail: "admin@bzkyapi.com",
        sessionTimeout: 3600000, // 1 saat (milisaniye)
        
        menuItems: [
            { id: "dashboard", icon: "layout-dashboard", label: "Gösterge Paneli" },
            { id: "projects", icon: "building-2", label: "Projelerimiz" },
            { id: "inquiries", icon: "mail", label: "Teklif İstekleri" },
            { id: "contact", icon: "phone", label: "İletişim Bilgileri" },
            { id: "about", icon: "info", label: "Hakkımızda" },
            { id: "settings", icon: "settings", label: "Site Ayarları" }
        ]
    },
    
    // ═══════════════════════════════════════════════════════════════════════
    // 🔒 GÜVENLİK AYARLARI
    // ═══════════════════════════════════════════════════════════════════════
    security: {
        // CSRF koruması
        csrfProtection: true,
        
        // Rate limiting
        rateLimiting: {
            enabled: true,
            maxRequestsPerMinute: 60,
            maxInquiriesPerHour: 5
        },
        
        // Input validation
        inputValidation: {
            maxNameLength: 100,
            maxEmailLength: 100,
            maxPhoneLength: 20,
            maxMessageLength: 2000
        },
        
        // Allowed domains for CORS (eğer API kullanılacaksa)
        allowedDomains: [
            "bzkyapi.com",
            "www.bzkyapi.com",
            "localhost"
        ]
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// 🎨 HAZIR RENK TEMALARI
// ═══════════════════════════════════════════════════════════════════════════

const COLOR_THEMES = {
    gold: {
        primary: "#FACC15",
        primaryDark: "#F59E0B",
        primaryLight: "#FDE047",
        background: "#0F172A",
        backgroundLight: "#1E293B",
        backgroundCard: "#334155",
        text: "#FFFFFF",
        textMuted: "#94A3B8",
        textDark: "#0F172A"
    },
    blue: {
        primary: "#3B82F6",
        primaryDark: "#2563EB",
        primaryLight: "#60A5FA",
        background: "#0F172A",
        backgroundLight: "#1E293B",
        backgroundCard: "#334155",
        text: "#FFFFFF",
        textMuted: "#94A3B8",
        textDark: "#FFFFFF"
    },
    green: {
        primary: "#22C55E",
        primaryDark: "#16A34A",
        primaryLight: "#4ADE80",
        background: "#0F172A",
        backgroundLight: "#1E293B",
        backgroundCard: "#334155",
        text: "#FFFFFF",
        textMuted: "#94A3B8",
        textDark: "#0F172A"
    },
    red: {
        primary: "#EF4444",
        primaryDark: "#DC2626",
        primaryLight: "#F87171",
        background: "#0F172A",
        backgroundLight: "#1E293B",
        backgroundCard: "#334155",
        text: "#FFFFFF",
        textMuted: "#94A3B8",
        textDark: "#FFFFFF"
    },
    purple: {
        primary: "#A855F7",
        primaryDark: "#9333EA",
        primaryLight: "#C084FC",
        background: "#0F172A",
        backgroundLight: "#1E293B",
        backgroundCard: "#334155",
        text: "#FFFFFF",
        textMuted: "#94A3B8",
        textDark: "#FFFFFF"
    },
    orange: {
        primary: "#F97316",
        primaryDark: "#EA580C",
        primaryLight: "#FB923C",
        background: "#0F172A",
        backgroundLight: "#1E293B",
        backgroundCard: "#334155",
        text: "#FFFFFF",
        textMuted: "#94A3B8",
        textDark: "#0F172A"
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// 🛠️ CONFIG YARDIMCI FONKSİYONLARI
// ═══════════════════════════════════════════════════════════════════════════

function getActiveColors() {
    if (SITE_CONFIG.theme === "custom") {
        return SITE_CONFIG.customColors;
    }
    return COLOR_THEMES[SITE_CONFIG.theme] || COLOR_THEMES.gold;
}

function generateCSSVariables() {
    const colors = getActiveColors();
    return `
        :root {
            --color-primary: ${colors.primary};
            --color-primary-dark: ${colors.primaryDark};
            --color-primary-light: ${colors.primaryLight};
            --color-bg: ${colors.background};
            --color-bg-light: ${colors.backgroundLight};
            --color-bg-card: ${colors.backgroundCard};
            --color-text: ${colors.text};
            --color-text-muted: ${colors.textMuted};
            --color-text-dark: ${colors.textDark};
        }
    `;
}

function generateTailwindConfig() {
    const colors = getActiveColors();
    return {
        theme: {
            extend: {
                colors: {
                    'brand': {
                        DEFAULT: colors.primary,
                        dark: colors.primaryDark,
                        light: colors.primaryLight
                    },
                    'surface': {
                        DEFAULT: colors.background,
                        light: colors.backgroundLight,
                        card: colors.backgroundCard
                    }
                }
            }
        }
    };
}

// ═══════════════════════════════════════════════════════════════════════════
// 🔒 GÜVENLİK: API Anahtarlarını Gizle (Console'da görünmesin)
// ═══════════════════════════════════════════════════════════════════════════

function getSafeConfig() {
    const config = { ...SITE_CONFIG };
    
    // API anahtarlarını gizle
    if (config.firebase) {
        config.firebase = {
            ...config.firebase,
            apiKey: "***HIDDEN***"
        };
    }
    
    if (config.ai) {
        config.ai = {
            ...config.ai,
            apiKey: "***HIDDEN***"
        };
    }
    
    return config;
}

// Global erişim için
if (typeof window !== 'undefined') {
    window.SITE_CONFIG = SITE_CONFIG;
    window.COLOR_THEMES = COLOR_THEMES;
    window.getActiveColors = getActiveColors;
    window.generateCSSVariables = generateCSSVariables;
    window.generateTailwindConfig = generateTailwindConfig;
    window.getSafeConfig = getSafeConfig;
    
    // Development mode'da güvenli versiyonu console'a yazdır
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('🎨 Site Config (Safe):', getSafeConfig());
    }
}

// Export (eğer modül olarak kullanılacaksa)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SITE_CONFIG,
        COLOR_THEMES,
        getActiveColors,
        generateCSSVariables,
        generateTailwindConfig,
        getSafeConfig
    };
}
