import React, { useState } from "react";
import { IconType } from "react-icons";

interface CommonProps {
  icon: IconType;
  label: string;
  left: boolean;
}

const CommonButton: React.FC<CommonProps> = ({ icon: Icon, label, left }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered)

  return (
    <div
      className="flex cursor-pointer items-center justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {left && <div className="w-[14rem]">
        {
          isHovered && (
            <>
              {label}
            </>
          )
        }

      </div>}
      <div className={`w-[4.3rem] h-[4.3rem] rounded-full border-[0.23rem]  p-1 ${isHovered ? "border-primary" : "border-white"} `}>
        <div className={` rounded-full w-full  h-full  flex items-center justify-center ${isHovered ? "bg-white" : "bg-primary"}`}>
          {Icon && <Icon size={34} color={isHovered ? "primary" : "white"} />}
        </div>
      </div>

      {!left && <div className="w-[14rem]">  {
        isHovered && (
          <div className="flex items-center ">
            <div className="w-[2rem] h-[0.2rem] bg-primary">

            </div>
          <div className=" border-primary border-[0.15rem] rounded-3xl p-1">
            <div className="w-[12rem] h-[2.4rem] bg-primary rounded-[2rem] flex items-center justify-center">
              {label}
            </div>
          </div>
          </div>
        )
      }</div>}
    </div>
  );
};

export default CommonButton;
