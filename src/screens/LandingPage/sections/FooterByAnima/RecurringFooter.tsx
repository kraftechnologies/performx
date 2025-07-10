import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const footerLinks = [
  {
    title: "Support",
    links: ["Help centre", "Account information", "About", "Contact us"],
  },
  {
    title: "Help and Solution",
    links: ["Talk to support", "Support docs", "System status", "Covid response"],
  },
  {
    title: "Product",
    links: ["Update", "Security", "Beta test", "Pricing product"],
  },
];

export const RecurringFooter = () => {
  return (
    <footer
      id="footer"
      className="px-6 sm:px-8  text-white font-sans text-sm"
    >
      {/* Top grid section */}
      <motion.div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center">
            <img className="w-60 mr-2" src="/kraf.png" alt="Logo" />
          </div>
          <p className="text-white/70 text-sm">Get started now try our product</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pr-10 bg-[#1F1F25] border border-[#3B3B44] rounded-md text-white placeholder:text-gray-400 outline-none py-2 pl-4"
            />
            <div className="absolute inset-y-0 right-0 flex items-center ">
              <Button className="bg-[#8E24AA] hover:bg-purple-700 rounded-md" size="icon">
                <ArrowRightIcon className="h-5 w-5 text-white" />
              </Button>
            </div>
          </div>
        </div>

        {footerLinks.map((col, idx) => (
          <div key={idx} className="space-y-6">
            <h4 className="text-base font-semibold uppercase tracking-wide">{col.title}</h4>
            <ul className="space-y-4">
              {col.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/70 text-sm hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      {/* Contact & Info Section */}
      <div className="mt-20 border-t border-white/10 pt-12 flex flex-col lg:flex-row justify-between items-start gap-12 text-white text-sm">
        <div className="space-y-6 max-w-xl">
          <img src="/kraf.png" alt="Kraf Technologies" className="w-60" />
          <p className="text-white/70 leading-relaxed">
            At Kraf Technologies, we deliver cutting-edge SaaS solutions for B2B enterprises. Our
            mission is to empower businesses with tools that solve today's challenges and unlock
            tomorrow’s opportunities.
          </p>
        </div>
        <div className="space-y-6 text-white text-sm leading-relaxed">
          <p>
            <strong className="text-white/70">E-mail:</strong>{" "}
            <a href="mailto:info@kraftechnologies.com">info@kraftechnologies.com</a>
          </p>
          <p>
            <strong className="text-white/70">Team E-mail:</strong>{" "}
            <a href="mailto:team@kraftechnologies.com">team@kraftechnologies.com</a>
          </p>
          <p>
            <strong className="text-white/70">Contact:</strong>{" "}
            <a href="tel:+919670269295">+91 9670269295</a>
          </p>
          <p>
            <strong className="text-white/70">HQ Office Address:</strong><br />
            400-A, 4th Floor, 12 Ajit Singh House, Yusuf Sarai Commercial Complex,<br />
            New Delhi 110016, Near Green Park Metro Station Exit-2.
          </p>
        </div>
      </div>

      {/* Bottom bar: Logo + Copyright */}
      <div className="mt-10 w-full flex flex-col lg:flex-row justify-between items-center gap-6 text-left py-4">
        <div className="flex items-start gap-3 w-full">
          <img src="/ingrey-logo.png" alt="InGrey" className="h-6 mt-1" />
          <div className="text-white/70 text-xs leading-snug">
            <p>All copyrights are the property of their respective owners</p>
            <p>Kraf Technologies, All rights reserved © 2025 InGrey Pvt. Ltd.</p>
          </div>
        </div>
        <div className="flex space-x-4 lg:justify-end w-full">
          <a href="https://www.linkedin.com/company/kraftechnologies/posts/?feedView=all">
            <i className="fab fa-linkedin text-xl text-white/70 hover:text-white"></i>
          </a>
          <a href="https://www.instagram.com/kraftechnologies/?igsh=MTZ2NncwM2xjOGU1NA%3D%3D#">
            <i className="fab fa-instagram text-xl text-white/70 hover:text-white"></i>
          </a>
          <a href="https://x.com/kraftechnologies">
            <i className="fab fa-twitter text-xl text-white/70 hover:text-white"></i>
          </a>
          <a href="https://www.facebook.com/kraftechnologies">
            <i className="fab fa-facebook text-xl text-white/70 hover:text-white"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
