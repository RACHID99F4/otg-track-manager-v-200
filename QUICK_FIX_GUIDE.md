# ⚡ خطوات سريعة لربط Vercel مع GitHub

## المشكلة التي حدثت وتم حلها ✅

```
Error: Environment Variable "DATABASE_URL" references Secret 
"database_url", which does not exist.
```

**السبب**: وجود قسم `env` في `vercel.json` يحاول الإشارة إلى Secrets غير موجودة.

**الحل**: تم حذف قسم `env` من `vercel.json` لأن Vercel تتعامل مع المتغيرات من Dashboard فقط.

---

## 🚀 الخطوات الآن:

### خطوة 1: ادفع الكود المحدث إلى GitHub

```bash
cd c:\Users\SUPER\Desktop\14-03\otg-track-manager-v-200

git add .
git commit -m "Fix: Remove env from vercel.json"
git push origin main
```

---

### خطوة 2: اذهب إلى Vercel Dashboard

https://vercel.com/dashboard/projects

---

### خطوة 3: اختر المشروع

1. ابحث عن `otg-track-manager`
2. اضغط عليه

---

### خطوة 4: أضف Environment Variables

اضغط على **Settings** > **Environment Variables**

#### أضف DATABASE_URL:

```
Name:       DATABASE_URL
Value:      postgres://625341b777ef2851d2596f01b7087926b1a7b0e981255cd8ab89814b5b1a495f:sk_6Nr1zva5pShoSA4p5gcyo@db.prisma.io:5432/postgres?sslmode=require
Environment: Production
```

ثم اضغط **Save**

#### أضف GEMINI_API_KEY:

```
Name:       GEMINI_API_KEY
Value:      your-actual-gemini-api-key
Environment: Production
```

ثم اضغط **Save**

---

### خطوة 5: أعد النشر

**خيار 1**: من Dashboard
- اذهب إلى **Deployments**
- اضغط **Redeploy**

**خيار 2**: من Git
```bash
git push origin main
```

---

### خطوة 6: تحقق من النتيجة

1. انتظر انتهاء البناء (Build)
2. تحقق من أن الحالة ✅ أخضر
3. افتح الرابط وجرب التطبيق

---

## ✨ الآن يجب أن يعمل بدون مشاكل!

**الملفات المرجعية:**
- `ENVIRONMENT_VARIABLES_SETUP.md` - شرح مفصل
- `VERCEL_GITHUB_CONNECTION_FIX.md` - الحل الكامل

---

## 🎯 ملخص:

| الخطوة | الوصف |
|------|--------|
| 1️⃣ | ادفع الكود المحدث إلى GitHub |
| 2️⃣ | اذهب إلى Vercel Dashboard |
| 3️⃣ | أضف DATABASE_URL |
| 4️⃣ | أضف GEMINI_API_KEY |
| 5️⃣ | أعد النشر |
| 6️⃣ | انتظر واختبر التطبيق |

---

**مستعد؟ ابدأ الآن! 🚀**
