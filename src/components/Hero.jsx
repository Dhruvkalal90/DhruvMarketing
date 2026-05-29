import { motion } from "framer-motion";
import {
  Droplets,
  Truck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-40">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-100" />

      {/* Glow Effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white shadow-md rounded-full px-4 py-2 mb-8">

              <div className="w-2 h-2 bg-green-500 rounded-full" />

              <span className="text-sm font-medium">
                Trusted Water Supplier Since 2005
              </span>

            </div>

            {/* Heading */}

            <h1 className="font-black text-slate-900 leading-none">

              <span className="block text-5xl md:text-7xl">
                PURE
              </span>

              <span className="block text-5xl md:text-7xl gradient-text">
                WATER
              </span>

              <span className="block text-5xl md:text-7xl">
                DELIVERED
              </span>

              <span className="block text-5xl md:text-7xl">
                FAST.
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 text-lg text-slate-600 max-w-xl leading-relaxed">

              Trusted supplier of packaged drinking water in Ahmedabad for
              over 20 years. Delivering 20L water bottles, chilled water
              jugs and branded packaged drinking water across
              Thaltej, Bodakdev and Vastrapur.

            </p>

            {/* CTA Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://wa.me/919998634688"
                target="_blank"
                rel="noreferrer"
                className="
                  bg-sky-500
                  hover:bg-sky-600
                  text-white
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  flex items-center gap-2
                  transition-all
                  hover:scale-105
                "
              >
                Order on WhatsApp
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+919998634688"
                className="
                  glass
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  hover:scale-105
                  transition-all
                "
              >
                Call Now
              </a>

            </div>

            {/* Quick Stats */}

            <div className="flex flex-wrap gap-10 mt-14">

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  20+
                </h3>

                <p className="text-slate-500">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  3+
                </h3>

                <p className="text-slate-500">
                  Areas Served
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  Same Day
                </h3>

                <p className="text-slate-500">
                  Delivery
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="relative hidden lg:block"
>

            {/* Main Water Circle */}

            <div className="
              mx-auto
              w-[350px]
              h-[350px]
              md:w-[450px]
              md:h-[450px]
              rounded-full
              bg-gradient-to-br
              from-cyan-300
              via-sky-400
              to-blue-500
              flex
              items-center
              justify-center
              shadow-[0_0_80px_rgba(56,189,248,0.45)]
            ">

              <Droplets
                size={160}
                className="text-white"
              />

            </div>

            {/* Floating Cards */}

            <div className="
              absolute
              top-8
              left-0
              glass
              rounded-2xl
              p-4
              shadow-xl
            ">

              <div className="flex items-center gap-3">

                <Truck className="text-sky-500" />

                <div>
                  <h4 className="font-semibold">
                    Fast Delivery
                  </h4>

                  <p className="text-sm text-slate-500">
                    Same Day Service
                  </p>
                </div>

              </div>

            </div>

            <div className="
              absolute
              bottom-10
              left-10
              glass
              rounded-2xl
              p-4
              shadow-xl
            ">

              <div className="flex items-center gap-3">

                <ShieldCheck className="text-green-500" />

                <div>
                  <h4 className="font-semibold">
                    Quality Assured
                  </h4>

                  <p className="text-sm text-slate-500">
                    Hygienic Water
                  </p>
                </div>

              </div>

            </div>

            <div className="
              absolute
              right-0
              top-1/2
              glass
              rounded-2xl
              p-4
              shadow-xl
            ">

              <div className="flex items-center gap-3">

                <Droplets className="text-cyan-500" />

                <div>
                  <h4 className="font-semibold">
                    20L Bottles
                  </h4>

                  <p className="text-sm text-slate-500">
                    Home & Office
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Wave */}

      <div className="absolute bottom-0 left-0 w-full">

        <svg
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L60,218.7C120,213,240,203,360,186.7C480,171,600,149,720,160C840,171,960,213,1080,218.7C1200,224,1320,192,1380,176L1440,160L1440,320L0,320Z"
          />
        </svg>

      </div>

    </section>
  );
}