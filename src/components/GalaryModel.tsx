import { Swiper, SwiperSlide, } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// Use require.context to import all images from the specified folder

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import CommonModal from './shared/SimpleModal';
import { useSelector } from 'react-redux';
import "../index.css"
import { ImageUrls } from '../constants/ImageUrls';


const GalaryModel = () => {
  const isGalary = useSelector((state: any) => state.isGalary);
  const galleryImages = ImageUrls("compressed_tenth", "-min");


  return (
    <CommonModal show={isGalary}>
      <div className="self-stretch w-full h-full flex items-center justify-center flex-col rounded-md">
        <div className=" max-w-[97vw] w-full sm:max-w-[60vw] max-h-[550px] flex items-center justify-center ">
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper "
            // lazy={true} // Enable lazy loading // not works in swiper js v>9
            modules={[EffectFade, Navigation, Pagination]}
          >
            {/* <PreloadController /> */}
            {
              galleryImages.map((src: string, idx: number) =>
              (<SwiperSlide key={idx}>
                <img
                  src={src}
                  loading="lazy"
                  />
                <div className="swiper-lazy-preloader"></div>
              </SwiperSlide>))
            }
          </Swiper>
        </div>
      </div>
    </CommonModal>
  );
}

export default GalaryModel;


// const PreloadController = () => {

//   const swiper = useSwiper();
//   const preloadNext = (n: any) => {
//     console.log(swiper.slides);
//     swiper
//       .slides
//       .slice(swiper.activeIndex, swiper.activeIndex + n + 1)
//       .map(slide => slide.querySelector('img'))
//       .forEach((s: any) => {
//         // s.setAttribute('loading', 'eager')
//         s.style.display = "block";
//       });
//   };

//   // preload the next 2 images immediately
//   preloadNext(2);

//   // preload the next 2 images after changing slides
//   swiper.on('slideChange', (n: any) => {
//     console.log("slide changed: ", n)
//     preloadNext(2);
//   });

//   return (<></>)
// }