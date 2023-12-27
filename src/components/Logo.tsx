import React from "react"
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
    !appSelector.isGalary &&
    !appSelector.isContactUs);

  return (
    <motion.div
      animate={{
        translateY: focusHome ? "0" : "-100%",
        opacity: focusHome ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="top-0 left-0 z-10 w-full flex flex-row justify-between items-center">
      <a href="/">
        <img src={"/logo/logo-new.png"} alt="logo"
          className=" w-[20vh] contrast-200" />
      </a>
      <img src={"/logo/weaverBird.png"} alt="logo"
        className=" max-h-[10vh] max-w-[20vh] " />
    </motion.div>

  )
}

export default Logo
