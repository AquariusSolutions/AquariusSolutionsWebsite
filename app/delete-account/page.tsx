import type { Metadata } from "next";
import Link from "next/link";
import { AquariusGlyph } from "../components/aquarius-glyph";

const CONTACT_EMAIL = "info@aquariussolutions.com.do";
const APP_NAME = "Chesster";

// Prefilled deletion request so the user only has to confirm and send.
const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  `Delete my account — ${APP_NAME}`,
)}&body=${encodeURIComponent(
  `Hello Aquarius Solutions,\n\nI would like to delete my ${APP_NAME} account and associated data.\n\nAccount email: \n\nThank you.`,
)}`;

export const metadata: Metadata = {
  title: "Delete Your Account",
  description: `Request deletion of your ${APP_NAME} account and associated data from Aquarius Solutions, S.R.L.`,
  alternates: { canonical: "/delete-account" },
  openGraph: {
    type: "article",
    url: "/delete-account",
    title: `Delete Your Account · ${APP_NAME}`,
    description: `Request deletion of your ${APP_NAME} account and associated data.`,
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-7 text-white/65">
        {children}
      </div>
    </section>
  );
}

export default function DeleteAccount() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-[#05060f] text-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-violet/20 blur-[130px]" />
        <div className="absolute -right-40 top-1/3 h-[26rem] w-[26rem] rounded-full bg-aqua/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.12),transparent_60%)]" />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <AquariusGlyph className="text-2xl text-aqua drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
            Aquarius&nbsp;Solutions
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            ← Back home
          </Link>
        </nav>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Delete Your Account
        </h1>
        <p className="mt-4 text-white/50">
          {APP_NAME} · Aquarius Solutions, S.R.L.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-[15px] leading-7 text-white/65 backdrop-blur-sm">
          You can request deletion of your {APP_NAME} account and the personal
          data associated with it at any time. Follow the steps below and we
          will process your request.
        </div>

        <Section title="How to request deletion">
          <p>
            Send us a deletion request from the email address linked to your
            account. The button below opens a pre-filled email — just add your
            account email if it differs, and send.
          </p>
          <a
            href={mailtoHref}
            className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-aqua to-indigo px-7 font-medium text-[#05060f] transition-transform hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            Request account deletion
          </a>
          <p className="text-sm text-white/45">
            Or email us directly at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-aqua underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            with the subject &ldquo;Delete my account&rdquo;.
          </p>
        </Section>

        <Section title="What gets deleted">
          <p>When we process your request, we permanently delete:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>Your account and authentication records;</li>
            <li>Your profile information, including any profile photo;</li>
            <li>
              Your in-app content and activity, such as your solving history and
              progress in {APP_NAME}.
            </li>
          </ul>
        </Section>

        <Section title="What we may keep">
          <p>
            We may retain a limited amount of data where we are legally required
            to, or to resolve disputes and enforce our agreements. Any retained
            data is kept only for as long as necessary and is then deleted or
            anonymised. We do not retain your data for marketing after deletion.
          </p>
        </Section>

        <Section title="How long it takes">
          <p>
            We confirm and complete deletion requests within 30 days of
            verifying your identity. We may contact you at your account email to
            confirm the request before deleting your data.
          </p>
        </Section>

        <Section title="More information">
          <p>
            For full details on how we handle your information, see our{" "}
            <Link
              href="/privacy"
              className="text-aqua underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </Section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-between gap-3 text-sm text-white/40 sm:flex-row">
          <span className="flex items-center gap-2">
            <AquariusGlyph className="text-aqua" /> Aquarius Solutions, S.R.L.
          </span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <span>© {new Date().getFullYear()} — Ideas that flow.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
