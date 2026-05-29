import logo from "../assets/dm.png";
import {
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Top Gradient Line */}

      <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      {/* Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-4">

              <div className="bg-white rounded-xl p-2">
                <img
                  src={logo}
                  alt="Dhruv Marketing"
                  className="h-12 w-auto"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Dhruv Marketing
                </h2>

                <p className="text-slate-400">
                  Trusted Since 2005
                </p>
              </div>

            </div>

            <p className="mt-6 text-slate-400 leading-relaxed max-w-lg">
              Trusted supplier of packaged drinking water in Ahmedabad
              for over 20 years. Delivering quality water bottles,
              chilled water jugs and bulk water solutions for homes,
              offices and events.
            </p>

            {/* Contact */}

            <div className="mt-8 flex flex-col gap-4">

              <a
                href="tel:+919998634688"
                className="
                  flex items-center gap-3
                  text-slate-300
                  hover:text-white
                  transition
                "
              >
                <Phone size={18} />
                +91 99986 34688
              </a>

              <a
                href="https://wa.me/919998634688"
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-3
                  text-slate-300
                  hover:text-white
                  transition
                "
              >
                <MessageCircle size={18} />
                WhatsApp Support
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-bold text-lg mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                ["Home", "#"],
                ["Services", "#services"],
                ["Areas", "#areas"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="
                      text-slate-400
                      hover:text-white
                      transition
                      flex items-center gap-2
                    "
                  >
                    {label}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Service Areas */}

          <div>

            <h3 className="font-bold text-lg mb-6">
              Service Areas
            </h3>

            <ul className="space-y-4">

              {[
                "Thaltej",
                "Bodakdev",
                "Vastrapur",
              ].map((area) => (
                <li
                  key={area}
                  className="
                    flex items-center gap-2
                    text-slate-400
                  "
                >
                  <MapPin size={16} />
                  {area}
                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* Divider */}

        <div className="h-px bg-slate-800 my-12" />

        {/* Bottom Bar */}

        <div className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
        ">

          <p className="text-slate-500 text-sm">
            © {year} Dhruv Marketing. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Serving Ahmedabad with trusted water delivery.
          </p>

        </div>

      </div>
    </footer>
  );
}