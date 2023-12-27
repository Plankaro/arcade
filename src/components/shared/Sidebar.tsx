import { motion } from "framer-motion";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import logo from "../../assets/logo/logo.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleSidebar } from "../../store/slice/action";


interface SidebarProps {
  items: string[];
  slide: number;
  setSlide: (index: number) => void;
}

export const Sidebar = ({ slide, items, setSlide }: SidebarProps) => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: any) => state?.isSidebarOpen);

  return (
    <motion.div
      initial={{
        translateX: '-90%',
      }}
      animate={{
        translateX: isMenuOpen ? '0%' : '-92%',
      }}
      transition={{
        duration: 0.3,
        ease: "easeIn",
      }}
      className={` z-30 fixed top-0 left-0 min-w-[36vh] text-white bg-black/80 shadow-lg h-screen p-[4vh]`}
    >
      {/* menu toggler */}
      <div className=' z-30 absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 '>
        <button onClick={() => { dispatch(toggleSidebar()) }}
          className=' border border-black bg-accent w-[6vh] h-[6vh] text-[3vh] flex items-center justify-center rounded-full'
        >
          {isMenuOpen ?
            <MdOutlineArrowBackIos className=' text-white' />
            : <MdOutlineArrowForwardIos className=' text-white' />}
        </button>
      </div>

      <div className=' z-40 relative flex items-center flex-col justify-start h-full'>


        <div className=' min-h-10 mb-[30px]'>
          <img src={logo} alt="logo" className="md:h-[9vh] h-[9vh]" />
        </div>

        <div className=' mt-[10vh] mb-auto self-stretch'>
          {items.map((item, index) => {
            return (
              <div key={index} className=' w-full text-left border-b border-[#FFD700] pl-[1vh] spacing'>
                <motion.button className={` py-[2vh] text-[2.3vh] italic tracking-normal w-full text-start`}
                  whileHover={{
                    color: '#FFD700',
                  }}
                  animate={{
                    color: slide === index ? '#FFD700' : '#fff',
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