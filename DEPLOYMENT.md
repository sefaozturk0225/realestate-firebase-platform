# 🚀 Deployment Rehberi - BZK Yapı

## Hızlı Başlangıç

```bash
# 1. Projeyi hazırlayın
git clone https://github.com/your-repo/bzk-yapi.git
cd bzk-yapi

# 2. Dependencies yükleyin
npm install
cd functions && npm install && cd ..

# 3. Environment variables ayarlayın
cp .env.example .env
# .env dosyasını düzenleyin

# 4. Firebase'e login
firebase login

# 5. Projeyi seçin
firebase use your-project-id

# 6. Deploy edin!
firebase deploy
```

---

## 📋 Pre-Deployment Checklist

### 1. Environment Variables

```bash
# .env dosyasını kontrol edin
cat .env

# Gerekli değişkenler:
✅ VITE_FIREBASE_API_KEY
✅ VITE_FIREBASE_AUTH_DOMAIN
✅ VITE_FIREBASE_PROJECT_ID
✅ VITE_GEMINI_API_KEY
```

### 2. Site Config

```bash
# public/site-config.js dosyasını kontrol edin
✅ Company bilgileri güncel mi?
✅ İletişim bilgileri doğru mu?
✅ Sosyal medya linkleri aktif mi?
✅ Theme seçimi yapıldı mı?
```

### 3. Static Assets

```bash
# Eksik görselleri kontrol edin
✅ favicon.svg
✅ manifest.json
✅ robots.txt
✅ sitemap.xml
```

### 4. Security Rules

```bash
# Firestore rules test edin
firebase emulators:start
# http://localhost:4000 adresinden test edin

# Database rules test edin
firebase deploy --only database --dry-run
```

---

## 🔥 Firebase Setup

### 1. Proje Oluşturma

```bash
# Firebase Console'a gidin
https://console.firebase.google.com

# Yeni proje oluşturun
Project Name: bzk-yapi-production
Project ID: bzk-yapi-prod
Region: europe-west1
```

### 2. Firebase CLI Kurulumu

```bash
# Global yükleme
npm install -g firebase-tools

# Version kontrolü
firebase --version

# Login
firebase login

# Proje initialize
firebase init
```

### 3. Hosting Setup

```bash
? What do you want to use as your public directory? public
? Configure as a single-page app? No
? Set up automatic builds with GitHub? No
```

### 4. Firestore Setup

```bash
? What file should be used for Firestore Rules? firestore.rules
? What file should be used for Firestore indexes? firestore.indexes.json
```

### 5. Functions Setup

```bash
? What language would you like to use? JavaScript
? Do you want to use ESLint? Yes
? Do you want to install dependencies now? Yes
```

---

## 📦 Deployment Steps

### Step 1: Test Locally

```bash
# Emulators'ı başlatın
firebase emulators:start

# Tarayıcıda test edin
http://localhost:5000

# Functions test edin
http://localhost:5001/your-project-id/europe-west1/healthCheck
```

### Step 2: Security Rules Deploy

```bash
# Önce rules'u deploy edin
firebase deploy --only firestore:rules
firebase deploy --only database

# Rules'u test edin
# Firebase Console > Firestore > Rules
```

### Step 3: Functions Deploy

```bash
# Functions'ı deploy edin
firebase deploy --only functions

# Logs kontrol edin
firebase functions:log
```

### Step 4: Hosting Deploy

```bash
# Hosting'i deploy edin
firebase deploy --only hosting

# Site'yi kontrol edin
https://your-project-id.web.app
```

### Step 5: Full Deploy

```bash
# Herşeyi birden deploy edin
firebase deploy

# Veya sadece değişenleri
firebase deploy --only hosting,functions
```

---

## 🔧 Environment-Specific Deployments

### Development

```bash
# Development environment
firebase use development
firebase deploy --only hosting

# Custom domain
https://dev.bzkyapi.com
```

### Staging

```bash
# Staging environment
firebase use staging
firebase deploy

# Custom domain
https://staging.bzkyapi.com
```

### Production

```bash
# Production environment
firebase use production

# Full deploy with backup
firebase deploy

# Custom domain
https://www.bzkyapi.com
```

---

## 🌐 Custom Domain Setup

### 1. Firebase Console

```
Hosting > Add Custom Domain
Domain: www.bzkyapi.com
```

### 2. DNS Records

```
Type: A
Name: @
Value: 151.101.1.195
         151.101.65.195

Type: A
Name: www
Value: 151.101.1.195
         151.101.65.195

Type: TXT
Name: @
Value: (Firebase verification code)
```

### 3. SSL Certificate

```
Firebase automatically provisions SSL
Wait 24-48 hours for propagation
```

---

## 📊 Post-Deployment Verification

### 1. Functionality Tests

```bash
✅ Ana sayfa yükleniyor mu?
✅ Projeler görünüyor mu?
✅ İletişim formu çalışıyor mu?
✅ Admin panel açılıyor mu?
✅ Mobile responsive mi?
```

### 2. Performance Tests

```bash
# Lighthouse audit
npx lighthouse https://www.bzkyapi.com --view

# PageSpeed Insights
https://pagespeed.web.dev/

# Hedef skorlar:
Performance: 90+
Accessibility: 100
Best Practices: 100
SEO: 100
```

### 3. Security Tests

```bash
# SSL certificate
https://www.ssllabs.com/ssltest/

# Security headers
https://securityheaders.com/

# Firebase rules
Firebase Console > Rules > Test
```

---

## 🔄 Rollback Strategy

### Instant Rollback

```bash
# Firebase Console
Hosting > Release History > Rollback

# Veya CLI ile
firebase hosting:clone SOURCE_SITE_ID:SOURCE_CHANNEL_ID TARGET_SITE_ID:live
```

### Database Rollback

```bash
# Backup'tan restore
# NOT: Düzenli backup alın!

# Firestore
gcloud firestore export gs://your-bucket/backup

# Realtime Database
firebase database:get / > backup.json
firebase database:set / backup.json
```

---

## 📈 Monitoring & Analytics

### 1. Firebase Console

```
Performance > Dashboard
Analytics > Events
Crashlytics > Errors
```

### 2. Cloud Functions Logs

```bash
# Real-time logs
firebase functions:log --only functionName

# Error logs
firebase functions:log --only functionName --lines 100 | grep ERROR
```

### 3. Hosting Metrics

```bash
# Firebase Console
Hosting > Usage
- Requests
- Bandwidth
- Storage
```

---

## 🐛 Common Issues

### Issue 1: Deploy Fails

```bash
# Clear cache
firebase logout
firebase login
firebase use --clear
firebase use your-project-id

# Retry
firebase deploy
```

### Issue 2: Functions Timeout

```javascript
// Increase timeout in functions
setGlobalOptions({
  timeoutSeconds: 300,
  memory: "512MiB"
});
```

### Issue 3: Rules Error

```bash
# Validate rules
firebase deploy --only firestore:rules --dry-run

# Fix common issues:
- Check syntax errors
- Verify function names
- Test in emulator
```

### Issue 4: Custom Domain Not Working

```bash
# Check DNS propagation
nslookup www.bzkyapi.com

# Wait 24-48 hours
# Clear browser cache
# Check Firebase Console status
```

---

## 📞 Support

### Firebase Support

- **Documentation**: https://firebase.google.com/docs
- **Community**: https://stackoverflow.com/questions/tagged/firebase
- **Status**: https://status.firebase.google.com

### Project Support

- **Email**: support@bzkyapi.com
- **Slack**: #bzk-yapi-dev
- **Documentation**: /docs

---

## 🎯 Best Practices

### 1. Versioning

```bash
# Tag releases
git tag -a v1.0.0 -m "Production release"
git push origin v1.0.0
```

### 2. Testing

```bash
# Always test before deploy
npm test
firebase emulators:start
```

### 3. Backups

```bash
# Daily backups
firebase database:get / > backups/$(date +%Y%m%d).json

# Weekly Firestore backups
gcloud firestore export gs://your-bucket/weekly/$(date +%Y%m%d)
```

### 4. Documentation

```bash
# Update CHANGELOG.md
# Document breaking changes
# Update API documentation
```

---

**Last Updated**: 20 Ocak 2025  
**Maintained By**: DevOps Team
