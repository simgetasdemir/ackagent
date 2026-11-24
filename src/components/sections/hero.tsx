import { ButtonLink } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { heroWords } from "@/lib/content";
import { IconArrowRight } from "@tabler/icons-react";
import { Container } from "./section-heading";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Arka plan: kobalt ışık halkaları (video yerine hafif CSS) */}
      <div className="pointer-events-none absolute -top-40 -right-40 size-[44rem] rounded-full bg-cobalt/60 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-60 left-1/3 size-[36rem] rounded-full bg-sky/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <Container className="relative grid min-h-[38rem] items-center gap-12 py-20 lg:grid-cols-[1.4fr_1fr] lg:py-28">
        <div>
          <p className="text-sm font-semibold text-sky">ACK Dijital Ajans</p>
          <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl md:leading-[1.05]">
            <span className="block h-[1.1em]">
              <FlipWords words={heroWords} className="text-sky" />
            </span>
            <span className="block">veriyle büyütüyoruz.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
            Google Ads, Meta, SEO ve pazaryeri yönetimini tek ekipte topluyoruz.
            Her pazartesi ne harcandığını ve karşılığında ne kazandığınızı aynı
            raporda görürsünüz.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/#iletisim" size="lg" variant="white">
              Ücretsiz hesap analizi isteyin
              <IconArrowRight className="size-4" stroke={2.25} />
            </ButtonLink>
            <ButtonLink href="/#hizmetler" size="lg" variant="outline-white">
              Hizmetleri inceleyin
            </ButtonLink>
          </div>
        </div>

        {/* Sağ panel: örnek haftalık rapor kartı */}
        <div className="hidden lg:block">
          <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Haftalık rapor</p>
              <p className="text-xs text-white/60">18 - 24 Kasım</p>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["Reklam harcaması", "214.800 ₺"],
                ["Reklamdan gelen ciro", "987.300 ₺"],
                ["ROAS", "4,6"],
                ["Sipariş başı maliyet", "312 ₺"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col-reverse gap-1 rounded-2xl bg-white/[0.06] p-4">
                  <dt className="text-xs text-white/60">{k}</dt>
                  <dd className="text-xl font-bold">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex h-24 items-end gap-1.5">
              {[30, 38, 34, 46, 52, 49, 60, 66, 63, 74, 82, 90].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-cobalt to-sky"
                />
              ))}
            </div>
            <p className="mt-4 text-xs text-white/60">
              Örnek rapor. Rakamlar bir e-ticaret müşterimizin anonimleştirilmiş
              verisidir.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
