import { NavbarLogo } from "@/components/ui/resizable-navbar";
import { contact, services } from "@/lib/content";
import {
  IconArrowUp,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Link from "next/link";
import { Container } from "./section-heading";

const columns = [
  {
    title: "Hizmetler",
    links: services.map((s) => ({ name: s.title, link: "/#hizmetler" })),
  },
  {
    title: "Kurumsal",
    links: [
      { name: "Hakkımızda", link: "/#hakkimizda" },
      { name: "Çalışmalar", link: "/#calismalar" },
      { name: "Kariyer", link: "/#kariyer" },
      { name: "Paketler", link: "/#paketler" },
    ],
  },
  {
    title: "Politikalar",
    links: [
      { name: "KVKK aydınlatma metni", link: "/#kvkk" },
      { name: "Çerez politikası", link: "/#cerez" },
      { name: "Gizlilik politikası", link: "/#gizlilik" },
      { name: "Kullanım koşulları", link: "/#kosullar" },
    ],
  },
];

const socials = [
  { name: "LinkedIn", icon: IconBrandLinkedin },
  { name: "Instagram", icon: IconBrandInstagram },
  { name: "TikTok", icon: IconBrandTiktok },
  { name: "YouTube", icon: IconBrandYoutube },
];

export function Footer() {
  return (
    <footer id="kariyer" className="bg-navy text-white">
      <Container className="flex items-center justify-between border-b border-white/10 py-8">
        <NavbarLogo inverted />
        <a
          href="#"
          className="flex h-10 items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
        >
          Başa dön <IconArrowUp className="size-4" stroke={2.25} />
        </a>
      </Container>
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5">
        {columns.map((c) => (
          <div key={c.title}>
            <p className="text-sm font-bold">{c.title}</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {c.links.map((l) => (
                <li key={l.name}>
                  <Link href={l.link} className="hover:text-white">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="text-sm font-bold">Bize ulaşın</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li>{contact.hours}</li>
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </li>
            <li>{contact.address}</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold">Takip edin</p>
          <div className="mt-4 flex gap-2">
            {socials.map(({ name, icon: Icon }) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="flex size-10 items-center justify-center rounded-full border-2 border-white/20 hover:border-white"
              >
                <Icon className="size-4" stroke={2} />
              </a>
            ))}
          </div>
        </div>
      </Container>
      <Container className="border-t border-white/10 py-6 text-xs text-white/50">
        © 2026 ACK Dijital Pazarlama ve Danışmanlık Ltd. Şti. Tüm hakları saklıdır.
      </Container>
    </footer>
  );
}
