<div align="center">
<img width="1200" height="475" alt="OTG Track Manager Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# OTG Track Manager - Professional Asset Management System

نظام إدارة احترافي لتتبع الأصول والعمليات الهندسية

## الميزات الرئيسية

- ✅ إدارة مخزون شاملة (الأشكال والقوالب)
- ✅ تتبع الإصلاحات والصيانة
- ✅ إدارة المستخدمين والصلاحيات
- ✅ لوحة تحكم تحليلية متقدمة
- ✅ دعم قاعدة بيانات PostgreSQL
- ✅ API RESTful عالي الأداء
- ✅ واجهة React حديثة وتفاعلية

## المتطلبات الأساسية

- **Node.js**: v18.x أو أعلى
- **PostgreSQL**: 12.x أو أعلى
- **npm**: v9.x أو أعلى

## التشغيل محليًا

### 1. تثبيت المتعلقات

```bash
npm install
```

### 2. إعداد متغيرات البيئة

أنشئ ملف `.env` في الجذر مع المحتوى التالي:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/otgtrack_db"
GEMINI_API_KEY="your-gemini-api-key-here"
PORT=3001
NODE_ENV=development
```

### 3. إعداد قاعدة البيانات

```bash
# نقل الـ schema إلى قاعدة البيانات
npx prisma db push

# إنشاء البيانات الأولية (اختياري)
npm run seed
```

### 4. تشغيل التطبيق

```bash
npm start
```

سيفتح التطبيق على:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

## النشر على Vercel

### 1. ربط المستودع

```bash
# إذا لم تكن قد فعلت بعد
git init
git add .
git commit -m "Initial commit"
```

### 2. إنشاء مشروع على Vercel

زر: https://vercel.com/new

```bash
# أو عبر CLI
npm i -g vercel
vercel
```

### 3. إعداد متغيرات البيئة على Vercel

اذهب إلى **Settings > Environment Variables** وأضف:

| المتغير | القيمة |
|---------|--------|
| `DATABASE_URL` | اتصال PostgreSQL الإنتاجي |
| `GEMINI_API_KEY` | مفتاح Gemini API |
| `NODE_ENV` | `production` |

**مثال على DATABASE_URL:**
```
postgresql://user:password@host:5432/database
```

### 4. أتمتة النشر

تحديث تلقائي عند كل push إلى main:

```bash
git push origin main
```

## بنية المشروع

```
├── app/                          # تطبيق React
│   ├── components/              # مكونات UI
│   ├── generated-prisma-client/ # عميل Prisma المولد
│   └── ...
├── server/                       # Express Server
│   ├── index.ts                 # نقاط نهاية API
│   ├── db.ts                    # اتصال قاعدة البيانات
│   └── prisma.ts                # عميل Prisma
├── api/                         # دوال Vercel Serverless
│   └── index.ts                # مدخل API
├── prisma/                      # تكوين Prisma
│   └── schema.prisma            # نموذج البيانات
├── vite.config.ts              # إعدادات Vite
├── vercel.json                  # إعدادات Vercel
└── package.json
```

## أوامر المشروع

```bash
# التطوير المحلي
npm start            # تشغيل الخادم والواجهة معًا
npm run dev         # تشغيل الواجهة فقط
npm run server      # تشغيل الخادم فقط

# البناء والإنتاج
npm run build       # بناء للإنتاج
npm run preview     # معاينة البناء محليًا

# إدارة قاعدة البيانات
npx prisma migrate dev     # إنشاء migrate جديد
npx prisma db push         # نقل التغييرات إلى DB
npx prisma studio         # فتح Prisma Studio
```

## معايير الأداء

| المعيار | القيمة |
|---------|--------|
| Time to Interactive | < 2s |
| Page Load | < 3s |
| API Response | < 200ms |
| Database Queries | < 100ms |

## مشاكل شائعة وحلولها

### مشكلة: `DATABASE_URL is not set`

**الحل**: تأكد من وجود ملف `.env` مع `DATABASE_URL`

### مشكلة: اتصال قاعدة البيانات يفشل

**الحل**: تحقق من بيانات الاتصال والتأكد من توفر الخادم

### مشكلة: خطأ CORS

**الحل**: السماح بـ CORS تم تفعيله بالفعل في `server/index.ts`

## المساهمة

نرحب بالمساهمات! يرجى:

1. Fork المشروع
2. إنشاء فرع للميزة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push إلى الفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

## الترخيص

جميع الحقوق محفوظة © OTG Track Operations

## الدعم

للمساعدة والاستفسارات، يرجى فتح issue في المستودع.

---

تم تحديثه: March 14, 2026
