"use client";
import React from "react";
import Restaurant from "../components/Restaurant";
import Eko from "../components/Eko";
import Pasha from "../components/Pasha";
import { motion } from "framer-motion";

export default function Page() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="xl:px-20 px-4 py-32"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      <motion.h1
        className="text-6xl mb-12 font-bold text-gray-600 font-playwrite-hr"
        variants={itemVariants}
      >
        Restorani
      </motion.h1>

      <motion.div
        className="shadow-2xl bg-gradient-to-b from-white to-slate-300"
        variants={itemVariants}
      >
        <motion.div variants={itemVariants}>
          <Restaurant />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Eko />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Pasha />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
