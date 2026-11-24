import { NavbarLogo } from "@/components/ui/resizable-navbar";
import { contact, hashtag } from "@/lib/content";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Link from "next/link";
import { Container } from "./section-heading";

const columns = [
  {
    title: "Kurumsal",
    links: [
      { name: "Hakkımızda", link: "/#hakkimizda" },
      { name: "Kurulumlar", link: "/#kurulumlar" },
      { name: "Çözümler", link: "/#cozumler" },
      { name: "Blog", link: "/#blog" },
    ],
  },
  {
    title: "Yasal",
    links: [
      { name: "Gizlilik politikası", link: "/#gizlilik" },
      { name: "Çerez politikası", link: "/#cerez" },
      { name: "KVKK aydınlatma metni", link: "/#kvkk" },
      { name: "İletişim", link: "/#iletisim" },
    ],
  },
];

const socials = [
  { name: "LinkedIn", icon: IconBrandLinkedin },
  { name: "X", icon: IconBrandX },
  { name: "Instagram", icon: IconBrandInstagram },
  { name: "YouTube", icon: IconBrandYoutube },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-3">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <NavbarLogo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-400">
            Performans pazarlaması ve user acquisition ajansı. {contact.address}
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map(({ name, icon: Icon }) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-neutral-300 transition hover:border-white/40 hover:text-white"
              >
                <Icon className="size-4" stroke={1.75} />
              </a>
            ))}
          </div>
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <p className="text-sm font-semibold text-white">{c.title}</p>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
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
          <p className="text-sm font-semibold text-white">Bize ulaşın</p>
          <ul className="mt-4 space-y-3 text-sm text-neutral-400">
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li>{contact.hours}</li>
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col justify-between gap-2 border-t border-white/10 py-6 text-xs text-neutral-500 sm:flex-row">
        <span>© 2026 ACK Dijital Pazarlama ve Danışmanlık Ltd. Şti.</span>
        <span>{hashtag}</span>
      </Container>
    </footer>
  );
}
