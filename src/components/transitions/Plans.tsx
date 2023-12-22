import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Sidebar from '../shared/Sidebar';
import { PlanImageUrls } from '../../constants/ImageUrls';
import CloseButton from '../options/CloseButton';

// // Preload the images outside the component
// const preloadedImages = PlanImageUrls.map((item) => {
//   const image = new Image();
//   image.src = item.url;
//   return image;
// });

const Plans = () => {
  const isplans = useSelector((state: any) => state?.isplans);
  const [slide, setSlide] = useState(0);

  console.log("holistic rendered", slide);

  return (
    <div
      style={{
        transform: `translateX(${isplans ? '0%' : '-100%'})`,
        opacity: isplans ? 1 : 0,
        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
      }}
      className={`fixed inset-0 bg-black/30`}
    >
      <Sidebar
        selected={slide}
        items={PlanImageUrls.map(i => i.title)}
        setSlide={setSlide}
      />

      {/* body */}
      <div className="z-10 relative h-screen flex items-center justify-center">
        {PlanImageUrls.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === slide ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className='absolute w-[70vw] max-w-[500px] bg-white rounded-md overflow-hidden shadow-2xl flex items-center justify-center'
          >
            <img
              src={PlanImageUrls[index].url}
              alt='gallery image'
              loading='lazy'
              className=' w-full h-full object-contain'
              onLoad={() => console.log("loaded", index)}
            />
          </motion.div>
        ))}
      </div>

      {/* close button */}
      <CloseButton />
    </div>
  );
};

export default Plans;


