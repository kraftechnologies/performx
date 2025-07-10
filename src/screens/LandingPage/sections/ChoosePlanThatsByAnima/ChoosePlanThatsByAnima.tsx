import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
// Animation for fade-up
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Reusable fade for list items
const listItemFade = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

// 🔁 Reusable Contact Button
const ContactButton = () => (
  <Button
    className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-6 py-2 text-white text-sm"
    aria-label="Contact sales"
  >
    Contact to Seller
  </Button>
);

export const ChoosePlanThatsByAnima = (): JSX.Element => {
  const [isAnnual, setIsAnnual] = useState(false);

  const freeFeatures = [
    "5 Employee",
    "2 Departments",
    "Public share & comment",
    "Chat support",
    "5 Projects",
  ];

  const businessFeatures = [
    "All features of Pro plan",
    "Unlimited Departments",
    "Unlimited Employees",
    "Enlimited Meetings",
    "Dedicated Services",
  ];

  return (
    <section className="py-24 px-6">
      <div className="relative z-10 flex flex-col items-center">
        {/* Title */}
        <motion.h2
          className="text-center text-3xl sm:text-4xl font-bold leading-snug mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Choose plan <br /> that right’s for you
        </motion.h2>

        {/* Toggle buttons */}
        <motion.div
          className="flex bg-[#090C1D] border border-[#1F2130] rounded-full p-2 mb-12 space-x-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-9 py-3 rounded-full text-sm font-semibold shadow-sm transition ${!isAnnual
              ? "bg-[#8E24AA] text-white"
              : "text-white hover:bg-white/10"
              }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-9 py-3 rounded-full text-sm font-semibold shadow-sm transition ${isAnnual
              ? "bg-[#8E24AA] text-white"
              : "text-white hover:bg-white/10"
              }`}
          >
            Annually
          </button>
        </motion.div>

        {/* Pricing Cards */}
        <div
          className={`grid ${isAnnual ? "md:grid-cols-2" : "md:grid-cols-3"
            } grid-cols-1 gap-8 px-4 max-w-7xl w-full`}
        >
          {/* Monthly View (3 Cards) */}
          {!isAnnual && (
            <>
              {/* Free Plan */}
              <motion.div
                className="border border-white/20 rounded-lg p-6 space-y-6 bg-[#1c1c2e]"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold">Free</h3>
                <p className="text-sm text-white/70">
                  Have a go and test your superpowers
                </p>
                <p className="text-4xl font-bold">₹0</p>
                <ul className="space-y-3 text-sm">
                  {freeFeatures.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2"
                      variants={listItemFade}
                      initial="hidden"
                      whileInView="visible"
                      custom={index}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <img src="/subtract.svg" className="w-4 h-4" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <ContactButton />
              </motion.div>

              {/* Empty Middle Box */}
              <motion.div
                className="border border-white/20 rounded-lg p-6 bg-[#1c1c2e]"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              {/* Business Plan */}
              <motion.div
                className="border border-white/20 rounded-lg p-6 space-y-6 bg-[#1c1c2e]"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold">Business</h3>
                <p className="text-sm text-white/70">
                  Unveil superpowers and join the Design League
                </p>
                <p className="text-4xl font-bold">₹4999</p>
                <ul className="space-y-3 text-sm">
                  {businessFeatures.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2"
                      variants={listItemFade}
                      initial="hidden"
                      whileInView="visible"
                      custom={index}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <img src="/subtract.svg" className="w-4 h-4" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <ContactButton />
              </motion.div>
            </>
          )}

          {/* Annual View (2 Empty Cards) */}
          {isAnnual && (
            <>
              <motion.div
                className="border border-white/20 rounded-lg  p-6 bg-[#1c1c2e] h-[300px]"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.div
                className="border border-white/20 rounded-lg p-6 bg-[#1c1c2e] h-[300px]"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
