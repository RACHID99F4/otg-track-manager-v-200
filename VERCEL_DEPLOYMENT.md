# دليل نشر التطبيق على Vercel

## الخطوة 1️⃣: تحضير المستودع

### أ) إذا لم تكن قد أنشأت مستودع git بعد:

```bash
cd c:\Users\SUPER\Desktop\14-03\otg-track-manager-v-200
git init
git add .
git commit -m "Initial commit: OTG Track Manager"
git branch -M main
```

### ب) إذا كان المستودع موجود بالفعل:

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

---

## الخطوة 2️⃣: رفع المستودع إلى GitHub

### أ) إنشاء مستودع على GitHub:

1. اذهب إلى https://github.com/new
2. أنشئ مستودع جديد باسم `otg-track-manager`
3. انسخ الرابط (مثلاً: `https://github.com/yourusername/otg-track-manager.git`)

### ب) إضافة الـ Remote ورفع الكود:

```bash
git remote add origin https://github.com/yourusername/otg-track-manager.git
git branch -M main
git push -u origin main
```

---

## الخطوة 3️⃣: ربط Vercel

### الطريقة الأولى: عبر موقع Vercel (مستحسن)

1. اذهب إلى https://vercel.com
2. اضغط **"Add New..."** > **"Project"**
3. اختر **"Import Git Repository"**
4. ابحث عن `otg-track-manager` واضغط **"Import"**

### الطريقة الثانية: عبر CLI

```bash
npm i -g vercel
vercel
```

اتبع التعليمات في الطرفية.

---

## الخطوة 4️⃣: إعداد متغيرات البيئة

### في لوحة تحكم Vercel:

1. افتح المشروع الذي أنشأته
2. اذهب إلى **Settings** > **Environment Variables**
3. أضف المتغيرات التالية:

#### المتغيرات المطلوبة:

| المتغير | النوع | مثال القيمة |
|---------|-------|-----------|
| `DATABASE_URL` | الإنتاج و التطوير | `postgresql://user:pass@host:5432/dbname` |
| `GEMINI_API_KEY` | الإنتاج و التطوير | `AIza...` |
| `NODE_ENV` | الإنتاج فقط | `production` |

### للحصول على DATABASE_URL:

**الخيار 1: استخدام Prisma Dataplatform (موصى به)**

1. اذهب إلى https://cloud.prisma.io
2. أنشئ project جديد
3. انسخ الـ connection string

**الخيار 2: استخدام Neon.tech (بديل مجاني)**

1. اذهب إلى https://neon.tech
2. أنشئ database جديد
3. انسخ الـ connection string

**الخيار 3: قاعدة بيانات موجودة**

```
postgresql://username:password@hostname:5432/database_name
```

### للحصول على GEMINI_API_KEY:

1. اذهب إلى https://ai.google.dev
2. أنشئ API key جديد
3. انسخ المفتاح

---

## الخطوة 5️⃣: نقل البيانات إلى قاعدة البيانات

بعد إضافة `DATABASE_URL` على Vercel:

```bash
# التأكد من أن .env يحتوي على DATABASE_URL الصحيحة
npx prisma db push

# إذا كنت تريد seed بيانات أولية
npx prisma db seed
```

أو يمكنك تشغيل migration تلقائيًا في Vercel عبر:

1. Settings > Build & Development
2. Build Command: `npx prisma db push && npm run build`

---

## الخطوة 6️⃣: التحقق من البناء

### معاينة محلية:

```bash
npm run build
npm run preview
```

يجب أن تفتح على http://localhost:3000

### التحقق على Vercel:

1. اضغط **"Deployments"** في لوحة Vercel
2. انتظر حتى يصبح الحالة ✅ (أخضر)
3. اضغط على الرابط لفتح التطبيق

---

## الخطوة 7️⃣: النشر

### الطريقة الأولى: النشر التلقائي (موصى به)

```bash
# كل push إلى main سينشر تلقائيًا
git add .
git commit -m "Update feature"
git push origin main
```

### الطريقة الثانية: النشر اليدوي

على لوحة Vercel، اضغط **"Redeploy"**

---

## التحقق من النشر

### 1. فتح التطبيق

- الرابط: `https://otg-track-manager.vercel.app` (أو الاسم الذي اخترته)
- يجب أن تظهر الواجهة بدون أخطاء

### 2. اختبار الـ API

```bash
# من أي مكان على الانترنت
curl https://otg-track-manager.vercel.app/api/inventory
```

يجب أن تحصل على استجابة JSON

### 3. فحص السجلات

على Vercel: **Deployments** > **[آخر deployment]** > **Logs**

---

## المشاكل الشائعة وحلولها

### ❌ خطأ: `DATABASE_URL is not set`

**الحل:**
- تأكد من إضافة `DATABASE_URL` في Environment Variables
- انتظر إعادة deploy جديدة بعد الإضافة

### ❌ خطأ: `BUILD FAILED`

**الحل:**
```bash
# تنظيف والبناء محليًا
rm -rf node_modules .next dist
npm install
npm run build
```

### ❌ خطأ: `CORS Error`

**الحل:** CORS مفعل بالفعل في `server/index.ts`، لكن تأكد من:
- استخدام `/api/` في الطلبات (وليس `http://localhost:3001`)

### ❌ التطبيق بطيء جدًا

**الحل:**
- تحقق من حجم قاعدة البيانات
- أضف indexes على الأعمدة المهمة
- استخدم caching على Vercel

---

## الخطوات الإضافية (اختيارية)

### 1. تفعيل HTTPS

✅ تم تفعيله تلقائيًا على Vercel

### 2. إضافة Domain مخصص

1. Settings > Domains
2. أضف domain (مثل: `otgtrack.com`)
3. اتبع التعليمات

### 3. تفعيل Analytics

- Vercel توفر Analytics مدمج
- اذهب إلى **Analytics** لرؤية البيانات

### 4. إعداد CI/CD متقدم

```yaml
# .vercelignore
node_modules
.env.local
*.log
```

---

## رابط التطبيق النهائي

بعد الانتهاء من جميع الخطوات، سيكون التطبيق متاحًا على:

```
https://otg-track-manager.vercel.app
```

أو على domain مخصص إذا أضفته.

---

## للمساعدة

- **توثيق Vercel**: https://vercel.com/docs
- **توثيق Prisma**: https://www.prisma.io/docs
- **فتح Issue**: على المستودع على GitHub

---

**تم الإعداد بنجاح! 🚀**
