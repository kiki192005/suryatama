import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/contact/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("contactTitle"),
    description: t("contactDesc"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactView />;
}

function ContactView() {
  const t = useTranslations("contact");
  const tFooter = useTranslations("footer");

  const headOfficeMapUrl = "https://maps.app.goo.gl/EPaHmagVHYgayNkA6";
  const pool2MapUrl = "https://maps.app.goo.gl/9GaVUfUJGsM2FWus9";
  const pool3MapUrl = "https://maps.app.goo.gl/JFLYERFNjvXj27CQ6";

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 1. HEADER */}
        <SectionHeading
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        {/* 2. LOCATIONS & FORM GRID */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Sisi Kiri: Lokasi Dua Pool & Kontak Person (5 Kolom) */}
          <div className="space-y-8 lg:col-span-5">
            <ScrollReveal direction="left" delay={0.1}>
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-6">
                {t("officeLocations")}
              </h3>

              {/* Pool 1: Bekasi */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mb-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-suryatama-navy-50 text-suryatama-navy-500">
                    <MapPin className="h-5 w-5 text-suryatama-red-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {t("headOfficeTitle")}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">
                      {t("headOfficeDesc")}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {tFooter("headOfficeAddress")}
                    </p>
                    <a
                      href={headOfficeMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-suryatama-navy-500 hover:text-suryatama-navy-600 hover:underline"
                    >
                      <span>{t("openInMaps")}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Pool 2: Karawang */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mb-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-suryatama-navy-50 text-suryatama-navy-500">
                    <MapPin className="h-5 w-5 text-suryatama-red-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {t("pool2Title")}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">
                      {t("pool2Desc")}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {tFooter("pool2Address")}
                    </p>
                    <a
                      href={pool2MapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-suryatama-navy-500 hover:text-suryatama-navy-600 hover:underline"
                    >
                      <span>{t("openInMaps")}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Pool 3: Cikampek */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-suryatama-navy-50 text-suryatama-navy-500">
                    <MapPin className="h-5 w-5 text-suryatama-red-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {t("pool3Title")}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">
                      {t("pool3Desc")}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {t("pool3Address")}
                    </p>
                    <a
                      href={pool3MapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-suryatama-navy-500 hover:text-suryatama-navy-600 hover:underline"
                    >
                      <span>{t("openInMaps")}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Narahubung Resmi */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h4 className="text-base font-bold text-slate-900 font-heading mb-2">
                  {t("contactPersonsHeading")}
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  {t("contactNotice")}
                </p>

                <div className="space-y-3">
                  <div className="rounded-xl bg-white p-3.5 border border-slate-200">
                    <p className="text-sm font-bold text-slate-900">
                      {tFooter("contactPerson1Name")}
                    </p>
                    <p className="text-xs text-slate-500 mb-1.5">
                      {tFooter("contactPerson1Role")}
                    </p>
                    <a
                      href="mailto:i-indahsary@suryatama-indonesia.co.id"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-suryatama-navy-600 hover:underline"
                    >
                      <Mail className="h-3.5 w-3.5 text-suryatama-red-500" />
                      <span>i-indahsary@suryatama-indonesia.co.id</span>
                    </a>
                  </div>

                  <div className="rounded-xl bg-white p-3.5 border border-slate-200">
                    <p className="text-sm font-bold text-slate-900">
                      {tFooter("contactPerson2Name")}
                    </p>
                    <p className="text-xs text-slate-500 mb-1.5">
                      {tFooter("contactPerson2Role")}
                    </p>
                    <a
                      href="mailto:endro.sti@suryatama-indonesia.co.id"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-suryatama-navy-600 hover:underline"
                    >
                      <Mail className="h-3.5 w-3.5 text-suryatama-red-500" />
                      <span>endro.sti@suryatama-indonesia.co.id</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-2 pt-2 text-xs text-slate-500">
                    <Phone className="h-3.5 w-3.5 text-slate-400" />
                    <span>{tFooter("phoneLabel")}:</span>
                    <span className="italic text-slate-400">{tFooter("phonePlaceholder")}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sisi Kanan: Formulir Kontak Interaktif (7 Kolom) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={0.2}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
