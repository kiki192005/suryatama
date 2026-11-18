import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function NotFound() {
  const tNav = useTranslations("nav");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-suryatama-red-500">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-heading">
        Halaman Tidak Ditemukan / Page Not Found
      </h1>
      <p className="mt-4 text-sm text-slate-600">
        Halaman yang Anda tuju tidak ditemukan atau sedang dipindahkan.
      </p>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-suryatama-navy-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-suryatama-navy-600"
        >
          {tNav("home")}
        </Link>
      </div>
    </div>
  );
}
