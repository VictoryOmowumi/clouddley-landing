"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B0C0D] text-white">
      <section className="relative mx-auto max-w-5xl px-6 py-16 text-center md:py-20 ">
        <div className="cta2-bg"></div>
        <motion.h2 
          className="text-[28px] font-semibold leading-tight md:text-[34px]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Build Faster. Smarter. Privately.
        </motion.h2>
        <motion.p 
          className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-white/70 md:text-[16px]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Skip the GPU queues. Keep full control. Run your models your way.
        </motion.p>

        <motion.div 
          className="mt-8 flex flex-wrap items-center justify-center gap-6"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/connect-gpu"
              className={[
                "inline-flex h-11 items-center rounded-full px-6 text-[14px] font-medium",
                "border border-[#195CE1] bg-[#195CE1]",
                "shadow-[0_0_10px_1px_rgba(65,134,231,0.30)]",
                "transition-transform hover:scale-[1.02]",
              ].join(" ")}
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0) 100%), #195CE1",
              }}
            >
              Connect Your GPU
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 text-[14px] text-white/80 transition-colors hover:text-white"
            >
              See Documentation
              <motion.svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  d="M6 12h12M13 7l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-10 px-6 py-12 md:grid-cols-12 md:gap-x-8 md:py-14">
          <motion.div 
            className="md:col-span-5 lg:col-span-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/assets/clouddley-logo.png"
                alt="Clouddley"
                width={195}
                height={62}
                className="h-[38px] w-auto"
              />
            </motion.div>
            <motion.p 
              className="mt-8 text-[13px] leading-relaxed text-white/60"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Copyright © {new Date().getFullYear()} Clouddley Inc. All rights
              reserved ·{" "}
              <Link
                href="mailto:help@clouddley.com"
                className="underline underline-offset-2 hover:text-white transition-colors duration-300"
              >
                help@clouddley.com
              </Link>
            </motion.p>
          </motion.div>

          <motion.div 
            className="md:col-span-7 lg:col-span-8"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Column
                  title="Products"
                  links={[
                    ["Clouddley AI", "/clouddley-ai"],
                    ["Triggr", "/triggr"],
                  ]}
                />
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Column
                  title="Legal"
                  links={[
                    ["Privacy policy", "/privacy"],
                    ["Terms & Conditions", "/terms"],
                    ["Cookie Policy", "/cookies"],
                  ]}
                />
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Column
                  title="Community"
                  links={[
                    ["Docs", "/docs"],
                    ["Discussion", "/discussion"],
                  ]}
                />
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Column
                  title="Links"
                  links={[
                    ["GitHub", "/github"],
                    ["Pricing", "/pricing"],
                    ["Twitter", "/twitter"],
                    ["Discord", "/discord"],
                  ]}
                >
                  <motion.div 
                    className="mt-3 flex gap-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconLink href="/github" label="GitHub">
                        <svg viewBox="0 0 24 24" className="h-5 w-5">
                          <path
                            fill="currentColor"
                            d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.8-.26.8-.58v-2.3c-3.36.73-4.06-1.43-4.06-1.43-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1 .96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.3-1.55 3.3-1 3.3-1 .66 1.65.24 2.87.12 3.17.78.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.62-5.48 5.92.43.37.83 1.1.83 2.22v3.29c0 .32.19.7.81.58A11.5 11.5 0 0 0 12 .5Z"
                          />
                        </svg>
                      </IconLink>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconLink href="/twitter" label="Twitter">
                        <svg viewBox="0 0 24 24" className="h-5 w-5">
                          <path
                            fill="currentColor"
                            d="M18.9 2.5h3.1l-6.8 7.8 8 11.2h-6.3l-5-7-5.8 7H3.9l7.3-8.4L3.6 2.5H10l4.4 6.3z"
                          />
                        </svg>
                      </IconLink>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconLink href="/discord" label="Discord">
                        <svg viewBox="0 0 24 24" className="h-5 w-5">
                          <path
                            fill="currentColor"
                            d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.7 1.4a17.9 17.9 0 0 0-5.5 0L8.5 3a19.8 19.8 0 0 0-4.9 1.4C1 8.9-.2 13.5.3 18.1a20 20 0 0 0 6 3c.47-.64.9-1.3 1.24-2.01a12.3 12.3 0 0 1-1.88-.89l.37-.29c3.93 1.79 8.18 1.79 12.06 0l.37.29c-.6.33-1.22.64-1.88.89.35.71.77 1.37 1.25 2.01a20 20 0 0 0 6-3c.5-5.2-.84-9.68-3.53-13.71ZM8 15.3c-1.18 0-2.16-1.09-2.16-2.42 0-1.33.98-2.42 2.16-2.42 1.2 0 2.17 1.1 2.16 2.43 0 1.33-.96 2.41-2.16 2.41Zm8 0c-1.2 0-2.16-1.09-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.2 0 2.17 1.1 2.16 2.43 0 1.33-.96 2.41-2.16 2.41Z"
                          />
                        </svg>
                      </IconLink>
                    </motion.div>
                  </motion.div>
                </Column>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}


function Column({
  title,
  links,
  children,
}: {
  title: string;
  links: [label: string, href: string][];
  children?: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-3 text-[15px] font-semibold text-white/90">{title}</h3>
      <ul className="space-y-2">
        {links.map(([label, href], index) => (
          <motion.li 
            key={href}
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              href={href}
              className="text-[14px] text-white/65 transition-colors hover:text-white duration-300 hover:translate-x-1 inline-block"
            >
              {label}
            </Link>
          </motion.li>
        ))}
      </ul>
      {children}
    </div>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="text-white/60 transition-colors hover:text-white duration-300"
    >
      {children}
    </Link>
  );
}
