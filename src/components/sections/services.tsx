import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { services } from "@/lib/content";
import {
  IconBrandGoogle,
  IconBuildingStore,
  IconChartLine,
  IconDeviceDesktop,
  IconSearch,
  IconUsersGroup,
} from "@tabler/icons-react";
import { Container, SectionHeading } from "./section-heading";

const frame =
  "flex h-36 w-full flex-none overflow-hidden rounded-xl border border-navy/5 bg-surface";

function PerformanceVisual() {
  const bars = [28, 36, 33, 47, 52, 61, 58, 72, 80, 86];
  return (
    <div className={`${frame} flex-col justify-between p-4`}>
      <div className="flex items-center justify-between text-xs text-navy/60">
        <span>ROAS, son 10 hafta</span>
        <span className="rounded bg-emerald-500/15 px-2 py-0.5 font-medium text-emerald-600">
          4,6
        </span>
      </div>
      <div className="flex h-24 items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%` }}
            className="flex-1 rounded-t bg-gradient-to-t from-cobalt/40 to-cobalt"
          />
        ))}
      </div>
    </div>
  );
}

function SeoVisual() {
  return (
    <div className={`${frame} flex-col gap-3 p-4`}>
      <div className="flex h-7 items-center gap-2 rounded-full bg-white px-3 text-xs text-navy/60">
        <IconSearch className="size-3.5" /> e-fatura nasıl kesilir
      </div>
      {[1, 2, 3].map((n) => (
        <div key={n} className="flex items-start gap-2">
          <span className="w-4 text-xs font-semibold text-navy/50">{n}</span>
          <div className="flex-1 space-y-1.5">
            <div
              className={`h-2 rounded ${n === 1 ? "w-3/4 bg-cobalt" : "w-2/3 bg-navy/30"}`}
            />
            <div className="h-1.5 w-full rounded bg-navy/10" />
          </div>
        </div>
      ))}
    </div>
  );
}

function SocialVisual() {
  return (
    <div className={`${frame} grid grid-cols-3 gap-2 p-4`}>
      {["from-cobalt/60", "from-sky", "from-navy/70"].map(
        (c, i) => (
          <div
            key={i}
            className={`rounded-lg bg-gradient-to-b ${c} to-white`}
          />
        ),
      )}
    </div>
  );
}

function MarketplaceVisual() {
  const rows = [
    { name: "Su geçirmez mont", stock: "Stokta", ads: "Reklam açık" },
    { name: "Trekking botu 42", stock: "Tükendi", ads: "Reklam durdu" },
    { name: "Polar bere", stock: "Stokta", ads: "Reklam açık" },
  ];
  return (
    <div className={`${frame} flex-col justify-center gap-2 p-4`}>
      {rows.map((r) => (
        <div
          key={r.name}
          className="flex items-center justify-between rounded-md bg-white px-3 py-2 text-xs"
        >
          <span className="text-navy/80">{r.name}</span>
          <span className="flex gap-3">
            <span className="hidden text-navy/50 sm:inline">{r.stock}</span>
            <span
              className={
                r.stock === "Stokta" ? "text-emerald-600" : "text-navy/50"
              }
            >
              {r.ads}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

function MeasurementVisual() {
  return (
    <div className={`${frame} flex-col p-4`}>
      <div className="flex gap-4 text-xs">
        <span className="flex items-center gap-1.5 text-navy/60">
          <span className="size-2 rounded-full bg-cobalt" /> Google Ads
        </span>
        <span className="flex items-center gap-1.5 text-navy/60">
          <span className="size-2 rounded-full bg-sky" /> Meta
        </span>
        <span className="flex items-center gap-1.5 text-navy/60">
          <span className="size-2 rounded-full bg-navy/40" /> Organik
        </span>
      </div>
      <svg viewBox="0 0 300 90" className="mt-3 h-full w-full" preserveAspectRatio="none" aria-hidden="true">
        <polyline fill="none" stroke="#2340f5" strokeWidth="2" points="0,70 40,62 80,64 120,48 160,44 200,30 240,26 300,14" />
        <polyline fill="none" stroke="#8fd3ff" strokeWidth="2" points="0,78 40,74 80,70 120,66 160,58 200,56 240,50 300,44" />
        <polyline fill="none" stroke="#0a1640" strokeOpacity="0.35" strokeWidth="2" points="0,84 40,82 80,80 120,78 160,74 200,72 240,70 300,66" />
      </svg>
    </div>
  );
}

function WebVisual() {
  return (
    <div className={`${frame} flex-col`}>
      <div className="flex h-7 items-center gap-1.5 border-b border-navy/10 px-3">
        <span className="size-2 rounded-full bg-navy/30" />
        <span className="size-2 rounded-full bg-navy/30" />
        <span className="size-2 rounded-full bg-navy/30" />
      </div>
      <div className="flex flex-1 items-center justify-between gap-4 p-4">
        <div className="flex-1 space-y-2">
          <div className="h-2.5 w-3/4 rounded bg-navy/40" />
          <div className="h-2 w-full rounded bg-navy/10" />
          <div className="mt-3 h-6 w-20 rounded bg-cobalt" />
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-navy">1,4 sn</p>
          <p className="text-xs text-navy/60">Mobil açılış (LCP)</p>
        </div>
      </div>
    </div>
  );
}

const meta: Record<
  string,
  { visual: React.ReactNode; icon: React.ReactNode; span: string }
> = {
  performans: { visual: <PerformanceVisual />, icon: <IconBrandGoogle />, span: "md:col-span-2" },
  seo: { visual: <SeoVisual />, icon: <IconSearch />, span: "md:col-span-1" },
  sosyal: { visual: <SocialVisual />, icon: <IconUsersGroup />, span: "md:col-span-1" },
  pazaryeri: { visual: <MarketplaceVisual />, icon: <IconBuildingStore />, span: "md:col-span-2" },
  olcumleme: { visual: <MeasurementVisual />, icon: <IconChartLine />, span: "md:col-span-2" },
  web: { visual: <WebVisual />, icon: <IconDeviceDesktop />, span: "md:col-span-1" },
};

export function Services() {
  return (
    <section className="bg-surface py-24">
      <Container>
        <SectionHeading
          eyebrow="Hizmet detayları"
          title="Satışa giden yolun her adımı tek ekipte"
          description="Reklam, içerik ve ölçümleme farklı ajanslara dağıldığında kimse sonuçtan sorumlu olmuyor. Biz hepsini birlikte yönetiyor ve tek bir rapordan hesap veriyoruz."
        />
        <BentoGrid className="mt-12 md:auto-rows-auto">
          {services.map((s) => (
            <BentoGridItem
              key={s.key}
              title={s.title}
              description={
                <>
                  {s.description}
                  <span className="mt-3 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-navy/15 px-2 py-0.5 text-xs text-navy/60"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                </>
              }
              header={meta[s.key].visual}
              icon={<span className="text-cobalt [&>svg]:size-5">{meta[s.key].icon}</span>}
              className={meta[s.key].span}
            />
          ))}
        </BentoGrid>
      </Container>
    </section>
  );
}
