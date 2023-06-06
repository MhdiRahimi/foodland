import Banner from '../components/Banner';
// eslint-disable-next-line no-unused-vars
import Comment from '../components/Comment';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { addCart } from '../features/cartshopSlice';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

export default function Product() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [windowSize, setWindowSize] = useState([window.innerWidth]);
  const [tab, setTab] = useState('tab1');

  const dispatch = useDispatch();
  let location = useLocation();
  let item = location.state.item;

  const products = useSelector((state) => state.products.value);
  let recommend = products.filter(
    (food) => food.category.toLowerCase() === item?.category.toLowerCase()
  );

  function changeTab2() {
    setTab('tab2');
  }
  function changeTab1() {
    setTab('tab1');
  }
  useEffect(() => {
    changeTab2();
    changeTab1();
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: '0',
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    scrollUp();
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: '0.3', type: 'ease-in-out' },
      }}
    >
      <div>
        <Banner title={item?.title} />
      </div>
      <div className="lg:p-[4rem] px-[2rem] mt-[3rem]  ">
        <div className="md:flex grid w-full  ">
          {/* <img src={product1} className="w-[365px] h-[365px]" /> */}

          <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className="product-images-slider-thumbs "
            direction={windowSize > 770 ? 'vertical' : 'horizontal'}
            style={
              windowSize > 770
                ? { width: '15%', height: '200px' }
                : {
                    width: '100%',
                    height: 'auto',
                  }
            }
          >
            <SwiperSlide>
              <div className="product-images-slider-thumbs-wrapper">
                <img
                  className="  object-cover rounded-md md:w-[50px] md:h-[50px] w-[100%]"
                  src={item?.image01}
                  alt="product images"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-images-slider-thumbs-wrapper">
                <img
                  className=" object-cover rounded-md md:w-[50px]   md:h-[50px] w-[100%]"
                  src={item?.image02}
                  alt="product images"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-images-slider-thumbs-wrapper">
                <img
                  className=" object-cover rounded-md md:w-[50px]  md:h-[50px] w-[100%]"
                  src={item?.image03}
                  alt="product images"
                />
              </div>
            </SwiperSlide>
          </Swiper>

          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            style={
              windowSize > 770
                ? { width: '33%', height: '315px' }
                : { width: '100%', height: 'auto' }
            }
            thumbs={{
              swiper:
                activeThumb && !activeThumb.destroyed ? activeThumb : null,
            }}
            className="product-images-slider mx-auto "
          >
            <SwiperSlide>
              <img
                className="md:w-[300px] just md:h-[300px] w-[100%] object-center flex mx-auto"
                src={item?.image01}
                alt="product images"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:w-[300px] md:h-[300px] w-[100%]object-center flex mx-auto"
                src={item?.image02}
                alt="product images"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:w-[300px] md:h-[300px] w-[100%] object-center flex mx-auto"
                src={item?.image03}
                alt="product images"
              />
            </SwiperSlide>
          </Swiper>

          <div className="  pr-[4rem] sm:pr-0 md:w-3/6 md:grid md:gap-2 md:pl-[4rem]  grid grid-cols-1 gap-4 justify-center">
            <h2 className=" mt-[1rem] md:mt-0 flex md:text-start md:justify-start text-center justify-center text-[#212245] font-rock font-bold text-4xl break-words md:w-4/6 w-full tracking-wider  ">
              {item?.title}
            </h2>
            <div className="flex md:text-start md:justify-start text-center justify-center ">
              <h6 className="  md:mt-0 mt-[1rem]  text-[#Df2020] font-istock font-semibold text-xl ">
                Price:
                <span className="  md:mt-0 mt-[1rem] text-2xl ml-2  font-thin font-rock ">
                  ${item?.price}
                </span>
              </h6>
            </div>
            <div className="flex md:text-start md:justify-start text-center justify-center  ">
              <h6 className=" md:mt-0 mt-[1rem] text-[#212245] font-istock font-semibold text-lg">
                Category:{' '}
                <span className="md:mt-0 mt-[1rem] ml-4 text-[#212245] bg-pink-200 p-[0.5rem] text-lg font-medium  rounded dark:bg-pink-900 dark:text-pink-300">
                  {item?.category}
                </span>
              </h6>
            </div>
            <div className="flex md:text-start md:justify-start text-center justify-center">
              <button
                onClick={() => dispatch(addCart(item))}
                className=" md:mt-0 mt-[1.5rem] max-h-[36px] w-[50%]  md:w-[50%] lg:w-[30%] px-4 py-1 font-istock text-sm font-bold hover:bg-[#212045] transition-all relative inline-flex items-center justify-center  text-cente overflow-hidden   text-white rounded-md bg-[#DF2020]  "
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="py-[4rem] pr-[4rem] w-full">
          <div className="text-sm font-medium text-center text-gray-500 border-b border-[#FDE4E4] dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px font-rock font-medium text-lg">
              <li className="mr-2 cursor-pointer" onClick={changeTab1}>
                <a
                  aria-current="page"
                  className={
                    tab === 'tab2'
                      ? ' text-[#212245] cursor-pointer inline-block p-4  '
                      : 'inline-block p-4  text-[#Df2020]'
                  }
                >
                  Description
                </a>
              </li>
              <li className="mr-2 cursor-pointer " onClick={changeTab2}>
                <a
                  className={
                    tab === 'tab1'
                      ? 'mr-2  text-[#212245] cursor-pointer inline-block p-4  '
                      : 'inline-block p-4  text-[#Df2020]'
                  }
                  aria-current="page"
                >
                  Review
                </a>
              </li>
            </ul>
          </div>
          <div>
            {tab === 'tab1' ? (
              <p className=" text-slate-600 font-medium text-base mt-4  font-istock  tracking-wide text-justify">
                {item?.desc}
              </p>
            ) : (
              <Comment />
            )}
          </div>
        </div>
      </div>
      <div className="md:p-[3rem] p-[1rem]">
        <h2 className=" mt-[8rem] mb-[3rem] md:text-start text-center  text-3xl font-rock text-[#212245] font-semibold  tracking-wide ">
          You might also like
        </h2>
        <div className="grid grid-cols-2  sm:grid-cols-2  lg:grid-cols-4  md:grid-cols-3  w-full gap-3 sm:gap-10  place-items-center  ">
          {recommend.map((item, i) => {
            return <Card key={i} item={item} />;
          })}
        </div>
      </div>
    </motion.div>
  );
}
