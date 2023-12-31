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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // onTouchStart={() => setIsHovered(true)}
      // onTouchCancel={() => setIsHovered(false)}
      // whileHover={{ scale: 1.05 }} 
      className="  flex cursor-pointer items-center justify-end"
    >
      {right && <Label active={isHovered} label={label} right />}

      <motion.div
        className={` rounded-full p-[0.5dvh] grow-0`}
        animate={{
          boxShadow: isHovered
            ? "0px 0px 0px .5dvh #fff"
            : "0px 0px 0px .5dvh #fff",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={` p-[1dvh] rounded-full w-full h-full flex items-center justify-center ${isHovered ? "bg-white" : " bg-primary"}`}

        >
          {Icon && (
            <Icon
              className={` text-[4dvh] ${isHovered ? 'text-[#454647]' : 'text-[#FFF]'} `}
            />
          )}
        </motion.div>
      </motion.div>

      {!right && <Label active={isHovered} label={label} />}
    </motion.div>
  );
};

export default CommonButton;




// without using state for hover (12 state is not required)
// import React from "react";
// import { motion } from "framer-motion";
// import { IconType } from "react-icons";
// import Label from "./Label";

// interface CommonProps {
//   icon: IconType;
//   label: string;
//   right?: boolean;
//   onClick?: () => void;
// }

// const CommonButton: React.FC<CommonProps> = ({ icon: Icon, label, right, onClick }) => {
//   const handleHover = (button: HTMLElement | null, isHovered: boolean) => {
//     if (button) {
//       button.style.boxShadow = isHovered ? "0px 0px 0px 3px #fff" : "0px 0px 0px 3px #fff";
//     }
//   };

//   return (
//     <div className="flex cursor-pointer items-center justify-between">
//       {right && <div className="md:w-[14rem] w-[8.5rem]"><Label active={false} label={label} right /></div>}

//       <motion.div
//         className={`md:w-[4rem] md:h-[4rem] w-[2.5rem] h-[2.5rem] rounded-full p-1 shadow-outline sm:shadow-2xl shadow-white `}
//         whileHover={{ scale: 1.1 }}
//         onMouseEnter={(e) => handleHover(e.currentTarget, true)}
//         onMouseLeave={(e) => handleHover(e.currentTarget, false)}
//         transition={{ duration: 0.2 }}
//         onClick={onClick}
//         id="commonButton"
//       >
//         <motion.div className={`rounded-full w-full h-full flex items-center justify-center bg-white`}>
//           {Icon && <Icon className={`text-xl md:text-2xl text-[#FFF]`} />}
//         </motion.div>
//       </motion.div>

//       {!right && <div className="md:w-[14rem] w-[10rem]"><Label active={false} label={label} /></div>}
//     </div>
//   );
// };

// export default CommonButton;
