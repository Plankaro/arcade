import React from "react";
import { motion } from "framer-motion";

interface LabelProps {
  label: string;
  right?: boolean;
  active?: boolean;
}

const Label: React.FC<LabelProps> = ({ label, right, active }) => {
  return (
    <>
      <motion.div
        className={` flex items-center opacity-0`}
        animate={{
          rotateY: active ? 0 : 90,
          opacity: active ? 1 : 0,
          originX: right ? 1 : 0, 
        }}
        transition={{
          duration: 0.2,

        }}
      >
        {!right && <div className="md:w-[2rem] w-[1rem] h-[0.2rem] bg-white"></div>}

        <div className=" shadow-outline shadow-white rounded-3xl p-1">
          <div className="md:w-[12rem] w-[7rem] md:h-[2.4rem] h-[1.2rem] bg-dark rounded-[2rem] flex items-center justify-center ">
            <h5 className={`px-4 text-center text-white font-roboto-bold ${label.length > 10 ? 'text-xs md:text-sm leading-3' : "text-xs md:text-md"} overflow-wrap leading-4 font-semibold `}>{label}</h5>
          </div>
        </div>
        
        {right && <div className="md:w-[2rem] w-[1rem] h-[0.2rem] bg-white"></div>}
      </motion.div>
    </>
  );
};

export default Label;
