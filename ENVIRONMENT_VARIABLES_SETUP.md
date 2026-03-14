# ⚙️ إضافة متغيرات البيئة على Vercel

عند ربط Vercel مع GitHub، تحتاج إلى إضافة متغيرات البيئة من خلال لوحة التحكم.

---

## 🔧 الخطوات:

### 1. انتقل إلى مشروعك على Vercel

https://vercel.com/dashboard/projects

---

### 2. اختر المشروع `otg-track-manager`

![Select Project](https://via.placeholder.com/600x300)

---

### 3. اذهب إلى Settings

انقر على **Settings** في الشريط العلوي

![Settings](https://via.placeholder.com/600x300)

---

### 4. اختر Environment Variables

في الشريط الجانبي، اختر **Environment Variables**

![Environment Variables](https://via.placeholder.com/600x300)

---

### 5. أضف المتغيرات التالية

#### أ) DATABASE_URL

```
DATABASE_URL = postgres://625341b777ef2851d2596f01b7087926b1a7b0e981255cd8ab89814b5b1a495f:sk_6Nr1zva5pShoSA4p5gcyo@db.prisma.io:5432/postgres?sslmode=require
```

**خطوات الإضافة:**
1. اضغط **"Add New"**
2. في حقل **Name**: اكتب `DATABASE_URL`
3. في حقل **Value**: الصق الـ connection string الكامل
4. اختر **Production** (أو كل البيئات)
5. اضغط **Save**

---

#### ب) GEMINI_API_KEY

```
GEMINI_API_KEY = your-actual-gemini-api-key
```

**خطوات الإضافة:**
1. اضغط **"Add New"**
2. في حقل **Name**: اكتب `GEMINI_API_KEY`
3. في حقل **Value**: الصق مفتاح API الخاص بك من Google
4. اختر **Production**
5. اضغط **Save**

---

#### ج) NODE_ENV (اختياري)

```
NODE_ENV = production
```

---

## 📝 المتغيرات المطلوبة (ملخص):

| المتغير | القيمة | الملاحظات |
|---------|--------|---------|
| `DATABASE_URL` | postgresql://... | من Prisma أو قاعدة بيانات |
| `GEMINI_API_KEY` | AIza... | من Google AI Studio |
| `NODE_ENV` | production | اختياري |

---

## ⚠️ نصائح مهمة:

✅ **استخدم الـ Connection String الكامل**
- تأكد من عدم وجود مسافات إضافية
- تأكد من وجود `?sslmode=require` في النهاية

✅ **أضف المتغيرات للـ Production فقط**
- اختر **Production** من القائمة المنسدلة
- أو اختر الجميع إذا أردت

✅ **بعد الإضافة:**
- اضغط على **Redeploy** لإعادة نشر التطبيق
- أو ببساطة ادفع كود جديد إلى GitHub

---

## 🔍 التحقق من الإضافة:

بعد إضافة المتغيرات:

1. اذهب إلى **Deployments**
2. شاهد أحدث deployment
3. افتح **Logs** وتحقق من عدم وجود أخطاء

الأخطاء الشائعة:
- `DATABASE_URL is not set` → تأكد من إضافة المتغير
- `Failed to connect to database` → تأكد من Connection String
- `GEMINI_API_KEY is undefined` → أضف المفتاح

---

## 🚀 بعد إضافة المتغيرات:

1. **أعد النشر:**
   - اضغط **Redeploy** في Deployments
   - أو ادفع كود جديد: `git push origin main`

2. **اختبر التطبيق:**
   - افتح `https://your-app.vercel.app`
   - تحقق من أن API يعمل

3. **راجع السجلات:**
   - اذهب إلى Deployments > Logs
   - تأكد من عدم وجود أخطاء

---

## ✨ ملاحظة مهمة:

❌ **لا تضع متغيرات البيئة في `vercel.json`**
- Vercel تتعامل معها من Dashboard فقط
- تم حذف قسم `env` من `vercel.json` لهذا السبب

✅ **استخدم Dashboard دائمًا**
- https://vercel.com/dashboard/projects

---

**الآن يجب أن يعمل التطبيق بدون أخطاء! 🎉**
