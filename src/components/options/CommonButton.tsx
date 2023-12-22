import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import Label from "./Label";

interface CommonProps {
  icon: IconType;
  label: string;
  right?: boolean;
  onClick?: () => void;
}

const CommonButton: React.FC<CommonProps> = ({ icon: Icon, label, right, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onClick={onClick}
      className="flex cursor-pointer items-center justify-between "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    // whileHover={{ scale: 1.05 }} 
    >
      {right && (
        <div className="md:w-[14rem] w-[8.5rem]">
          {<Label active={isHovered} label={label} right />}
        </div>
      )}

      <motion.div
        className={`md:w-[4.3rem] md:h-[4.3rem] w-[3rem] h-[3rem] rounded-full p-1 shadow-outline shadow-white `}
        // whileHover={{ scale: 1.1 }} 
        animate={{
          boxShadow: isHovered
            ? "0px 0px 0px 3px #fff"
            : "0px 0px 0px 3px #fff",
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className={` rounded-full w-full h-full flex items-center justify-center ${isHovered ? "bg-white" : " bg-primary"
            }`}

        >
          {Icon && (
            <Icon
              size={window.innerWidth < 768 ? 24 : 34}
              color={isHovered ? "#454647" : "#fff"}
            />
          )}
        </motion.div>
      </motion.div>

      {!right && (
        <div className="md:w-[14rem] w-[10rem]">
          {<Label active={isHovered} label={label} />}
        </div>
      )}
    </motion.div>
  );
};

export default CommonButton;
