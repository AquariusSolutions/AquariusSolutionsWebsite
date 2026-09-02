import { AquariusGlyph } from "./components/aquarius-glyph";

const STARS = Array.from({ length: 60 }, (_, i) => {
  // deterministic pseudo-random so server and client render match
  const r = (n: number) => (Math.sin(i * 999 + n) + 1) / 2;
  return {
    top: `${(r(1) * 100).toFixed(2)}%`,
    left: `${(r(2) * 100).toFixed(2)}%`,
    size: `${(r(3) * 2 + 1).toFixed(2)}px`,
    delay: `${(r(4) * 4).toFixed(2)}s`,
    dur: `${(r(5) * 3 + 2).toFixed(2)}s`,
  };
});

const SERVICES = [
  {
    glyph: "⌘",
    title: "Custom Software",
    body: "Web & mobile applications built to measure — from spark to launch.",
  },
  {
    glyph: "☁",
    title: "Cloud Solutions",
    body: "Scalable cloud infrastructure and deployments that just flow.",
  },
  {
    glyph: "◈",
    title: "System Integration",
    body: "Connecting your platforms into one seamless, reliable ecosystem.",
  },
  {
    glyph: "✶",
    title: "Support & Consulting",
    body: "IT consulting, maintenance, and technical support you can count on.",
  },
];

const STATS = [
  { value: "2025", label: "Founded" },
  { value: "Santo Domingo", label: "Dominican Republic" },
  { value: "SRL", label: "RM 215350SD" },
  { value: "24/7", label: "Support & care" },
];

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-[#05060f] text-foreground">
      {/* ---- Cosmic background layers ---- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* aurora blobs */}
        <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-violet/30 blur-[120px] animate-aurora" />
        <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-aqua/25 blur-[120px] animate-aurora [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full bg-indigo/30 blur-[130px] animate-aurora [animation-delay:-12s]" />
        {/* starfield */}
        {STARS.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              animationDuration: s.dur,
            }}
          />
        ))}
        {/* grid glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_60%)]" />
      </div>

      {/* ---- Nav ---- */}
      <header className="sticky top-0 z-50 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#top"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <AquariusGlyph className="text-2xl text-aqua drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
            Aquarius&nbsp;Solutions
          </a>
          <div className="hidden items-center gap-8 text-sm text-white/70 sm:flex">
            <a href="#services" className="transition-colors hover:text-white">
              Services
            </a>
            <a href="#work" className="transition-colors hover:text-white">
              Work
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium transition-all hover:border-aqua/60 hover:bg-aqua/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
          >
            Start a project
          </a>
        </nav>
      </header>

      {/* ---- Hero ---- */}
      <main
        id="top"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col"
      >
        <section className="grid items-center gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-32">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua animate-twinkle" />
              The Age of Aquarius, engineered
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Ideas that
              <span className="block bg-gradient-to-r from-aqua via-indigo to-violet bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                flow into products
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-white/60">
              Aquarius Solutions, S.R.L. builds custom software, cloud
              solutions, and system integrations from Santo Domingo — engineered
              to scale and made to last.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-aqua to-indigo px-7 font-medium text-[#05060f] transition-transform hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              >
                Launch with us
              </a>
              <a
                href="#services"
                className="flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 font-medium transition-colors hover:border-white/40 hover:bg-white/10"
              >
                Explore services
              </a>
            </div>
          </div>

          {/* Aquarius constellation */}
          <div className="relative mx-auto aspect-square w-full max-w-sm animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet/20 to-aqua/10 blur-2xl" />
            <svg viewBox="0 0 200 200" className="relative h-full w-full">
              <defs>
                <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#22d3ee" />
                  <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* constellation lines */}
              <polyline
                points="30,70 60,55 90,70 120,55 150,72 172,58"
                fill="none"
                stroke="url(#line)"
                strokeWidth="1.4"
                opacity="0.8"
              />
              <polyline
                points="40,120 70,105 100,120 130,105 160,122"
                fill="none"
                stroke="url(#line)"
                strokeWidth="1.4"
                opacity="0.8"
              />
              {[
                [30, 70],
                [60, 55],
                [90, 70],
                [120, 55],
                [150, 72],
                [172, 58],
                [40, 120],
                [70, 105],
                [100, 120],
                [130, 105],
                [160, 122],
              ].map(([cx, cy], i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="3"
                  fill="#e8ecff"
                  filter="url(#glow)"
                  className="animate-twinkle"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
              {/* big Aquarius glyph — "A" in Cosmobiofont2 maps to the sign */}
              <text
                x="100"
                y="180"
                textAnchor="middle"
                fontSize="40"
                fill="url(#line)"
                filter="url(#glow)"
                style={{ fontFamily: "var(--font-cosmobio)" }}
              >
                A
              </text>
            </svg>
          </div>
        </section>

        {/* ---- Services ---- */}
        <section id="services" className="px-6 py-20">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            What we channel
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-white/50">
            Full-stack teams that carry your product from spark to orbit.
          </p>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-aqua/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-aqua/0 blur-2xl transition-all group-hover:bg-aqua/20" />
                <div className="text-3xl text-aqua">{s.glyph}</div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- Stats ---- */}
        <section id="work" className="px-6 py-16">
          <div className="grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-sm sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="bg-gradient-to-r from-aqua to-violet bg-clip-text text-4xl font-bold text-transparent">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ---- Contact CTA ---- */}
        <section id="contact" className="px-6 py-24 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Ready to make waves?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/55">
            Tell us where you want to go. We&apos;ll chart the course.
          </p>
          <a
            href="mailto:info@aquariussolutions.com.do"
            className="mt-8 inline-flex h-13 items-center justify-center rounded-full bg-gradient-to-r from-aqua to-indigo px-8 py-3.5 font-medium text-[#05060f] transition-transform hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            info@aquariussolutions.com.do
          </a>
          <div className="mt-8 flex flex-col items-center gap-1 text-sm text-white/40">
            <span>Santo Domingo, D. N.</span>
            <span>+1 829 979 5655 · +1 849 917 9147</span>
          </div>
        </section>
      </main>

      {/* ---- Wave divider + footer ---- */}
      <div aria-hidden className="relative h-24 w-full overflow-hidden">
        <div className="absolute bottom-0 left-0 flex w-[200%] animate-wave">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="h-24 w-1/2"
          >
            <path
              d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
              fill="rgba(34,211,238,0.12)"
            />
          </svg>
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="h-24 w-1/2"
          >
            <path
              d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
              fill="rgba(34,211,238,0.12)"
            />
          </svg>
        </div>
      </div>
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 text-sm text-white/40 sm:flex-row">
          <span className="flex items-center gap-2">
            <AquariusGlyph className="text-aqua" /> Aquarius Solutions, S.R.L.
          </span>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a
              href="/delete-account"
              className="transition-colors hover:text-white"
            >
              Delete account
            </a>
            <span>© {new Date().getFullYear()} — Ideas that flow.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
