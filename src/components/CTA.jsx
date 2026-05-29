import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-cyan-500 to-blue-700" />

      {/* Glow Effects */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            glass
            rounded-[40px]
            p-10 md:p-16
            text-center
            border
            border-white/20
          "
        >

          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              bg-white/20
              text-sky-700
              text-sm
              font-medium
              backdrop-blur-md
            "
          >
            🚚 Same Day Delivery Available
          </span>

          {/* Heading */}

          <h2
            className="
              mt-8
              text-4xl
              md:text-6xl
              font-black
              text-sky-700
              leading-tight
            "
          >
            Need Water Delivery
            <br />
            Today?
          </h2>

          {/* Description */}

          <p
            className="
              mt-6
              text-lg
              text-sky-700
              max-w-2xl
              mx-auto
            "
          >
            Trusted packaged drinking water supplier
            serving Thaltej, Bodakdev and Vastrapur
            with fast, reliable and hygienic delivery.
          </p>

          {/* Phone */}

          <div className="mt-10">

            <p className="text-sky-700 mb-2">
              Call Us
            </p>

            <a
              href="tel:+919998634688"
              className="
                text-3xl
                md:text-5xl
                font-black
                text-sky-700
                hover:text-cyan-100
                transition
              "
            >
              +91 99986 34688
            </a>

          </div>

          {/* Buttons */}

          <div
            className="
              mt-12
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-4
            "
          >

            <a
              href="https://wa.me/919998634688"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                bg-white
                text-sky-700
                font-bold
                px-8
                py-4
                rounded-2xl
                hover:scale-105
                transition-all
                shadow-xl
              "
            >
              <MessageCircle size={20} />
              Order on WhatsApp
              <ArrowRight size={18} />
            </a>

            <a
              href="tel:+919998634688"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                bg-white/15
                text-sky-700
                font-bold
                px-8
                py-4
                rounded-2xl
                border
                border-white/20
                hover:bg-white/30
                transition-all
              "
            >
              <Phone size={20} />
              Call Now
            </a>

          </div>

          {/* Trust Row */}

          <div
            className="
              mt-14
              grid
              md:grid-cols-3
              gap-6
            "
          >

            <div className="text-center">
              <h3 className="text-sky-700 text-2xl font-bold">
                20+
              </h3>

              <p className="text-sky-700">
                Years of Trust
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-sky-700 text-2xl font-bold">
                Same Day
              </h3>

              <p className="text-sky-700">
                Delivery Service
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-sky-700 text-2xl font-bold">
                3+
              </h3>

              <p className="text-sky-700">
                Areas Covered
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}