import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Truck, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Link } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("servicesTitle"),
    description: t("servicesDesc"),
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServicesView />;
}

function ServicesView() {
  const t = useTranslations("services");
  const tCommon = useTranslations("common");

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 1. HEADER */}
        <SectionHeading
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        {/* 2. BISNIS 1: TRANSPORTATION */}
        <section className="mt-16 sm:mt-24">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-suryatama-navy-100 px-3 py-1 text-xs font-semibold text-suryatama-navy-700 uppercase tracking-wider mb-3">
                <Truck className="h-3.5 w-3.5" />
                <span>{tCommon("sinceYear")}</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                {t("transportTitle")}
              </h3>
              <p className="mt-2 text-base text-slate-600 font-medium">
                {t("transportSubtitle")}
              </p>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {t("transportIntro")}
              </p>
            </div>

            {/* 3 Skema Transportasi Cards */}
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Milk Run */}
              <ScrollReveal direction="up" delay={0.1}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-suryatama-navy-50 text-suryatama-navy-500 mb-4">
                      <Truck className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 font-heading">
                      {t("milkRunTitle")}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {t("milkRunDesc")}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="text-xs font-semibold text-suryatama-navy-500">
                      {t("milkRunClients")}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Direct */}
              <ScrollReveal direction="up" delay={0.2}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-suryatama-navy-50 text-suryatama-navy-500 mb-4">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 font-heading">
                      {t("directTitle")}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {t("directDesc")}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="text-xs font-semibold text-suryatama-navy-500">
                      {t("directClients")}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* On Site */}
              <ScrollReveal direction="up" delay={0.3}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-suryatama-navy-50 text-suryatama-navy-500 mb-4">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 font-heading">
                      {t("onSiteTitle")}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {t("onSiteDesc")}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="text-xs font-semibold text-suryatama-navy-500">
                      {t("onSiteClients")}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 3. BISNIS 2: OUTSOURCING (SECURITY SERVICE) */}
        <section className="mt-16 sm:mt-24">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-12 shadow-sm">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-suryatama-red-50 px-3 py-1 text-xs font-semibold text-suryatama-red-600 uppercase tracking-wider mb-3">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Certified Workforce</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                {t("outsourcingTitle")}
              </h3>
              <p className="mt-2 text-base text-slate-600 font-medium">
                {t("outsourcingSubtitle")}
              </p>
            </div>

            {/* Outsourcing Security Cards with Photo */}
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Security Personnel */}
              <ScrollReveal direction="up" delay={0.1}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm h-full flex flex-col justify-between">
                  <div className="relative aspect-[16/10] w-full bg-slate-200">
                    <Image
                      src="/images/security.jpeg"
                      alt="Security Service PT. Suryatama Indonesia"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
                        <ShieldCheck className="h-6 w-6 text-suryatama-red-500" />
                        <span>{t("securityTitle")}</span>
                      </h4>
                      <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {t("securityDesc")}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-200">
                      <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase text-red-800">
                        SECOM Security Certified
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Security Inspection / Protocols */}
              <ScrollReveal direction="up" delay={0.2}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm h-full flex flex-col justify-between">
                  <div className="relative aspect-[16/10] w-full bg-slate-200">
                    <Image
                      src="/images/pengecekan security.jpeg"
                      alt="Pengecekan Operasional dan Akses Keamanan"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-suryatama-navy-500" />
                        <span>{t("securityStandardsTitle")}</span>
                      </h4>
                      <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {t("securityStandardsDesc")}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-200">
                      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase text-blue-800">
                        Strict Access & Safety Protocol
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 4. CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-suryatama-navy-500 px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-suryatama-navy-600"
          >
            <span>{tCommon("contactUs")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
