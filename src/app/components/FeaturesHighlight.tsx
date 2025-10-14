"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Bring Your Own Compute",
    description: "You stay in control — no hosting fees or vendor lock-in.",
    icon: "/assets/features-highlight/plug-socket.svg"
  },
  {
    id: 2,
    title: "Open-Source First",
    description: "Train and deploy LLaMA, Mistral, Mixtral, and other top models.",
    icon: "/assets/features-highlight/puzzle.svg"
  },
  {
    id: 3,
    title: "OpenAI-Compatible API",
    description: "Plug into LangChain, Llamaindex, Flowise, and more with zero code changes.",
    icon: "/assets/features-highlight/link.svg"
  },
  {
    id: 4,
    title: "Hugging Face Integration",
    description: "Access to over 45k hugging face models at your fingertips.",
    icon: "/assets/features-highlight/share-knowledge.svg"
  },
  {
    id: 5,
    title: "Fine-Tuning UI",
    description: "Monitor training, adjust configs, visualize metrics — all from the dashboard.",
    icon: "/assets/features-highlight/waterfall-up.svg",
    comingSoon: true
  },
  {
    id: 6,
    title: "Full Privacy & Data Sovereignty",
    description: "We never store your data or models. Everything stays on your machine.",
    icon: "/assets/features-highlight/square-lock.svg"
  }
];

const FeaturesHighlight = () => {
  return (
    <section className="px-4 py-20 md:py-24">
     <motion.div 
       className="flex flex-col items-center gap-2.5 mb-16 text-center max-w-2xl mx-auto"
       initial={{ y: 50, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.6 }}
       viewport={{ once: true }}
     >
        <motion.div 
          className="flex items-center gap-1 opacity-80"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.8 }}
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
              src="/assets/grid.svg"
              alt="features-highlight"
              width={16}
              height={16}
            />
          </motion.div>
          <p className="text-secondary-text text-sm font-light uppercase">Features Highlight</p>
        </motion.div>
        <motion.h2 
          className="text-primary-text text-3xl sm:text-4xl font-semibold"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary-text">Everything You Need to Run and Tune Models, </span>On Your Own GPU
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((feature, index) => {
          return (
            <motion.div
              key={feature.id}
              className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:bg-background/20 rounded-lg group"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div 
                className="features-highlight-icon mb-6 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </motion.div>

              <motion.div 
                className="flex items-center gap-1 mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white text-lg sm:text-xl font-medium">
                  {feature.title}
                </h3>
                {feature.comingSoon && (
                  <motion.span 
                    className="bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    Coming Soon
                  </motion.span>
                )}
              </motion.div>

              <motion.p 
                className="text-secondary-text text-lg sm:text-xl"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          );
        })}
      </div>

      
    </section>
  );
};

export default FeaturesHighlight;