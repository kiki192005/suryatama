"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { NAV_ITEMS } from "@/constants/navigation";

export default function Navigation() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
      {NAV_ITEMS.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              isActive
                ? "text-suryatama-navy-500 font-semibold bg-suryatama-navy-50"
                : "text-slate-600 hover:text-suryatama-navy-500 hover:bg-slate-50"
            }`}
          >
            {t(item.labelKey)}
          </Link>
        );
      })}
    </nav>
  );
}
