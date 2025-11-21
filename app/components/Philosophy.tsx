'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text-3">OUR PHILOSOPHY</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Neuroscience-Driven",
              description: "We design experiences that speak directly to the nervous system, creating deep emotional connections that last.",
              icon: "🧠"
            },
            {
              title: "AI-Enhanced",
              description: "Leveraging cutting-edge artificial intelligence to push creative boundaries and deliver unprecedented results.",
              icon: "🤖"
            },
            {
              title: "Human-Centered",
              description: "Technology serves humanity. Every pixel, every interaction is crafted with the end user's experience in mind.",
              icon: "❤️"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-6xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <blockquote className="text-3xl md:text-4xl font-light italic text-gray-300 max-w-4xl mx-auto">
            "Design is not just what it looks like and feels like. <span className="gradient-text-2 font-bold">Design is how it makes you feel.</span>"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
