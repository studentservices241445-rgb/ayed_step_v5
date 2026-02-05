# أكاديمية عايد الرسمية — برنامج تحديد مستوى STEP (V5 FINAL — Static)

هذا الإصدار **ثابت 100%** (Static) ويعمل بدون أي Serverless أو ذكاء اصطناعي.
كل شيء (الاختبار/الخطة/الكويزات/المساعد/الإشعارات) يعمل محليًا من ملفات JSON داخل المشروع.

## التشغيل المحلي

> لازم سيرفر محلي (وليس فتح الملفات مباشرة) عشان Service Worker و ES Modules.

```bash
cd ayed_app_v6_work
python -m http.server 8000
```

افتح:
- http://localhost:8000/index.html

## أهم الصفحات

- `index.html` — الرئيسية (تعريف + آيات/أحاديث + أزرار التثبيت/المشاركة + تقييمات + قصص)
- `start.html` — ملف المستخدم (البيانات) ثم انتقال للاختبار
- `test.html` — الاختبار الكامل (50 سؤال) + قفل 24 ساعة
- `results.html` — النتائج + خطة + جدول + نسخ + مشاركة + PDF
- `quiz.html` — كويزات تدريبية (Seed ثابت بالرابط) + مراجعة أخطاء + مشاركة
- `progress.html` — السجل (محاولات + كويزات + حذف بيانات المستخدم)
- `faq.html` — الأسئلة الشائعة
- `group.html` — مجموعة الالتزام (واتساب/تلجرام) + رسالة مشاركة جاهزة
- `support.html` — نموذج دعم (يرسل إلى `stepacademy438@gmail.com`)
- `offline.html` — صفحة Offline

## ملفات المحتوى (JSON)

داخل:
`assets/content/`

- `notifications.json` — إشعارات منبثقة (Toast)
- `reviews.json` — تقييمات
- `stories.json` — قصص نجاح
- `faq.json` — FAQ
- `share_templates.json` — قوالب المشاركة (برنامج/خطة/كويز/مجموعة)
- `quran_verses.json` — آيات مع المرجع
- `hadith.json` — أحاديث مع المصدر
- `assistant_content.json` — محتوى المساعد + الأزرار السريعة
- `group_templates.json` — أسماء/قواعد مقترحة للمجموعة

## بنك الأسئلة + فهرس الدورة

- `assets/data/questions.json` — بنك أسئلة (حاليًا: **898 سؤال**) للاختبار والكويزات.
- `assets/data/index_course.json` — فهرس الدورة (Items) يُستخدم لبناء الجدول.

## رابط الدورة المكثفة (CTA)

عدّله من:
`assets/js/app.js` → `APP.courseWebsite`

## PWA (التثبيت)

- `manifest.webmanifest`
- `service-worker.js`

## CSS (ملف واحد)

- `assets/css/tailwind.css` — ملف CSS واحد شامل (خلفية + هوية + مكونات واجهة + RTL).
