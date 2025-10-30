"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowLeft, HiHome, HiSearch } from "react-icons/hi";

export default function NotFound() {
  return (
    <div className=" min-h-screen bg-background flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Main Content */}
      <motion.div 
        className="text-center max-w-2xl mx-auto relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* 404 Number */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-[12rem] md:text-[16rem] font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary/80 to-primary/60 leading-none">
            404
          </h1>
          <motion.div
            className="absolute inset-0 text-[12rem] md:text-[16rem] font-bold text-primary/20 blur-sm"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            404
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-text mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-secondary-text mb-8 max-w-lg mx-auto">
            The page you&apos;re looking for seems to have vanished into the cloud. 
            Don&apos;t worry, even the best AI models sometimes get lost!
          </p>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute -top-10 -left-10 w-20 h-20 opacity-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Image
            src="/assets/ai.svg"
            alt="AI"
            width={80}
            height={80}
            className="w-full h-full"
          />
        </motion.div>

        <motion.div
          className="absolute -bottom-10 -right-10 w-16 h-16 opacity-20"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Image
            src="/assets/ai.svg"
            alt="Cloud"
            width={64}
            height={64}
            className="w-full h-full"
          />
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
            >
              <HiHome size={20} />
              Go Home
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2 border-2 border-white/20 text-primary-text px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <HiArrowLeft size={20} />
              Go Back
            </Link>
          </motion.div>
        </motion.div>

        {/* Search Suggestion */}
        <motion.div
          className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <HiSearch className="text-primary" size={24} />
            <h3 className="text-lg font-semibold text-primary-text">
              Looking for something specific?
            </h3>
          </div>
          <p className="text-secondary-text text-sm">
            Try searching for our main features: <span className="text-primary">AI Models</span>, 
            <span className="text-primary"> GGUF Support</span>, or 
            <span className="text-primary"> Use Cases</span>
          </p>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          className="mt-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-xs text-white/40 italic mb-2">
            Fun fact: Even the most advanced AI models have a 0.1% chance of getting lost in the cloud! ☁️
          </p>
        </motion.div>
      </motion.div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
