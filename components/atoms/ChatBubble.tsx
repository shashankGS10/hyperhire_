"use client";
import { motion } from "framer-motion";

// ... rest of your imports

 const ChatBubble = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: 0.3, // 300ms delay
        ease: "easeOut"
      }}
      className="text-2xl font-bold bg-gray-100 rounded-2xl px-4 py-2 text-emerald-500 inline-block my-8 relative after:content-[''] after:absolute after:w-4 after:h-4 after:bg-gray-100 after:rotate-45 after:-bottom-2 after:left-1/4 after:-translate-x-1/2"
    >
      풀타임, 파트타임
    </motion.div>
  );
};
export default ChatBubble;