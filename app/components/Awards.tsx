'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    { count: "34", label: "FWA Awards", color: "from-purple-600 to-pink-600" },
    { count: "18", label: "Awwwards", color: "from-blue-600 to-cyan-600" },
    { count: "12", label: "Webby Awards", color: "from-pink-600 to-orange-600" },
    { count: "200+", label: "Happy Clients", color: "from-green-600 to-teal-600" },
  ];

  return (
    <section ref={ref} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">AWARD-WINNING</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Recognition from the world's most prestigious design organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-center"
            >
              <div className="mb-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                  className={`text-6xl md:text-8xl font-bold bg-gradient-to-r ${award.color} bg-clip-text text-transparent`}
                >
                  {award.count}
                </motion.div>
              </div>
              <p className="text-lg text-gray-400 font-semibold">{award.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl text-gray-300 italic">
            "Excellence is not a destination, it's a <span className="gradient-text-2 font-bold">continuous journey</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
