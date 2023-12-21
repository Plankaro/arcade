import React from "react"
import logo from "../assets/logo/logo.png"

interface LogoProps {
  small?: boolean
}
const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="absolute top-0 left-0 z-10 w-full h-[5rem] p-3 flex flex-row justify-between items-center">
      <img src={logo} alt="logo" className="md:h-[7rem] h-[4rem] md:w-[7rem] w-[4rem] top-[-1.2rem]" />
      <img src={"/stackkaroo-logo.svg"} alt="stackkaroo-logo" className="md:h-[7rem] h-[4rem] md:w-[7rem] w-[4rem] top-[-1.2rem] right-0" />
    </div>

  )
}

export default Logo
