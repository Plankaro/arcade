import { Swiper, SwiperSlide, useSwiper, } from 'swiper/react';
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
import Image, { FullScreenViewer } from './extras/Image';
import { SetStateAction, useState } from 'react';
import { GoScreenFull } from "react-icons/go";



const GalaryModel = () => {
  const isGalary = useSelector((state: any) => state.isGalary);
  const galleryImages = ImageUrls("compressed_tenth", "-min");
  const galleryImagesLarge = ImageUrls();
  const [slideIndex, setSlideIndex] = useState<number>(0);


  const [fullScreen, setFullScreen] = useState<string | null>(null);



  return (
    <CommonModal show={isGalary}>
      <div className="self-stretch w-full h-full flex items-center justify-center flex-col rounded-md">
        <div className=" max-w-[97vw] w-full sm:max-w-[60vw] aspect-video flex items-center justify-center ">
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
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
            <PreloadController setIndex={setSlideIndex} />
            {
              galleryImages.map((src: string, idx: number) =>
              (<SwiperSlide key={idx}>
                {/* <img
                  src={src}
                  loading="lazy"
                  decoding="async"
                  
                /> */}
                {/* <div className="swiper-lazy-preloader"></div> */}
                <Image renderImage={Math.abs(idx - slideIndex) <= 2} src={src} className=''  />

                <div className=" absolute inset-0">
                  <button className=" absolute right-4 top-4 w-8 h-8 bg-black text-white flex items-center justify-center text-xl shadow-md shadow-black/40 hover:scale-105 transition-transform duration-150 rounded-sm"
                    onClick={() => setFullScreen(t => {
                      if (t === null) {
                        return src;
                      } else {
                        return null;
                      }
                    })}>
                    <GoScreenFull />
                  </button>
                </div>
              </SwiperSlide>))
            }
          </Swiper>
        </div>
      </div>
      {fullScreen && <FullScreenViewer src={galleryImagesLarge[slideIndex]} setFullScreen={setFullScreen} />}

    </CommonModal>
  );
}

export default GalaryModel;


interface PreloadControllerProps {
  setIndex: React.Dispatch<SetStateAction<number>>;
}

const PreloadController = ({ setIndex }: PreloadControllerProps) => {

  const swiper = useSwiper();
  swiper.on('slideChange', () => {
    setIndex(swiper.activeIndex);
  });

  return (<></>)
}