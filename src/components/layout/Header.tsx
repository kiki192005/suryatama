import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const t = useTranslations("common");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-[73px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Brand */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-suryatama-navy-500 rounded-lg p-1">
          <div className="relative h-11 w-44 sm:h-12 sm:w-48">
            <Image
              src="/images/logo-suryatama.png"
              alt="PT. Suryatama Indonesia"
              fill
              priority
              sizes="(max-width: 640px) 176px, 192px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <Navigation />

        {/* Desktop Actions (Language Switcher & CTA) */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-suryatama-navy-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-suryatama-navy-600 focus:outline-none focus:ring-2 focus:ring-suryatama-navy-500 focus:ring-offset-2 active:bg-suryatama-navy-700"
          >
            {t("contactUs")}
          </Link>
        </div>

        {/* Mobile Menu & Language Switcher */}
        <MobileMenu />
      </div>
    </header>
  );
}
