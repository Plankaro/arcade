import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import { allClose } from '../../store/slice/action';
import { IoClose } from 'react-icons/io5';
import logo from "../../assets/logo/logo.png"

const HolisticEcosystem = () => {
  const dispatch = useDispatch();
  const isHolisticsEcoststem = useSelector((state: any) => state?.isHolisticsEcoststem);

  const slideImages = [{
    title: "Slide 1",
    imageUrl: "https://images.unsplash.com/photo-1625015531264-43c3fce8c792?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }, {
    title: "Slide 2",
    imageUrl: "https://images.unsplash.com/photo-1625015531264-43c3fce8c792?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }];

  const [isMenuOpen, setMenuOpen] = useState(true);
  const [slide, setSlide] = useState(0);

  return (
    <motion.div
      animate={{
        translateX: isHolisticsEcoststem ? '0%' : '-100%',
        opacity: isHolisticsEcoststem ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={` fixed inset-0 bg-white`}
    >
      <div className=''>
        <button
          className="absolute top-0 right-0 p-4 text-black text-2xl hover:bg-black hover:text-white transition-all"
          onClick={() => { dispatch(allClose()) }}>
          <IoClose />
        </button>
      </div>
      <Sidebar show={isMenuOpen} items={slideImages.map(i => i.title)} />
      {/* <div className=" relative h-screen flex items-center justify-center">
        <h1>Holistic Ecosystem</h1>
      </div> */}
    </motion.div>
  )
}

export default HolisticEcosystem

interface SidebarProps {
  show: boolean;
  items: string[];
}

export const Sidebar = ({ show, items }: SidebarProps) => {
  return (
    <motion.div
      initial={{
        translateX: '-100%',
        opacity: 0,
      }}
      animate={{
        translateX: show ? '0%' : '-100%',
        opacity: show ? 1 : 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.5,
      }}
      className={` z-30 fixed top-0 left-0 min-w-[300px] text-white bg-black shadow-lg h-screen p-8`}
    >
      <div className=' flex items-center flex-col justify-start h-full'>
        <div className=' min-h-10 mb-[30px]'>
          <img src={logo} alt="logo" className="md:h-[7rem] h-[4rem] md:w-[7rem] w-[4rem]" />
        </div>
        <div className=' mt-[30px] mb-auto self-stretch'>
          {items.map((item, index) => {
            return (
              <div key={index} className=' w-full text-left border-b border-[#FFD700] pl-6 spacing tracking widset'>
                <div className=' py-4 text-lg italic tracking-normal'>
                  {item?.[0].toUpperCase() + item.slice(1)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}