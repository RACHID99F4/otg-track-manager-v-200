# ✅ Vercel Deployment Checklist

استخدم هذه القائمة للتأكد من أن كل شيء جاهز للنشر على Vercel.

---

## 🔧 المتطلبات التقنية

- [ ] Node.js v18.x أو أعلى مثبت
- [ ] npm v9.x أو أعلى متوفر
- [ ] git مثبت على النظام
- [ ] حساب GitHub نشط
- [ ] حساب Vercel نشط

```bash
# تحقق من الإصدارات
node --version    # يجب v18.x+
npm --version     # يجب v9.x+
git --version     # أي إصدار
```

---

## 📦 إعدادات المشروع

- [ ] ملف `package.json` محدث
- [ ] جميع المتعلقات مثبتة (`npm install`)
- [ ] Prisma client مولد (`npm run postinstall` تم)
- [ ] ملف `.env` موجود بـ DATABASE_URL و GEMINI_API_KEY
- [ ] ملف `.gitignore` يحتوي على المسارات الصحيحة

```bash
npm install       # تثبيت المتعلقات
```

---

## 🗄️ قاعدة البيانات

- [ ] PostgreSQL متوفرة (محلية أو محمية على السحابة)
- [ ] CONNECTION STRING جاهزة (DATABASE_URL)
- [ ] جدول البيانات تم إنشاؤه
- [ ] Migrations تم تطبيقها

```bash
# دفع التغييرات إلى قاعدة البيانات
npx prisma db push

# أو تشغيل migrations
npx prisma migrate dev
```

---

## 🔑 API Keys

- [ ] GEMINI_API_KEY تم الحصول عليه من Google AI
- [ ] DATABASE_URL في `.env`
- [ ] جميع المفاتيح آمنة وليست في git

```bash
# تحقق من .env
cat .env

# تأكد أنه غير مرفوع
git status
```

---

## 🏗️ البناء والاختبار

- [ ] `npm run build` يعمل بدون أخطاء
- [ ] `npm run preview` يفتح التطبيق
- [ ] الواجهة تعمل محليًا
- [ ] API يستجيب على `http://localhost:3001/api/inventory`

```bash
# اختبر البناء
npm run build

# اختبر الصيغة النهائية
npm run preview

# في terminal منفصل، اختبر API
curl http://localhost:3001/api/config
```

---

## 🔗 إعدادات Vercel

- [ ] ملف `vercel.json` موجود وصحيح
- [ ] Routes محددة بشكل صحيح
- [ ] Build command: `npm run build`
- [ ] Output Directory: `dist`

```json
// تحقق من vercel.json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  ...
}
```

---

## 💾 GitHub Setup

- [ ] حساب GitHub موجود وفعال
- [ ] مستودع جديد تم إنشاؤه
- [ ] كود المشروع تم رفعه إلى GitHub
- [ ] Branch الرئيسية اسمها `main`
- [ ] README.md محدث

```bash
# إعداد git
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/otg-track-manager.git
git push -u origin main
```

---

## 🚀 نشر Vercel

### الخيار 1: عبر واجهة Vercel (موصى به)

- [ ] تسجيل دخول إلى https://vercel.com
- [ ] نقر على "Add New" > "Project"
- [ ] استيراد من GitHub
- [ ] اختيار مستودع `otg-track-manager`
- [ ] إضافة متغيرات البيئة:
  - [ ] `DATABASE_URL` = connection string
  - [ ] `GEMINI_API_KEY` = API key
  - [ ] `NODE_ENV` = `production`

### الخيار 2: عبر CLI

- [ ] تثبيت Vercel CLI: `npm install -g vercel`
- [ ] تسجيل الدخول: `vercel login`
- [ ] نشر: `vercel --prod`
- [ ] إضافة متغيرات البيئة عند الطلب

---

## ✨ بعد النشر

- [ ] تسجيل الدخول إلى لوحة Vercel
- [ ] التحقق من حالة النشر (✅ أخضر)
- [ ] فتح الرابط وكسر الكود (مقصود)
- [ ] التحقق من API: `https://domain.vercel.app/api/config`
- [ ] فحص السجلات للأخطاء
- [ ] اختبار جميع الميزات الرئيسية

```bash
# اختبر الاتصال من Terminal
curl https://your-app.vercel.app/api/inventory
```

---

## 🔐 الأمان

- [ ] `.env` غير مرفوع على GitHub
- [ ] جميع API keys موجودة في environment variables
- [ ] CORS مفعل للنطاقات المناسبة
- [ ] HTTPS مفعل (تلقائي على Vercel)
- [ ] SSL certificate صحيح

```bash
# تأكد من عدم رفع .env
git log --all --full-history -- .env
```

---

## 📊 Monitoring والأداء

- [ ] Vercel Analytics مفعل
- [ ] Logs متاح للمراجعة
- [ ] Performance metrics معروضة
- [ ] Alerts مفعلة (اختياري)

---

## 🔄 النشر المستقبلي

- [ ] عملية النشر التلقائي تعمل (auto-deploy on push)
- [ ] Branch protection rules مفعلة (اختياري)
- [ ] Git commits واضحة ومنظمة
- [ ] Version tags مضافة (اختياري)

---

## 📝 التوثيق

- [ ] README.md محدث مع تعليمات النشر
- [ ] VERCEL_DEPLOYMENT.md موجود
- [ ] GITHUB_SETUP.md موجود
- [ ] Comments في الكود واضح

---

## 🎯 النقاط الحرجة

### قبل النشر مباشرة:

```bash
# 1. تحديث آخر
git add .
git commit -m "Final: Ready for Vercel deployment"
git push origin main

# 2. بناء محلي
npm run build

# 3. معاينة
npm run preview

# 4. فحص البيئة
echo $env:DATABASE_URL
echo $env:GEMINI_API_KEY
```

### بعد النشر مباشرة:

```bash
# اختبر endpoint رئيسي
curl https://app.vercel.app/api/config

# تحقق من الوقت الفعلي
curl https://app.vercel.app/api/inventory
```

---

## 🆘 في حالة الفشل

- [ ] تحقق من Build Logs على Vercel
- [ ] تأكد من متغيرات البيئة
- [ ] تحقق من اتصال قاعدة البيانات
- [ ] أعد النشر (Redeploy)

---

## 🎉 النجاح!

عند اكتمال جميع البنود:

✅ التطبيق نشر بنجاح على Vercel!
🌐 الرابط: `https://otg-track-manager.vercel.app` (أو اسمك)
🚀 جاهز للاستخدام الفعلي!

---

**التاريخ: 14 مارس 2026**
**الحالة: جاهز للإطلاق** 🚀
