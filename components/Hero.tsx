"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {" "}
      {/* ← add id */}
      <div className="container-pro py-20 md:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-4xl md:text-6xl font-bold leading-tight"
        >
          <span className="gradient-text">Build Smarter. Balance Better.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-6 max-w-2xl text-lg text-white/80"
        >
          Full-stack engineering meets accounting excellence. Mobile, Web,
          DevOps, QA & Accounting—under one roof.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#services"
            className="rounded-full bg-brand-500 px-6 py-3 font-medium hover:bg-brand-400 transition"
          >
            Explore services
          </a>
          <a
            href="#blogs"
            className="rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/10 transition"
          >
            Read our insights
          </a>
        </motion.div>
      </div>
    </section>
  );
}
