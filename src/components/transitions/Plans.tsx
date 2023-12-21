import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import { allClose } from '../../store/slice/action';
import { IoClose } from 'react-icons/io5';
import Sidebar from '../shared/Sidebar';

const Plans = () => {
  const dispatch = useDispatch();
  const isplans = useSelector((state: any) => state?.isplans);

  const slideImages = [{
    title: "Smart City",
    imageUrl: "https://img.freepik.com/premium-photo/glowing-smart-building-architecture-urban-landscape-urban-futuristic-technology-concepts-3d-rendering_634053-274.jpg",
  },
   {
    title: "Faster Connectivity",
    imageUrl: "https://i.pinimg.com/originals/e9/90/c0/e990c001eee994e2512bf8754e49b937.jpg",
  },
   {
    title: "Best Infrastructure",
    imageUrl: "https://thumbs.dreamstime.com/z/drawing-od-modern-building-architecture-plans-18781467.jpg",
  },
];


  const [slide, setSlide] = useState(0);

  console.log("holistic rendered", slide);

  return (
    <motion.div
      animate={{
        translateX: isplans ? '0%' : '-100%',
        opacity: isplans ? 1 : 0,
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
          exit={{
            opacity: 0,
            translateX: '20%',
            skewY: -3,
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

export default Plans

