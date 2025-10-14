"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";

type Props = {
  defaultRepo?: string;
  onDeploy?: (repo: string) => void;
};

export default function Cta1({
  defaultRepo = "hf.co/TheBloke/Mixtral-8x7B-Instruct-v0.1-GGUF",
  onDeploy,
}: Props) {
  const [repo, setRepo] = useState(defaultRepo);
  const [submitting, setSubmitting] = useState(false);
  const invalid = useMemo(() => repo.trim().length < 8, [repo]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (invalid || submitting) return;
    setSubmitting(true);
    try {
      onDeploy?.(repo.trim());
      // simulate async; remove in prod
      await new Promise((r) => setTimeout(r, 800));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="relative mx-auto max-w-[623px] px-4 py-10">
      {/* container (your dashed blue wrapper shown in screenshots) */}
      <div className="">
        {/* top block */}
        <div className="mx-auto flex  max-w-full flex-col items-center gap-[25px]">
          {/* eyebrow */}
          <div className="flex items-center gap-2 text-secondary-text">
           <Image src="/assets/gpu.svg" alt="gpu" width={16} height={16} />
            <span className="text-[14px]  uppercase tracking-wide">
              Quick Deploy
            </span>
          </div>

          {/* headline */}
          <h2 className="text-center font-semibold leading-[1.2] text-[36px] md:text-[36px]">
            <span className="text-primary-text">Instantly </span>
            <span className="text-secondary-text">Run GGUF Models</span>
            <br />
            <span className="text-primary-text">from </span>
            <span className="text-secondary-text">
              Hugging Face
            </span>
          </h2>
        </div>

        {/* form block */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-[50px] flex w-full max-w-[623px] flex-col items-center gap-[25px]"
        >
          {/* inline label + input */}
          <label
            htmlFor="hfRepo"
            className="flex w-full max-w-[623px] items-center justify-center gap-5"
          >
            <span className="shrink-0 text-[16px] leading-[19px] text-primary-text">
              Paste Hugging Face GGUF Model Repo
            </span>

            <div
              className="relative h-[44px] w-[340px] rounded-[12px] border border-[#252525] bg-black/30"
              role="group"
            >
              <input
                id="hfRepo"
                value={repo}
                onChange={(e) => setRepo(e.target.value)}
                placeholder="hf.co/owner/model-name-GGUF"
                className="absolute inset-0 w-full rounded-[12px] border-[#252525] bg-transparent px-3 text-[15px] text-secondary-text outline-none placeholder:text-[#98A2B3]/70"
                aria-invalid={invalid}
              />
            </div>
          </label>

          <button
            type="submit"
            disabled={invalid || submitting}
            className={[
              "relative inline-flex h-[48px] w-[170px] items-center justify-center gap-2 rounded-full",
              "border border-[#195CE1] bg-[#195CE1]",
              "shadow-[0_0_10px_1px_rgba(65,134,231,0.30)]",
              "disabled:opacity-60 disabled:cursor-not-allowed",
            ].join(" ")}
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0) 100%), #195CE1",
            }}
          >
            <span className="text-[16px] leading-[21px] text-white">
              {submitting ? "Deploying…" : "Deploy to My GPU"}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
