import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ShieldCheck, HeartHandshake, Eye, Award, CheckCircle2, UserCheck, Leaf, Cpu } from "lucide-react";
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
    title: t("aboutTitle"),
    description: t("aboutDesc"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutView />;
}

function AboutView() {
  const t = useTranslations("about");
  const tCommon = useTranslations("common");

  const missions = [
    {
      title: t("mission1Title"),
      desc: t("mission1Desc"),
      icon: ShieldCheck,
      color: "text-suryatama-red-500",
      bgColor: "bg-red-50",
    },
    {
      title: t("mission2Title"),
      desc: t("mission2Desc"),
      icon: Award,
      color: "text-suryatama-navy-500",
      bgColor: "bg-blue-50",
    },
    {
      title: t("mission3Title"),
      desc: t("mission3Desc"),
      icon: HeartHandshake,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      title: t("mission4Title"),
      desc: t("mission4Desc"),
      icon: Cpu,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      title: t("mission5Title"),
      desc: t("mission5Desc"),
      icon: CheckCircle2,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: t("mission6Title"),
      desc: t("mission6Desc"),
      icon: Leaf,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 1. HEADER SECTION */}
        <SectionHeading
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        {/* 2. OVERVIEW & SLOGAN BANNER */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <ScrollReveal direction="up" delay={0.1} className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-4">
                {t("profileHeading")}
              </h3>
              <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                <p>{t("profileP1")}</p>
                <p>{t("profileP2")}</p>
              </div>

              {/* Leadership Box */}
              <div className="mt-8 rounded-xl bg-slate-50 border border-slate-200 p-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-suryatama-navy-500 text-white">
                  <UserCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-suryatama-red-500">
                    {t("leadershipRole")}
                  </p>
                  <h4 className="text-lg font-bold text-slate-900">
                    {t("leadershipName")}
                  </h4>
                  <p className="mt-1 text-sm text-slate-600 leading-normal">
                    {t("leadershipDesc")}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Slogan Banner */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="h-full rounded-2xl bg-gradient-to-br from-suryatama-navy-900 to-slate-900 p-8 text-white shadow-md flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-suryatama-red-500/20 border border-suryatama-red-400 px-3 py-1 text-xs font-semibold text-suryatama-red-400 mb-6 uppercase tracking-wider">
                  {t("sloganBadge")}
                </span>
                <blockquote className="text-2xl font-bold font-heading leading-snug">
                  &ldquo;{t("sloganText")}&rdquo;
                </blockquote>
                <p className="mt-3 text-sm text-slate-300">
                  {t("sloganSub")}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400">
                PT. Suryatama Indonesia &bull; {tCommon("sinceYear")}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 3. VISION SECTION */}
        <div className="mt-16">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="rounded-2xl border-2 border-suryatama-navy-500/30 bg-suryatama-navy-50/50 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-suryatama-navy-500 text-white mb-4">
                <Eye className="h-7 w-7" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-suryatama-navy-500 mb-2">
                {t("visionHeading")}
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                &ldquo;{t("visionText")}&rdquo;
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                {t("visionSub")}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* 4. MISSIONS (6 POINTS) */}
        <div className="mt-20">
          <SectionHeading
            badge={tCommon("ourCommitment")}
            title={t("missionHeading")}
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {missions.map((mission, idx) => {
              const IconComponent = mission.icon;
              return (
                <ScrollReveal
                  key={mission.title}
                  direction="up"
                  delay={0.08 * idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${mission.bgColor} ${mission.color} mb-4`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 font-heading">
                    {idx + 1}. {mission.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {mission.desc}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
