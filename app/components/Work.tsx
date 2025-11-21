'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Immersive Brand Experience",
      client: "Fortune 500 Tech Company",
      description: "360° interactive installation combining physical space with digital projection mapping",
      tags: ["Experiential", "3D", "Interactive"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "AI-Powered Commerce Platform",
      client: "Global Retail Leader",
      description: "Next-generation e-commerce experience with ML-driven personalization",
      tags: ["Digital", "AI/ML", "UX/UI"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Global Brand Rebrand",
      client: "International Sports Brand",
      description: "Complete brand identity overhaul across digital and physical touchpoints",
      tags: ["Brand", "Strategy", "Design"],
      gradient: "from-pink-600 to-orange-600"
    },
    {
      title: "Museum Interactive Exhibition",
      client: "Metropolitan Museum",
      description: "AR-enhanced exhibition bringing historical artifacts to life",
      tags: ["Experiential", "AR", "Education"],
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "Neural Interface Dashboard",
      client: "HealthTech Startup",
      description: "Intuitive data visualization platform for complex medical data",
      tags: ["Digital", "Data Viz", "Healthcare"],
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      title: "Sustainability Campaign",
      client: "Global NGO",
      description: "Multi-channel awareness campaign reaching 50M+ people worldwide",
      tags: ["Brand", "Campaign", "Social Impact"],
      gradient: "from-yellow-600 to-red-600"
    }
  ];

  return (
    <section id="work" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text-2">SELECTED WORK</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Projects that pushed boundaries and delivered exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-white/20`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>

                  <p className="text-purple-400 mb-4 text-sm font-semibold">
                    {project.client}
                  </p>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <motion.div
                    className="flex items-center text-sm font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      View Case Study
                    </span>
                    <span className="ml-2">→</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
