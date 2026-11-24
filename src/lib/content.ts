import type { NavItem } from "@/components/ui/resizable-navbar";

export const navItems: NavItem[] = [
  { name: "Hakkımızda", link: "/#hakkimizda" },
  { name: "Hizmetler", link: "/#hizmetler" },
  { name: "Başarı Hikayeleri", link: "/#basari-hikayeleri" },
  { name: "Çözümler", link: "/#cozumler" },
  { name: "Blog", link: "/#blog" },
];

export const hashtag = "#ölçülebilirbüyüme";

// İş ortağı logo şeridi. Gerçek logolar gelene kadar metin işaretleri kullanılır.
export const partnerMarks = [
  "Lina Home",
  "Derin Klinik",
  "Kuzey Outdoor",
  "Mavi Lojistik",
  "Peri Kozmetik",
  "Atlas Yazılım",
  "Nova Mobilya",
  "Ege Zeytin",
  "Pera Optik",
  "Mira Bebek",
  "Toros Yapı",
  "Vira Turizm",
];

export const platformPartners = [
  "Google Ads",
  "Meta",
  "TikTok",
  "LinkedIn",
  "Microsoft Ads",
  "Trendyol",
  "Hepsiburada",
  "Amazon",
  "Google Analytics 4",
  "Looker Studio",
  "Shopify",
  "ikas",
];

export const results = [
  {
    title: "Büyüme danışmanlığı",
    description:
      "Kanal bazında bütçe dağılımı, aylık hedef metrikler ve hangi testin hangi sırayla yapılacağını gösteren 90 günlük plan.",
  },
  {
    title: "Veri analitiği",
    description:
      "GA4 ve Google Tag Manager kurulumu, sunucu taraflı etiketleme ve KVKK uyumlu çerez onayı. Hangi kanalın satış getirdiğini tahminle değil, veriyle görürsünüz.",
  },
  {
    title: "Dönüşüm optimizasyonu",
    description:
      "Ödeme adımlarındaki kayıpları ısı haritaları ve oturum kayıtlarıyla bulur, A/B testleriyle düzeltiriz. Trafiği artırmadan ciroyu artırmanın en kısa yolu.",
  },
  {
    title: "Performans pazarlaması",
    description:
      "Google Ads, Meta, TikTok ve pazaryeri reklamlarını sipariş başı maliyet ve ROAS hedefiyle yönetir, her pazartesi tek sayfalık rapor göndeririz.",
  },
];

export const measureCards = [
  {
    title: "Tek tabloda tüm kanallar",
    text: "Google, Meta, TikTok ve pazaryeri harcamaları ile GA4 gelirini her sabah otomatik birleştiren Looker Studio paneli.",
  },
  {
    title: "Gerçek dönüşüm takibi",
    text: "Tarayıcı engellerinden etkilenmeyen sunucu taraflı etiketleme ile kaybolan dönüşümlerin önemli bir kısmını geri kazanırız.",
  },
  {
    title: "Haftalık karar notu",
    text: "Rakamların yanında neyi neden değiştirdiğimizi ve gelecek haftanın planını iki paragrafta yazarız.",
  },
];

export const solutions = [
  {
    name: "ACK Pulse",
    tagline: "Kampanya ve bütçe takibi",
    description:
      "Tüm reklam hesaplarınızın harcamasını ve aylık bütçe hedefini tek ekranda izleyin; sapma olduğunda e-posta ve Slack bildirimi alın.",
    features: [
      { title: "Bütçe temposu", text: "Ay sonuna kadar bütçenin bitip bitmeyeceğini günlük tahmin eder." },
      { title: "Anomali uyarısı", text: "Tıklama maliyeti ya da dönüşüm oranı bir günde %25'ten fazla değişirse haber verir." },
      { title: "Stok bağlantısı", text: "Tükenen ürünlerin reklamlarını otomatik durdurur." },
      { title: "Haftalık özet", text: "Pazartesi sabahı yönetime gidecek tek sayfalık PDF'i hazırlar." },
    ],
  },
  {
    name: "ACK Merge",
    tagline: "Çapraz kanal veri birleştirme",
    description:
      "Reklam, CRM, e-ticaret ve pazaryeri verilerini tek bir BigQuery tablosunda toplar; her siparişi kaynağıyla eşleştirir.",
    features: [
      { title: "30'dan fazla kaynak", text: "Google, Meta, TikTok, Trendyol, Hepsiburada, ikas, Shopify ve daha fazlası." },
      { title: "Net kâr görünümü", text: "Ürün maliyeti ve iadeleri düşerek kanal başına net kârı hesaplar." },
      { title: "Müşteri yaşam boyu değeri", text: "İlk siparişi hangi kanaldan gelen müşterinin daha çok tekrar aldığını gösterir." },
      { title: "Hazır panolar", text: "Yönetim, pazarlama ve satış ekipleri için üç ayrı Looker Studio panosu." },
    ],
  },
  {
    name: "ACK Scribe",
    tagline: "Yapay zeka destekli SEO içerik",
    description:
      "Arama verisinden konu çıkarır, editörlerimiz için taslak hazırlar. Yayına giden her yazı bir uzman tarafından kontrol edilir.",
    features: [
      { title: "Konu haritası", text: "Rakiplerin sıralandığı ama sizin olmadığınız sorguları listeler." },
      { title: "Taslak ve brif", text: "Başlık yapısı, iç bağlantı önerileri ve SSS bloğuyla editör brifi oluşturur." },
      { title: "Editör onayı", text: "Yapay zeka taslağı doğrudan yayınlamaz; sektörünüzü bilen editör düzenler." },
      { title: "Performans takibi", text: "Yayından 30 ve 90 gün sonra sıralama ve trafik raporu gönderir." },
    ],
  },
];

export const posts = [
  {
    category: "Ölçümleme",
    title: "Sunucu taraflı etiketleme: kaybolan dönüşümleri geri almak",
    excerpt: "Tarayıcı engelleri yüzünden GA4'te görünmeyen siparişleri nasıl geri kazandığımızı adım adım anlattık.",
    date: "18 Kasım 2026",
    readTime: "7 dk",
  },
  {
    category: "E-ticaret",
    title: "Performance Max'te kâr marjına göre kampanya ayırmak",
    excerpt: "Tek kampanyada tüm ürünleri yarıştırmak yerine marj gruplarıyla çalışınca ROAS neden yükseliyor?",
    date: "4 Kasım 2026",
    readTime: "9 dk",
  },
  {
    category: "Pazaryeri",
    title: "Trendyol reklamlarında stok bağlantısı neden şart?",
    excerpt: "Tükenen ürüne harcanan bütçeyi bir müşterimizde ayda 60 bin liradan sıfıra indirdik.",
    date: "21 Ekim 2026",
    readTime: "5 dk",
  },
];

export const caseStudies = [
  {
    meta: "E-ticaret · Ev tekstili",
    title: "Lina Home",
    description:
      "Ürün feed'ini yeniden yapılandırıp Performance Max kampanyalarını kâr marjına göre ayırdık. Düşük marjlı ürünlere giden bütçeyi en çok satanlara kaydırdık.",
    metrics: [
      { value: "2,1 → 4,6", label: "ROAS (6 ay)" },
      { value: "-%38", label: "Sipariş başı maliyet" },
    ],
  },
  {
    meta: "Sağlık · Ankara",
    title: "Derin Diş Kliniği",
    description:
      "Google İşletme Profili, yerel SEO ve yalnızca 8 km çapında gösterilen arama kampanyalarıyla randevu talebini artırdık.",
    metrics: [
      { value: "41 → 129", label: "Aylık randevu talebi" },
      { value: "610 → 240 ₺", label: "Talep başı maliyet" },
    ],
  },
  {
    meta: "Pazaryeri · Outdoor",
    title: "Kuzey Outdoor",
    description:
      "Trendyol ve Hepsiburada'daki 380 ürünün başlık, görsel ve beden tablolarını yeniledik; pazaryeri reklamlarını stok durumuna bağladık.",
    metrics: [
      { value: "3,2 kat", label: "Ciro artışı (9 ay)" },
      { value: "%14 → %8", label: "İade oranı" },
    ],
  },
  {
    meta: "B2B · Lojistik",
    title: "Mavi Lojistik",
    description:
      "LinkedIn'de lojistik müdürlerini hedefleyen kampanyalar ve teklif formu olan sade bir açılış sayfası kurduk; CRM entegrasyonuyla satış ekibine anında bildirim gitti.",
    metrics: [
      { value: "12 → 37", label: "Aylık nitelikli talep" },
      { value: "-%46", label: "Talep başı maliyet" },
    ],
  },
  {
    meta: "D2C · Kozmetik",
    title: "Peri Kozmetik",
    description:
      "TikTok'ta 14 mikro içerik üreticisiyle ürün denemesi videoları çektik ve en iyi performans gösteren 5 videoyu reklama dönüştürdük.",
    metrics: [
      { value: "%61", label: "Yeni müşteri oranı" },
      { value: "-%29", label: "Müşteri edinme maliyeti" },
    ],
  },
  {
    meta: "SaaS · Ön muhasebe",
    title: "Atlas Yazılım",
    description:
      "KOBİ'lerin aradığı \"e-fatura nasıl kesilir\" gibi 120 soruyu kapsayan bir içerik merkezi kurduk; her yazının sonuna demo formu ekledik.",
    metrics: [
      { value: "4,8 kat", label: "Organik trafik (12 ay)" },
      { value: "+%212", label: "Demo talebi" },
    ],
  },
];

export const serviceOptions = [
  "Performans pazarlaması",
  "SEO ve içerik",
  "Sosyal medya yönetimi",
  "Pazaryeri yönetimi",
  "Veri ve ölçümleme",
  "Web ve açılış sayfaları",
] as const;

export const budgetOptions = [
  "50.000 ₺ altı",
  "50.000 - 250.000 ₺",
  "250.000 - 1.000.000 ₺",
  "1.000.000 ₺ üzeri",
] as const;

export const contact = {
  email: "merhaba@ackdijital.com.tr",
  phone: "+90 216 555 01 42",
  address: "Kozyatağı, Kadıköy / İstanbul",
  hours: "Hafta içi 09:00 - 18:30",
};
