import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { MapPin, Mail, Phone, ShieldCheck } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const tCommon = useTranslations("common");
  const tNav = useTranslations("nav");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Kolom 1: Profil Perusahaan */}
          <div className="space-y-4">
            <div className="relative h-12 w-48 bg-white/95 rounded-lg p-1.5 shadow-sm">
              <Image
                src="/images/logo-suryatama.png"
                alt="PT. Suryatama Indonesia"
                fill
                sizes="192px"
                className="object-contain p-1"
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-suryatama-red-400">
              {tCommon("tagline")}
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              {t("description")}
            </p>
            <div className="pt-2">
              <p className="text-xs italic text-slate-400 border-l-2 border-suryatama-red-500 pl-3">
                &ldquo;{tCommon("slogan")}&rdquo;
              </p>
            </div>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t("quickLinks")}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white hover:underline underline-offset-4"
                  >
                    {tNav(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Lokasi Operasional */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t("locations")}
            </h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-suryatama-red-400 mt-0.5" />
                <div>
                  <strong className="block text-white text-xs font-medium">
                    {t("headOffice")}
                  </strong>
                  <span className="text-xs leading-normal text-slate-400">
                    {t("headOfficeAddress")}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-suryatama-red-400 mt-0.5" />
                <div>
                  <strong className="block text-white text-xs font-medium">
                    {t("pool2")}
                  </strong>
                  <span className="text-xs leading-normal text-slate-400">
                    {t("pool2Address")}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-suryatama-red-400 mt-0.5" />
                <div>
                  <strong className="block text-white text-xs font-medium">
                    {t("pool3")}
                  </strong>
                  <span className="text-xs leading-normal text-slate-400">
                    {t("pool3Address")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom 4: Narahubung & Kontak */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t("contacts")}
            </h3>
            
            <div className="space-y-3 text-sm">
              {/* Narahubung 1 */}
              <div className="rounded-lg bg-slate-800/80 p-3 border border-slate-700/60">
                <p className="text-xs font-medium text-white">{t("contactPerson1Name")}</p>
                <p className="text-[11px] text-slate-400">{t("contactPerson1Role")}</p>
                <a
                  href="mailto:i-indahsary@suryatama-indonesia.co.id"
                  className="mt-1 flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="h-3 w-3 text-suryatama-red-400 shrink-0" />
                  <span className="break-all">i-indahsary@suryatama-indonesia.co.id</span>
                </a>
              </div>

              {/* Narahubung 2 */}
              <div className="rounded-lg bg-slate-800/80 p-3 border border-slate-700/60">
                <p className="text-xs font-medium text-white">{t("contactPerson2Name")}</p>
                <p className="text-[11px] text-slate-400">{t("contactPerson2Role")}</p>
                <a
                  href="mailto:endro.sti@suryatama-indonesia.co.id"
                  className="mt-1 flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="h-3 w-3 text-suryatama-red-400 shrink-0" />
                  <span className="break-all">endro.sti@suryatama-indonesia.co.id</span>
                </a>
              </div>

              {/* Telepon Umum Placeholder */}
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Phone className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                <span>{t("phoneLabel")}:</span>
                <span className="italic text-slate-400">{t("phonePlaceholder")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Baris Bawah: Hak Cipta */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-suryatama-red-500" />
            <p>
              &copy; {currentYear} {tCommon("companyName")}. {tCommon("allRightsReserved")}
            </p>
          </div>
          <p className="text-slate-500">
            {tCommon("tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
