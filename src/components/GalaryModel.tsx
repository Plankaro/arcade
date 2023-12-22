import { Swiper, SwiperSlide } from 'swiper/react';
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
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper "
          >
            {ImageUrls.map((src: string, idx:number) =>
            (<SwiperSlide key={idx}>
              <img src={src} loading="lazy"/>
              <div className="swiper-lazy-preloader">
                loading...
              </div>
            </SwiperSlide>))}
          </Swiper>
        </div>
      </div>
    </CommonModal>
  );
}

export default GalaryModel;