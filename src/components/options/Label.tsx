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
        className={` grow flex items-center opacity-0`}
        animate={{
          rotateY: active ? 0 : 90,
          opacity: active ? 1 : 0,
          originX: right ? 1 : 0,
        }}
        transition={{
          duration: 0.2,

        }}
      >
        {!right && <div className=" grow-0 w-[3dvh] h-[0.5dvh] bg-white"></div>}

        {/* <div className=" shadow-outline shadow-white rounded-3xl p-1">
          <div className="md:w-[12rem] w-[7rem] md:h-[2.4rem] h-[1.2rem] bg-dark rounded-[2rem] flex items-center justify-center ">
            <h5 className={`px-4 text-center text-white font-roboto-bold ${label.length > 10 ? 'text-xs md:text-sm leading-3' : "text-xs md:text-md"} overflow-wrap leading-4 font-semibold `}>{label}</h5>
          </div>
        </div> */}
        <div className=" grow rounded-[999px] p-[0.5dvh]" style={{
          boxShadow: "0px 0px 0px 0.5dvh #fff"
        }}>
          <div className=" bg-dark flex items-center justify-center rounded-[999px] ">
            <h5 className={`px-[3dvh] py-[1dvh] text-center text-white font-roboto-bold  
            ${label.length > 10 ? 'text-[1.8dvh] leading-3' : "text-[2dvh]"} 
            overflow-wrap leading-[2.4dvh] font-semibold `}>
              {label}
            </h5>
          </div>
        </div>

        {right && <div className="grow-0 w-[3dvh] h-[0.5dvh] bg-white"></div>}
      </motion.div>
    </>
  );
};

export default Label;
