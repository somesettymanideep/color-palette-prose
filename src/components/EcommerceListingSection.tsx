import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  Package,
  Sparkles,
  ArrowUpRight,
  BarChart3,
  Eye,
  ShoppingCart,
} from "lucide-react";
import ecommerceHeroAsset from "@/assets/ecommerce-listing-hero.webp.asset.json";

const ORANGE = "#F36E2B";

const pillars = [
  {
    icon: Search,
    title: "SEO Product Titles",
    desc: "Keyword-optimized titles engineered for marketplace algorithms.",
  },
  {
    icon: Sparkles,
    title: "A+ Content Creation",
    desc: "Premium storefronts and rich modules that convert browsers into buyers.",
  },
  {
    icon: Package,
    title: "Image Optimization",
    desc: "Studio-grade product imagery with infographic overlays.",
  },
  {
    icon: BarChart3,
    title: "Catalog Management",
    desc: "Clean hierarchies, variants and inventory health at scale.",
  },
];

const marketplaces = [
  { name: "Amazon", color: "#FF9900", initial: "a" },
  { name: "Flipkart", color: "#2874F0", initial: "F" },
  { name: "Myntra", color: "#FF3F6C", initial: "M" },
  { name: "D2C", color: "#F36E2B", initial: "D" },
];

const stats = [
  { label: "Avg. Ranking Lift", value: "+212%", icon: TrendingUp },
  { label: "Listings Optimized", value: "1,400+", icon: Package },
  { label: "Conversion Rate", value: "9.8%", icon: ShoppingCart },
  { label: "Impressions / mo", value: "4.2M", icon: Eye },
];

const EcommerceListingSection = () => {
  return (
    <section
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            background:
              "radial-gradient(800px 500px at 15% 20%, rgba(243,110,43,0.22), transparent 60%), radial-gradient(700px 500px at 85% 80%, rgba(243,110,43,0.12), transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(243,110,43,0.18)" }}
        />
        <div
          className="absolute -bottom-32 -right-20 w-[480px] h-[480px] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(243,110,43,0.10)" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-md"
            style={{
              backgroundColor: "rgba(243,110,43,0.12)",
              border: "1px solid rgba(243,110,43,0.35)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: ORANGE }} />
            <span className="text-xs font-700 uppercase tracking-[0.22em]" style={{ color: ORANGE }}>
              Marketplace Growth
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-700 leading-[1.02] text-white tracking-tight"
          >
            E-Commerce <span style={{ color: ORANGE }}>Listings</span>
            <br />
            that out-rank, out-click,
            <br />
            and out-sell.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-body text-lg md:text-xl text-white/65 leading-relaxed mt-6 max-w-2xl"
          >
            Amazon, Flipkart, Myntra &amp; D2C — high-converting listings, A+
            content, and catalog hygiene that compound into ranking, traffic
            and revenue.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT — Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="group relative rounded-2xl p-6 backdrop-blur-xl transition-all duration-300"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "rgba(243,110,43,0.15)",
                      border: "1px solid rgba(243,110,43,0.4)",
                      boxShadow: "0 0 30px rgba(243,110,43,0.25)",
                    }}
                  >
                    <p.icon className="w-5 h-5" style={{ color: ORANGE }} strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <h3 className="font-heading text-lg md:text-xl font-700 text-white">
                        {p.title}
                      </h3>
                      <ArrowUpRight
                        className="w-5 h-5 text-white/30 group-hover:text-orange-500 group-hover:rotate-12 transition-all"
                        style={{ color: ORANGE, opacity: 0.5 }}
                      />
                    </div>
                    <p className="font-body text-sm md:text-[15px] text-white/60 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Marketplace chips */}
            <div className="flex flex-wrap items-center gap-2.5 pt-4">
              <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-700 mr-2">
                Live on
              </span>
              {marketplaces.map((m) => (
                <span
                  key={m.name}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-600 backdrop-blur-md"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: m.color,
                      boxShadow: `0 0 10px ${m.color}`,
                    }}
                  />
                  {m.name}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — Premium product card */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[540px]">
              {/* glow */}
              <div
                className="absolute -inset-16 rounded-[60px] blur-3xl pointer-events-none"
                style={{ backgroundColor: "rgba(243,110,43,0.22)" }}
              />

              {/* Main glass card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[28px] p-6 md:p-7 backdrop-blur-2xl overflow-hidden"
                style={{
                  backgroundColor: "rgba(20,20,20,0.7)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow:
                    "0 30px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(243,110,43,0.08) inset",
                }}
              >
                {/* Top: search bar */}
                <div
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl mb-5"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Search className="w-4 h-4 text-white/50" />
                  <span className="font-body text-xs text-white/70 truncate">
                    organic cold-pressed almond oil
                  </span>
                  <span
                    className="ml-auto text-[10px] font-700 px-2 py-0.5 rounded text-white"
                    style={{
                      backgroundColor: ORANGE,
                      boxShadow: "0 0 14px rgba(243,110,43,0.6)",
                    }}
                  >
                    #1 RANK
                  </span>
                </div>

                {/* Product row */}
                <div className="flex gap-4">
                  <div
                    className="w-28 h-28 rounded-2xl flex items-center justify-center shrink-0 relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #F36E2B 0%, #c9531c 100%)",
                      boxShadow: "0 12px 30px -8px rgba(243,110,43,0.6)",
                    }}
                  >
                    <Package className="w-12 h-12 text-white relative z-10" strokeWidth={1.5} />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-heading text-sm font-700 text-white leading-snug mb-1.5 line-clamp-2">
                      Premium Cold-Pressed Almond Oil 500ml — A+ Listing
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3"
                          style={{ color: ORANGE, fill: ORANGE }}
                        />
                      ))}
                      <span className="text-[10px] text-white/50 ml-1">4.8 (2,431)</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2.5">
                      <span className="font-heading text-lg font-700 text-white">₹649</span>
                      <span className="text-xs text-white/40 line-through">₹999</span>
                      <span
                        className="text-[10px] font-700 px-1.5 py-0.5 rounded"
                        style={{
                          color: ORANGE,
                          backgroundColor: "rgba(243,110,43,0.15)",
                        }}
                      >
                        −35%
                      </span>
                    </div>
                    <button
                      type="button"
                      className="w-full text-xs font-600 text-white py-2 rounded-lg transition-all hover:scale-[1.02]"
                      style={{
                        backgroundColor: ORANGE,
                        boxShadow: "0 8px 20px -6px rgba(243,110,43,0.6)",
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>

                {/* Growth chart */}
                <div
                  className="mt-5 pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-body text-[10px] uppercase tracking-[0.18em] text-white/40 font-700">
                      Sales · Last 30 days
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-xs font-700"
                      style={{ color: ORANGE }}
                    >
                      <TrendingUp className="w-3.5 h-3.5" />
                      +212%
                    </span>
                  </div>
                  <svg viewBox="0 0 200 50" className="w-full h-14" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="ecomChartDark" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor={ORANGE} stopOpacity="0.45" />
                        <stop offset="100%" stopColor={ORANGE} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 40 L20 36 L40 38 L60 30 L80 26 L100 28 L120 18 L140 14 L160 16 L180 8 L200 4 L200 50 L0 50 Z"
                      fill="url(#ecomChartDark)"
                    />
                    <path
                      d="M0 40 L20 36 L40 38 L60 30 L80 26 L100 28 L120 18 L140 14 L160 16 L180 8 L200 4"
                      fill="none"
                      stroke={ORANGE}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Floating marketplace pills */}
              {marketplaces.map((m, i) => {
                const positions = [
                  "-top-5 -left-5",
                  "-top-7 right-4",
                  "bottom-16 -left-8",
                  "-bottom-5 right-2",
                ];
                return (
                  <motion.div
                    key={m.name}
                    initial={{ opacity: 0, scale: 0.5, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1, type: "spring" }}
                    animate={{ y: [0, -6, 0] }}
                    style={{
                      backgroundColor: "rgba(20,20,20,0.85)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      boxShadow: "0 16px 40px -10px rgba(0,0,0,0.6)",
                    }}
                    className={`absolute ${positions[i]} rounded-2xl backdrop-blur-xl px-3 py-2 flex items-center gap-2`}
                  >
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center font-heading text-xs font-700 text-white"
                      style={{ backgroundColor: m.color }}
                    >
                      {m.initial}
                    </span>
                    <span className="font-body text-[11px] font-700 text-white">
                      {m.name}
                    </span>
                  </motion.div>
                );
              })}

              {/* SEO badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                className="absolute top-1/2 -right-6 -translate-y-1/2 rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 backdrop-blur-xl"
                style={{
                  backgroundColor: "rgba(243,110,43,0.95)",
                  boxShadow: "0 20px 50px -10px rgba(243,110,43,0.6)",
                }}
              >
                <Sparkles className="w-4 h-4 text-white" />
                <div>
                  <div className="font-heading text-sm font-700 leading-none text-white">
                    SEO Ranked
                  </div>
                  <div className="font-body text-[9px] uppercase tracking-wider text-white/80 mt-0.5">
                    Page 1 · #1
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden backdrop-blur-xl"
          style={{
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 md:p-8 flex flex-col gap-3"
              style={{ backgroundColor: "rgba(10,10,10,0.6)" }}
            >
              <s.icon className="w-5 h-5" style={{ color: ORANGE }} />
              <div className="font-heading text-3xl md:text-4xl font-700 text-white tracking-tight">
                {s.value}
              </div>
              <div className="font-body text-xs uppercase tracking-[0.18em] text-white/50 font-700">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EcommerceListingSection;
