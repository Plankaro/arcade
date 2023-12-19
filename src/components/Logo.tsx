import React from "react"
import logo from "../assets/logo/logo.png"

interface LogoProps{
    small?:boolean
}
const Logo:React.FC<LogoProps> = () => {
    return (

            <img src={logo} alt="logo" className="md:h-[7rem] h-[4rem] md:w-[7rem] w-[4rem] absolute top-[-1.2rem]" />
       
    )
}

export default Logo
