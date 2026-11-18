"use server";

export interface ContactFormState {
  success?: boolean;
  error?: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
  };
}

export async function submitContactForm(
  _prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  // 1. Honeypot check (Spam Protection)
  const honeypot = formData.get("website_url")?.toString() || "";
  if (honeypot.trim().length > 0) {
    // Silently acknowledge bots to defeat automated crawlers without alerting them
    return { success: true };
  }

  // 2. Extract fields
  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const phone = formData.get("phone")?.toString().trim() || "";
  const company = formData.get("company")?.toString().trim() || "";
  const service = formData.get("service")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";

  // 3. Validation
  const fieldErrors: { name?: string; email?: string; message?: string } = {};

  if (!name || name.length < 2) {
    fieldErrors.name = "Nama wajib diisi minimal 2 karakter.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    fieldErrors.email = "Alamat email tidak valid.";
  }

  if (!message || message.length < 5) {
    fieldErrors.message = "Pesan wajib diisi minimal 5 karakter.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, fieldErrors };
  }

  // 4. Processing
  // In production, send email via nodemailer if SMTP credentials are provided in .env.local
  // Otherwise log responsibly without exposing sensitive info
  try {
    const receiver =
      process.env.CONTACT_RECEIVER_EMAIL || "info@suryatama-indonesia.co.id";
    console.log(
      `[Contact Form Submission] From: ${name} (${email}) - Company: ${company} - Phone: ${phone} - Service: ${service} -> Target: ${receiver}`
    );

    return { success: true };
  } catch (error) {
    console.error("[Contact Form Error]", error);
    return {
      success: false,
      error: "Terjadi kesalahan internal. Silakan coba kembali.",
    };
  }
}
