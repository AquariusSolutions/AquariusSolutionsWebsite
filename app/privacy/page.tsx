import type { Metadata } from "next";
import Link from "next/link";
import { AquariusGlyph } from "../components/aquarius-glyph";

const EFFECTIVE_DATE = "September 1, 2026";
const CONTACT_EMAIL = "info@aquariussolutions.com.do";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Aquarius Solutions, S.R.L. collects, uses, and protects your information across our website and mobile applications.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "article",
    url: "/privacy",
    title: "Privacy Policy · Aquarius Solutions",
    description:
      "How Aquarius Solutions, S.R.L. collects, uses, and protects your information across our website and mobile applications.",
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

export default function PrivacyPolicy() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-[#05060f] text-foreground">
      {/* subtle background glow, consistent with the home page */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-violet/20 blur-[130px]" />
        <div className="absolute -right-40 top-1/3 h-[26rem] w-[26rem] rounded-full bg-aqua/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.12),transparent_60%)]" />
      </div>

      {/* Nav */}
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
          Privacy Policy
        </h1>
        <p className="mt-4 text-white/50">
          Effective {EFFECTIVE_DATE}
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-[15px] leading-7 text-white/65 backdrop-blur-sm">
          This Privacy Policy explains how{" "}
          <strong className="text-foreground">Aquarius Solutions, S.R.L.</strong>{" "}
          (&ldquo;Aquarius Solutions&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
          or &ldquo;our&rdquo;) collects, uses, and safeguards your information
          when you visit our website at aquariussolutions.com.do (the
          &ldquo;Website&rdquo;) and when you use our mobile applications,
          including <strong className="text-foreground">Chesster</strong>{" "}
          (together with the Website, the &ldquo;Services&rdquo;). By using the
          Services, you agree to the practices described here.
        </div>

        <Section title="1. Who we are">
          <p>
            Aquarius Solutions, S.R.L. is a company registered in Santo Domingo,
            Dominican Republic (Mercantile Registry RM 215350SD). We are the
            controller responsible for the personal data processed through the
            Services. You can reach us at any time at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-aqua underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section title="2. Information we collect">
          <p>We collect the following categories of information:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong className="text-foreground">Account information.</strong>{" "}
              When you create an account or sign in — including sign-in with
              Google — we receive your name, email address, and, where you
              provide one, a profile photo.
            </li>
            <li>
              <strong className="text-foreground">
                Content you provide.
              </strong>{" "}
              Information you enter in the apps, such as a profile picture you
              upload and in-app activity and progress (for example, puzzles you
              solve and your history in Chesster).
            </li>
            <li>
              <strong className="text-foreground">
                Photos and camera.
              </strong>{" "}
              If you choose to set a profile picture, we access the photo you
              select or the image you capture. We only access the specific
              media you choose.
            </li>
            <li>
              <strong className="text-foreground">
                Usage and device data.
              </strong>{" "}
              Basic technical information such as device type, operating system,
              app version, and diagnostic or crash data used to keep the
              Services stable.
            </li>
            <li>
              <strong className="text-foreground">
                Website interactions.
              </strong>{" "}
              If you contact us through the Website, we receive the information
              you send us, such as your email address and message.
            </li>
          </ul>
        </Section>

        <Section title="3. How we use your information">
          <p>We use the information we collect to:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>Provide, operate, and maintain the Services;</li>
            <li>Authenticate you and secure your account;</li>
            <li>Save your profile, preferences, and in-app progress;</li>
            <li>
              Respond to your enquiries and provide support and consulting;
            </li>
            <li>
              Monitor, diagnose, and improve performance, reliability, and
              security;
            </li>
            <li>Comply with legal obligations and enforce our terms.</li>
          </ul>
        </Section>

        <Section title="4. Service providers we rely on">
          <p>
            We use trusted third-party providers to run the Services. These
            providers process data on our behalf under their own privacy and
            security commitments:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong className="text-foreground">
                Google Firebase
              </strong>{" "}
              (Authentication, Realtime Database, and Cloud Storage) for
              sign-in, storing account data and in-app content, and hosting
              uploaded images.
            </li>
            <li>
              <strong className="text-foreground">Google Sign-In</strong> for
              optional authentication with your Google account.
            </li>
            <li>
              <strong className="text-foreground">
                Firebase / Google App Hosting
              </strong>{" "}
              for hosting the Website.
            </li>
          </ul>
          <p>
            Your use of Google services is also governed by{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-aqua underline-offset-4 hover:underline"
            >
              Google&rsquo;s Privacy Policy
            </a>
            . We do not sell your personal information.
          </p>
        </Section>

        <Section title="5. Legal bases for processing">
          <p>
            Where applicable law requires a legal basis, we rely on: your
            consent (for example, when you choose to upload a photo); the
            performance of our agreement with you to provide the Services; our
            legitimate interests in operating and improving the Services; and
            compliance with legal obligations.
          </p>
        </Section>

        <Section title="6. Data retention">
          <p>
            We keep your personal data for as long as your account is active or
            as needed to provide the Services. When you delete your account, we
            delete or anonymise the associated personal data within a reasonable
            period, except where we must retain it to comply with legal
            obligations, resolve disputes, or enforce our agreements.
          </p>
        </Section>

        <Section title="7. Your rights">
          <p>
            Subject to applicable law, you may have the right to access,
            correct, update, or delete your personal data, to object to or
            restrict certain processing, and to withdraw consent at any time. To
            exercise these rights, or to request deletion of your account and
            data, contact us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-aqua underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            . You may also update much of your profile information directly
            within the apps.
          </p>
        </Section>

        <Section title="8. Children's privacy">
          <p>
            The Services are not directed to children under 13 (or the minimum
            age required in your jurisdiction), and we do not knowingly collect
            personal data from them. If you believe a child has provided us with
            personal data, please contact us and we will take appropriate steps
            to delete it.
          </p>
        </Section>

        <Section title="9. Security">
          <p>
            We use administrative, technical, and organisational measures —
            including the security controls provided by our infrastructure
            partners — to protect your information. No method of transmission or
            storage is completely secure, so we cannot guarantee absolute
            security.
          </p>
        </Section>

        <Section title="10. International transfers">
          <p>
            Our providers may process and store data on servers located outside
            the Dominican Republic. Where data is transferred internationally,
            we rely on our providers&rsquo; safeguards to protect it in line
            with this Policy.
          </p>
        </Section>

        <Section title="11. Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. When we do, we
            will revise the &ldquo;Effective&rdquo; date above and, where
            appropriate, provide additional notice. Your continued use of the
            Services after an update means you accept the revised Policy.
          </p>
        </Section>

        <Section title="12. Contact us">
          <p>
            If you have questions about this Privacy Policy or how we handle
            your data, contact us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-aqua underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            , or by mail at Aquarius Solutions, S.R.L., Santo Domingo, D. N.,
            Dominican Republic.
          </p>
        </Section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-between gap-3 text-sm text-white/40 sm:flex-row">
          <span className="flex items-center gap-2">
            <AquariusGlyph className="text-aqua" /> Aquarius Solutions, S.R.L.
          </span>
          <span>© {new Date().getFullYear()} — Ideas that flow.</span>
        </div>
      </footer>
    </div>
  );
}
