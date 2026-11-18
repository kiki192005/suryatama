import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://suryatama-indonesia.co.id";

  const title = isEn
    ? "PT. Suryatama Indonesia - Logistic & Service Company"
    : "PT. Suryatama Indonesia - Perusahaan Transportasi Logistik & Outsourcing";

  const description = isEn
    ? "PT. Suryatama Indonesia is an integrated logistics transportation and outsourcing service provider established in 2006, committed to professionalism, trust, and safety first."
    : "PT. Suryatama Indonesia adalah penyedia jasa transportasi logistik dan layanan outsourcing terintegrasi sejak 2006 yang mengedepankan profesionalisme, kepercayaan, dan keselamatan kerja.";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: "%s | PT. Suryatama Indonesia",
      default: title,
    },
    description,
    keywords: [
      "PT Suryatama Indonesia",
      "Suryatama",
      "logistik Indonesia",
      "transportasi truk",
      "milk run",
      "outsourcing security",
      "SECOM security",
      "truck pool bekasi",
      "truck pool karawang",
      "wing box truck",
    ],
    authors: [{ name: "PT. Suryatama Indonesia" }],
    creator: "PT. Suryatama Indonesia",
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: "PT. Suryatama Indonesia",
      locale: isEn ? "en_US" : "id_ID",
      type: "website",
      images: [
        {
          url: "/images/truk hero.png",
          width: 1200,
          height: 630,
          alt: "PT. Suryatama Indonesia Fleet",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/truk hero.png"],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        id: `${baseUrl}/id`,
        en: `${baseUrl}/en`,
      },
    },
    icons: {
      icon: "/images/logo-suryatama.png",
      apple: "/images/logo-suryatama.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "id" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${plusJakartaSans.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans antialiased text-slate-800 bg-white selection:bg-suryatama-navy-500 selection:text-white">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
