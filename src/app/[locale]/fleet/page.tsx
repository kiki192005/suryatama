import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Truck, TrendingUp, Layers } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Counter from "@/components/ui/Counter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("fleetTitle"),
    description: t("fleetDesc"),
  };
}

export default async function FleetPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <FleetView />;
}

function FleetView() {
  const t = useTranslations("fleet");

  const fleetGrowth = [
    { year: "2012", count: 6, percent: 10 },
    { year: "2013", count: 20, percent: 30 },
    { year: "2014-2020", count: 23, percent: 35 },
    { year: "2021-2023", count: 54, percent: 80 },
    { year: "2024", count: 69, percent: 100 },
    { year: "2025", count: 64, percent: 93 },
  ];

  const brandAssets = [
    { brand: "Isuzu", count: 10, percent: "50%" },
    { brand: "Mitsubishi", count: 7, percent: "35%" },
    { brand: "Toyota", count: 2, percent: "10%" },
    { brand: "Hino", count: 1, percent: "5%" },
  ];

  const boxAssets = [
    { length: "9,5 m", count: 7 },
    { length: "7,5 m", count: 3 },
    { length: "7 m", count: 4 },
    { length: "8 m", count: 1 },
    { length: "4,5 m", count: 4 },
    { length: "2 m", count: 1 },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 1. HEADER */}
        <SectionHeading
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        {/* 2. FLEET GROWTH TIMELINE / CHART */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-suryatama-navy-50 text-suryatama-navy-500">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                {t("growthHeading")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                {t("growthSubheading")}
              </p>
            </div>
          </div>

          {/* Visual Growth Bars */}
          <div className="space-y-5">
            {fleetGrowth.map((item, idx) => (
              <ScrollReveal key={item.year} direction="up" delay={0.06 * idx}>
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                    <span className="text-slate-800">{item.year}</span>
                    <span className="text-suryatama-navy-600 font-bold">
                      <Counter to={item.count} suffix={` ${t("unitLabel")}`} />
                    </span>
                  </div>
                  <div className="h-4 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-suryatama-navy-500 to-suryatama-navy-600 transition-all duration-1000 ease-out"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* 3. TRUCK TYPES: STANDARD & CUSTOM */}
        <div className="mt-16 sm:mt-24">
          <SectionHeading
            badge="Spesifikasi Unit"
            title={t("typeHeading")}
          />

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Standard Truck */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm h-full flex flex-col justify-between">
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src="/images/standar-truk.jpeg"
                    alt="Standard Truck Wing Box PT. Suryatama Indonesia"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-slate-900 font-heading">
                    {t("standardTitle")}
                  </h4>
                  <p className="mt-4 text-base text-slate-600 leading-relaxed">
                    {t("standardDesc")}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-suryatama-navy-50 px-3 py-1 text-xs font-semibold text-suryatama-navy-600 border border-suryatama-navy-200">
                      Wing Box 9,5 m & 7,5 m
                    </span>
                    <span className="rounded-full bg-suryatama-navy-50 px-3 py-1 text-xs font-semibold text-suryatama-navy-600 border border-suryatama-navy-200">
                      Standar Dinas Perhubungan
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Custom Truck */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm h-full flex flex-col justify-between">
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src="/images/custom-truk.png"
                    alt="Custom Truck Automatic Conveyor PT. Suryatama Indonesia"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-slate-900 font-heading">
                    {t("customTitle")}
                  </h4>
                  <p className="mt-4 text-base text-slate-600 leading-relaxed">
                    {t("customDesc")}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-suryatama-navy-50 px-3 py-1 text-xs font-semibold text-suryatama-navy-600 border border-suryatama-navy-200">
                      Automatic Conveyor Mesin
                    </span>
                    <span className="rounded-full bg-suryatama-navy-50 px-3 py-1 text-xs font-semibold text-suryatama-navy-600 border border-suryatama-navy-200">
                      Automatic Conveyor Kursi
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* 4. ASSET SUMMARY TABLES (20 UNIT ASSET SENDIRI) */}
        <div className="mt-16 sm:mt-24">
          <SectionHeading
            badge="Audit Aset 2025"
            title={t("assetHeading")}
            subtitle={t("assetSubheading")}
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Table Merek */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="h-5 w-5 text-suryatama-navy-500" />
                  <h4 className="text-lg font-bold text-slate-900 font-heading">
                    {t("brandSummaryTitle")}
                  </h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-xs uppercase text-slate-700">
                      <tr>
                        <th className="px-4 py-3 rounded-l-lg">{t("brandCol")}</th>
                        <th className="px-4 py-3 text-right rounded-r-lg">{t("countCol")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {brandAssets.map((b) => (
                        <tr key={b.brand} className="hover:bg-slate-50">
                          <td className="px-4 py-3 text-slate-900">{b.brand}</td>
                          <td className="px-4 py-3 text-right font-bold text-suryatama-navy-600">
                            {b.count} unit
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-suryatama-navy-50 font-bold text-suryatama-navy-900">
                        <td className="px-4 py-3">Total Unit</td>
                        <td className="px-4 py-3 text-right">20 unit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>

            {/* Table Box Length */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Truck className="h-5 w-5 text-suryatama-navy-500" />
                  <h4 className="text-lg font-bold text-slate-900 font-heading">
                    {t("boxSummaryTitle")}
                  </h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-xs uppercase text-slate-700">
                      <tr>
                        <th className="px-4 py-3 rounded-l-lg">{t("boxCol")}</th>
                        <th className="px-4 py-3 text-right rounded-r-lg">{t("countCol")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {boxAssets.map((box) => (
                        <tr key={box.length} className="hover:bg-slate-50">
                          <td className="px-4 py-3 text-slate-900">{box.length}</td>
                          <td className="px-4 py-3 text-right font-bold text-suryatama-navy-600">
                            {box.count} unit
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-suryatama-navy-50 font-bold text-suryatama-navy-900">
                        <td className="px-4 py-3">Total Unit</td>
                        <td className="px-4 py-3 text-right">20 unit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
