import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ShieldCheck, Truck, Users, ArrowRight, Award, Compass, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Counter from "@/components/ui/Counter";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <HomePageContent params={params} />;
}

async function HomePageContent({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeView />;
}

function HomeView() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");
  const tServices = useTranslations("services");

  const clients = [
    { name: "Vuteq", src: "/images/logo-vuteq.jpeg" },
    { name: "Hyundai Glovis", src: "/images/logo-hyundai glovis.jpeg" },
    { name: "Hyundai Livart", src: "/images/logo-hyundai livart.jpeg" },
    { name: "Asahimas (AGC)", src: "/images/logo-agc.jpeg" },
    { name: "KTB / KCC", src: "/images/logo-kcc.jpeg" },
    { name: "Armas", src: "/images/logo-armas.jpeg" },
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-suryatama-navy-200 bg-suryatama-navy-50/80 px-4 py-1.5 text-xs font-semibold text-suryatama-navy-500 shadow-sm">
                  <ShieldCheck className="h-4 w-4 text-suryatama-red-500" />
                  <span>{t("heroTagline")} &bull; {tCommon("sinceYear")}</span>
                </div>
                
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl font-heading leading-tight">
                  {t("heroTitle")}
                </h1>
                
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  {t("heroSubtitle")}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-suryatama-navy-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-suryatama-navy-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-suryatama-navy-500 focus:ring-offset-2"
                  >
                    <span>{tCommon("contactUs")}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-suryatama-navy-500 hover:text-suryatama-navy-500 focus:outline-none focus:ring-2 focus:ring-slate-300"
                  >
                    {tCommon("exploreServices")}
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                  <Image
                    src="/images/truk hero.png"
                    alt="Armada Truk PT. Suryatama Indonesia"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-suryatama-navy-50 text-suryatama-navy-500">
                    <Award className="h-6 w-6 text-suryatama-red-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">Safety First</p>
                    <p className="text-sm font-bold text-slate-900">Doorway to Everything</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. STATS COUNTER SECTION */}
      <section className="border-y border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <ScrollReveal direction="up" delay={0.1} className="text-center">
              <p className="text-3xl font-extrabold text-suryatama-navy-500 sm:text-5xl font-heading">
                <Counter to={19} suffix="+" />
              </p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-slate-600">
                {t("statYears")}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} className="text-center">
              <p className="text-3xl font-extrabold text-suryatama-navy-500 sm:text-5xl font-heading">
                <Counter to={64} suffix=" Unit" />
              </p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-slate-600">
                {t("statFleet")}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3} className="text-center">
              <p className="text-3xl font-extrabold text-suryatama-navy-500 sm:text-5xl font-heading">
                <Counter to={3} suffix=" Lokasi" />
              </p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-slate-600">
                {t("statLocations")}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} className="text-center">
              <p className="text-3xl font-extrabold text-suryatama-navy-500 sm:text-5xl font-heading">
                <Counter to={6} suffix="+" />
              </p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-slate-600">
                {t("statPartners")}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES OVERVIEW */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={tCommon("integratedService")}
            title={t("servicesHeading")}
            subtitle={t("servicesSubheading")}
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Bisnis 1: Transportation */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-suryatama-navy-300 flex flex-col justify-between">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-suryatama-navy-50 text-suryatama-navy-500 mb-6">
                    <Truck className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">
                    {tServices("transportTitle")}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {tServices("transportSubtitle")}
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-suryatama-red-500 mt-0.5 shrink-0" />
                      <div>
                        <strong>{tServices("milkRunTitle")}:</strong> {tServices("milkRunDesc")}
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-suryatama-red-500 mt-0.5 shrink-0" />
                      <div>
                        <strong>{tServices("directTitle")}:</strong> {tServices("directDesc")}
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-suryatama-red-500 mt-0.5 shrink-0" />
                      <div>
                        <strong>{tServices("onSiteTitle")}:</strong> {tServices("onSiteDesc")}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pt-8">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-suryatama-navy-500 hover:text-suryatama-navy-600"
                  >
                    <span>{tCommon("learnMore")}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Bisnis 2: Outsourcing */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-suryatama-navy-300 flex flex-col justify-between">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-suryatama-navy-50 text-suryatama-navy-500 mb-6">
                    <Users className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">
                    {tServices("outsourcingTitle")}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {tServices("outsourcingSubtitle")}
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-suryatama-red-500 mt-0.5 shrink-0" />
                      <div>
                        <strong>{tServices("securityTitle")}:</strong> {tServices("securityDesc")}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pt-8">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-suryatama-navy-500 hover:text-suryatama-navy-600"
                  >
                    <span>{tCommon("learnMore")}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. FLEET PREVIEW */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={tCommon("ourCommitment")}
            title={t("fleetHeading")}
            subtitle={t("fleetSubheading")}
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Card 1: Standard Truck */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm h-full flex flex-col justify-between">
                <div className="relative aspect-[16/10] w-full bg-slate-200">
                  <Image
                    src="/images/standar-truk.jpeg"
                    alt="Standard Truck Wing Box PT. Suryatama Indonesia"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 font-heading">
                      Standard Truck Wing Box
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      Wing Box 7,5 meter dan 9,5 meter dengan spesifikasi dimensi terstandarisasi Dinas Perhubungan untuk muatan kargo volume tinggi.
                    </p>
                  </div>
                  <div className="mt-6">
                    <span className="inline-block rounded-full bg-suryatama-navy-50 px-3 py-1 text-xs font-semibold text-suryatama-navy-600 border border-suryatama-navy-200">
                      Wing Box 7,5 m & 9,5 m
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Custom Truck */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm h-full flex flex-col justify-between">
                <div className="relative aspect-[16/10] w-full bg-slate-200">
                  <Image
                    src="/images/custom-truk.png"
                    alt="Custom Conveyor Truck PT. Suryatama Indonesia"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 font-heading">
                      Custom Conveyor Truck
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      Modifikasi khusus Automatic Conveyor untuk komponen mesin dan kursi guna mempercepat proses bongkar muat dan menjamin keselamatan kargo.
                    </p>
                  </div>
                  <div className="mt-6">
                    <span className="inline-block rounded-full bg-suryatama-navy-50 px-3 py-1 text-xs font-semibold text-suryatama-navy-600 border border-suryatama-navy-200">
                      Automatic Conveyor System
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 rounded-lg bg-suryatama-navy-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-suryatama-navy-600"
            >
              <span>{tCommon("viewFleet")}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CLIENTS BANNER */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={tCommon("companyName")}
            title={t("clientsHeading")}
            subtitle={t("clientsSubheading")}
          />

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((client, idx) => (
              <ScrollReveal
                key={client.name}
                direction="up"
                delay={0.05 * idx}
                className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-14 w-full">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-contain"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="bg-suryatama-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-suryatama-red-500/20 border border-suryatama-red-500/40 px-4 py-1.5 text-xs font-semibold text-suryatama-red-400 mb-6">
              <Compass className="h-4 w-4" />
              <span>&ldquo;{tCommon("slogan")}&rdquo;</span>
            </div>
            
            <h2 className="text-3xl font-extrabold sm:text-4xl font-heading max-w-2xl mx-auto">
              {t("ctaHeading")}
            </h2>
            
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
              {t("ctaSubheading")}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-suryatama-red-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-suryatama-red-600 focus:outline-none focus:ring-2 focus:ring-suryatama-red-500 focus:ring-offset-2"
              >
                {t("ctaButton")}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
