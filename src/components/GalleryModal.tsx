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
import { useState } from 'react';
// import { MyImage } from './extras/ImagesLoad';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import Sidebar from './shared/Sidebar';

import { motion } from 'framer-motion'
// import FullPageLoading from './extras/FullPageLoading';

const GalaryModel = () => {
  const isGalary = useSelector((state: any) => state.isGalary);

  const options = [{
    title: "Interior Shots",
    images: InteriorGalleryImages("interior/compressed_tenth", "-min"),
    imagesLarge: InteriorGalleryImages(),
  }, {
    title: "Exterior Shots",
    images: ExteriorGalleryImages("exterior"),
    imagesLarge: ExteriorGalleryImages(),
  }]

  // const [slideIndex, setSlideIndex] = useState<any>(0);
  const [slide, setSlide] = useState<number>(0);

  // useEffect(() => {
  //   setSlideIndex(0);
  // }, [slide]);

  return (
    <CommonModal show={isGalary}>
      <Sidebar
        slide={slide}
        items={options.map(i => i.title)}
        setSlide={setSlide}
      />
      {/* <div className="self-stretch w-full h-full flex items-center justify-center flex-col rounded-md"> */}
      <div className="">
        {slide === 0 &&
          <Gallery
            images={options[0].images}
          />
        }
        {slide === 1 &&
          <Gallery
            images={options[1].images}
          />
        }

        {/* // setSlideIndex={setSlideIndex}
          // slideIndex={slideIndex} */}
        {/* } */}
      </div>
    </CommonModal>
  );
}

export default GalaryModel;

// type NavigationButtonProps = {
//   src: string;
//   setFullScreen: React.Dispatch<React.SetStateAction<string | null>>;
// }

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

interface GalleryProps {
  // slideIndex?: any;
  images: string[];
  // setSlideIndex?: React.Dispatch<React.SetStateAction<any>>;
}

const Gallery = ({ images }: GalleryProps) => {
  const isMenuOpen = useSelector((state: any) => state?.isSidebarOpen);
  const [slideIndex, setSlideIndex] = useState<number>(0);

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
          spaceBetween={30}
          effect={'fade'}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          navigation={true}
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
          {images.map((src: string, idx: number) => (
            <SwiperSlide key={idx} style={{ height: '100%' }}>
              <div 
              className="h-[60vh] w-full flex items-center justify-center bg-black/30 rounded-lg"
              >
                <img src={src} className='h-full' style={{ objectFit: 'contain' }} />
              </div>
            </SwiperSlide>

          ))}
          <NavigationButtons activeIndex={slideIndex} totalImages={images.length} />
        </Swiper>
      </motion.div>
    </motion.div>
  );
};


// const Gallery = ({ images }: GalleryProps) => {
//   const isMenuOpen = useSelector((state: any) => state?.isSidebarOpen);
//   const [slideIndex, setSlideIndex] = useState<number>(0);
//   return (
//     <motion.div
//       initial={{
//         // translateX: 0,
//         opacity: 0,
//       }}
//       animate={{
//         translateX: isMenuOpen ? 100 : 0,
//         opacity: 1,
//       }}
//       transition={{
//         duration: 0.5,
//         ease: "easeInOut"
//       }}>
//       <motion.div
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 1,
//         }}
//         transition={{
//           delay: 0.5,
//           duration: 0.5,
//           ease: "easeInOut"
//         }}
//         className=" max-w-[97vw] w-full sm:max-w-[80vw] aspect-video flex items-center justify-center "
//       >
//         <Swiper
//           spaceBetween={30}
//           effect={'fade'}
//           pagination={{
//             clickable: true,
//           }}
//           className=""
//           onSlideChange={(i) => {
//             setSlideIndex(i.activeIndex);
//           }}
//           modules={[EffectFade, Navigation, Pagination]}
//           // modules={[EffectFade, Navigation, Pagination, Controller]}
//           // controller={{ control: slideIndex }}
//           style={{
//             "--swiper-navigation-color": "#000",
//             "--swiper-pagination-color": "#000",
//             "--swiper-pagination-bullet-inactive-color": "#fff",
//             "--swiper-pagination-bullet-inactive-opacity": ".4",
//             "--swiper-pagination-bullet-horizontal-gap": "3px",
//           } as any}
//         >
//           {
//             images.map((src: string, idx: number) =>
//             (<SwiperSlide key={idx}>
//               {/* <React.Suspense fallback={<FullPageLoading />}>
//               <MyImage url={src} />
//             </React.Suspense> */}
//               <img src={src} className=' h-[60vh]' />
//             </SwiperSlide>))
//           }
//           <NavigationButtons activeIndex={slideIndex} totalImages={images.length} />
//         </Swiper>
//       </motion.div>
//     </motion.div>
//   )
// }