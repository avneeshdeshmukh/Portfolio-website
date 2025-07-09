'use client'

import AboutMe from "@/components/AboutMe";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Socials from "@/components/Socials";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: false, 
    });
  }, []);

  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <Socials />
      <footer className="bg-[#121212] text-gray-400 text-sm py-6 text-center border-t border-neutral-800">
        <p>&copy; {new Date().getFullYear()} Avneesh Deshmukh. All rights reserved.</p>
      </footer>

    </>
  );
}
