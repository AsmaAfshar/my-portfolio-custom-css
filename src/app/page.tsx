"use client";

import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import About from '@/components/About';
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Page = () => {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay:100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, [] );
  return (
    <div>
      <main>
        <Hero />
        <Skills />
        <Contact />
        <About />
      </main>
    </div>
  )
}

export default Page;
