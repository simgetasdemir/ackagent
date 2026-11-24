import type { NavItem } from "@/components/ui/resizable-navbar";

export const navItems: NavItem[] = [
  { name: "Hakkımızda", link: "/#hakkimizda" },
  { name: "Hizmetler", link: "/#hizmetler" },
  { name: "Kurulumlar", link: "/#kurulumlar" },
  { name: "Çözümler", link: "/#cozumler" },
  { name: "Blog", link: "/#blog" },
];

export const hashtag = "#ölçülebilirbüyüme";

// Kayan şerit: reklam yaptığımız kanallar ve ağlar.
export const channels = [
  "Google App Campaigns",
  "Apple Search Ads",
  "Meta Ads",
  "TikTok Ads",
  "Snapchat Ads",
  "Unity Ads",
  "AppLovin",
  "Mintegral",
  "Moloco",
  "Liftoff",
  "Google Ads",
  "Bing Ads",
];

// Logo duvarı: kurulum ve entegrasyonunu yaptığımız ölçümleme araçları.
export const integrations = [
  "AppsFlyer",
  "Adjust",
  "Singular",
  "Branch",
  "Kochava",
  "Firebase",
  "Google Analytics 4",
  "Google Tag Manager",
  "Server-side GTM",
  "BigQuery",
  "Looker Studio",
  "RevenueCat",
];

export const results = [
  {
    title: "User acquisition",
    description:
      "Google App Campaigns, Apple Search Ads, Meta, TikTok ve programatik ağlarda install değil, D7 ve D30 ROAS hedefiyle kampanya kurar ve yönetiriz.",
  },
  {
    title: "Performans pazarlaması",
    description:
      "Web ve e-ticaret tarafında arama, Performance Max ve sosyal reklamları CPA ve ROAS hedefiyle yönetir, her pazartesi tek sayfalık rapor göndeririz.",
  },
  {
    title: "Analytics kurulumu",
    description:
      "GA4 ve Firebase için event şeması, kullanıcı özellikleri ve dönüşüm tanımları. BigQuery dışa aktarımıyla ham veriye erişim.",
  },
  {
    title: "Google Tag Manager kurulumu",
    description:
      "Web ve sunucu taraflı GTM konteynerleri, Consent Mode v2, Meta CAPI ve TikTok Events API bağlantıları. KVKK uyumlu çerez onayı dahil.",
  },
  {
    title: "MMP entegrasyonu",
    description:
      "AppsFlyer, Adjust veya Singular SDK kurulumu, in-app event eşleştirmesi, reklam ağı postback'leri, deep link ve ham veri dışa aktarımı.",
  },
  {
    title: "SKAN mapping",
    description:
      "iOS için SKAdNetwork 4 conversion value şeması: fine ve coarse değerler, üç postback penceresi ve gelir aralıkları uygulamanızın satın alma eğrisine göre tasarlanır.",
  },
];

export const measureCards = [
  {
    title: "Tek tabloda tüm kanallar",
    text: "Reklam ağlarının harcaması, MMP install ve event verisi ile mağaza gelirini her sabah otomatik birleştiren Looker Studio paneli.",
  },
  {
    title: "Kayıpsız event takibi",
    text: "Sunucu taraflı etiketleme ve MMP postback'leriyle tarayıcı engellerine ve iOS gizlilik kısıtlarına takılan dönüşümleri geri kazanırız.",
  },
  {
    title: "Haftalık karar notu",
    text: "Rakamların yanında neyi neden değiştirdiğimizi ve gelecek haftanın test planını iki paragrafta yazarız.",
  },
];

export const solutions = [
  {
    name: "ACK Pulse",
    tagline: "Kampanya ve anomali takibi",
    description:
      "Tüm reklam ağlarındaki kampanyaları cohort bazında tek ekranda izleyin; bir metrik beklenmedik şekilde değiştiğinde e-posta ve Slack bildirimi alın.",
    features: [
      { title: "Anomali uyarısı", text: "CPI, IPM ya da D1 retention bir günde %25'ten fazla değişirse haber verir." },
      { title: "Kreatif yorgunluğu", text: "Gösterim arttıkça performansı düşen kreatifleri işaretler, yenilenme sırasını önerir." },
      { title: "Cohort ROAS", text: "Her install cohortunun D0, D7 ve D30 ROAS eğrisini kanal ve ülke kırılımıyla gösterir." },
      { title: "Haftalık özet", text: "Pazartesi sabahı yönetime gidecek tek sayfalık PDF'i hazırlar." },
    ],
  },
  {
    name: "ACK Merge",
    tagline: "MMP ve reklam verisi birleştirme",
    description:
      "MMP ham verisini, reklam ağı maliyetlerini ve mağaza ya da abonelik gelirini tek bir BigQuery tablosunda toplar; her kullanıcıyı kaynağıyla eşleştirir.",
    features: [
      { title: "30'dan fazla kaynak", text: "AppsFlyer, Adjust, Singular, Firebase, RevenueCat ve başlıca reklam ağları." },
      { title: "Net gelir görünümü", text: "Mağaza komisyonu, iade ve vergiyi düşerek kanal başına net geliri hesaplar." },
      { title: "LTV tahmini", text: "İlk 7 günün davranışından 180 günlük kullanıcı değerini tahmin eder." },
      { title: "Hazır panolar", text: "UA, ürün ve yönetim ekipleri için üç ayrı Looker Studio panosu." },
    ],
  },
  {
    name: "ACK Map",
    tagline: "SKAN conversion value mapping",
    description:
      "iOS kampanyalarınız için SKAdNetwork 4 şemasını tasarlar, postback'leri çözer ve iOS performansını Android ile karşılaştırılabilir hale getirir.",
    features: [
      { title: "Şema tasarımı", text: "64 fine değeri gelir aralıklarına ve kilit event'lere, coarse değerleri düşük-orta-yüksek kırılımına ayırır." },
      { title: "Üç postback penceresi", text: "0-2, 3-7 ve 8-35 gün pencerelerini ayrı ayrı okur ve raporlar." },
      { title: "Null oranı takibi", text: "Gizlilik eşiği yüzünden boş gelen postback oranını kampanya bazında izler." },
      { title: "MMP uyumu", text: "Şemayı AppsFlyer, Adjust veya Singular panelinize doğrudan aktarır." },
    ],
  },
];

// Kurulum paketleri (HoverEffect kartlarında gösterilir).
export const setups = [
  {
    meta: "Analitik",
    title: "GA4 ve Firebase kurulumu",
    description:
      "Event şeması ve ölçümleme planı, dönüşüm tanımları, kullanıcı özellikleri, BigQuery dışa aktarımı ve Google Ads bağlantısı.",
    metrics: [
      { value: "5 iş günü", label: "Teslim süresi" },
      { value: "Ölçüm planı", label: "Çıktı" },
    ],
  },
  {
    meta: "Etiketleme",
    title: "Google Tag Manager kurulumu",
    description:
      "Web ve server-side GTM konteynerleri, Consent Mode v2, Meta CAPI, TikTok Events API ve Google Ads gelişmiş dönüşümler.",
    metrics: [
      { value: "7 iş günü", label: "Teslim süresi" },
      { value: "Web + sunucu", label: "Kapsam" },
    ],
  },
  {
    meta: "Mobil ölçümleme",
    title: "MMP entegrasyonu",
    description:
      "AppsFlyer, Adjust veya Singular SDK kurulumu, event eşleştirme, reklam ağı entegrasyonları, OneLink veya deep link kurgusu ve ham veri aktarımı.",
    metrics: [
      { value: "10 iş günü", label: "Teslim süresi" },
      { value: "iOS + Android", label: "Kapsam" },
    ],
  },
  {
    meta: "iOS",
    title: "SKAN mapping",
    description:
      "SKAdNetwork 4 conversion value şeması, fine ve coarse değerlerin gelir aralıklarına eşlenmesi, postback pencereleri ve MMP paneline aktarım.",
    metrics: [
      { value: "5 iş günü", label: "Teslim süresi" },
      { value: "SKAN 4", label: "Sürüm" },
    ],
  },
  {
    meta: "User acquisition",
    title: "UA kampanya kurulumu",
    description:
      "Google App Campaigns, Apple Search Ads, Meta ve TikTok hesap yapısı, hedef CPA ve ROAS teklif stratejisi, ülke ve kreatif test planı.",
    metrics: [
      { value: "2 hafta", label: "Kurulum ve öğrenme" },
      { value: "D7 ROAS", label: "Ana hedef" },
    ],
  },
  {
    meta: "Raporlama",
    title: "Veri ambarı ve panolar",
    description:
      "MMP ham verisi, reklam maliyetleri ve gelirin BigQuery'de birleştirilmesi; cohort, LTV ve kanal bazında Looker Studio panoları.",
    metrics: [
      { value: "3 hafta", label: "Teslim süresi" },
      { value: "Günlük", label: "Veri yenileme" },
    ],
  },
];

export const posts = [
  {
    category: "SKAN",
    title: "SKAN 4 conversion value şeması nasıl tasarlanır?",
    excerpt: "64 fine değeri gelir aralıklarına mı, event'lere mi ayırmalı? Abonelik ve oyun uygulamaları için iki örnek şema.",
    date: "18 Kasım 2026",
    readTime: "9 dk",
  },
  {
    category: "MMP",
    title: "AppsFlyer, Adjust ve Singular: hangisi kimin için?",
    excerpt: "Fiyatlandırma, ham veri erişimi, fraud koruması ve SKAN desteği açısından üç MMP'nin karşılaştırması.",
    date: "4 Kasım 2026",
    readTime: "8 dk",
  },
  {
    category: "Etiketleme",
    title: "Server-side GTM ile Meta CAPI kurulumu adım adım",
    excerpt: "Tarayıcı pikseli ile sunucu event'lerini çift saymadan birleştirmek için event_id eşleştirmesi ve test akışı.",
    date: "21 Ekim 2026",
    readTime: "7 dk",
  },
];

export const serviceOptions = [
  "User acquisition",
  "Performans pazarlaması",
  "Analytics kurulumu (GA4 / Firebase)",
  "Google Tag Manager kurulumu",
  "MMP entegrasyonu",
  "SKAN mapping",
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
