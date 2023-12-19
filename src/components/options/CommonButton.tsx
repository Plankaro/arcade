import React, { useState } from "react";
import { IconType } from "react-icons";
import Label from "./Label";

interface CommonProps {
  icon: IconType;
  label: string;
  right?: boolean;
}

const CommonButton: React.FC<CommonProps> = ({ icon: Icon, label, right }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered)

  return (
    <div
      className="flex cursor-pointer items-center justify-between hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {right && <div className="md:w-[14rem] w-[8.5rem]">
        {
          isHovered && (
            <Label label={label} right />
          )
        }

      </div>}
      <div className={`md:w-[4.3rem] md:h-[4.3rem] w-[3rem] h-[3rem] rounded-full md:border-[0.23rem] border-[0.12rem]  p-1 ${isHovered ? "border-primary" : "border-white"} `}>
        <div className={` rounded-full w-full  h-full  flex items-center justify-center ${isHovered ? "bg-white" : "bg-primary"}`}>
          {Icon && <Icon  size={window.innerWidth < 768 ? 24 : 34} color={isHovered ? "#AEA5A0" : "white"} />}
        </div>
      </div>

      {!right && <div className="md:w-[14rem] w-[10rem]">  {
        isHovered && (
          <Label label={label} />

        )
      }</div>}
    </div>
  );
};

export default CommonButton;
