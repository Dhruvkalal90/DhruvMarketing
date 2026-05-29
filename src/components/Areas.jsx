import { motion } from "framer-motion";
import {
  MapPin,
  Clock3,
  Truck,
} from "lucide-react";

const locations = [
  {
    name: "Thaltej",
    description:
      "Fast delivery service for homes, offices and commercial spaces.",
  },
  {
    name: "Bodakdev",
    description:
      "Reliable packaged drinking water supply across the area.",
  },
  {
    name: "Vastrapur",
    description:
      "Quick doorstep delivery with trusted local service.",
  },
];

export default function Areas() {
  return (
    <section
      id="areas"
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 w-96 h-96 bg-cyan-100 rounded-full blur-[120px] opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-sky-600 font-semibold tracking-widest uppercase">
            Service Coverage
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
            Delivering Across
            <span className="gradient-text">
              {" "}Ahmedabad
            </span>
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Trusted packaged drinking water delivery in key areas
            of Ahmedabad with timely service and dependable support.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-[32px] p-8">

              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-sky-600" />
                <h3 className="text-2xl font-bold">
                  Areas We Serve
                </h3>
              </div>

              <div className="space-y-5">
                {locations.map((location) => (
                  <div
                    key={location.name}
                    className="
                      border
                      border-slate-200
                      rounded-2xl
                      p-5
                      hover:border-sky-300
                      transition
                    "
                  >
                    <h4 className="font-bold text-lg">
                      {location.name}
                    </h4>

                    <p className="text-slate-600 mt-2">
                      {location.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Map Style Card */}

            <div
              className="
                rounded-[36px]
                bg-gradient-to-br
                from-cyan-50
                via-white
                to-blue-100
                p-10
                border
                border-slate-200
                shadow-xl
                min-h-[500px]
                flex
                flex-col
                justify-center
              "
            >

              <div className="absolute top-12 left-12">
                <div className="flex items-center gap-2 text-sky-600">
                  <MapPin />
                  <span className="font-semibold">
                    Thaltej
                  </span>
                </div>
              </div>

              <div className="absolute top-32 right-16">
                <div className="flex items-center gap-2 text-sky-600">
                  <MapPin />
                  <span className="font-semibold">
                    Bodakdev
                  </span>
                </div>
              </div>

              <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 text-sky-600">
                  <MapPin />
                  <span className="font-semibold">
                    Vastrapur
                  </span>
                </div>
              </div>

              {/* Center Circle */}

              <div
                className="
                  mx-auto
                  w-52
                  h-52
                  rounded-full
                  bg-gradient-to-br
                  from-sky-500
                  to-cyan-400
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_60px_rgba(56,189,248,.4)]
                "
              >
                <Truck
                  size={70}
                  className="text-white"
                />
              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom Features */}

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="glass rounded-3xl p-6">
            <Clock3 className="text-sky-600 mb-4" />

            <h4 className="font-bold text-lg">
              Same-Day Delivery
            </h4>

            <p className="text-slate-600 mt-2">
              Fast delivery whenever possible.
            </p>
          </div>

          <div className="glass rounded-3xl p-6">
            <Truck className="text-sky-600 mb-4" />

            <h4 className="font-bold text-lg">
              Reliable Service
            </h4>

            <p className="text-slate-600 mt-2">
              Consistent and trusted supply.
            </p>
          </div>

          <div className="glass rounded-3xl p-6">
            <MapPin className="text-sky-600 mb-4" />

            <h4 className="font-bold text-lg">
              Local Coverage
            </h4>

            <p className="text-slate-600 mt-2">
              Focused service in prime Ahmedabad areas.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}