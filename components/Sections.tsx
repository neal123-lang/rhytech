import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Layers3,
  Code2,
  SearchCheck,
  ChartNoAxesCombined,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { services } from "@/lib/content";
const icons = [Layers3, Code2, SearchCheck, ChartNoAxesCombined];
export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`mt-5 text-3xl font-semibold leading-[1.12] tracking-[-.055em] sm:text-4xl md:text-[48px] ${light ? "text-white" : "text-[#101d35]"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-5 max-w-xl text-[15px] leading-7 ${light ? "text-slate-400" : "text-slate-600"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
export function ServiceCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {services.map((s, i) => {
  const Icon = icons[i % icons.length];

  return (
    <Link
      href={`/services/${s.slug}`}
      key={s.slug}
      className="card-hover group rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef2ff] text-[#4169f5]">
          <Icon size={22} />
        </span>

        <span className="text-xs font-bold tracking-[.15em] text-slate-400">
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-7 text-xl font-bold tracking-[-.04em] text-[#101d35]">
        {s.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {s.description}
      </p>

      <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#4169f5]">
        Explore service
        <ArrowUpRight
          size={15}
          className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </span>
    </Link>
  );
})}
    </div>
  );
}
// export function Process() {
//   return (
//     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//       {processSteps.map((s, i) => (
//         <div key={s.n} className="relative border-t border-slate-200 pt-6">
//           <span className="text-xs font-extrabold tracking-[.16em] text-[#4169f5]">
//             {s.n}
//           </span>
//           <h3 className="mt-5 text-xl font-bold tracking-[-.04em] text-[#101d35]">
//             {s.title}
//           </h3>
//           <p className="mt-3 text-sm leading-6 text-slate-600">{s.text}</p>
//           {i < 3 && (
//             <ArrowRight
//               className="absolute right-0 top-6 hidden text-slate-300 lg:block"
//               size={17}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
export function CTASection() {
  return (
    <section className="container-shell py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[28px] bg-[#101d35] px-7 py-12 sm:px-12 md:px-16 md:py-16">
        <div className="grid-glow absolute inset-0 opacity-60" />
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow text-[#9db3ff]">Your next step</span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-.05em] text-white sm:text-4xl md:text-5xl">
              Let’s turn your next big idea into meaningful progress.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Tell us what you’re working toward. We’ll start with the business
              challenge, then explore the right path forward.
            </p>
          </div>
          <Link href="/contact" className="btn-light w-fit">
            Talk to our team <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
