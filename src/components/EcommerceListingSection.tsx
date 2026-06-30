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

          {/* RIGHT — Hero illustration */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[560px]">
              <div
                className="absolute -inset-10 rounded-[60px] blur-3xl pointer-events-none"
                style={{ backgroundColor: "rgba(243,110,43,0.22)" }}
              />
              <motion.img
                src={ecommerceHeroAsset.url}
                alt="E-commerce listing optimization showcase across Amazon, Flipkart, Myntra and D2C"
                loading="lazy"
                decoding="async"
                width={1040}
                height={1280}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                animate={{ y: [0, -8, 0] }}
                style={{
                  animationDuration: "6s",
                  filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.45))",
                }}
                className="relative w-full h-auto object-contain"
              />
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
