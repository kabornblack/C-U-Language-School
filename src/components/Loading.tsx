// import React from "react";

// const Loading = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-blue-50 z-50">
//       <div className="flex flex-col items-center">
//         <div className="w-16 h-16 border-t-4 border-b-4 border-blue-950 rounded-full animate-spin"></div>
//         <p className="mt-4 text-lg font-semibold text-gradient-to-r from-blue-950 text-blue-700">
//           Please wait...
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Loading;
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center">
        <motion.div
          className="relative w-16 h-16"
          animate={{
            scale: [1, 2, 0.1, 1.7, 0.1],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image
            src="/favicon.ico"
            alt="Loading"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 text-lg font-semibold text-blue-950"
        >
          Please wait...
        </motion.p> */}
      </div>
    </div>
  );
}
