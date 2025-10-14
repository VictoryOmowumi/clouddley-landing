"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const nav_Items = [
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Docs",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Community",
    href: "/community",
  },
];
const sub_Items = [
  {
    label: "How it works",
    href: "/how-it-works",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Use cases",
    href: "/use-cases",
  },
  {
    label: "Integration",
    href: "/integration",
  },
  {
    label: "Docs",
    href: "/docs",
  },
  {
    label: "Changelog",
    href: "/changelog",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.div 
      className="flex flex-col sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center lg:px-28 px-4 py-2 backdrop-blur-2xl bg-background/80 border-b border-white/5">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/assets/clouddley-logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-[194.65px] h-[62px] sm:w-[150px] sm:h-[48px]"
          />
        </motion.div>
        
        <motion.div 
          className="hidden lg:flex gap-7.5 items-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {nav_Items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <Link
                href={item.href || "#"}
                className="text-primary-text text-sm font-normal hover:text-white transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="hidden lg:flex gap-4 items-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact-sales"
              className="relative text-primary-text text-sm rounded-full px-4 py-2 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/get-started"
              className="relative text-primary-text text-sm rounded-full px-4 py-2 bg-primary border-2 border-white/20 backdrop-blur-sm hover:bg-primary/90 transition-all duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={toggleMobileMenu}
          className="lg:hidden text-primary-text p-2"
          aria-label="Toggle mobile menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiOutlineX size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiOutlineMenuAlt2 size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex flex-col h-full"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex justify-between items-center p-4 border-b border-white/10">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Image
                    src="/assets/clouddley-logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-[150px] h-[48px]"
                  />
                </motion.div>
                <motion.button
                  onClick={toggleMobileMenu}
                  className="text-primary-text p-2"
                  aria-label="Close mobile menu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <HiOutlineX size={24} />
                </motion.button>
              </div>

              <div className="flex-1 flex flex-col justify-center px-6 space-y-8 overflow-y-auto">
                <motion.div 
                  className="space-y-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h3 className="text-primary-text text-lg font-semibold mb-4">Navigation</h3>
                  {nav_Items.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                      <Link
                        href={item.href || "#"}
                        className="block text-primary-text text-lg font-normal hover:text-white transition-all duration-300 py-2"
                        onClick={toggleMobileMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  className="space-y-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <h3 className="text-primary-text text-lg font-semibold mb-4">Resources</h3>
                  {sub_Items.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block text-secondary-text text-base font-normal hover:text-white transition-all duration-300 py-2"
                        onClick={toggleMobileMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  className="flex flex-col gap-4 pt-8 pb-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contact-sales"
                      className="text-center text-primary-text text-sm rounded-full px-6 py-3 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                      onClick={toggleMobileMenu}
                    >
                      Contact Sales
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/get-started"
                      className="text-center text-primary-text text-sm rounded-full px-6 py-3 bg-primary border-2 border-white/20 backdrop-blur-sm hover:bg-primary/90 transition-all duration-300"
                      onClick={toggleMobileMenu}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="hidden lg:flex max-h-[44px] bg-primary items-center justify-between py-3.5 lg:px-28 px-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.h2 
          className="text-primary-text text-[1.4rem] font-semibold"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          ClouddleyAI
        </motion.h2>
        <motion.div 
          className="flex gap-7.5 items-center"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          {sub_Items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-primary-text text-sm font-normal hover:text-white transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
