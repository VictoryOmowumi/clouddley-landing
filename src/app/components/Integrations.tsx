import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const models = [
  {
    id: 1,
    name: "LLAMA 3",
    description: "Meta's powerful open-weight foundation model.",
    logo: "/assets/llama.png",
  },
  {
    id: 2,
    name: "DeepSeek-VL",
    description: "Multimodal model capable of vision + language tasks.",
    logo: "/assets/deepseek.png",
  },
  {
    id: 3,
    name: "Mistral 7B",
    description: "Fast and robust efficient decoder-only model.",
    logo: "/assets/mistral.png",
  },
  {
    id: 4,
    name: "Mixtral",
    description: "Mixture-of-experts model with strong performance.",
    logo: "/assets/mixtral.png",
  },
  {
    id: 5,
    name: "Gemma",
    description: "Google's instruction-tuned LLM with great reasoning.",
    logo: "/assets/gemma.png",
  },
  {
    id: 6,
    name: "Phi-3",
    description:
      "Microsoft's small but powerful transformer for tight environments.",
    logo: "/assets/phi.png",
  },
];

const Integrations = () => {
  return (
    <section className="px-4 py-20 md:py-24">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-16 text-center max-w-xl mx-auto">
      <div className="flex items-center gap-1">
          <Image
            src="/assets/integrations.svg"
            alt="integrations"
            width={16}
            height={16}
          />
          <p className="text-secondary-text text-sm font-light uppercase">Integrations</p>
        </div>
        <h2 className="text-primary-text text-4xl font-semibold">Open-Source Models
          <span className="text-secondary-text"> at Your </span>
           Fingertips
        </h2>
        <p className="text-secondary-text text-lg mt-3">
          Pick from leading LLMs — ready to fine-tune, deploy, and chat with. No
          setup required beyond connecting your GPU.
        </p>
      </div>

      {/* Models Grid */}
      <div className="bg-[#0F0F0F] border border-[#131313] p-2">
      <div className="grid grid-cols-1 lg:grid-cols-3 border-[1px] border-secondary-text/10 ">
        {models.map((model) => (
          <div
            key={model.id}
            className={`flex flex-col  justify-between  h-[600px] w-full p-6 transition-all duration-300 group border-[0.5px] border-[#252525]    model.id === 2 || model.id === 5 ? 'border-l border-r border-white/10' : ''
              }`}
          >
            <h3 className="text-white text-xl font-light text-left">
              {model.name}
            </h3>
            <div className="w-full flex items-center justify-center">
              <Image
                src={model.logo}
                alt={model.name}
                width={150}
                height={100}
                className=" h-auto object-contain"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white text-xl">{model.description}</p>
              <button className="flex items-center gap-2 justify-end">
                <span>Deploy</span>
                <Image
                  src="/assets/arrow.svg"
                  alt="arrow-right"
                  width={20}
                  height={24}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Integrations;
