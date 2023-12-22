import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import { allClose } from '../../store/slice/action';
import { IoClose } from 'react-icons/io5';
import Sidebar from '../shared/Sidebar';

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

