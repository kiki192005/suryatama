import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Award } from "lucide-react";
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
    title: t("clientsTitle"),
    description: t("clientsDesc"),
  };
}

export default async function ClientsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ClientsView />;
}

function ClientsView() {
  const t = useTranslations("clients");
  const tCommon = useTranslations("common");

  const clientsData = [
    {
      name: "PT. Vuteq Indonesia",
      src: "/images/logo-vuteq.jpeg",
      services: "Milk Run, Direct & On Site Transportation",
    },
    {
      name: "PT. Asahimas Flat Glass Tbk (AGC)",
      src: "/images/logo-agc.jpeg",
      services: "Milk Run, Direct & On Site Transportation",
    },
    {
      name: "PT. Hyundai Glovis Indonesia",
      src: "/images/logo-hyundai glovis.jpeg",
      services: "Milk Run Transportation",
    },
    {
      name: "PT. Hyundai Livart Indonesia",
      src: "/images/logo-hyundai livart.jpeg",
      services: "Milk Run Transportation",
    },
    {
      name: "KTB / KCC",
      src: "/images/logo-kcc.jpeg",
      services: "Direct Transportation",
    },
    {
      name: "PT. Armas Logistic Service",
      src: "/images/logo-armas.jpeg",
      services: "Transportation & Service Partner",
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

        <ScrollReveal direction="up" delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm sm:text-base text-slate-600 leading-relaxed">
            {t("intro")}
          </p>
        </ScrollReveal>

        {/* 2. CLIENT GRID WITH SERVICES */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {clientsData.map((client, idx) => (
            <ScrollReveal
              key={client.name}
              direction="up"
              delay={0.06 * idx}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative h-20 w-full mb-6 flex items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2"
                  />
                </div>
                <h4 className="text-lg font-bold text-slate-900 font-heading">
                  {client.name}
                </h4>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {t("serviceUsed")}
                </span>
                <span className="mt-1 block text-sm font-semibold text-suryatama-navy-600">
                  {client.services}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 3. PARTNERSHIP COMMITMENT BANNER */}
        <div className="mt-16 rounded-2xl bg-suryatama-navy-50 border border-suryatama-navy-200 p-8 text-center max-w-3xl mx-auto">
          <Award className="mx-auto h-10 w-10 text-suryatama-red-500 mb-3" />
          <h4 className="text-lg font-bold text-slate-900 font-heading">
            {tCommon("ourCommitment")}
          </h4>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {t("partnershipNote")}
          </p>
        </div>
      </div>
    </div>
  );
}
