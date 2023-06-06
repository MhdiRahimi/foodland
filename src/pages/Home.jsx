import heroImg from '../assets/hero.png';
import fastfood from '../assets/images/category-01.png';
import asianFood from '../assets/images/category-03.png';
import pizza from '../assets/images/category-02.png';
import rowMeat from '../assets/images/category-04.png';
import service1 from '../assets/images/service-01.png';
import service2 from '../assets/images/service-02.png';
import service3 from '../assets/images/service-03.png';
import delivery from '../assets/images/location.png';
import customer from '../assets/images/network.png';
import {
  RiCarLine,
  RiShieldCheckLine,
  RiArrowDropRightLine,
} from 'react-icons/ri';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import Tabs from '../components/Tabs';
import Card from '../components/Card';
import Customers from '../components/Customers';
import { useSelector } from 'react-redux';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';

export default function Home() {
  const products = useSelector((state) => state.products.value);
  const activeTab = useSelector((state) => state.products.tab);

  let foods = products.filter(
    (food) => food.category.toLowerCase() === activeTab
  );
  let hotPizza = products.filter(
    (food) => food.category.toLowerCase() === 'pizza'
  );

  const iconVariants = {
    out: {
      y: 20,
      opacity: 0,
    },
    in: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.6,
        delayChildren: 0.3,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: '0.3', type: 'ease-in-out' },
        }}
        className=" container mx-auto md:px-12 px-[1rem]  md:mt-[4rem] "
      >
        <div className="grid md:grid-cols-2 grid-cols-1 md:justify-around justify-center w-full  ">
          <div className="ml-0 w-full  text-center md:text-start">
            <h5 className="font-rock md:text-2xl text-lg mt-[4rem]">
              Easy way to make an order
            </h5>
            <h1 className="font-rock font-bold md:text-4xl text-2xl break-words md:w-4/6 tracking-wider mt-[1rem] ml-0 w-full  text-center md:text-start ">
              <span className="text-[#DF2020]">HUNGRY?</span>
              <span className="text-[#212245]">Just wait food at</span>
              <span className="text-[#DF2020]"> your door</span>
            </h1>
            <p className="mt-[2rem] font-istock  text-slate-600 md:font-2xl font-base  md:w-5/6 w-full ml-0  text-center md:text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              magni delectus tenetur autem, sint veritatis!
            </p>

            <div className="mt-[3rem] flex gap-10 md:justify-start justify-center ">
              <button className="  px-4 py-1 font-istock text-sm font-bold hover:bg-[#212045] transition-all relative inline-flex items-center justify-center  text-cente overflow-hidden   text-white rounded-md bg-[#DF2020]  ">
                Order now{' '}
                <span className="">
                  <RiArrowDropRightLine size={30} />
                </span>
              </button>
              <button className="  px-6 py-1 font-istock text-sm font-bold transition-all relative inline-flex items-center justify-center  text-cente overflow-hidden   text-[#DF2020] rounded-md border  border-[#DF2020]  hover:border-[#212045] hover:text-[#212045]">
                See all foods
              </button>
            </div>
            <div className=" flex gap-2 md:mt-[2rem] mt-[3rem] md:justify-start justify-center ">
              <div className=" flex align-middle">
                <span className="   bg-[#DF2020] p-[0.4rem] w-[28px] h-[28px] rounded-full">
                  <RiCarLine color="#fff" />
                </span>
              </div>
              <p className=" mt-1 md:font-semibold font-normal font-istock text-[#212245]">
                No shipping charge
              </p>
              <div className=" flex align-middle">
                <span className="   bg-[#DF2020]  p-[0.4rem] w-[28px] h-[28px] rounded-full">
                  <RiShieldCheckLine color="#fff" />
                </span>
              </div>
              <p className=" mt-1 md:font-semibold font-normal font-istock text-[#212245] ">
                100% secure checkout
              </p>
            </div>
          </div>
          <div className="ml-4  md:justify-start justify-center ">
            <img src={heroImg} alt="foodland" />
          </div>
        </div>

        {/*category */}
        <AnimatePresence>
          <div className="grid auto-cols-auto sm:grid-cols-2  lg:grid-cols-4  md:grid-cols-3 gap-5  sm:justify-start justify-center  mt-[5rem]">
            <motion.div
              whileHover={{
                translateY: -20,
                transition: {
                  duration: 0.3,
                  easeInOut,
                },
              }}
              className="  flex justify-start content-center bg-[#FDE4E4] rounded-lg p-[30px] "
            >
              <img
                className="w-[64px] h-[64px]  grid place-items-center"
                src={fastfood}
              />

              <h6 className="ml-[2rem] font-rock  text-[#212529]  grid place-items-center">
                Fastfood
              </h6>
            </motion.div>
            <motion.div
              whileHover={{
                translateY: -20,
                transition: {
                  duration: 0.3,
                  easeInOut,
                },
              }}
              className=" flex justify-start content-center bg-[#FDE4E4] rounded-lg p-[30px] "
            >
              <img
                className="w-[64px] h-[64px]  grid place-items-center"
                src={pizza}
              />

              <h6 className="ml-[2rem] font-rock text-[#212529]  grid place-items-center">
                Pizza
              </h6>
            </motion.div>
            <motion.div
              whileHover={{
                translateY: -20,
                transition: {
                  duration: 0.3,
                  easeInOut,
                },
              }}
              className=" flex justify-start content-center bg-[#FDE4E4] rounded-lg p-[30px] "
            >
              <img
                className="w-[64px] h-[64px]  grid place-items-center"
                src={asianFood}
              />

              <h6 className=" ml-[2rem]  font-rock  text-[#212529]  grid place-items-center">
                Asiam Food
              </h6>
            </motion.div>
            <motion.div
              whileHover={{
                translateY: -20,
                transition: {
                  duration: 0.3,
                  easeInOut,
                },
              }}
              className=" flex justify-start content-center   bg-[#FDE4E4] rounded-lg p-[30px] "
            >
              <img
                className="w-[64px] h-[64px]  grid place-items-center"
                src={rowMeat}
              />

              <h6 className="ml-[2rem]  font-rock  text-[#212529]  grid place-items-center">
                Row Meat
              </h6>
            </motion.div>
          </div>
        </AnimatePresence>
        {/* what we serve */}

        <div className=" mt-[5rem] ">
          <h5 className="text-xl font-istock text-[#DF2020] font-semibold   tracking-wide md:text-start text-center ">
            What we serve
          </h5>
          <h2 className="mt-[1rem] md:text-3xl text-2xl font-rock text-[#212245] md:text-start font-semibold  tracking-wide text-center">
            Just sit back at home
          </h2>
          <h2 className="mt-[1rem] md:text-3xl text-2xl font-rock text-[#212245] md:text-start font-semibold  tracking-wide text-center">
            we will <span className="text-[#DF2020]">take care</span>
          </h2>
          <div className="md:text-start text-slate-600 font-medium text-base mt-[2rem] font-istock  tracking-wide text-center">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              officiis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              eius.
            </p>
          </div>

          <div className=" mt-[6rem]  sm:flex sm:basis-1/3 sm:justify-between auto-cols-auto justify-center  ">
            <div className="grid place-content-center my-[1rem] ">
              <img
                className="h-[41px] w-[50px] place-self-center"
                src={service1}
              />
              <h5 className=" mt-3 text-xl font-semibold font-rock text-[#212529] place-self-center   ">
                Quick Delivery
              </h5>
              <p className=" text-slate-600 font-medium text-base mt-4 w-[240px] font-istock  tracking-wide text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
                doloremque
              </p>
            </div>

            <div className="grid place-content-center  my-[2rem]  ">
              <img
                className="h-[41px] w-[50px] place-self-center"
                src={service2}
              />
              <h5 className=" mt-3 text-xl font-semibold font-rock text-[#212529] place-self-center ">
                Super Dine In
              </h5>
              <p className=" text-slate-600 font-medium text-base mt-4 w-[240px] font-istock  tracking-wide text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
                doloremque
              </p>
            </div>

            <div className="grid place-content-center my-[2rem] ">
              <img
                className="h-[41px] w-[50px] place-self-center"
                src={service3}
              />
              <h5 className=" mt-3 text-xl font-semibold font-rock text-[#212529] place-self-center ">
                Easy Pick Up
              </h5>
              <p className=" text-slate-600 font-medium text-base mt-4 w-[240px] font-istock  tracking-wide text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
                doloremque
              </p>
            </div>
          </div>
        </div>
        {/* end what we serve */}

        {/* popular food */}

        <div className=" mt-[5rem] ">
          <h2 className="font-rock text-[#212245] md:text-4xl text-2xl text-center ">
            Popular Foods
          </h2>
          <Tabs />
        </div>
        {/* end popular food */}

        <div className="mt-[5rem] mb-[10rem] w-full ">
          <motion.div
            key={activeTab}
            initial="out"
            animate="in"
            variants={iconVariants}
            layout
            className="grid grid-cols-2  sm:grid-cols-2  lg:grid-cols-4  md:grid-cols-3  w-full gap-3 sm:gap-10  place-items-center  "
          >
            {activeTab !== 'all'
              ? foods.map((item, i) => {
                  return <Card key={i} item={item} />;
                })
              : products.map((item, i) => {
                  return <Card key={i} item={item} />;
                })}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 w-full md:justify-start   ">
          <div>
            <img src={delivery} />
          </div>
          <div>
            <div className="md:text-start text-center ">
              <h1 className=" font-rock font-bold text-3xl md:text-4xl break-words md:w-4/6 w-full tracking-wider mt-[1rem] ">
                <span className="text-[#212245]  ">Why</span>
                <span className="text-[#DF2020]  ">Tasty Treat?</span>
              </h1>
              <p className="mt-[2rem] font-istock  text-slate-600  md:w-5/6 w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, minus. Tempora reprehenderit a corporis velit,
                laboriosam vitae ullam, repellat illo sequi odio esse iste
                fugiat dolor, optio incidunt eligendi deleniti!
              </p>
              <div className="flex mt-[2rem] md:justify-start justify-center">
                <i className=" mr-1  rounded-full">
                  <IoIosCheckmarkCircleOutline color="#fd2020" size={20} />
                </i>
                <p className=" grid font-istock font-semibold text-[#212529] leading-6  text-xl ">
                  Fresh and tasty foods
                </p>
              </div>
              <p className="mt-[0.5rem]  font-istock  text-slate-600 font-2xl w-full mx-[0.5rem] text-justify md:w-5/6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
                voluptatibus.
              </p>

              <div className="flex mt-[2rem] md:justify-start justify-center">
                <i className="  align-middle    mr-1  rounded-full">
                  <IoIosCheckmarkCircleOutline color="#fd2020" size={20} />
                </i>
                <p className=" grid font-istock font-semibold text-[#212529] leading-6  text-xl ">
                  Quality support
                </p>
              </div>
              <p className=" w-full md:w-5/6 mt-[0.5rem] font-istock  text-slate-600 font-2xl mx-[0.5rem] text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                earum.
              </p>

              <div className="flex mt-[2rem] md:justify-start justify-center">
                <i className="  align-middle    mr-1  rounded-full">
                  <IoIosCheckmarkCircleOutline color="#fd2020" size={20} />
                </i>
                <p className=" grid font-istock font-semibold text-[#212529] leading-6  text-xl ">
                  Order from any location
                </p>
              </div>
              <p className="mt-[0.5rem] w-full md:w-5/6  font-istock  text-slate-600 font-2xl mx-[0.5rem] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                earum.
              </p>
            </div>
          </div>
        </div>

        {/**
         hot pizzaa
         */}

        <div className=" mt-[5rem] ">
          <h2 className="font-rock text-[#212245] md:text-4xl text-3xl text-center ">
            Hot Pizza
          </h2>
          <div className="mt-[5rem] mb-[10rem] w-full">
            <div className="grid grid-cols-2  sm:grid-cols-2  lg:grid-cols-4  md:grid-cols-3  w-full gap-3 sm:gap-10  place-items-center  ">
              {hotPizza.map((item, i) => {
                return <Card key={i} item={item} />;
              })}
            </div>
          </div>
        </div>

        {/**
         customers saying
         */}

        <div className="grid sm:grid-cols-2 grid-cols-1 justify-around  md:text-start text-center ">
          <div className="ml-2">
            <h5 className="font-rock text-[#DF2020] font-medium	 text-xl	 leading-5 mt-1  ">
              Testimonial
            </h5>
            <h1 className="font-rock font-bold text-4xl break-words   mt-[1rem] ">
              <span className="text-[#212245]">What our </span>
              <span className="text-[#DF2020]">customers </span>
              <span className="text-[#212245]"> are saying</span>
            </h1>
            <p className=" mt-[1.5rem] text-slate-600 font-medium text-base text-center md:text-left font-istock">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio quasi qui minus quos sit perspiciatis inventore quis
              provident placeat fugiat!
            </p>
            <Customers />
          </div>

          <div className="ml-4 md:mt-0 mt-[2rem]">
            <img src={customer} alt="foodland" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

//  w-[261px] h-[124px]
