import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {  Autoplay } from 'swiper';
import ava1 from '../assets/images/ava-1.jpg';
import ava2 from '../assets/images/ava-2.jpg';
import ava3 from '../assets/images/ava-3.jpg';
import ava4 from '../assets/images/ava-4.jpg';

export default function Customers() {
  return (
    <div className="mt-[2rem] ">
      <Swiper
        pagination={false}
        modules={[ Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div>
            <p className=" md:text-start text-justify  text-gray-700 text-base font-istock font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              minus. Tempora reprehenderit a corporis velit, laboriosam vitae
              ullam, repellat illo sequi odio esse iste fugiat dolor, optio
              incidunt eligendi deleniti!
            </p>
            <div className="flex gap-4 mt-[3rem]  ">
              <img
                src={ava1}
                className=" object-cover rounded-md w-[50px] h-[50px]"
              />
              <span className=" text-center place-self-center ml-1 font-istock font-semibold">
                Steve Crock
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className=" text-start text-gray-700 text-base font-istock font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              minus. Tempora reprehenderit a corporis velit, laboriosam vitae
              ullam, repellat illo sequi odio esse iste fugiat dolor, optio
              incidunt eligendi deleniti!
            </p>
            <div className="flex gap-4 mt-[3rem]  ">
              <img
                src={ava2}
                className=" object-cover rounded-md w-[50px] h-[50px]"
              />
              <span className=" text-center place-self-center ml-1 font-istock font-semibold">
                Emma Stone
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className=" text-start text-gray-700 text-base font-istock font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              minus. Tempora reprehenderit a corporis velit, laboriosam vitae
              ullam, repellat illo sequi odio esse iste fugiat dolor, optio
              incidunt eligendi deleniti!
            </p>
            <div className="flex gap-4 mt-[3rem]  ">
              <img
                src={ava3}
                className=" object-cover rounded-md w-[50px] h-[50px]"
              />
              <span className=" text-center place-self-center ml-1 font-istock font-semibold">
                Sam Winchester
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className=" text-start text-gray-700 text-base font-istock font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              minus. Tempora reprehenderit a corporis velit, laboriosam vitae
              ullam, repellat illo sequi odio esse iste fugiat dolor, optio
              incidunt eligendi deleniti!
            </p>
            <div className="flex gap-4 mt-[3rem]  ">
              <img
                src={ava4}
                className=" object-cover rounded-md w-[50px] h-[50px]"
              />
              <span className=" text-center place-self-center ml-1 font-istock font-semibold">
                Rose Allen
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
