import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import CommonModal from './shared/SimpleModal';
import { useSelector } from 'react-redux';
import "../index.css"
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
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </CommonModal>
    );
}

export default GalaryModel;