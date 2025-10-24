import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = ({ sliderData }) => {
  return (
    <div className="mt-19">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={sliderData.length > 1}
        slidesPerView={1}
        className="w-full h-[300px] md:h-[500px]"
      >
        {sliderData.map((data) => (
          <SwiperSlide key={data.id}>
            <img
              src={data.coverPhoto}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
