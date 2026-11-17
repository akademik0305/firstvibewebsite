# Azizbek — shaxsiy vizitka sayt

## Loyiha nima
Fullstack dasturchi Azizbekning shaxsiy sayti. Maqsad — potentsial mijozlar
(bizneslar) uni tanishi va bog'lanishi: telefon +998331801008, Telegram @azizbek_9898.
Xizmatlar: bir sahifali saytlar, CRM va ERP tizimlar, Telegram botlar.

## Uslub
- Barcha matnlar o'zbek tilida (lotin yozuvi). Ohang: professional, samimiy, qisqa.
- Ranglar: lime `#c8f031`, mint `#7ee8c5`, qora `#0a0a0a`, oq. Ular `style.css` ichidagi `:root` o'zgaruvchilarida.
- Shriftlar: sarlavhalarga Unbounded, oddiy matnga Inter (Google Fonts).
- Dizayn manbasi: qalin sarlavha, bitta so'z qora fonda ajratiladi, lime tugmalar.
- Light va dark tema doim ikkalasi ham ishlashi kerak.
- Oddiylik: ortiqcha bezak qo'shma.
- Animatsiya faqat yengil: 0.5 soniyadan qisqa, 16px dan ko'p siljimaydi,
  aylanish/kattalashish/tebranish yo'q. "Animatsiyani kamaytirish"
  (`prefers-reduced-motion`) yoqilganda hammasi o'chadi.

## Texnik chegaralar
- Sayt faqat 3 fayl: `index.html`, `style.css`, `script.js`. Rasmlar `images/` papkasida.
  Bundan tashqari repoda faqat deploy uchun `.github/workflows/deploy.yml` bor.
  Admin panel/backend qo'shilganda bu chegaralar alohida qayta ko'rib chiqiladi.
- Framework, build vositasi, npm yo'q. Faqat sof HTML, CSS va JS.
- Tashqi resurs faqat Google Fonts.
- Telefon ekraniga mos bo'lsin: 320px va 375px kenglikda gorizontal skroll bo'lmasin.
  Telefonda bosiladigan joylar kamida 44px.
- Parol, token yoki API kalitlarni hech qachon faylga yozma.

## Sahifa tuzilishi
- Bo'limlar tartibi: `#hero` → `#skills` → `#xizmatlar` → `#ishlarim` →
  (`#fikrlar` — yashirin) → `#savollar` → `#aloqa`.
- Menyu yopishqoq (`.nav-bar`), telefonda ☰ orqali ochiladi. Yangi bo'lim
  qo'shilsa, `#nav-links` ga havola qo'sh va bo'limga `section container` klasslarini ber,
  shunda menyu sarlavhani to'sib qo'ymaydi.
- Scroll'da paydo bo'lish klasslarini (`.reveal`) `script.js` o'zi qo'yadi —
  HTML'ga qo'shish shart emas.
- Savol-javob — brauzerning `<details>` elementi, JS kerak emas.

## Ochiq ishlar
- **Mijozlar fikri** `index.html` da izohga olingan. Faqat haqiqiy sharhlar
  (mijoz roziligi bilan) bo'lganda qaytariladi. To'qima sharh yozma.
- **Ishlarim** — 4 ta haqiqiy loyiha (Azizbek o'zi qilgan), havolalari bilan. Mijoz nomlari
  sarlavhada yozilmaydi, faqat turi.
- **Savol-javob** javoblarida aniq narx va muddat yo'q — ularni Azizbek o'zi belgilaydi.

## Rasmlar (`images/`)
- `hero.svg` — bosh rasm.
- `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` — qora fonda lime "A".
- `project-*.webp` — Ishlarim kartalaridagi sayt skrinshotlari, 800×450 (16:9), WebP.
- `og-image.png` — havola kartasi rasmi, 1200×630 PNG (Telegram SVG'ni ko'rsatmaydi).
- Logo, sarlavha yoki aloqa ma'lumoti o'zgarsa, favicon PNG'lari va `og-image.png`
  ni qayta yasa. Rasm yasash uchun vaqtinchalik fayllar loyiha papkasiga yozilmaydi.

## Joylash (deploy)
- Repo: github.com/akademik0305/firstvibewebsite (ochiq).
- Sayt: **https://onecoder.uz** — o'z VPS (DigitalOcean, Ubuntu 24.04, Nginx), Cloudflare proxy orqali.
  Server IP'sini repoga yozma — u Cloudflare ortida yashirin turishi kerak.
- HTTPS: Cloudflare Origin Certificate, rejim Full (strict), Always Use HTTPS yoqilgan.
  Firewall 80/443 ni faqat Cloudflare IP'lariga ochadi (ro'yxat serverda oyiga bir marta avtomatik yangilanadi).
- Nginx faqat oq ro'yxatdagi fayllarni beradi (`index.html`, `style.css`, `script.js`, `images/`).
  Yangi fayl yoki papka qo'shilsa, serverdagi Nginx sozlamasiga ham qo'shish kerak.
- `main` ga push → GitHub Actions (`.github/workflows/deploy.yml`): `check` → `deploy`.
  Deploy SSH orqali serverdagi `/usr/local/bin/onecoder-deploy` ni ishga tushiradi
  (GitHub kaliti faqat shu buyruqqa cheklangan). Build/migratsiya kabi yangi qadamlar shu skriptga qo'shiladi.
  Secrets: `DEPLOY_SSH_KEY`, `DEPLOY_HOST`, `DEPLOY_KNOWN_HOSTS`.
- GitHub Pages (https://akademik0305.github.io/firstvibewebsite/) hozircha ham ishlaydi —
  o'chiriladi yoki onecoder.uz ga yo'naltiriladi.
- Push faqat foydalanuvchi aytganda.
- Sayt manzili `<head>` dagi `og:url`, `og:image` va `canonical` da to'liq yozilgan —
  domen o'zgarsa, ularni ham almashtir.
- Telegram havola kartasini eslab qoladi; yangilash uchun havolani @WebpageBot ga yuborish kerak.

## Ish qoidalari
- Kodga tegishdan oldin qisqa reja ko'rsat va tasdiqlashni kut.
- Kichik qadamlar bilan ishla: bitta o'zgarish, keyin tekshiruv.
- Har o'zgarishdan keyin brauzerda tekshir: light/dark tema, kompyuter va telefon ekrani.
- Kompyuterda ko'rish: `.claude/launch.json` dagi `site` serveri (8765-port).
  Brauzer eski CSS/JS ni keshdan olishi mumkin — keshsiz yangilab tekshir.
- Loyihalar, ko'nikmalar va fikrlardagi namunaviy ma'lumotlarni haqiqiy deb ko'rsatma.
- Commit xabarlari o'zbek tilida.
- Javoblar o'zbek tilida, qisqa va aniq bo'lsin.
