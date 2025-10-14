"use client";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import Image from "next/image";
import { MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";


const features = [
    {
        image: "/assets/shield.svg",
        text: "Your data. Your model. Your machine"
    },
    {
        image: "/assets/energy.svg",
        text: "Go from GPU to API in under 10 mins"
    },
    {
        image: "/assets/cpu-charge.svg",
        text: "No queues. No wait. Instant fine-tuning"
    }
]

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full px-4 py-20 md:py-24 justify-between hero-bg">
      <motion.div 
        className="flex flex-col justify-center gap-4 flex-[0.6]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
         <motion.div 
           className="rounded-full w-max flex items-center justify-center p-px" 
           style={{
             background: 'linear-gradient(283.9deg, rgba(65, 134, 231, 0) 78.13%, rgba(65, 134, 231, 0) 89.21%, #4186E7 99.89%)'
           }}
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.6, delay: 0.2 }}
         >
          <div className="flex w-max bg-white/5 p-4 rounded-full gap-2 items-center">
            Clouddley AI
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/assets/ai.svg"
                alt="ai"
                width={22}
                height={22}
                className=""
              />
            </motion.div>
          </div>
        </motion.div>
        <motion.h2 
          className="text-4xl lg:text-[50px] font-bold text-primary-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-secondary-text">Power Your Own </span>
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            GPU
          </motion.span>
          <span className="text-secondary-text"> into a Private </span>
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            AI Supernode
          </motion.span>
        </motion.h2>
        <motion.p 
          className="text-secondary-text text-[22px] lg:text-[22px] text-lg sm:text-xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Run open source models, Fine Tune them on your own hardware, and chat
          with them via OpenAI-compatible APIs. Your machine. Your control.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button 
            className="btn-primary text-white px-5.5 py-4.5 rounded-full w-max"
            style={{
              boxShadow:'0px 0px 10px 1.5px #4186E74D'
            }}
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px 2px #4186E74D' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Connect Your GPU
          </motion.button>
          <motion.button 
            className="flex items-center gap-2 text-secondary-text hover:text-white transition-colors duration-300"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            See How It Works
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <MdChevronRight />
            </motion.div>
          </motion.button>
        </motion.div>
        <motion.div 
          className="flex flex-col gap-6.5 mt-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
            {features.map((feature, index) => (
                <motion.div 
                  className="flex items-center gap-2 text-secondary-text" 
                  key={feature.text}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 5, color: "#e3e8ef" }}
                >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <Image src={feature.image} alt={feature.text} width={22} height={22} />
                    </motion.div>
                    <p>{feature.text}</p>
                </motion.div>
            ))}
        </motion.div>
      </motion.div>
      <motion.div 
        className="flex-[1] items-center justify-center flex mt-8 lg:mt-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-full"
        >
          <HeroCarousel />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
