import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import Sidebar from '../shared/Sidebar';
import { PlanImageUrls } from '../../constants/ImageUrls'
import CloseButton from '../options/CloseButton';

const Plans = () => {
  const isplans = useSelector((state: any) => state?.isplans);
  const [slide, setSlide] = useState(0);

  console.log("holistic rendered", slide);

  return (
    <motion.div
      animate={{
        translateX: isplans ? '0%' : '-100%',
        opacity: isplans ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={` fixed inset-0 bg-black/30 `}
    >

      <Sidebar
        items={PlanImageUrls.map(i => i.title)}
        setSlide={setSlide}
      />

      {/* body */}
      <div className=" z-10 relative h-screen flex items-center justify-center ">
        <motion.div
          key={PlanImageUrls[slide].title}
          initial={{
            opacity: 0,
            // translateX: '-20%',
            // skewY: 3,
          }}
          animate={{
            opacity: 1,
            // translateX: 0,
            // skewY: 0,
          }}
          exit={{
            opacity: 0,
            // translateX: '20%',
            // skewY: -3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className='flex items-center justify-center h-full'>
          <img src={PlanImageUrls[slide].url} alt='gallery image' className=' translate-x-16 h-[70%]' />
        </motion.div>

      </div>

      {/* close button */}
      <CloseButton />
    </motion.div>
  )
}

export default Plans

