"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const t = useTranslations("language");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === "id" ? "en" : "id";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      aria-label={t("switchLanguage")}
      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:border-suryatama-navy-500 hover:text-suryatama-navy-500 focus:outline-none focus:ring-2 focus:ring-suryatama-navy-500/20 disabled:opacity-50"
    >
      <Globe className="h-3.5 w-3.5 text-suryatama-navy-500" />
      <span className={locale === "id" ? "font-bold text-suryatama-navy-500" : "text-slate-400"}>
        ID
      </span>
      <span className="text-slate-300">/</span>
      <span className={locale === "en" ? "font-bold text-suryatama-navy-500" : "text-slate-400"}>
        EN
      </span>
    </button>
  );
}
