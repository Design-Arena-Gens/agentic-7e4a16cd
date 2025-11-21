'use client';

import { motion } from 'framer-motion';

export default function Clients() {
  const clients = [
    "GOOGLE", "MICROSOFT", "APPLE", "NIKE", "ADIDAS",
    "SPOTIFY", "NETFLIX", "TESLA", "META", "AMAZON",
    "SAMSUNG", "INTEL", "ORACLE", "ADOBE", "IBM"
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text-3">TRUSTED BY GLOBAL LEADERS</span>
        </h2>
      </div>

      {/* Infinite scroll marquee */}
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="text-4xl md:text-6xl font-bold text-white/20 hover:text-white/60 transition-colors duration-300"
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-block"
        >
          <p className="text-xl text-gray-400 mb-4">
            Join 200+ companies transforming their brand experiences
          </p>
        </motion.div>
      </div>
    </section>
  );
}
