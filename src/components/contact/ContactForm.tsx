"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { submitContactForm, ContactFormState } from "@/app/actions/contact";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [state, formAction, isPending] = useActionState<ContactFormState | null, FormData>(
    submitContactForm,
    null
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-xl font-bold text-slate-900 font-heading">
        {t("formHeading")}
      </h3>
      <p className="mt-1 text-sm text-slate-600 mb-6">
        {t("formSubheading")}
      </p>

      {state?.success ? (
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600 mb-3" />
          <h4 className="text-lg font-bold text-emerald-900">
            {t("formSuccess")}
          </h4>
        </div>
      ) : (
        <form action={formAction} className="space-y-4">
          {/* Honeypot field (hidden from real users, caught by spam bots) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_url">Website</label>
            <input
              type="text"
              id="website_url"
              name="website_url"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {state?.error && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700 border border-red-200">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{t("formError")}</span>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
              >
                {t("formName")} <span className="text-suryatama-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={t("formNamePlaceholder")}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-suryatama-navy-500 focus:outline-none focus:ring-2 focus:ring-suryatama-navy-500/20"
              />
              {state?.fieldErrors?.name && (
                <p className="mt-1 text-xs text-suryatama-red-600">{state.fieldErrors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
              >
                {t("formEmail")} <span className="text-suryatama-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={t("formEmailPlaceholder")}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-suryatama-navy-500 focus:outline-none focus:ring-2 focus:ring-suryatama-navy-500/20"
              />
              {state?.fieldErrors?.email && (
                <p className="mt-1 text-xs text-suryatama-red-600">{state.fieldErrors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
              >
                {t("formPhone")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={t("formPhonePlaceholder")}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-suryatama-navy-500 focus:outline-none focus:ring-2 focus:ring-suryatama-navy-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
              >
                {t("formCompany")}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder={t("formCompanyPlaceholder")}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-suryatama-navy-500 focus:outline-none focus:ring-2 focus:ring-suryatama-navy-500/20"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
            >
              {t("formService")}
            </label>
            <select
              id="service"
              name="service"
              defaultValue=""
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-suryatama-navy-500 focus:outline-none focus:ring-2 focus:ring-suryatama-navy-500/20"
            >
              <option value="" disabled>
                {t("formServiceDefault")}
              </option>
              <option value="transportation">{t("formServiceOpt1")}</option>
              <option value="outsourcing">{t("formServiceOpt2")}</option>
              <option value="other">{t("formServiceOpt3")}</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
            >
              {t("formMessage")} <span className="text-suryatama-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder={t("formMessagePlaceholder")}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-suryatama-navy-500 focus:outline-none focus:ring-2 focus:ring-suryatama-navy-500/20"
            ></textarea>
            {state?.fieldErrors?.message && (
              <p className="mt-1 text-xs text-suryatama-red-600">{state.fieldErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-suryatama-navy-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-suryatama-navy-600 focus:outline-none focus:ring-2 focus:ring-suryatama-navy-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isPending ? (
              <span>{t("formSending")}</span>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>{t("formSubmit")}</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
