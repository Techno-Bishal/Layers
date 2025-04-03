'use client'
import { useState } from "react";
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import { Menu, X } from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="py-4 lg:py-8 sticky top-0 z-50 ">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 items-center md:pr-2 relative bg-neutral-950/70 backdrop-blur-lg">
        
          <div>
            <Image src={logoImage} alt="logo" className="h-9 w-auto md:h-auto" />
          </div>

          
          <div className="hidden lg:flex justify-center items-center">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <Link href={link.href} key={link.label} className="hover:text-lime-400 duration-300">
                  {link.label}
                </Link> 
              ))}
            </nav>
          </div>

          
          <div className="flex justify-end gap-4">
           
            <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <Menu />
            </button>

           
            <Button variant="secondary" className="hidden items-center md:inline-flex">
              Login
            </Button>
            <Button variant="primary" className="hidden items-center md:inline-flex">
              Signup
            </Button>
          </div>
        </div>
      </div>

     
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)} 
      />

      <div
        className={`fixed top-0 right-0 z-10 h-full w-3/4 sm:w-1/2 bg-neutral-900 shadow-lg border-l border-white/15 p-6 flex flex-col items-center gap-6 transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        <button className="absolute top-8 right-6" onClick={() => setIsMenuOpen(false)}>
          <X />
        </button>

       
        <nav className="flex flex-col items-center gap-6 pt-10 font-medium">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="text-white text-lg hover:text-lime-400"
              onClick={() => setIsMenuOpen(false)} 
            >
              {link.label}
            </Link>
          ))}
        </nav>

       
        <div className="flex flex-col items-center gap-4 w-full">
          <Button variant="secondary" className="w-3/4 text-center">
            Login
          </Button>
          <Button variant="primary" className="w-3/4 text-center">
            Signup
          </Button>
        </div>
      </div>
    </section>
  );
}
