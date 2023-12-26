import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import logo from "../../assets/logo/logo.png";


interface SidebarProps {
  // show: boolean;
  selected: number;
  items: string[];
  setSlide: (index: number) => void;
  // setMenuOpen: (isOpen: boolean) => void;
}

export const Sidebar = ({ selected, items, setSlide }: SidebarProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  // console.log("sidebar rendered");
  return (
    <motion.div
      initial={{
        translateX: '-90%',
        // opacity: 0,/
      }}
      animate={{
        translateX: isMenuOpen ? '0%' : '-92%',
        // opacity: isMenuOpen ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeIn",
      }}
      className={` z-30 fixed top-0 left-0 min-w-[300px] text-white bg-black/50 shadow-lg h-screen p-8`}
    >
      <div className=' z-30 absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 '>
        <button onClick={() => setMenuOpen(i => !i)}
          className=' border border-black bg-accent w-[40px] h-[40px] flex items-center justify-center rounded-full'
        >
          {isMenuOpen ?
            <MdOutlineArrowBackIos className=' text-white' />
            : <MdOutlineArrowForwardIos className=' text-white' />}
        </button>
      </div>

      <div className=' z-40 relative flex items-center flex-col justify-start h-full'>
        {window.innerHeight > 600 && <div className=' min-h-10 mb-[30px]'>
          <img src={logo} alt="logo" className="md:h-[7rem] h-[4rem] md:w-[7rem] w-[4rem]" />
        </div>}
        <div className=' mt-[30px] mb-auto self-stretch'>
          {items.map((item, index) => {
            return (
              <div key={index} className=' w-full text-left border-b border-[#FFD700] pl-6 spacing'>
                <motion.button className={` py-4 text-lg italic tracking-normal w-full text-start`}
                  whileHover={{
                    color: '#FFD700',
                  }}
                  animate={{
                    color: selected === index ? '#FFD700' : '#fff',
                  }}
                  onClick={() => { setSlide(index) }}
                >
                  {item?.[0].toUpperCase() + item.slice(1)}
                </motion.button>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default Sidebar;