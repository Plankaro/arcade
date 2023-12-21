import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { allClose } from '../../store/slice/action';
import { IoClose } from 'react-icons/io5';
// import Sidebar from '../shared/Sidebar';

import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import logo from "../../assets/logo/logo.png";

const Layouts = () => {
  const dispatch = useDispatch();
  const ispalladian = useSelector((state: any) => state?.ispalladian);

  const menuMap = [
    {
      title: 'ground floor layout',
      items: [
        {
          title: 'Drop off zone 1',
          image: 'https://images.unsplash.com/photo-1625015531264-43c3fce8c792?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          title: 'Drop off zone 2',
          image: 'https://wallpapercave.com/wp/Os2ZgZR.jpg',
        },
      ],
    },
    {
      title: 'first floor layout',
      items: [
        {
          title: 'Drop off zone 4',
          image: 'https://wallpapercave.com/wp/Os2ZgZR.jpg',
        },
        {
          title: 'Drop off zone 5',
          image: 'https://images.unsplash.com/photo-1625015531264-43c3fce8c792?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ],
    },
  ];



  const [slide, setSlide] = useState([0, 0]);

  const setFirstSlide = (index: number) => {
    setSlide([index, 0]);
  }
  const setSubSlide = (index: number) => {
    setSlide([slide[0], index]);
  }

  console.log("Layouts rendered", slide);

  return (
    <motion.div
      animate={{
        translateX: ispalladian ? '0%' : '-100%',
        opacity: ispalladian ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={` fixed inset-0 bg-white`}
    >

      <Sidebar
        items={menuMap.map(i => i.title)}
        setSlide={setFirstSlide}
        setSubSlide={setSubSlide}
        slide={[0, 0]}
      />

      {/* body */}
      <div className=" z-10 relative h-screen flex items-center justify-center ">
        <motion.div
          // key={slideImages[slide].title}
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
          <div>Hello world</div>
          {/* <img src={slideImages[slide].imageUrl} alt='gallery image' className=' translate-x-16 aspect-video h-[70%]' /> */}
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

export default Layouts




interface SidebarProps {
  items: string[];
  slide: [number, number];
  setSlide: (index: number) => void;
  setSubSlide: (index: number) => void;
}

export const Sidebar = ({ items, slide, setSlide, setSubSlide }: SidebarProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState<0 | 1>(0);

  // console.log("sidebar rendered");

  return (
    <motion.div
      initial={{
        translateX: '-90%',
      }}
      animate={{
        translateX: isMenuOpen ? '0%' : '-90%',
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
        <div>
          <motion.button className={` w-[40px] h-[40px] rounded-full border border-white bg-accent flex items-center justify-center`}
            whileHover={{
              color: '#FFD700',
            }}
            onClick={() => { setCurrentTab(0) }}
          >
            <MdOutlineArrowBackIos className=' text-white' />
          </motion.button>
        </div>
        <div className=' mt-[30px] mb-auto self-stretch'>
          {items.map((item, index) => {
            return (
              <div key={index} className=' w-full text-left border-b border-[#FFD700] pl-6 spacing'>
                <motion.button className={` py-4 text-lg italic tracking-normal w-full text-start`}
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
