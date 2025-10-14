"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const steps = [
  {
    id: 1,
    step: 1,
    title: "Connect",
    description:
      "Install our lightweight agent on your GPU machine (bare-metal, cloud VM, or desktop). We handle setup and monitoring.",
    icon: "/assets/plug-socket.svg",
  },
  {
    id: 2,
    step: 2,
    title: "Pick a Model",
    description:
      "Choose from popular open-source models like LLaMA, Mistral, Mixtral, and more. Then optionally fine-tune with your own dataset.",
    icon: "/assets/chip.svg",
  },
  {
    id: 3,
    step: 3,
    title: "Deploy & Chat",
    description:
      "Turn your machine into an OpenAI-compatible API endpoint. Chat with your model, integrate it into apps, or use it in your team workflows.",
    icon: "/assets/rocket.svg",
  },
];

const HowItWorks = () => {
  return (
    <div className="px-4 py-20 md:py-24">
      <motion.div 
        className="flex flex-col gap-2 mb-16"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="flex items-center gap-1"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            whileInView={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/align-selection-hiw.svg"
              alt="how-it-works"
              width={16}
              height={16}
            />
          </motion.div>
          <p className="text-secondary-text text-sm font-light">How It Works</p>
        </motion.div>
        <motion.h2 
          className="text-primary-text text-3xl sm:text-4xl font-semibold"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary-text">Simple Setup.</span> Full
          Control.
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 h-full lg:h-[600px] gap-8 border border-secondary-text/20 rounded-lg overflow-hidden">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex flex-col h-full justify-between items-center text-center relative even:border-l even:border-r even:border-secondary-text/20 p-6 sm:p-8 bg-background/50 hover:bg-background/80 transition-colors duration-300"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div 
              className="text-primary-text text-lg font-medium mb-6 w-full text-left flex flex-col gap-1"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary-text text-sm">
                Step {step.step}
              </span>
              <span className="text-white text-xl font-light">
                {step.title}
              </span>
            </motion.div>

            <motion.div 
              className="w-25 h-25 my-20 flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Image
                src={step.icon}
                alt={step.title}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </motion.div>

            <motion.p 
              className="text-white font-light text-lg sm:text-xl text-left mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
              viewport={{ once: true }}
            >
              {step.description}
            </motion.p>

            <motion.div 
              className="flex justify-end w-full"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
            >
              <Image src="/assets/arrow.svg" alt="arrow-right" width={20} height={14} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
