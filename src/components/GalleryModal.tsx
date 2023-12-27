import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import CommonModal from './shared/SimpleModal';
import { useSelector } from 'react-redux';
import "../index.css"
import { InteriorGalleryImages, ExteriorGalleryImages } from '../constants/ImageUrls';
// import { FullScreenViewer } from './extras/Image';
import React, { useRef, useState } from 'react';
// import { GoScreenFull } from "react-icons/go";
import { MyImage } from './extras/ImagesLoad';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import Sidebar from './shared/Sidebar';

import { motion } from 'framer-motion'

const GalaryModel = () => {
  const isGalary = useSelector((state: any) => state.isGalary);
  // const galleryImagesLarge = InteriorGalleryImages();

  const options = [{
    title: "Interior Shots",
    images: InteriorGalleryImages("interior/compressed_tenth", "-min"),
    imagesLarge: InteriorGalleryImages(),
  }, {
    title: "Exterior Shots",
    images: ExteriorGalleryImages("exterior"),
    imagesLarge: ExteriorGalleryImages(),
  }]

  const [slideIndex] = useState<number>(0);

  const [slide, setSlide] = useState<number>(0);

  // const [fullScreen, setFullScreen] = useState<string | null>(null);


  return (
    <CommonModal show={isGalary}>
      <Sidebar
        slide={slide}
        items={options.map(i => i.title)}
        setSlide={setSlide}
      />
      <div className="self-stretch w-full h-full flex items-center justify-center flex-col rounded-md">
        {/* <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeIn",
            delay: 1,
          }}
          className=" max-w-[97vw] w-full sm:max-w-[60vw] aspect-video flex items-center justify-center "> */}
        {slide === 0 &&
          <Gallery
            images={options[0].images}
            // imagesLarge={options[0].imagesLarge}
            // setFullScreen={setFullScreen}
             />
        }
        {slide === 1 &&
          <Gallery
            images={options[1].images}
            // imagesLarge={options[1].imagesLarge}
            // setFullScreen={setFullScreen}
             />
        }
        {/* </motion.div> */}
      </div>
      {/* {fullScreen && <FullScreenViewer src={galleryImagesLarge[slideIndex]} setFullScreen={setFullScreen} />} */}

    </CommonModal>
  );
}

export default GalaryModel;

type NavigationButtonProps = {
  src: string;
  setFullScreen: React.Dispatch<React.SetStateAction<string | null>>;
}

const NavigationButtons = ({ setFullScreen, src }: NavigationButtonProps) => {
  console.log("🚀 ~ file: GalaryModel.tsx:99 ~ NavigationButtons ~  setFullScreen, src:", setFullScreen, src)
  const swiper = useSwiper();
  return (
    <div className=" absolute inset-0">

      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row justify-between items-center w-full p-2">
        <button className=' flex items-center justify-center bg-white p-3 rounded-full border border-black hover:text-white hover:bg-black'
          onClick={() => swiper.slidePrev()}
        ><MdOutlineArrowBackIos /></button>
        <button className=' flex items-center justify-center bg-white p-3 rounded-full border border-black hover:text-white hover:bg-black'
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

interface GalleryProps {
  images: string[];
  // imagesLarge: string[];
  // setFullScreen: React.Dispatch<React.SetStateAction<string | null>>;
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeIn",
        delay: 0.5,
      }}
      className=" max-w-[97vw] w-full sm:max-w-[60vw] aspect-video flex items-center justify-center "
    >
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        className="mySwiper h-auto"
        // lazy={true} // Enable lazy loading // not works in swiper js v>9
        modules={[EffectFade, Navigation, Pagination]}
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-navigation-size": window.innerWidth < 768 ? "20px" : "40px",
          "--swiper-pagination-color": "#000",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-bullet-inactive-opacity": ".4",
          "--swiper-pagination-bullet-horizontal-gap": "3px",
        } as any}
      >
        {
          images.map((src: string, idx: number) =>
          (<SwiperSlide className='w-full h-full' key={idx}>
            <React.Suspense fallback={<div>Loading...</div>}>
              <MyImage url={src} />
            </React.Suspense>

            <NavigationButtons setFullScreen={(() => {})} src={src} />
          </SwiperSlide>))
        }
      </Swiper>
    </motion.div>
  )
}