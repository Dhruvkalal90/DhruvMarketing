import { motion } from "framer-motion";
import {
  Droplets,
  Snowflake,
  Package,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "20L Water Bottles",
    description:
      "Clean and hygienic packaged drinking water jars for homes, offices, shops and daily use.",
    badge: "Best Seller",
  },
  {
    icon: Snowflake,
    title: "18L Chilled Water Jugs",
    description:
      "Ready-to-serve chilled water for meetings, events, functions and special occasions.",
    badge: "Popular",
  },
  {
    icon: Package,
    title: "Branded Water Bottles",
    description:
      "Available in 200ml, 500ml and 1L sizes from trusted packaged drinking water brands.",
    badge: "Available",
  },
  {
    icon: Truck,
    title: "Bulk & Event Supply",
    description:
      "Reliable water supply solutions for weddings, corporate events, parties and gatherings.",
    badge: "Bulk Orders",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 bg-slate-50 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-[140px] opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-sky-600 font-semibold tracking-wider uppercase">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
            Water Solutions For
            <span className="gradient-text">
              {" "}Every Need
            </span>
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            From daily household requirements to large-scale event supply,
            we deliver quality packaged drinking water with reliability
            and care.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  bg-white
                  rounded-3xl
                  p-8
                  border
                  border-slate-200
                  shadow-sm
                  hover:shadow-2xl
                  transition-all
                  overflow-hidden
                "
              >
                {/* Hover Background */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    bg-gradient-to-br
                    from-cyan-50
                    via-white
                    to-blue-50
                  "
                />

                <div className="relative z-10">
                  {/* Badge */}

                  <span
                    className="
                      inline-block
                      px-3
                      py-1
                      rounded-full
                      bg-cyan-100
                      text-cyan-700
                      text-xs
                      font-semibold
                      mb-6
                    "
                  >
                    {service.badge}
                  </span>

                  {/* Icon */}

                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-cyan-100
                      flex
                      items-center
                      justify-center
                      mb-6
                    "
                  >
                    <Icon
                      size={30}
                      className="text-sky-600"
                    />
                  </div>

                  {/* Title */}

                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Decorative Line */}

                  <div
                    className="
                      mt-8
                      h-1
                      w-12
                      rounded-full
                      bg-sky-500
                      group-hover:w-20
                      transition-all
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="
            mt-20
            glass
            rounded-3xl
            p-8
            text-center
          "
        >
          <h3 className="text-2xl font-bold text-slate-900">
            Trusted Water Delivery Across Ahmedabad
          </h3>

          <p className="mt-3 text-slate-600">
            Serving homes, offices, shops and events with
            timely delivery and quality-assured packaged drinking water.
          </p>
        </motion.div>
      </div>
    </section>
  );
}