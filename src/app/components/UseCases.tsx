"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


type UseCase = {
  id: number;
  title: string;
  description: string;
  dashboard: {
    deploymentStatus: {
      model: string;
      progress: number;
    };
    modelDetails: {
      model: string;
      gpu: string;
      ram: string;
      throughput: string;
    };
    connection: {
      status: string;
      runtime: string;
    };
    chat: {
      userMessage: string;
      modelResponse: string;
      timestamp: string;
      metrics: string;
    };
    devMode: boolean;
  };
};

const useCases: UseCase[] = [
  {
    id: 1,
    title: "AI Startups",
    description: "Bootstrap with your own GPUs.",
    dashboard: {
      deploymentStatus: {
        model: "Mistral-7B (Q4_K)",
        progress: 65,
      },
      modelDetails: {
        model: "Mistral-7B Q4_K deployed",
        gpu: "NVIDIA RTX 3090",
        ram: "6,14 GB / 23,68 GB",
        throughput: "29,5 token/s",
      },
      connection: {
        status: "Connected to RTX 3090",
        runtime: "Running llama.cpp",
      },
      chat: {
        userMessage: "What's the capital of Canada?",
        modelResponse: "The capital of Canada is Ottawa.",
        timestamp: "19:38:01",
        metrics: "[29,7 tok/s, 163 ms, 1348 tok]",
      },
      devMode: true,
    },
  },
  {
    id: 2,
    title: "Researchers",
    description: "Run experiments in a private controllable space.",
    dashboard: {
      deploymentStatus: {
        model: "LLaMA-2-7B (Q2_K)",
        progress: 45,
      },
      modelDetails: {
        model: "LLaMA-2-7B Q2_K deployed",
        gpu: "NVIDIA A100",
        ram: "8,2 GB / 40,0 GB",
        throughput: "45,2 token/s",
      },
      connection: {
        status: "Connected to A100",
        runtime: "Running llama.cpp",
      },
      chat: {
        userMessage: "Explain quantum computing basics",
        modelResponse: "Quantum computing uses quantum mechanical phenomena like superposition and entanglement to process information.",
        timestamp: "14:22:15",
        metrics: "[45,2 tok/s, 89 ms, 2103 tok]",
      },
      devMode: false,
    },
  },
  {
    id: 3,
    title: "Enterprises",
    description: "Host compliant LLMs without touching public cloud.",
    dashboard: {
      deploymentStatus: {
        model: "Gemma-7B (Q4_K_M)",
        progress: 80,
      },
      modelDetails: {
        model: "Gemma-7B Q4_K_M deployed",
        gpu: "NVIDIA H100",
        ram: "12,8 GB / 80,0 GB",
        throughput: "67,3 token/s",
      },
      connection: {
        status: "Connected to H100",
        runtime: "Running llama.cpp",
      },
      chat: {
        userMessage: "Generate a business proposal outline",
        modelResponse: "Here's a comprehensive business proposal outline: Executive Summary, Problem Statement, Proposed Solution...",
        timestamp: "16:45:32",
        metrics: "[67,3 tok/s, 45 ms, 1856 tok]",
      },
      devMode: true,
    },
  },
  {
    id: 4,
    title: "Open-Source Hackers",
    description: "Push the limits of what's possible on your own terms.",
    dashboard: {
      deploymentStatus: {
        model: "DeepSeek-Coder-6.7B (Q4_K_M)",
        progress: 90,
      },
      modelDetails: {
        model: "DeepSeek-Coder-6.7B Q4_K_M deployed",
        gpu: "NVIDIA RTX 4090",
        ram: "9,1 GB / 24,0 GB",
        throughput: "52,8 token/s",
      },
      connection: {
        status: "Connected to RTX 4090",
        runtime: "Running llama.cpp",
      },
      chat: {
        userMessage: "Write a Python function to sort a list",
        modelResponse: "Here's a Python function to sort a list:\n\ndef sort_list(lst):\n    return sorted(lst)",
        timestamp: "20:15:47",
        metrics: "[52,8 tok/s, 78 ms, 124 tok]",
      },
      devMode: true,
    },
  },
];

const DURATION = 6000; // ms between switches

export default function UseCasesRotator({
  auto = true,
  interval = DURATION,
}: { auto?: boolean; interval?: number }) {
  const [idx, setIdx] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  // autoplay with pause-on-hover
  useEffect(() => {
    if (!auto) return;
    let timer: NodeJS.Timeout | undefined;
    const start = () =>
      (timer = setInterval(() => {
        setIdx((i) => (i + 1) % useCases.length);
      }, interval));
    const stop = () => timer && clearInterval(timer);

    const el = wrapRef.current;
    start();
    el?.addEventListener("mouseenter", stop);
    el?.addEventListener("mouseleave", start);
    el?.addEventListener("focusin", stop);
    el?.addEventListener("focusout", start);
    return () => {
      stop();
      el?.removeEventListener("mouseenter", stop);
      el?.removeEventListener("mouseleave", start);
      el?.removeEventListener("focusin", stop);
      el?.removeEventListener("focusout", start);
    };
  }, [auto, interval]);

  const go = (to: number) => {
    if (to === idx) return;
    setIdx((to + useCases.length) % useCases.length);
  };

  

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <section ref={wrapRef} className="px-4 py-20 md:py-24">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <div className="mb-2 flex items-center justify-center gap-2">
          <Image src="/assets/use-case.svg" alt="use-cases" width={16} height={16} />
          <p className="text-secondary-text text-sm uppercase">Use Cases</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-primary-text">
          <span className="text-secondary-text">Built for </span>Developers, Researchers, and Teams
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:space-y-10 space-y-2 flex-1 flex flex-row lg:flex-col overflow-x-auto overflow-y-hidden lg:overflow-x-hidden lg:overflow-y-auto pb-4 lg:pb-0 no-scrollbar">
            {useCases.map((useCase) => (
              <motion.button
                key={useCase.id}
                onClick={() => go(useCase.id - 1)}
                className={`w-full lg:w-full min-w-max lg:min-w-0 text-left text-nowrap px-4 py-2 lg:py-6 rounded-[16px] transition-all duration-300 ${
                  idx === useCase.id - 1
                    ? "bg-primary border-[3px] border-[#0d0d0d] text-white "
                    : "bg-transparent text-secondary-text "
                }`}
                style={{
                  boxShadow: idx === useCase.id - 1 ? "0px 0px 0.1px 1.5px #CFCFCF" : "none"
                }}
                animate={{
                  y: idx === useCase.id - 1 ? 0 : 0,
                  scale: idx === useCase.id - 1 ? 1.02 : 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut"
                }}
              >
                <motion.div 
                  className="font-semibold text-lg mb-1"
                  animate={{
                    y: idx === useCase.id - 1 ? 0 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  {useCase.title}
                </motion.div>
                <AnimatePresence>
                  {idx === useCase.id - 1 && (
                    <motion.div 
                      className="text-sm opacity-90 mt-2 hidden lg:block"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 0.9, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut"
                      }}
                    >
                      {useCase.description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>

          <div className=" flex-[2]">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={useCases[idx].id}
                variants={fadeIn}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full"
              >
                <DashboardCard data={useCases[idx]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}


function DashboardCard({ data }: { data: UseCase }) {
  return (
    <div className="rounded-[30px] border border-[#131313] bg-[#0F0F0F] p-6 h-full">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
            <span className="text-xs text-black">i</span>
          </div>
          <span className="text-sm text-white/80">Deploying:</span>
          <span className="text-sm text-white font-medium">{data.dashboard.deploymentStatus.model}</span>
        </div>
        <div className="w-1/2 bg-white/10 rounded-full h-1">
          <div 
            className="bg-primary h-1 rounded-full transition-all duration-1000"
            style={{ width: `${data.dashboard.deploymentStatus.progress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6 p-2"
       style={{
        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02)), #0F0F0F',
        borderRadius: '25px'
      }}
      >
        <div className="space-y-12 bg-white/2 rounded-[15px] p-4">
          <div className="text-sm text-white font-medium">{data.dashboard.modelDetails.model}</div>
          <div className="space-y-5 text-sm">
            <div className="flex justify-between border-b border-dashed border-white/10 pb-5">
              <span className="text-white/40 text-[15px]">GPU</span>
              <span className="text-white">{data.dashboard.modelDetails.gpu}</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-white/10 pb-5">
              <span className="text-white/40 text-[15px]">RAM</span>
              <span className="text-white">{data.dashboard.modelDetails.ram}</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-white/10 pb-5">
              <span className="text-white/40 text-[15px]">Throughput</span>
              <span className="text-white">{data.dashboard.modelDetails.throughput}</span>
            </div>
          </div>
        </div>

        <div className="space-y-12 bg-white/2	rounded-[15px] p-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm text-white">{data.dashboard.connection.status}</span>
          </div>
          <div className="text-sm text-white/80">{data.dashboard.connection.runtime}</div>
          
          <div className="space-y-5">
            <div className="text-xs text-white/60">{data.dashboard.chat.timestamp}</div>
            <div className="text-sm text-white/80 border-b border-dashed border-white/10 pb-5">
              <span className="text-white/60">User:</span> {data.dashboard.chat.userMessage}
            </div>
            <div className="text-sm text-white/80 border-b border-dashed border-white/10 pb-5">
              <span className="text-white/60">User:</span> {data.dashboard.chat.modelResponse}
            </div>
            <div className="text-xs text-white/50">{data.dashboard.chat.metrics}</div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-full">
        <Image src="/assets/toggle.svg" alt="dev-mode" width={30} height={24} />
        <span className="text-sm text-white">{data.dashboard.devMode ? "Dev Mode: Enabled" : "Prod Mode"}</span>
        </div>
      </div>
    </div>
  );
}
