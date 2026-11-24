"use client";
import { ButtonLink } from "@/components/ui/button";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  Navbar,
  NavbarLogo,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { contact, navItems, utilityLinks } from "@/lib/content";
import { IconPhone } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { Container } from "./section-heading";

function UtilityBar() {
  return (
    <div className="hidden bg-navy text-white lg:block">
      <Container className="flex h-10 items-center justify-between text-xs font-medium">
        <p className="text-white/70">{contact.hours}</p>
        <div className="flex items-center gap-6">
          {utilityLinks.map((l) => (
            <Link key={l.link} href={l.link} className="text-white/80 hover:text-white">
              {l.name}
            </Link>
          ))}
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 text-white hover:text-sky"
          >
            <IconPhone className="size-3.5" stroke={2} />
            {contact.phone}
          </a>
        </div>
      </Container>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <UtilityBar />
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <ButtonLink href="/#iletisim">Ücretsiz analiz isteyin</ButtonLink>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={open} onClick={() => setOpen(!open)} />
          </MobileNavHeader>
          <MobileNavMenu isOpen={open}>
            {[...navItems, ...utilityLinks].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setOpen(false)}
                className="w-full text-base font-semibold text-navy"
              >
                {item.name}
              </Link>
            ))}
            <ButtonLink
              href="/#iletisim"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Ücretsiz analiz isteyin
            </ButtonLink>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  );
}
