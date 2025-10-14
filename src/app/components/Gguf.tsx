"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


type Feature = {
  id: number;
  title: string;
  blurb: string;
  icon: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Full Quantization Support",
    blurb:
      "Supports all major quant levels: Q2_K, Q3_K_M, Q4_0, Q5_1, Q6_K, Q8_0, F16 etc. We'll auto-detect and optimize for your GPU's memory.",
    icon: "/assets/sliders-horizontal.svg",
  },
  {
    id: 2,
    title: "Model-Aware Runtime",
    blurb:
      "We parse the model type, token limits, quantization, and context size, and set the best parameters out of the box.",
    icon: "/assets/ai-brain.svg",
  },
  {
    id: 3,
    title: "GGUF Native",
    blurb:
      "Powered by llama.cpp under the hood, no container setup, no CLI wrangling. Just deploy.",
    icon: "/assets/computer-terminal.svg",
  },
];


export default function GgufSection() {
  return (
    <section className="px-4 py-20 md:py-24">
      <motion.div 
        className="mx-auto max-w-md text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="flex items-center justify-center gap-2 mb-3"
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
            <Image src="/assets/gpu.svg" alt="gguf" width={16} height={16} />
          </motion.div>
          <p className="text-xs text-secondary-text uppercase">
            Run GGUF models from Hugging Face
          </p>
        </motion.div>

        <motion.h2 
          className="text-3xl leading-tight text-primary-text md:text-4xl"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Deploy{" "}
          <span className="text-secondary-text">
            Any GGUF. Any Quant. Your GPU.
          </span>
        </motion.h2>

        <motion.p 
          className="mx-auto mt-4 max-w-2xl text-secondary-text"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Bring any Hugging Face–hosted GGUF model — from Q2_K to Q8_0 — and run
          it on your connected CPU or GPU, optimized with llama.cpp.
        </motion.p>
      </motion.div>

      <motion.div 
        className="mx-auto mt-12 max-w-6xl"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 overflow-hidden rounded-[14px] border border-white/10 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.article
              key={f.id}
              className={[
                "relative flex min-h-[600px] flex-col bg-[#0E0F10] p-6 md:p-8 hover:bg-[#0E0F10]/80 transition-colors duration-300 group",
                i < features.length - 1 ? "md:border-r md:border-white/10" : "",
              ].join(" ")}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div 
                className="text-sm text-secondary-text"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-1 font-medium tabular-nums">
                  {String(f.id).padStart(2, "0")}
                </div>
                <div className="text-white">{f.title}</div>
              </motion.div>

              <motion.div 
                className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="mx-auto grid h-36 w-36 place-items-center rounded-2xl bg-white/0 group-hover:bg-white/5 transition-colors duration-300">
                  <Image
                    src={f.icon}
                    alt={f.title}
                    width={100}
                    height={100}
                    className="h-16 w-16 text-white/90"
                  />
                </div>
              </motion.div>

              <motion.p 
                className="mt-auto max-w-md text-sm text-white"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.2 }}
                viewport={{ once: true }}
              >
                {f.blurb}
              </motion.p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
