"use client";
import { ButtonLink } from "@/components/ui/button";
import {
  LanguageSwitch,
  MobileNav,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  Navbar,
  NavbarLogo,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { navItems } from "@/lib/content";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <ButtonLink href="/#iletisim">İletişime geçin</ButtonLink>
        </div>
      </NavBody>
      <MobileNav>
        <div className="flex h-10 items-center justify-between">
          <NavbarLogo />
          <MobileNavToggle isOpen={open} onClick={() => setOpen(!open)} />
        </div>
        <MobileNavMenu isOpen={open}>
          {navItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              onClick={() => setOpen(false)}
              className="w-full text-base font-medium text-neutral-200"
            >
              {item.name}
            </Link>
          ))}
          <ButtonLink href="/#iletisim" className="mt-2 w-full" onClick={() => setOpen(false)}>
            İletişime geçin
          </ButtonLink>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
