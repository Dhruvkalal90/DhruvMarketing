import { motion } from "framer-motion";
import { CalendarDays, MapPin, Truck, PhoneCall } from "lucide-react";

const stats = [
    {
        number: "20+",
        title: "Years of Trust",
        icon: CalendarDays,
    },
    {
        number: "1000+",
        title: "Happy Deliveries",
        icon: Truck,
    },
    {
        number: "3+",
        title: "Areas Covered",
        icon: MapPin,
    },
    {
        number: "24/7",
        title: "Order Support",
        icon: PhoneCall,
    },
];

export default function Stats() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-cyan-100 rounded-full blur-[120px] opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-sky-600 font-semibold tracking-wider uppercase">
                        Why Customers Trust Us
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
                        Serving Ahmedabad
                        <span className="gradient-text"> For Decades</span>
                    </h2>

                    <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
                        Reliable packaged drinking water supply with timely delivery,
                        quality assurance and trusted service across Ahmedabad.
                    </p>
                </motion.div>

                {/* Stats Grid */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((item, index) => {
                        const Icon = item.icon;

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
                                    y: -8,
                                }}
                                className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-3xl
                                        border
                                        border-slate-200
                                        bg-white
                                        p-8
                                        shadow-sm
                                        hover:shadow-xl
                                        transition-all
                                        "
                            >
                                {/* Hover Glow */}

                                <div
                                    className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    bg-gradient-to-br
                    from-cyan-50
                    to-blue-50
                  "
                                />

                                <div className="relative z-10">
                                    <div
                                        className="
                      w-14 h-14
                      rounded-2xl
                      bg-cyan-100
                      flex
                      items-center
                      justify-center
                      mb-6
                    "
                                    >
                                        <Icon className="text-sky-600" />
                                    </div>

                                    <h3 className="text-4xl font-black text-slate-900">
                                        {item.number}
                                    </h3>

                                    <p className="mt-2 text-slate-600">{item.title}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
