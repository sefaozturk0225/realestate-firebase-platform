# 🏗️ BZK Yapı - White Label İnşaat Web Sitesi

Modern, ölçeklenebilir ve güvenli bir gayrimenkul/inşaat web sitesi platformu.

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Teknoloji Stack](#-teknoloji-stack)
- [Kurulum](#-kurulum)
- [Yapılandırma](#-yapılandırma)
- [Deployment](#-deployment)
- [Güvenlik](#-güvenlik)
- [Performans](#-performans)
- [Sorun Giderme](#-sorun-giderme)

---

## ✨ Özellikler

### 🎨 White-Label Mimari
- **Tek Config ile Özelleştirme**: `site-config.js` dosyasını düzenleyerek tüm siteyi özelleştirin
- **6 Hazır Renk Teması**: Gold, Blue, Green, Red, Purple, Orange
- **Özel Tema Desteği**: Kendi renk paletinizi oluşturun

### 🔐 Güvenli Admin Panel
- Firebase Authentication ile korumalı
- Projeler, teklif istekleri, iletişim bilgileri yönetimi
- Gizli erişim mekanizması (footer'a 5 kez tıklama)

### 🤖 AI Entegrasyonu
- Google Gemini 2.0 Flash ile proje açıklaması oluşturma
- Otomatik içerik üretimi
- Rate limiting ile kontrollü kullanım

### 📱 Modern UX/UI
- Fully responsive (mobile-first)
- Smooth animations
- Progressive Web App (PWA) desteği
- Lazy loading görseller

### 🔍 SEO Optimizasyonu
- Schema.org structured data
- Open Graph ve Twitter Cards
- Sitemap ve robots.txt
- Semantic HTML5

---

## 🛠️ Teknoloji Stack

### Frontend
- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **Vanilla JavaScript**: ES6+ modules
- **Lucide Icons**: Modern icon library

### Backend
- **Firebase Hosting**: Static site hosting
- **Firebase Authentication**: Kullanıcı yönetimi
- **Firebase Realtime Database**: Real-time data sync
- **Firestore**: Document database
- **Cloud Functions**: Serverless backend
- **Firebase Data Connect**: PostgreSQL (opsiyonel)

### Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Firebase CLI**: Deployment

---

## 🚀 Kurulum

### Gereksinimler

```bash
Node.js >= 22.x
npm >= 10.x
Firebase CLI
```

### Adım 1: Projeyi Klonlayın

```bash
git clone https://github.com/your-repo/bzk-yapi.git
cd bzk-yapi
```

### Adım 2: Dependencies Yükleyin

```bash
# Root dependencies
npm install

# Functions dependencies
cd functions
npm install
cd ..
```

### Adım 3: Environment Variables

```bash
# .env.example dosyasını kopyalayın
cp .env.example .env

# .env dosyasını düzenleyin
nano .env
```

**Gerekli API Keys:**
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key
```

### Adım 4: Firebase Projesini Bağlayın

```bash
# Firebase'e login
firebase login

# Projeyi seçin
firebase use your-project-id
```

### Adım 5: Local Development

```bash
# Firebase emulators'ı başlatın
firebase emulators:start

# Tarayıcıda açın
# http://localhost:5000
```

---

## ⚙️ Yapılandırma

### Site Config (`public/site-config.js`)

```javascript
const SITE_CONFIG = {
  company: {
    name: "Şirket Adı",
    shortName: "Kısa Ad",
    slogan: "Slogan"
  },
  theme: "gold", // veya "blue", "green", "red", "purple", "orange", "custom"
  contact: {
    phone: "+90 XXX XXX XX XX",
    email: "info@example.com",
    address: "Adres"
  }
}
```

### Renk Teması Değiştirme

```javascript
// Hazır tema kullan
theme: "blue"

// Veya özel tema
theme: "custom",
customColors: {
  primary: "#YOUR_COLOR",
  primaryDark: "#YOUR_DARK_COLOR",
  // ...
}
```

### Firebase Config

Firebase bilgilerinizi `.env` dosyasına ekleyin:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
```

---

## 📦 Deployment

### Production Build

```bash
# Tüm servisleri deploy et
firebase deploy

# Sadece hosting
firebase deploy --only hosting

# Sadece functions
firebase deploy --only functions

# Sadece rules
firebase deploy --only firestore:rules,database
```

### Pre-Deployment Checklist

- [ ] Environment variables ayarlandı mı?
- [ ] API keys .env'de mi?
- [ ] Security rules test edildi mi?
- [ ] Sitemap güncel mi?
- [ ] robots.txt doğru mu?
- [ ] Görseller optimize edildi mi?
- [ ] Meta tags kontrol edildi mi?

### Post-Deployment

```bash
# Siteyi test edin
curl https://www.bzkyapi.com

# Functions loglarını kontrol edin
firebase functions:log

# Analytics'i aktifleştirin
# Firebase Console > Analytics
```

---

## 🔒 Güvenlik

### API Keys

❌ **YAPMAYIN:**
```javascript
const apiKey = "AIzaSyCE86zO9qIRrtTbsvzQqm-0BXX4q3QkYF8"; // Açıkta!
```

✅ **YAPIN:**
```javascript
// .env dosyasında
VITE_FIREBASE_API_KEY=AIzaSyCE86zO9qIRrtTbsvzQqm-0BXX4q3QkYF8

// site-config.js'de
apiKey: import.meta.env.VITE_FIREBASE_API_KEY
```

### Firestore Rules

```javascript
// Sadece admin yazabilir
allow write: if request.auth != null && 
             request.auth.token.email.matches('.*@bzkyapi\\.com$');

// Herkes okuyabilir
allow read: if true;
```

### Rate Limiting

```javascript
// Cloud Functions'da
if (!checkRateLimit(clientIp, 5, 3600000)) {
  throw new Error("Too many requests");
}
```

### CORS

```json
{
  "source": "**",
  "headers": [
    {
      "key": "X-Content-Type-Options",
      "value": "nosniff"
    }
  ]
}
```

---

## ⚡ Performans

### Image Optimization

```html
<!-- Lazy loading -->
<img loading="lazy" src="image.jpg" alt="...">

<!-- Responsive images -->
<img srcset="small.jpg 480w, large.jpg 1080w" sizes="...">
```

### Cache Strategy

```json
{
  "source": "**/*.@(jpg|png|svg)",
  "headers": [{
    "key": "Cache-Control",
    "value": "public, max-age=31536000, immutable"
  }]
}
```

### Bundle Size

- HTML: ~217KB (minify edilebilir)
- CSS: CDN (Tailwind)
- JS: Modular loading

### Lighthouse Scores (Hedef)

- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## 🐛 Sorun Giderme

### Firebase Emulator Başlamıyor

```bash
# Port'ları kontrol edin
lsof -i :5000
lsof -i :8080

# Emulators'ı reset edin
firebase emulators:export ./backup
rm -rf ~/.config/firebase/emulators
firebase emulators:start --import=./backup
```

### Firestore Rules Hatası

```bash
# Rules'u test edin
firebase emulators:start
# Emulator UI'da test edin: http://localhost:4000

# Deploy edin
firebase deploy --only firestore:rules
```

### Cloud Functions 500 Error

```bash
# Logları kontrol edin
firebase functions:log

# Local'de test edin
firebase emulators:start --only functions
```

### Tailwind Sınıfları Çalışmıyor

```javascript
// tailwind.config.js'de content path'i kontrol edin
content: ["./public/**/*.{html,js}"]

// Build process'i restart edin
```

---

## 📚 Dökümantasyon

### Klasör Yapısı

```
bzk-yapi/
├── public/                 # Static files
│   ├── index.html         # Ana sayfa
│   ├── site-config.js     # Site yapılandırması
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # SEO
│   └── sitemap.xml        # SEO
├── functions/             # Cloud Functions
│   ├── index.js          # Functions
│   └── package.json      # Dependencies
├── dataconnect/          # Data Connect (opsiyonel)
│   └── schema/
│       └── schema.gql    # GraphQL schema
├── firebase.json         # Firebase config
├── firestore.rules       # Security rules
├── database.rules.json   # Realtime DB rules
├── tailwind.config.js    # Tailwind config
├── .env.example          # Environment template
└── README.md            # Bu dosya
```

### API Endpoints

#### Cloud Functions

```
POST /submitInquiry
- Teklif isteği gönder
- Rate limited: 5/hour per IP

GET /whatsappRedirect?phone=...&message=...
- WhatsApp yönlendirme

GET /healthCheck
- Sistem durumu
```

---

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing`)
3. Commit atın (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing`)
5. Pull Request açın

---

## 📄 Lisans

Bu proje özel lisans altındadır. Kullanım izni için iletişime geçin.

---

## 📞 Destek

- **Email**: support@bzkyapi.com
- **Telefon**: +90 232 XXX XX XX
- **WhatsApp**: +90 532 XXX XX XX

---

## 🎯 Roadmap

### v1.1 (Yakında)
- [ ] Multi-language support (EN, DE)
- [ ] Advanced filtering (projeler)
- [ ] Blog/Haberler bölümü
- [ ] 360° Virtual tour entegrasyonu

### v1.2
- [ ] Mobile app (React Native)
- [ ] CRM entegrasyonu
- [ ] Otomatik email marketing
- [ ] Advanced analytics dashboard

### v2.0
- [ ] Multi-tenant support
- [ ] White-label SaaS platform
- [ ] Payment gateway integration
- [ ] Customer portal

---

**Son Güncelleme**: 20 Ocak 2025  
**Versiyon**: 1.0.0  
**Geliştirici**: BZK Yapı Development Team
