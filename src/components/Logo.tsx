import React from "react"
import logo from "../assets/logo/logo.png"
import { useSelector } from "react-redux";
import { motion } from 'framer-motion'
import "../index.css"

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
        opacity: focusHome ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="top-0 left-0 z-10 w-full flex flex-row justify-between items-center">
      <a href="/">
        <img src={logo} alt="logo"
          className=" h-[10vh] "   />
      </a>
      <a href="https://stackkaroo.com" target="__blank">
        <img src={"/stackkaroo-logo.svg"} alt="stackkaroo-logo"
          className=" h-[10vh] right-0" />
      </a>
    </motion.div>

  )
}

export default Logo
