import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "../index.css"
import { Navigation, Pagination } from 'swiper/modules';
import CommonModal from './shared/SimpleModal';
import { useSelector } from 'react-redux';
import { InteriorGalleryImages, ExteriorGalleryImages } from '../constants/ImageUrls';
import { useState } from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import Sidebar from './shared/Sidebar';

import { motion } from 'framer-motion'

const GalaryModel = () => {
  const isGalary = useSelector((state: any) => state.isGalary);

  const [slide, setSlide] = useState<number>(0);

  return (
    <CommonModal show={isGalary}>
      <Sidebar
        slide={slide}
        items={["Interior Shots", "Exterior Shots"]}
        setSlide={setSlide}
      />
      <div className="">
        {slide === 0 && <InteriorGallery />}
        {slide === 1 && <ExteriorGallery/>}
      </div>
    </CommonModal>
  );
}

export default GalaryModel;


interface NavigationButtonsProps {
  activeIndex: number;
  totalImages: number;
}

const NavigationButtons = ({ activeIndex, totalImages }: NavigationButtonsProps) => {
  const swiper = useSwiper();
  return (
    <div className=" z-50 absolute inset-0">

      <div className=" absolute top-[30vh] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-row justify-between items-center w-full p-[1vh] ">
        <button className=' flex items-center justify-center bg-white p-[2vh] text-[2vh] rounded-full border border-black hover:text-white hover:bg-black ring-2 hover:ring-white disabled:opacity-50  disabled:pointer-events-none transition-colors duration-200'
          disabled={activeIndex === 0}
          onClick={() => swiper.slidePrev()}
        ><MdOutlineArrowBackIos /></button>
        <button className=' flex items-center justify-center bg-white p-[2vh] text-[2vh] rounded-full border border-black hover:text-white hover:bg-black ring-2 hover:ring-white disabled:opacity-50  disabled:pointer-events-none transition-colors duration-200'
          disabled={activeIndex === totalImages - 1}
          onClick={() => swiper.slideNext()}
        ><MdOutlineArrowForwardIos /></button>
      </div>

      {/* <button className=" absolute right-4 top-4 w-8 h-8 bg-white text-black flex items-center justify-center text-xl shadow-md shadow-black/40 hover:bg-black hover:text-white transition-transform duration-150 rounded-sm"
        onClick={() => setFullScreen(t => {
          if (t === null) {
            return src;
          } else {
            return null;
          }
        })}>
        <GoScreenFull />
      </button> */}
    </div>
  )
}

export const InteriorGallery = () => {
  const isMenuOpen = useSelector((state: any) => state?.isSidebarOpen);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const interiorImages = InteriorGalleryImages("interior/compressed_tenth", "-min");
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        translateX: isMenuOpen ? 100 : 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut"
        }}
        className=" w-full max-w-[60vw] flex items-center justify-center"
      >
        <Swiper
          // lazy={true}
          lazyPreloadPrevNext={1}
          pagination={{
            "clickable": true
          }}
          lazyPreloaderClass='lazy-preloader'
          modules={[Navigation, Pagination]}
          onSlideChange={(swiper) => {
            setSlideIndex(swiper.activeIndex);
          }}
          style={{
            width: '100%',
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-inactive-color": "#fff",
            "--swiper-pagination-bullet-inactive-opacity": ".1",
            "--swiper-pagination-bullet-horizontal-gap": "3px",
          } as any}
        >
          {interiorImages.map((src: string, idx: number) => (
            <SwiperSlide key={idx} style={{ height: '100%' }}>
              <div 
              className="h-[60vh] w-full flex items-center justify-center bg-black/30 rounded-lg"
              >
                <img src={src} className='h-full' style={{ objectFit: 'contain' }} loading='lazy'/>
                <div className='lazy-preloader'></div>
              </div>
            </SwiperSlide>

          ))}
          <NavigationButtons activeIndex={slideIndex} totalImages={interiorImages.length} />
        </Swiper>
      </motion.div>
    </motion.div>
  );
};
const ExteriorGallery = () => {
  const isMenuOpen = useSelector((state: any) => state?.isSidebarOpen);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const exteriorImages = ExteriorGalleryImages("exterior");
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        translateX: isMenuOpen ? 100 : 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut"
        }}
        className=" w-full max-w-[60vw] flex items-center justify-center"
      >
        <Swiper
           lazyPreloadPrevNext={1}
            pagination={{
              "clickable": true
            }}
           lazyPreloaderClass='lazy-preloader'
           modules={[Navigation, Pagination]}
           onSlideChange={(swiper) => {
             setSlideIndex(swiper.activeIndex);
           }}
           style={{
             width: '100%',
             "--swiper-navigation-color": "#000",
             "--swiper-pagination-color": "#fff",
             "--swiper-pagination-bullet-inactive-color": "#fff",
             "--swiper-pagination-bullet-inactive-opacity": ".1",
             "--swiper-pagination-bullet-horizontal-gap": "3px",
           } as any}
        >
          {exteriorImages.map((src: string, idx: number) => (
            <SwiperSlide key={idx} style={{ height: '100%' }}>
              <div 
              className="h-[60vh] w-full flex items-center justify-center bg-black/30 rounded-lg"
              >
                <img src={src} className='h-full' style={{ objectFit: 'contain' }} loading='lazy' decoding='async'/>
              </div>
            </SwiperSlide>

          ))}
          <NavigationButtons activeIndex={slideIndex} totalImages={exteriorImages.length} />
        </Swiper>
      </motion.div>
    </motion.div>
  );
};
