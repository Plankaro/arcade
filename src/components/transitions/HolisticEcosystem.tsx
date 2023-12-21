import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import { allClose } from '../../store/slice/action';
import { IoClose } from 'react-icons/io5';
import logo from "../../assets/logo/logo.png"
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

const HolisticEcosystem = () => {
  const dispatch = useDispatch();
  const isHolisticsEcoststem = useSelector((state: any) => state?.isHolisticsEcoststem);

  const slideImages = [{
    title: "Slide 1",
    imageUrl: "https://images.unsplash.com/photo-1625015531264-43c3fce8c792?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }, {
    title: "Slide 2",
    imageUrl: "https://wallpapercave.com/wp/Os2ZgZR.jpg",
  }];


  const [slide, setSlide] = useState(0);

  console.log("holistic rendered", slide);

  return (
    <motion.div
      animate={{
        translateX: isHolisticsEcoststem ? '0%' : '-100%',
        opacity: isHolisticsEcoststem ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={` fixed inset-0 bg-white`}
    >

      <Sidebar
        items={slideImages.map(i => i.title)}
        setSlide={setSlide}
      />

      {/* body */}
      <div className=" z-10 relative h-screen flex items-center justify-center ">
        <motion.div
          key={slideImages[slide].title}
          initial={{
            opacity: 0,
            translateX: '-20%',
            skewY: 3,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            skewY: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className='flex items-center justify-center h-full'>
          <img src={slideImages[slide].imageUrl} alt='gallery image' className=' translate-x-16 aspect-video h-[70%]' />
        </motion.div>

      </div>

      {/* close button */}
      <div className='z-30'>
        <button
          className="absolute z-30 top-0 right-0 p-4 text-black text-2xl hover:bg-black hover:text-white transition-all"
          onClick={() => { dispatch(allClose()) }}>
          <IoClose />
        </button>
      </div>
    </motion.div>
  )
}

export default HolisticEcosystem

interface SidebarProps {
  // show: boolean;
  items: string[];
  setSlide: (index: number) => void;
  // setMenuOpen: (isOpen: boolean) => void;
}

export const Sidebar = ({ items, setSlide }: SidebarProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  console.log("sidebar rendered");
  return (
    <motion.div
      initial={{
        translateX: '-90%',
        // opacity: 0,/
      }}
      animate={{
        translateX: isMenuOpen ? '0%' : '-90%',
        // opacity: isMenuOpen ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeIn",
      }}
      className={` z-30 fixed top-0 left-0 min-w-[300px] text-white bg-black shadow-lg h-screen p-8`}
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
        <div className=' min-h-10 mb-[30px]'>
          <img src={logo} alt="logo" className="md:h-[7rem] h-[4rem] md:w-[7rem] w-[4rem]" />
        </div>
        <div className=' mt-[30px] mb-auto self-stretch'>
          {items.map((item, index) => {
            return (
              <div key={index} className=' w-full text-left border-b border-[#FFD700] pl-6 spacing tracking widset'>
                <motion.button className={` py-4 text-lg italic tracking-normal w-full text-start`}
                  initial={{
                    background: '#000',
                  }}
                  whileHover={{
                    color: '#FFD700',
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