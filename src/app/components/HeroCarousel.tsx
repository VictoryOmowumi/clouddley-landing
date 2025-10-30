"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MdCheck } from "react-icons/md"; 

type PillState = "hidden" | "spinning" | "success";

function SpinnerPill({
  state,
  text = "Connected successfully to your dashboard",
}: {
  state: PillState;
  text?: string;
}) {
  if (state === "hidden") return null;

  const base =
    "box-border flex items-center justify-center gap-3 rounded-full border-2 " +
    "border-[#202026] px-5 h-[54px] min-w-[200px] " +
    "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03),0_8px_28px_-10px_rgba(0,0,0,0.45)]";

  return (
    <div
      className={base}
      style={{
        background:
          "linear-gradient(175.74deg, rgba(24,24,28,0) 3.46%, rgba(152,162,179,0.10) 137.82%), #18181C",
      }}
    >
      <AnimatePresence>
        {state === "spinning" && (
          <motion.div
            key="spin"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="relative h-2 w-2 rounded-full"
          >
            <span className="absolute inset-[-10px] rounded-full border-2 border-white/10 border-t-white/80 animate-spin" />
          </motion.div>
        )}

        {state === "success" && (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 6 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 0.1 },
            }}
            exit={{ opacity: 0, y: -6, transition: { duration: 0.2 } }}
            className="flex items-center gap-3"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#1F8F4D]">
              <MdCheck className="h-4 w-4 text-white" />
            </span>
            <span className="text-white text-[16px]">{text}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
const aiModels = [
  {
    id: 1,
    name: "Mistral 7B",
    description: "Fast and efficient decoder-only model.",
    logo: "/assets/mistral.png",
    format: "GGUF",
    source: "TheBloke/Mistral-7B-Instruct-v0.1",
    quantization: "Q4_0",
    contextWindow: "32K tokens",
    runtime: "llama.cpp",
    ramRequirement: "~6.2GB",
  },
  {
    id: 2,
    name: "LLaMA 3",
    description: "Meta's powerful open-weight foundation model.",
    logo: "/assets/llama.png",
    format: "GGUF",
    source: "TheBloke/Llama-3-8B-Instruct-GGUF",
    quantization: "Q4_0",
    contextWindow: "128K tokens",
    runtime: "llama.cpp",
    ramRequirement: "~5.4GB",
  },
  {
    id: 3,
    name: "DeepSeek-VL",
    description: "Multimodal model capable of vision + language tasks.",
    logo: "/assets/deepseek.png",
    format: "GGUF",
    source: "TheBloke/DeepSeek-VL-7B-Instruct-GGUF",
    quantization: "Q4_0",
    contextWindow: "32K tokens",
    runtime: "llama.cpp",
    ramRequirement: "~4.5GB",
  },
  {
    id: 4,
    name: "Gemma",
    description: "Google's instruction-tuned LLM with great reasoning.",
    logo: "/assets/gemma.png",
    format: "GGUF",
    source: "TheBloke/Gemma-7B-Instruct-GGUF",
    quantization: "Q4_0",
    contextWindow: "8K tokens",
    runtime: "llama.cpp",
    ramRequirement: "~5.2GB",
  },
  {
    id: 5,
    name: "Phi-3",
    description:
      "Microsoft's small but powerful transformer for tight environments.",
    logo: "/assets/phi.png",
    format: "GGUF",
    source: "TheBloke/Phi-3-mini-4k-instruct-GGUF",
    quantization: "Q4_0",
    contextWindow: "4K tokens",
    runtime: "llama.cpp",
    ramRequirement: "~2.3GB",
  },
];

const slide = {
  initial: (dir: number) => ({ x: dir > 0 ? 24 : -24, opacity: 0 }),
  animate: { x: 0, opacity: 1, transition: { duration: 0.28 } },
  exit: (dir: number) => ({
    x: dir > 0 ? -24 : 24,
    opacity: 0,
    transition: { duration: 0.22 },
  }),
};

export default function HeroCarousel() {
  const [index, setIndex] = useState(0); // 0=Connect, 1=Deploy, 2=Chat
  const [dir, setDir] = useState(1);
  const [selectedModel, setSelectedModel] = useState(aiModels[0]);
  const [deployStage, setDeployStage] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % 3; // 0, 1, 2, then back to 0
        setDir(nextIndex > prevIndex ? 1 : -1);
        return nextIndex;
      });
    }, 7000); // 7 seconds per step to give more time for deploy success

    return () => clearInterval(interval);
  }, []);

  // Handle deploy step micro-interactions
  useEffect(() => {
    if (index !== 1) return;
    setDeployStage(0);
    const t1 = setTimeout(() => setDeployStage(1), 1500);
    const t2 = setTimeout(() => setDeployStage(2), 3500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [index]);

  // Keep model selection consistent during deploy flow
  useEffect(() => {
    if (index === 1 && deployStage >= 1) setSelectedModel(aiModels[0]);
  }, [index, deployStage]);

  return (
    <div className="w-full max-w-[650px] h-max rounded-[30px] border border-[#131313] bg-[#0F0F0F] p-3 mx-auto">
      {/* header */}
      <div className="rounded-xl bg-[#191919] px-4 py-3">
        <StepNav
          index={index}
          onStep={(to) => {
            setDir(to > index ? 1 : -1);
            setIndex(to);
          }}
        />
      </div>

      {/* body */}
      <div className="rounded-b-xl bg-[#121212] p-5 h-[calc(650px-120px)] min-h-[400px] sm:min-h-[500px]">
        <AnimatePresence initial={false} custom={dir} mode="wait">
          {index === 0 && (
            <motion.div
              key="connect"
              variants={slide}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={dir}
            >
              <ConnectView onConnected={() => {}} />
            </motion.div>
          )}

          {index === 1 && (
            <motion.div
              key="deploy"
              variants={slide}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={dir}
            >
              <DeployMicro
                stage={deployStage}
                models={aiModels}
                selected={selectedModel}
                onSelect={setSelectedModel}
              />
            </motion.div>
          )}

          {index === 2 && (
            <motion.div
              key="chat"
              variants={slide}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={dir}
            >
              <ChatMicro />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}


function StepNav({
  index,
  onStep,
}: {
  index: number;
  onStep: (to: number) => void;
}) {
  const steps = [
    { label: "Connect", key: "connect" },
    { label: "Deploy", key: "deploy" },
    { label: "Chat", key: "chat" },
  ];

  // TODO: Implement manual navigation
  void onStep;

  return (
    <div className="flex justify-center gap-2">
      {steps.map((step, i) => (
        <div
          key={step.key}
          className={`text-sm flex items-center gap-2 font-normal transition-colors uppercase duration-300 ${
            i === index ? "text-primary-text" : "text-secondary-text"
          }`}
        >
          {step.label}
          {i < steps.length - 1 && (
            <span className="text-secondary-text">→</span>
          )}
        </div>
      ))}
    </div>
  );
}


function ConnectView({ onConnected }: { onConnected: () => void }) {
  const [tick, setTick] = useState(0);
  const [pill, setPill] = useState<PillState>("hidden");

  useEffect(() => {
    setTick(0);
    setPill("hidden");

    const t1 = setTimeout(() => setTick(1), 500);
    const t2 = setTimeout(() => setTick(2), 1100);
    const t3 = setTimeout(() => setTick(3), 1700);

    const t4 = setTimeout(() => setPill("spinning"), 1850);
    const t5 = setTimeout(() => setPill("success"), 2850);
    const t6 = setTimeout(() => onConnected(), 3800);

    return () => [t1, t2, t3, t4, t5, t6].forEach(clearTimeout);
  }, [onConnected]);

  return (
    <div className="flex flex-col gap-6 w-full min-h-[400px]">
      <p className="text-secondary-text text-left uppercase text-sm">
        CONNECT YOUR MACHINE
      </p>

      <div className="w-full">
        <WindowFrame>
          <div className="font-sf-mono text-[15px] leading-8 text-white">
            <div className="text-[#9FEF9F]">
              user@localhost:~$ curl -s https://yourapp.sh | bash
            </div>
            {tick >= 1 && <div>→ Downloading agent...</div>}
            {tick >= 2 && <div>→ Installing dependencies...</div>}
            {tick >= 3 && (
              <div>
                → Registering machine:{" "}
                <span className="text-white">gpu-box-01</span>
              </div>
            )}
          </div>
        </WindowFrame>
      </div>

      <div className="flex justify-center mt-auto">
        <SpinnerPill state={pill} />
      </div>
    </div>
  );
}


function DeployMicro({
  stage,
  models,
  selected,
  onSelect,
}: {
  stage: 0 | 1 | 2;
  models: typeof aiModels;
  selected: (typeof aiModels)[number];
  onSelect: (m: (typeof aiModels)[number]) => void;
}) {
  return (
    <div className="flex flex-col gap-6 w-full min-h-[400px]">
      <p className="text-secondary-text text-left uppercase text-sm">
        Pick a Model
      </p>
      <div className="">
        {stage === 0 && (
          <PaneList
            models={models}
            selectedId={-1}
            onSelect={onSelect}
            title="Pick a Model"
          />
        )}

        {stage === 1 && (
          <PaneList
            models={models}
            selectedId={models[0].id}
            onSelect={onSelect}
            title="Pick a Model"
          />
        )}

        {stage === 2 && (
          <PaneDetails model={selected} />
        )}
      </div>
    </div>
  );
}

function PaneList({
  models,
  selectedId,
  onSelect,
  title,
}: {
  models: typeof aiModels;
  selectedId: number;
  onSelect: (m: (typeof aiModels)[number]) => void;
  title: string;
}) {
  return (
    <div className="rounded-[20px] bg-[#202026] w-full h-full flex flex-col">
      <div className="flex items-center gap-2 w-full justify-center p-3">
        <span className="text-sm text-white/50">{title}</span>
        <Image
          src="/assets/pick-a-model.svg"
          alt="arrow-right"
          width={16}
          height={16}
        />
      </div>
      <div className="space-y-1 bg-[#18181C] p-4 rounded-[18px] flex-1">
        {models.map((m) => {
          const active = selectedId === m.id;
          return (
            <button
              key={m.id}
              onClick={() => onSelect(m)}
              className={`w-full rounded-lg text-left p-3 border border-white/5 transition-all duration-200 ${
                active ? "bg-white/10" : "bg-[#1E1F24]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={m.logo}
                  alt={m.name}
                  width={24}
                  height={24}
                  className="rounded"
                />
                <div>
                  <div className="text-sm text-white">{m.name}</div>
                  <div className="text-xs text-white/60">{m.description}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PaneDetails({ model }: { model: (typeof aiModels)[number] }) {
  const [deployState, setDeployState] = useState<PillState>("hidden");

  useEffect(() => {
    setDeployState("hidden");
    const t1 = setTimeout(() => setDeployState("spinning"), 800);
    const t2 = setTimeout(() => setDeployState("success"), 2500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="rounded-[20px] bg-[#202026] w-full h-full flex flex-col">
      <div className="flex items-center gap-2 w-full justify-center p-3">
        <span className="text-sm text-white/50">Pick a Model</span>
        <Image
          src="/assets/pick-a-model.svg"
          alt="arrow-right"
          width={16}
          height={16}
        />
      </div>
      <div className="flex flex-col bg-[#18181c] rounded-[18px] p-2.5 flex-1">
        <div className="mb-3 rounded-lg bg-[#2A2A2A] p-3 w-full">
          <div className="flex items-center gap-3 w-full">
            <Image
              src={model.logo}
              alt={model.name}
              width={24}
              height={24}
              className="rounded flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="text-sm text-white">{model.name}</div>
              <div className="text-xs text-white/70">{model.description}</div>
            </div>
          </div>
        </div>
        <div className="space-y-3 bg-[#1E1F24] p-4 rounded-lg flex flex-col justify-center flex-1 w-full">
          <InfoRow k="Format" v={model.format} />
          <InfoRow k="Source" v={model.source} />
          <InfoRow
            k="Quantization"
            v={
              <span>
                {model.quantization}{" "}
                <span className="ml-1 rounded-full bg-[#44CF73] px-1.5 py-0.5 text-[10px] text-white">
                  Auto Detected
                </span>
              </span>
            }
          />
          <InfoRow k="Context Window" v={model.contextWindow} />
          <InfoRow k="Compatible Runtime" v={model.runtime} />
          <InfoRow k="RAM Requirement" v={model.ramRequirement} />
        </div>

        <div className="my-4 flex justify-center">
          <SpinnerPill state={deployState} text="Deployed to Your GPU" />
        </div>
      </div>
    </div>
  );
}

function InfoRow({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="mb-2 flex items-center font-sf-mono gap-2 text-xs w-full">
      <span className="text-white/60 flex-shrink-0">{k}:</span>
      <span className="text-white flex-1">{v}</span>
    </div>
  );
}


function ChatMicro() {
  const [showYou, setShowYou] = useState(false);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    setShowYou(false);
    setShowModel(false);
    const t1 = setTimeout(() => setShowYou(true), 200);
    const t2 = setTimeout(() => setShowModel(true), 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="flex flex-col gap-6 w-full min-h-[400px]">
      <p className="text-xs uppercase text-[#9BA2AA]">DEPLOY & CHAT</p>

      <div className="flex flex-col gap-4 flex-1">
        <AnimatePresence>
          {showYou && (
            <motion.div
              key="you"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.22 } }}
              exit={{ opacity: 0 }}
              className="flex justify-end"
            >
              <div className="max-w-[80%] p-3 flex items-start gap-2">
                <div className="mb-1 flex flex-col items-end">
                  <span className="text-white/90 mr-1">You</span>
                  <p className="text-base text-[#9AA4B2] bg-[#212126] p-2.5 rounded-[10px]">
                    Summarize this article: Open-source LLMs are gaining
                    traction as privacy-conscious alternatives to proprietary
                    models like GPT-4.
                  </p>
                </div>
                <Image
                  src="/assets/Avatar.png"
                  alt="user"
                  width={34}
                  height={34}
                  className="mt-[-4px]"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showModel && (
            <motion.div
              key="model"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.22 } }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="max-w-[80%] p-3 flex items-start gap-2">
                <Image
                  src="/assets/Avatar-ai.png"
                  alt="user"
                  width={34}
                  height={34}
                  className="mt-[-4px]"
                />
                <div className="mb-1 flex flex-col items-start">
                  <span className="ml-1 text-white/90">Model</span>
                  <p className="text-base text-[#9AA4B2] bg-[#212126] p-2.5 rounded-[10px]">
                    Open-source LLMs are rising among users who value
                    transparency, privacy, and local deployment flexibility —
                    unlike closed models such as GPT-4.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function WindowFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[18px] bg-[#141417] border border-[#1E1E23] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.55)]">
      <div className="h-9 flex items-center px-4 border-b border-[#1E1E23]">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        </div>
      </div>

      <div className="p-5">{children}</div>

      <div className="h-8 rounded-b-[18px] bg-gradient-to-b from-transparent to-black/40" />
    </div>
  );
}
