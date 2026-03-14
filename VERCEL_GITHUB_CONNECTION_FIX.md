# 🔧 حل مشكلة ربط Vercel مع GitHub

## المشكلة

عند ربط Vercel مع GitHub، ظهرت الأخطاء التالية:

```
Environment Variable "DATABASE_URL" references Secret "database_url", 
which does not exist.
```

---

## ✅ الحل المطبق

### تم حذف قسم `env` من `vercel.json`

**السبب:**
- Vercel يتعامل مع متغيرات البيئة من خلال Dashboard فقط
- وليس من ملف `vercel.json`

**قبل:**
```json
{
  "version": 2,
  "env": {
    "DATABASE_URL": "@database_url",
    "GEMINI_API_KEY": "@gemini_api_key",
    "NODE_ENV": "production"
  }
}
```

**بعد:**
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

---

## 🔐 إضافة متغيرات البيئة على Vercel Dashboard

### الخطوة 1: انتقل إلى Settings

1. افتح مشروعك على Vercel: https://vercel.com/dashboard
2. اختر `otg-track-manager`
3. اضغط على **Settings** 

### الخطوة 2: اذهب إلى Environment Variables

في الشريط الجانبي، اختر **Environment Variables**

### الخطوة 3: أضف المتغيرات

#### أضف DATABASE_URL:

```
Name:  DATABASE_URL
Value: postgres://625341b777ef2851d2596f01b7087926b1a7b0e981255cd8ab89814b5b1a495f:sk_6Nr1zva5pShoSA4p5gcyo@db.prisma.io:5432/postgres?sslmode=require
Environment: Production (أو كل البيئات)
```

ثم اضغط **Save**

#### أضف GEMINI_API_KEY:

```
Name:  GEMINI_API_KEY
Value: your-actual-gemini-api-key
Environment: Production
```

ثم اضغط **Save**

---

## 🚀 الخطوات التالية

### 1. أعد نشر التطبيق

**الطريقة الأولى: من Vercel Dashboard**
- اذهب إلى **Deployments**
- اضغط على **Redeploy** بجانب آخر deployment

**الطريقة الثانية: دفع كود جديد**
```bash
git add .
git commit -m "Fix Vercel environment variables"
git push origin main
```

### 2. تحقق من النشر

1. انتظر حتى ينتهي البناء (Build)
2. تحقق من أن الحالة ✅ (أخضر)
3. افتح الرابط وجرب التطبيق

### 3. افحص السجلات

إذا حدثت مشاكل:
- اذهب إلى **Deployments** > آخر deployment > **Logs**
- ابحث عن الأخطاء
- تأكد من:
  - DATABASE_URL تم إضافتها بشكل صحيح
  - GEMINI_API_KEY موجودة
  - اتصال قاعدة البيانات يعمل

---

## 📋 ملخص الملفات المعدلة

| الملف | التغيير |
|------|---------|
| `vercel.json` | تم حذف قسم `env` |
| `vercel-advanced.json` | لم يكن فيه مشكلة |
| جديد: `ENVIRONMENT_VARIABLES_SETUP.md` | تعليمات تفصيلية |

---

## ✨ نصائح مهمة

### 🔴 لا تفعل:
- ❌ لا تضع Environment Variables في `vercel.json`
- ❌ لا تضع `.env` في Git
- ❌ لا تشارك Database URL مع الآخرين

### 🟢 افعل:
- ✅ استخدم Vercel Dashboard لإضافة المتغيرات
- ✅ تأكد من أن متغيرات البيئة محمية
- ✅ استخدم `.env` محليًا فقط للتطوير

---

## 🎯 الآن جاهز!

1. ✅ تم إصلاح `vercel.json`
2. ✅ أضف المتغيرات في Vercel Dashboard
3. ✅ أعد النشر
4. ✅ التطبيق يجب أن يعمل بدون أخطاء!

---

## 📞 إذا استمرت المشاكل:

1. **تحقق من Database URL:**
   - ادخل Dashboard > Environment Variables
   - انسخ الكامل
   - تأكد من عدم وجود مسافات إضافية

2. **تحقق من اتصال قاعدة البيانات:**
   - حاول الاتصال محليًا
   - تأكد من أن الخادم متاح على الإنترنت

3. **راجع السجلات:**
   - Vercel Logs ستخبرك بالمشكلة بالضبط

---

**للمساعدة الكاملة، اقرأ: ENVIRONMENT_VARIABLES_SETUP.md**
