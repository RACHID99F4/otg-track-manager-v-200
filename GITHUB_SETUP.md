# GitHub Setup Guide

## إعداد GitHub للمشروع

هذا الدليل سيساعدك على رفع المشروع إلى GitHub لسهولة الربط مع Vercel.

---

## الخطوة 1: إنشاء حساب GitHub

إذا لم تكن لديك حساب بعد:
1. اذهب إلى https://github.com/signup
2. أنشئ حسابك بسهولة

---

## الخطوة 2: إنشاء مستودع جديد

1. اضغط على `+` في الزاوية العلوية اليمين
2. اختر **New repository**
3. ملء التفاصيل:
   - **Repository name**: `otg-track-manager`
   - **Description**: `Professional Packaging Asset Management System`
   - **Public/Private**: Public (للربط السهل مع Vercel)
   - **Initialize with README**: غير مختار (لديك بالفعل)
4. اضغط **Create repository**

---

## الخطوة 3: رفع الكود من جهازك

انسخ الأوامر من صفحة المستودع الجديد. ستبدو مثل هذا:

### الطريقة الأولى: إنشاء مستودع جديد

```bash
cd c:\Users\SUPER\Desktop\14-03\otg-track-manager-v-200

git init
git add .
git commit -m "Initial commit: OTG Track Manager"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/otg-track-manager.git
git push -u origin main
```

### الطريقة الثانية: إذا كان المستودع موجود

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/otg-track-manager.git
git branch -M main
git push -u origin main
```

---

## الخطوة 4: التحقق من الرفع

1. اذهب إلى https://github.com/YOUR_USERNAME/otg-track-manager
2. يجب أن ترى جميع الملفات مرفوعة

---

## الخطوة 5: ربط مفتاح SSH (اختياري - لتجنب دخول كلمة المرور)

### أ) إنشاء مفتاح SSH

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

عند الطلب، اضغط Enter للإبقاء على الموقع الافتراضي.

### ب) إضافة المفتاح إلى ssh-agent

```bash
# في PowerShell (كمسؤول)
Start-Service ssh-agent
ssh-add $env:USERPROFILE\.ssh\id_ed25519
```

### ج) إضافة المفتاح إلى GitHub

1. انسخ المفتاح العام:
```bash
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | Set-Clipboard
```

2. اذهب إلى GitHub **Settings** > **SSH and GPG keys**
3. اضغط **New SSH key**
4. الصق المفتاح واضغط **Add SSH key**

---

## الخطوة 6: اختبار الاتصال

```bash
ssh -T git@github.com
```

يجب أن ترى رسالة مثل:
```
Hi YOUR_USERNAME! You've successfully authenticated...
```

---

## الخطوة 7: تحديثات مستقبلية

بعد إجراء تغييرات على المشروع:

```bash
git add .
git commit -m "وصف التغييرات"
git push origin main
```

---

## نصائح مهمة

### .gitignore

تأكد من أن `.gitignore` يحتوي على:
```
node_modules/
.env
.env.local
dist/
build/
.vercel
```

### عدم رفع الملفات الحساسة

لا تقم أبدًا برفع:
- ملفات `.env` (تحتوي على كلمات مرور وـ API keys)
- ملفات `/node_modules`
- ملفات النظام

### رسائل Commit جيدة

```bash
# جيدة ❌
git commit -m "fix"
git commit -m "update"

# ممتازة ✅
git commit -m "Fix API endpoint for inventory items"
git commit -m "Add PostgreSQL connection pooling"
git commit -m "Update README with deployment instructions"
```

---

## حل المشاكل الشائعة

### مشكلة: `fatal: 'origin' does not appear to be a 'git' repository`

**الحل:**
```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/otg-track-manager.git
```

### مشكلة: `Permission denied (publickey)`

**الحل:** استخدم SSH key أو استخدم HTTPS بدلاً من SSH

### مشكلة: `fatal: authentication required`

**الحل:** تأكد من أن personal access token صحيح
1. GitHub > Settings > Developer settings > Personal access tokens
2. أنشئ token جديد مع صلاحيات `repo`

---

## الخطوة التالية: ربط Vercel

بعد رفع الكود إلى GitHub:

1. اذهب إلى https://vercel.com/new
2. اختر **Import Git Repository**
3. ابحث عن `otg-track-manager`
4. اتبع التعليمات

---

## المراجع الإضافية

- [GitHub Docs](https://docs.github.com)
- [Git Tutorial](https://git-scm.com/doc)
- [How to use GitHub](https://github.com/skills/introduction-to-github)

---

**لديك أي أسئلة؟ تواصل معنا! 🚀**
