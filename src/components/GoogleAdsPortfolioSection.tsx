import { motion } from "framer-motion";
import {
  Search,
  Mic,
  Lock,
  Phone,
  Globe,
  Star,
  TrendingUp,
  MousePointerClick,
  Target,
  ArrowUpRight,
  ArrowRight,
  Play,
  ShoppingBag,
  CheckCircle2,
  Eye,
  Bell,
  ShoppingCart,
  MapPin,
  Zap,
  BarChart3,
  Rocket,
  Store,
  Package,
  Truck,
  CreditCard,
  Bike,
  Activity,
  Navigation,
} from "lucide-react";
import rasrinShoppingAds from "@/assets/rasrin-shopping-ads.png";
import qcommerceRasrinAsset from "@/assets/qcommerce-rasrin.png.asset.json";

const qcommerceRasrin = qcommerceRasrinAsset.url;

const searchAds = [
  {
    url: "www.blossomscare.in",
    title: "Blossoms Hospital — 24×7 Multispeciality Care in Vijayawada",
    desc: "Top-rated doctors, advanced diagnostics & cashless insurance. Book an appointment in 2 minutes.",
    cta: "Book Appointment",
  },
  {
    url: "www.blossomscare.in",
    title: "Emergency & ICU — Call Now · No Waiting",
    desc: "24/7 emergency response, ambulance pickup and dedicated ICU specialists across all units.",
    cta: "Call Hospital",
  },
];

const shoppingAds = [
  { name: "Diamond Solitaire Ring", price: "₹84,500", rating: 4.9 },
  { name: "22K Gold Pendant Set", price: "₹62,300", rating: 4.8 },
  { name: "Bridal Necklace Set", price: "₹1,28,000", rating: 5.0 },
  { name: "Diamond Stud Earrings", price: "₹38,900", rating: 4.7 },
];

const GoogleAdsPortfolioSection = () => {
  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 max-w-4xl">
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span aria-hidden className="h-px w-10 bg-primary" />
            <p className="font-body text-xs md:text-sm uppercase tracking-[0.25em] text-primary font-700">
              Google Ads Portfolio
            </p>
          </motion.div>
          <motion.h2
            className="font-heading text-4xl md:text-6xl font-600 text-off-white leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Campaigns That <span className="text-primary">Convert</span>
          </motion.h2>
          <motion.p
            className="font-body text-base md:text-lg text-off-white/60 leading-relaxed mt-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            From Search to Shopping to YouTube — we run paid campaigns engineered for ROAS,
            not just clicks.
          </motion.p>
        </div>

        <div className="space-y-28">
          {/* ============ ROW 1: SEARCH ADS ============ */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <p className="font-body text-xs uppercase tracking-[0.2em] text-primary/80 mb-4 font-700">
                Search Campaign · Blossoms Hospital
              </p>
              <h3 className="font-heading text-3xl md:text-4xl font-600 text-off-white leading-tight mb-6">
                Top of page for every <span className="text-primary">"near me"</span> search
              </h3>
              <p className="font-body text-base text-off-white/60 leading-relaxed mb-8 max-w-md">
                Hyper-targeted search ads with locked-in #1 ad position for the highest-intent
                healthcare keywords across Vijayawada.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8 border-y border-off-white/10 py-5 max-w-md">
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    8.4×
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    ROAS
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    12.7%
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    CTR
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    −45%
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    CPC
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Keyword research & negative lists",
                  "Smart bidding & quality score tuning",
                  "A/B tested ad copy & extensions",
                  "Landing page conversion tracking",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-off-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-12 bg-primary/15 blur-3xl rounded-full pointer-events-none" />

              <div className="relative mx-auto" style={{ maxWidth: "560px" }}>
                {/* Browser */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-off-white/10">
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                      <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                      <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex-1 mx-3 flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-gray-200">
                      <Lock className="w-3 h-3 text-gray-400" />
                      <span className="font-body text-[11px] text-gray-600 truncate">
                        google.com/search?q=multispeciality+hospital+near+me
                      </span>
                    </div>
                  </div>

                  <div className="p-5 bg-white">
                    <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                      <span className="font-heading text-xl font-700 tracking-tight">
                        <span style={{ color: "#4285F4" }}>G</span>
                        <span style={{ color: "#EA4335" }}>o</span>
                        <span style={{ color: "#FBBC05" }}>o</span>
                        <span style={{ color: "#4285F4" }}>g</span>
                        <span style={{ color: "#34A853" }}>l</span>
                        <span style={{ color: "#EA4335" }}>e</span>
                      </span>
                      <div className="flex-1 flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                        <span className="text-[11px] text-gray-700 flex-1 truncate">
                          multispeciality hospital near me
                        </span>
                        <Mic className="w-3.5 h-3.5" style={{ color: "#4285F4" }} />
                        <Search className="w-3.5 h-3.5" style={{ color: "#4285F4" }} />
                      </div>
                    </div>

                    <div className="flex gap-5 py-2 text-[11px] text-gray-600 border-b border-gray-200">
                      <span className="pb-1 border-b-2" style={{ borderColor: "#4285F4", color: "#4285F4" }}>
                        All
                      </span>
                      <span>Maps</span>
                      <span>News</span>
                      <span>Images</span>
                      <span>Videos</span>
                    </div>

                    <div className="text-[10px] text-gray-500 py-2">
                      Sponsored results · 4 ads
                    </div>

                    {/* Ad results */}
                    <div className="space-y-4">
                      {searchAds.map((ad, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                          className={`relative rounded-md p-2 -mx-2 ${
                            i === 0 ? "bg-primary/5 ring-1 ring-primary/30" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-body text-[10px] font-700 text-gray-900 bg-gray-100 px-1.5 py-0.5 rounded">
                              Sponsored
                            </span>
                            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                              <Globe className="w-3 h-3 text-gray-500" />
                            </div>
                            <div className="text-[11px] text-gray-700 leading-tight">
                              <div className="font-semibold">Blossoms Hospital</div>
                              <div className="text-gray-500 text-[10px]">https://{ad.url}</div>
                            </div>
                            {i === 0 && (
                              <span className="ml-auto font-heading text-xs font-700 text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                                Ad #1
                              </span>
                            )}
                          </div>
                          <div
                            className="font-heading text-[15px] font-500 leading-tight mb-1"
                            style={{ color: "#1a0dab" }}
                          >
                            {ad.title}
                          </div>
                          <p className="text-[11px] text-gray-600 leading-snug line-clamp-2 mb-2">
                            {ad.desc}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1 text-[10px] font-600 text-white bg-[#1a73e8] px-2 py-1 rounded">
                              <Phone className="w-2.5 h-2.5" />
                              {ad.cta}
                            </span>
                            <span className="text-[10px] text-gray-500">· 4.9 ★ (320 reviews)</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating ROAS badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                  className="absolute -top-5 -left-3 md:-left-6 bg-primary text-charcoal rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2"
                >
                  <TrendingUp className="w-5 h-5" />
                  <div>
                    <div className="font-heading text-lg font-700 leading-none">8.4× ROAS</div>
                    <div className="font-body text-[9px] uppercase tracking-wider">Search Campaign</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
                  className="absolute -bottom-5 -right-3 md:-right-6 bg-off-white text-charcoal rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2"
                >
                  <MousePointerClick className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-heading text-lg font-700 leading-none">+3,284</div>
                    <div className="font-body text-[9px] uppercase tracking-wider">Conversions</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ============ ROW 2: SHOPPING ADS ============ */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 relative order-2 lg:order-1"
            >
              <div className="absolute -inset-12 bg-primary/15 blur-3xl rounded-full pointer-events-none" />

              <div className="relative mx-auto" style={{ maxWidth: "640px" }}>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-off-white/10">
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                      <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                      <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex-1 mx-3 flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-gray-200">
                      <Lock className="w-3 h-3 text-gray-400" />
                      <span className="font-body text-[11px] text-gray-600 truncate">
                        google.com/search?q=rasrin+cleaning+products
                      </span>
                    </div>
                  </div>

                  <img
                    src={rasrinShoppingAds}
                    alt="Rasrin product feed shopping ads"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.6, rotate: 8 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                  className="absolute -top-5 -right-3 md:-right-6 bg-primary text-charcoal rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <div>
                    <div className="font-heading text-lg font-700 leading-none">₹48 Lakhs</div>
                    <div className="font-body text-[9px] uppercase tracking-wider">Ad-driven Sales</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <p className="font-body text-xs uppercase tracking-[0.2em] text-primary/80 mb-4 font-700">
                Shopping Campaign · Rasrin
              </p>
              <h3 className="font-heading text-3xl md:text-4xl font-600 text-off-white leading-tight mb-6">
                Cleaning products that <span className="text-primary">dominate</span> search shelves
              </h3>
              <p className="font-body text-base text-off-white/60 leading-relaxed mb-8 max-w-md">
                We built a high-converting Google Shopping feed for Rasrin's household cleaning range and ran Performance Max campaigns that scaled revenue to ₹48 Lakhs in ad-driven sales.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8 border-y border-off-white/10 py-5 max-w-md">
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    ₹48L
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    Ad Sales
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    6.8×
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    ROAS
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    320+
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    SKUs Live
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Merchant Center feed optimisation",
                  "Performance Max + Shopping campaigns",
                  "Audience signals & remarketing lists",
                  "Category-level bid strategies",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-off-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ============ ROW 3: YOUTUBE / VIDEO ADS ============ */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <p className="font-body text-xs uppercase tracking-[0.2em] text-primary/80 mb-4 font-700">
                YouTube Campaign · Rasrin
              </p>
              <h3 className="font-heading text-3xl md:text-4xl font-600 text-off-white leading-tight mb-6">
                Product-demo video ads that <span className="text-primary">sell while they educate</span>
              </h3>
              <p className="font-body text-base text-off-white/60 leading-relaxed mb-8 max-w-md">
                A 47-second demo of Rasrin D-Scaler — the washing machine drum cleaner — served as
                skippable in-stream and bumper ads to households actively searching for laundry
                and cleaning solutions.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8 border-y border-off-white/10 py-5 max-w-md">
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    3.1M
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    Impressions
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    91%
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    View Rate
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                    ₹0.32
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-off-white/40 mt-2">
                    Avg. CPV
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Problem-solution demo storyboard",
                  "In-market: laundry & home cleaning audiences",
                  "Skippable in-stream + 6s bumper cuts",
                  "Remarketing to drum-cleaner search intent",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-off-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-12 bg-primary/15 blur-3xl rounded-full pointer-events-none" />

              <div className="relative mx-auto" style={{ maxWidth: "560px" }}>
                <div className="relative bg-[#0f0f0f] rounded-2xl shadow-2xl overflow-hidden border border-off-white/10">
                  {/* YouTube top bar */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-[#FF0000]">
                        <Play className="w-3 h-3 text-white" fill="white" />
                      </span>
                      <span className="font-heading text-sm font-700 text-white">YouTube</span>
                    </div>
                    <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121212] border border-white/10">
                      <Search className="w-3 h-3 text-white/50" />
                      <span className="font-body text-[11px] text-white/60">washing machine drum cleaner</span>
                    </div>
                  </div>

                  {/* Video player */}
                  <div className="relative aspect-video bg-black">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/gE4N2DFAX7s?rel=0&modestbranding=1"
                      title="Rasrin D-Scaler — Washing Machine Drum Cleaner"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Ad CTA strip */}
                  <div className="flex items-center gap-3 p-3 bg-[#1a1a1a] border-t border-white/5">
                    <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4 text-charcoal" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-heading text-[12px] font-600 text-white truncate">
                        Rasrin D-Scaler · Removes Drum Scale Instantly
                      </div>
                      <div className="font-body text-[10px] text-white/50 truncate">
                        rasrin.com · Shop now
                      </div>
                    </div>
                    <span className="font-body text-[10px] font-700 text-white bg-[#3ea6ff]/90 px-3 py-1.5 rounded">
                      Shop Now
                    </span>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
                  className="absolute -bottom-5 -left-3 md:-left-6 bg-off-white text-charcoal rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2"
                >
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-heading text-lg font-700 leading-none">+220%</div>
                    <div className="font-body text-[9px] uppercase tracking-wider">Product Orders</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ============ ROW 4: Q-COMMERCE (animated scene) ============ */}
          <QCommerceScene />

        </div>




        {/* Bottom stats strip */}
        <motion.div
          className="mt-28 pt-12 border-t border-off-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {[
            { value: "₹2.4Cr+", label: "Ad Spend Managed" },
            { value: "60+", label: "Campaigns Live" },
            { value: "8.4×", label: "Avg. ROAS" },
            { value: "−45%", label: "Avg. CPC Cut" },
          ].map((m) => (
            <div key={m.label}>
              <div className="font-heading text-3xl md:text-4xl font-600 text-primary leading-none">
                {m.value}
              </div>
              <div className="font-body text-[11px] md:text-xs uppercase tracking-[0.2em] text-off-white/50 mt-3">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ============================================================
   Q-COMMERCE animated scene
   6-second looping animations — pure framer-motion, no video
============================================================ */
const trustLogos = ["Blinkit", "Zepto", "BigBasket", "Instamart", "Dunzo"];

const floatingCards: {
  label: string;
  value: string;
  icon: typeof CheckCircle2;
  pos: string;
  delay: number;
}[] = [
  { label: "Order Received", value: "#A8421", icon: CheckCircle2, pos: "top-[6%] -left-4 md:-left-10", delay: 0 },
  { label: "Delivery in", value: "8 min", icon: Truck, pos: "top-[22%] -right-4 md:-right-12", delay: 0.4 },
  { label: "Inventory Synced", value: "1,284 SKUs", icon: Package, pos: "top-[52%] -left-6 md:-left-14", delay: 0.8 },
  { label: "Payment", value: "Successful", icon: CreditCard, pos: "bottom-[18%] -right-2 md:-right-10", delay: 1.2 },
  { label: "Online Riders", value: "342", icon: Bike, pos: "bottom-[4%] left-2 md:left-0", delay: 1.6 },
];

const qcFeatures = [
  { icon: Store, title: "Store Setup", desc: "Launch your digital storefront in minutes with zero friction." },
  { icon: Package, title: "Inventory Sync", desc: "Real-time stock sync across every channel and warehouse." },
  { icon: Truck, title: "Fast Delivery", desc: "10-minute dispatch powered by smart routing and live ETA." },
  { icon: TrendingUp, title: "Revenue Growth", desc: "Data-driven insights that compound orders into outcomes." },
];

const QCommerceScene = () => {
  return (
    <section className="relative -mx-4 md:-mx-8 lg:-mx-12 overflow-hidden rounded-[2rem] bg-[#0A0A0A] text-white">
      {/* ===== Premium background layers ===== */}
      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0E0E0E] to-[#141414]" />
      {/* radial orange glow */}
      <div className="absolute right-[-10%] top-[10%] w-[720px] h-[720px] rounded-full bg-[#FF7A00]/25 blur-[140px] pointer-events-none" />
      <div className="absolute -left-40 -top-32 w-[520px] h-[520px] rounded-full bg-[#FF7A00]/10 blur-[120px] pointer-events-none" />
      <div className="absolute left-1/3 bottom-[-20%] w-[600px] h-[600px] rounded-full bg-[#FF7A00]/[0.07] blur-[160px] pointer-events-none" />
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      {/* noise */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")",
        }}
      />
      {/* floating blurred circles */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[18%] w-40 h-40 rounded-full bg-[#FF7A00]/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[15%] right-[25%] w-52 h-52 rounded-full bg-[#FF7A00]/15 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10 py-[72px] md:py-[100px]">
        {/* ===== Two-column hero ===== */}
        <div className="grid lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-center">
          {/* ---------- LEFT ---------- */}
          <div className="relative">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-[#FF7A00]/60 bg-[#FF7A00]/[0.15] px-4 py-1.5 backdrop-blur-md shadow-[0_0_30px_-8px_rgba(255,122,0,0.6)]"
            >
              <Rocket className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span className="text-[12px] font-600 tracking-wide text-white/90">
                Q-Commerce Technology
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 font-heading font-800 text-white tracking-[-0.02em]"
              style={{
                fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
                lineHeight: 0.95,
              }}
            >
              Q-Commerce{" "}
              <span
                className="text-[#FF7A00]"
                style={{ textShadow: "0 0 60px rgba(255,122,0,0.45)" }}
              >
                Solutions
              </span>
              <br />
              That Deliver
              <br />
              in Minutes.
            </motion.h2>

            {/* Supporting */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 text-[18px] md:text-[20px] leading-relaxed text-white/65 max-w-xl font-400"
            >
              Deliver faster. Manage inventory smarter. Scale your grocery
              business with real-time commerce.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <motion.a
                href="#contact"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
                className="group relative inline-flex items-center gap-2 rounded-full bg-[#FF7A00] px-6 py-3.5 text-[14px] font-600 text-white shadow-[0_10px_40px_-8px_rgba(255,122,0,0.7)] overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Get Started</span>
                <ArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#portfolio"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-[14px] font-600 text-white backdrop-blur-xl hover:bg-white/[0.1] hover:border-white/25 transition-colors"
              >
                <Play className="w-4 h-4 fill-white" />
                Watch Demo
              </motion.a>
            </motion.div>

            {/* Trust */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12"
            >
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/40 font-600">
                Trusted by 500+ Grocery Stores
              </div>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {trustLogos.map((l, i) => (
                  <motion.div
                    key={l}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.07 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[12px] font-600 text-white/70 backdrop-blur-md hover:border-[#FF7A00]/40 hover:text-white transition-all"
                  >
                    {l}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ---------- RIGHT — illustration ---------- */}
          <div className="relative h-[560px] md:h-[640px] flex items-center justify-center">
            {/* radial backdrop behind phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#FF7A00]/40 via-[#FF7A00]/15 to-transparent blur-3xl" />
            </div>

            {/* dotted orbit / delivery path */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 500 600"
              fill="none"
            >
              <motion.path
                d="M 60 480 Q 180 360, 260 380 T 460 140"
                stroke="#FF7A00"
                strokeWidth="2"
                strokeDasharray="4 8"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.7 }}
                viewport={{ once: true }}
                transition={{ duration: 2.4, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 0 6px rgba(255,122,0,0.7))" }}
              />
            </svg>

            {/* moving delivery dot along path approx */}
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-[#FF7A00] shadow-[0_0_20px_rgba(255,122,0,0.9)]"
              animate={{
                offsetDistance: ["0%", "100%"],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{
                offsetPath:
                  "path('M 60 480 Q 180 360, 260 380 T 460 140')",
                top: 0,
                left: 0,
              }}
            />

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [-2, 0, -2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[280px] md:w-[320px] aspect-[9/19] rounded-[2.6rem] p-[3px] bg-gradient-to-b from-white/20 via-white/[0.04] to-white/10 shadow-[0_50px_120px_-20px_rgba(255,122,0,0.55),0_30px_80px_-30px_rgba(0,0,0,0.9)]"
              >
                <div className="relative w-full h-full rounded-[2.4rem] bg-[#0A0A0A] p-2 overflow-hidden">
                  {/* notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-20" />

                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#111] to-[#1a1a1a] flex flex-col">
                    {/* status */}
                    <div className="flex items-center justify-between px-4 pt-6 pb-3 text-white">
                      <div>
                        <div className="text-[8px] text-white/40 leading-none">
                          Live Dashboard
                        </div>
                        <div className="text-[11px] font-700 flex items-center gap-1 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          342 Riders Online
                        </div>
                      </div>
                      <Bell className="w-3.5 h-3.5 text-white/60" />
                    </div>

                    {/* Map area */}
                    <div className="mx-3 rounded-2xl relative overflow-hidden h-[180px] bg-gradient-to-br from-[#1c1c1c] to-[#0f0f0f] border border-white/5">
                      {/* grid lines as map */}
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,122,0,0.25) 1px,transparent 1px),linear-gradient(90deg,rgba(255,122,0,0.25) 1px,transparent 1px)",
                          backgroundSize: "22px 22px",
                        }}
                      />
                      {/* route */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 180" fill="none">
                        <motion.path
                          d="M 20 150 Q 70 90, 110 100 T 180 30"
                          stroke="#FF7A00"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeDasharray="3 5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </svg>
                      {/* pins */}
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.9, 0.4, 0.9] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                        className="absolute bottom-4 left-3 w-3 h-3 rounded-full bg-[#FF7A00] shadow-[0_0_12px_rgba(255,122,0,0.9)]"
                      />
                      <div className="absolute top-3 right-4">
                        <MapPin className="w-5 h-5 text-[#FF7A00]" fill="#FF7A00" />
                      </div>
                      {/* ETA chip */}
                      <div className="absolute top-2 left-2 rounded-md bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 text-[8px] text-white font-600">
                        ETA · 8 min
                      </div>
                    </div>

                    {/* widgets */}
                    <div className="px-3 mt-3 grid grid-cols-2 gap-2">
                      {[
                        { label: "Orders", value: "2,418", icon: ShoppingCart },
                        { label: "Revenue", value: "₹1.2L", icon: TrendingUp },
                      ].map((w) => {
                        const Icon = w.icon;
                        return (
                          <div
                            key={w.label}
                            className="rounded-xl bg-white/[0.04] border border-white/10 p-2"
                          >
                            <div className="flex items-center gap-1.5">
                              <Icon className="w-3 h-3 text-[#FF7A00]" />
                              <span className="text-[8px] text-white/50">{w.label}</span>
                            </div>
                            <div className="text-[13px] font-700 text-white mt-0.5">
                              {w.value}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* live activity */}
                    <div className="mx-3 mt-3 rounded-xl bg-gradient-to-r from-[#FF7A00]/20 to-transparent border border-[#FF7A00]/30 p-2.5">
                      <div className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-[#FF7A00]" />
                        <div className="text-[9px] text-white font-600">
                          Order #A8421 dispatched
                        </div>
                      </div>
                      <div className="text-[8px] text-white/50 mt-0.5 ml-5">
                        Rider Arjun · 1.2 km away
                      </div>
                    </div>

                    {/* CTA bar */}
                    <div className="mx-3 mt-auto mb-4 rounded-full bg-[#FF7A00] text-white text-[10px] font-700 py-2 text-center shadow-[0_8px_24px_-6px_rgba(255,122,0,0.7)]">
                      Track Live →
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Scooter — bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="absolute bottom-6 left-2 md:left-6 z-20"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* speed trail */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-1 w-16 h-[2px] bg-gradient-to-l from-[#FF7A00] to-transparent blur-[1px]" />
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-1 mt-2 w-10 h-[2px] bg-gradient-to-l from-[#FF7A00]/60 to-transparent" />
                <div className="relative flex items-center gap-2 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/10 px-3 py-2.5 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)]">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#d85812] flex items-center justify-center shadow-[0_8px_20px_-4px_rgba(255,122,0,0.7)]">
                    <Bike className="w-5 h-5 text-white" strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="text-[9px] text-white/50 leading-none">En route</div>
                    <div className="text-[11px] font-700 text-white mt-0.5">Arjun · 2.4 km</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating UI cards */}
            {floatingCards.map((c) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6 + c.delay * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className={`hidden md:block absolute ${c.pos} z-20`}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4 + c.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: c.delay,
                    }}
                    whileHover={{ scale: 1.06, y: -6 }}
                    className="flex items-center gap-2.5 rounded-[20px] border border-[#FF7A00]/25 bg-white/[0.05] backdrop-blur-2xl px-3.5 py-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#FF7A00]/20 border border-[#FF7A00]/40 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#FF7A00]" strokeWidth={2.2} />
                    </div>
                    <div className="pr-1">
                      <div className="text-[9px] text-white/50 leading-none font-500">
                        {c.label}
                      </div>
                      <div className="text-[12px] text-white font-700 mt-1 leading-none">
                        {c.value}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===== Feature cards ===== */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qcFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 overflow-hidden transition-colors hover:border-[#FF7A00]/50"
              >
                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-20 -right-10 w-60 h-60 rounded-full bg-[#FF7A00]/20 blur-3xl" />
                </div>

                <div className="relative">
                  <div className="relative w-14 h-14 rounded-full flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/40 shadow-[0_0_30px_-5px_rgba(255,122,0,0.6)]" />
                    <Icon className="relative w-6 h-6 text-[#FF7A00]" strokeWidth={2} />
                  </div>
                  <h4 className="mt-5 text-[18px] font-700 text-white tracking-tight">
                    {f.title}
                  </h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/55 font-400">
                    {f.desc}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-600 text-[#FF7A00]/90 group-hover:text-[#FF7A00] transition-colors">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GoogleAdsPortfolioSection;
