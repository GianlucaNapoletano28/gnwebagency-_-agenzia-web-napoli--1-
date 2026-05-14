import React from "react";
import { motion } from "motion/react";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: <Instagram size={20} />,
    href: "https://www.instagram.com/gnwebagency?igsh=MXFmZGx4OGR1Ynlpag==",
    color: "hover:text-[#E1306C]"
  },
  {
    name: "TikTok",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
    href: "https://www.tiktok.com/@gn.web.agency?_r=1&_t=ZN-96M6rMKa5l0",
    color: "hover:text-[#ff0050]"
  },
  {
    name: "Facebook",
    icon: <Facebook size={20} />,
    href: "https://www.facebook.com/share/1ZCuCDWs8K/?mibextid=wwXIfr",
    color: "hover:text-[#1877F2]"
  },
  {
    name: "WhatsApp",
    icon: <MessageCircle size={20} />,
    href: "https://wa.me/393887397246",
    color: "hover:text-[#25D366]"
  }
];

export const SocialSidebar = () => {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-6">
      <motion.div 
        className="w-[1px] h-20 bg-gradient-to-b from-transparent to-[#00ff88]/30 mx-auto"
        initial={{ height: 0 }}
        animate={{ height: 80 }}
      />
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-500 transition-all duration-300 ${social.color} hover:scale-110`}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          title={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
      <motion.div 
        className="w-[1px] h-20 bg-gradient-to-t from-transparent to-[#00ff88]/30 mx-auto"
        initial={{ height: 0 }}
        animate={{ height: 80 }}
      />
    </div>
  );
};
