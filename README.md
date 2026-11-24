# ACK Dijital Ajans

ACK Dijital Ajans'ın tanıtım sitesi. Tek bir Next.js uygulaması:

- **Frontend:** Next.js 16 (App Router) + React 19, Tailwind CSS 4
- **Backend:** Next.js Route Handler, `POST /api/iletisim` (zod ile doğrulama, IP başına hız sınırı, bot tuzağı). Başvurular şimdilik `data/leads.json` dosyasına yazılır.
- **Arayüz:** Koyu tema; bölüm yapısı analyticahouse.com/tr düzeninden esinlenildi (hero, iş ortağı şeridi, veri odaklı sonuçlar, logo duvarı, ölçümleme, yapay zeka çözümleri, kapanış bandı). Bileşenler Aceternity UI'dan uyarlandı: Resizable Navbar, Spotlight, Card Hover Effect, Flip Words, Signup Form girdileri. Animasyonlar `motion` paketiyle (`motion/react`).
- **Yazı tipi:** Inter (`next/font/google`, Türkçe karakterler için `latin-ext` dahil).

## Sürümler

| Paket | Sürüm | Not |
| --- | --- | --- |
| next | 16.4.6 | React `^18.2 \|\| ^19` ister |
| react / react-dom | 19.3.0 | |
| tailwindcss | 4.3.3 | |
| motion | 14.14.0 | React `^18 \|\| ^19` ister |
| @tabler/icons-react | 3.53.0 | Aceternity örneklerindeki ikon seti |
| zod | 4.6.7 | |

`npm ls` hiçbir peer dependency uyarısı vermez.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Yapı

```
src/
  app/
    api/iletisim/route.ts   # iletişim formu API'si
    layout.tsx              # Inter yazı tipi, meta veriler
    page.tsx                # ana sayfa bölümleri
  components/
    ui/                     # Aceternity tabanlı bileşenler + Button
    sections/               # sayfa bölümleri
  lib/
    content.ts              # tüm Türkçe metinler tek yerde
    contact-schema.ts       # form doğrulama şeması (istemci + sunucu ortak)
```

## Tasarım kuralları

- Tüm butonlar `components/ui/button.tsx` üzerinden gelir: hap şekli, `text-sm font-semibold`, 1px kenarlık, yükseklik `h-10` veya `h-12`. Dolgulu ve kenarlıklı butonlar aynı kalınlıktadır.
- Header, logo ve içerik aynı `max-w-7xl px-4` kapsayıcısını kullanır; sol ve sağ kenarlar sayfanın geri kalanıyla hizalıdır.

## Notlar

- Vaka çalışmalarındaki marka adları ve rakamlar örnek içeriktir; gerçek müşteri verileriyle değiştirilmelidir.
- Canlıya alırken `data/leads.json` yerine bir veritabanı veya e-posta servisi (ör. Resend) bağlanmalıdır; sunucusuz ortamlarda dosya sistemi kalıcı değildir.
