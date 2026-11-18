import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ShieldCheck, HeartPulse, Radio, Users, Wrench, Clock, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("operationsTitle"),
    description: t("operationsDesc"),
  };
}

export default async function OperationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <OperationsView />;
}

function OperationsView() {
  const t = useTranslations("operations");
  const tCommon = useTranslations("common");

  const controlSteps = [
    {
      title: t("exerciseTitle"),
      desc: t("exerciseDesc"),
      img: "/images/excercise.jpeg",
      icon: Users,
    },
    {
      title: t("healthTitle"),
      desc: t("healthDesc"),
      img: "/images/health control.jpeg",
      icon: HeartPulse,
    },
    {
      title: t("briefingTitle"),
      desc: t("briefingDesc"),
      img: "/images/briefing.jpeg",
      icon: Users,
    },
    {
      title: t("gpsTitle"),
      desc: t("gpsDesc"),
      img: null,
      icon: Radio,
    },
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

        {/* 2. OPERATION MANAGEMENT & CONTROL CARDS */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-8">
            <ShieldCheck className="h-6 w-6 text-suryatama-red-500" />
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              {t("controlHeading")}
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {controlSteps.map((step, idx) => (
              <ScrollReveal key={step.title} direction="up" delay={0.08 * idx}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm h-full flex flex-col justify-between">
                  {step.img ? (
                    <div className="relative aspect-[16/10] w-full bg-slate-100">
                      <Image
                        src={step.img}
                        alt={step.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[16/8] w-full items-center justify-center bg-gradient-to-br from-suryatama-navy-900 to-slate-900 p-8 text-white">
                      <div className="text-center">
                        <Radio className="mx-auto h-12 w-12 text-suryatama-red-400 animate-pulse mb-2" />
                        <p className="text-base font-bold font-heading">Real-Time Fleet Tracking</p>
                        <p className="text-xs text-slate-300">24/7 Central GPS Operations</p>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-slate-900 font-heading">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* 3. REGULAR TRAINING */}
        <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-12">
          <SectionHeading
            badge="Kompetensi SDM"
            title={t("trainingHeading")}
            subtitle={t("trainingSubheading")}
          />

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Driver Training */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm h-full flex flex-col justify-between">
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src="/images/driver-training.jpeg"
                    alt="Driver Training Mengemudi Defensive PT. Suryatama Indonesia"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 font-heading">
                      {t("driverTrainingTitle")}
                    </h4>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {t("driverTrainingDesc")}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="rounded bg-slate-100 px-2.5 py-1 text-slate-700">Smart Driving</span>
                    <span className="rounded bg-slate-100 px-2.5 py-1 text-slate-700">Safety Driving</span>
                    <span className="rounded bg-slate-100 px-2.5 py-1 text-slate-700">Refreshment Training</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Forklift Training */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm h-full flex flex-col justify-between">
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src="/images/forklift-training.jpeg"
                    alt="Forklift Safety Operation Training PT. Suryatama Indonesia"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 font-heading">
                      {t("forkliftTrainingTitle")}
                    </h4>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {t("forkliftTrainingDesc")}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="rounded bg-slate-100 px-2.5 py-1 text-slate-700">Safety Operation</span>
                    <span className="rounded bg-slate-100 px-2.5 py-1 text-slate-700">Hazard Identification</span>
                    <span className="rounded bg-slate-100 px-2.5 py-1 text-slate-700">Warehouse Safety</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* 4. MAINTENANCE SUPPORT */}
        <div className="mt-20">
          <SectionHeading
            badge={tCommon("ourCommitment")}
            title={t("maintenanceHeading")}
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full">
                <Clock className="h-8 w-8 text-suryatama-navy-500 mb-4" />
                <h4 className="text-lg font-bold text-slate-900 font-heading">
                  {t("maintenance24")}
                </h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {t("maintenance24Desc")}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full">
                <Wrench className="h-8 w-8 text-suryatama-red-500 mb-4" />
                <h4 className="text-lg font-bold text-slate-900 font-heading">
                  {t("maintenanceTypes")}
                </h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {t("maintenanceTypesDesc")}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full">
                <CheckCircle className="h-8 w-8 text-emerald-600 mb-4" />
                <h4 className="text-lg font-bold text-slate-900 font-heading">
                  {t("maintenancePartners")}
                </h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {t("maintenancePartnersDesc")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
