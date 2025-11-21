'use client';

import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Work from './components/Work';
import Clients from './components/Clients';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Philosophy />
      <Services />
      <Work />
      <Clients />
      <Awards />
      <Contact />
    </main>
  );
}
