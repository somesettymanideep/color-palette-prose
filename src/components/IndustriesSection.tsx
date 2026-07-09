import { motion } from "framer-motion";
import {
  Building2,
  Hospital,
  Gem,
  Sofa,
  Dumbbell,
  Plane,
  Shirt,
  Armchair,
  Car,
  PartyPopper,
  Sparkles,
  Wallet,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

type Industry = { name: string; icon: LucideIcon };

const industries: Industry[] = [
  { name: "Construction", icon: Building2 },
  { name: "Hospital", icon: Hospital },
  { name: "Jewellery", icon: Gem },
  { name: "Interior Design", icon: Sofa },
  { name: "Fitness & Gym", icon: Dumbbell },
  { name: "Tourism", icon: Plane },
  { name: "Apparel", icon: Shirt },
  { name: "Furniture", icon: Armchair },
  { name: "Car Accessories", icon: Car },
  { name: "Events", icon: PartyPopper },
  { name: "Beauty & Salon", icon: Sparkles },
  { name: "Finance Management", icon: Wallet },
  { name: "Restaurant", icon: UtensilsCrossed },
];

const IndustriesSection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-wide">
        <div className="mb-space-8 text-center">
          <motion.p
            className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground mb-space-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Industries
          </motion.p>
          <motion.h2
            className="font-heading text-4xl md:text-5xl font-600 text-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Industries We Have Our <span className="text-primary">Mark</span> In
          </motion.h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-space-4 md:gap-space-5">
          {industries.map(({ name, icon: Icon }, i) => (
            <motion.div
              key={name}
              className="group relative flex flex-col items-center justify-center gap-3 border border-border bg-card px-space-4 py-space-5 md:py-space-6 hover:border-primary hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.04, ease: "easeOut" }}
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <span className="relative font-body text-xs md:text-sm font-500 uppercase tracking-wider text-foreground text-center">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
