'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      category: "EXPERIENTIAL",
      items: [
        "Spatial Design",
        "Interactive Installations",
        "Immersive Experiences",
        "Event Production",
        "Exhibition Design"
      ],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      category: "DIGITAL",
      items: [
        "Web Development",
        "UX/UI Design",
        "3D Modeling",
        "Motion & Animation",
        "AR/VR Experiences"
      ],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      category: "BRAND",
      items: [
        "Brand Identity",
        "Campaign Strategy",
        "Content Production",
        "Social Media",
        "Marketing Strategy"
      ],
      gradient: "from-pink-600 to-orange-600"
    }
  ];

  return (
    <section id="services" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">WHAT WE DO</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Full-spectrum creative services that transform your vision into reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  className={`text-3xl font-bold mb-8 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                >
                  {service.category}
                </motion.h3>

                <ul className="space-y-4">
                  {service.items.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.2 + j * 0.1 }}
                      className="flex items-center text-gray-300 group-hover:text-white transition-colors"
                    >
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl text-gray-400 mb-8">
            Can't find what you're looking for?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            Let's Talk
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
