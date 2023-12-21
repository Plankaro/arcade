import React from "react"
import logo from "../assets/logo/logo.png"
import { useSelector } from "react-redux";
import { motion } from 'framer-motion'

interface LogoProps {
  small?: boolean
}
const Logo: React.FC<LogoProps> = () => {
  const appSelector = useSelector((state: any) => state);
  const focusHome = (!appSelector.isIntroVideo &&
    !appSelector.is3dpalladian &&
    !appSelector.isHolisticsEcoststem &&
    !appSelector.isSalesPresenter &&
    !appSelector.d360View &&
    !appSelector.isplans &&
    !appSelector.ispalladian &&
    !appSelector.isGalary);

  return (
    <motion.div
      animate={{
        translateY: focusHome ? "0" : "-100%",
      }}
      className="absolute top-0 left-0 z-10 w-full h-[5rem] p-3 flex flex-row justify-between items-center">
      <a href="/">
        <img src={logo} alt="logo" className="md:h-[7rem] h-[4rem] md:w-[7rem] w-[4rem] top-[-1.2rem]" />
      </a>
      <a href="https://stackkaroo.com" target="__blank">
        <img src={"/stackkaroo-logo.svg"} alt="stackkaroo-logo" className="md:h-[7rem] h-[4rem] md:w-[7rem] w-[4rem] top-[-1.2rem] right-0" />
      </a>
    </motion.div>

  )
}

export default Logo
