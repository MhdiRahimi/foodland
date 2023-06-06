import logo from '../assets/images/res-logo.png';
import {
  RiSendPlaneLine,
  RiWhatsappLine,
  RiInstagramLine,
  RiGithubLine,
  RiFacebookLine,
} from 'react-icons/ri';
export default function Footer() {
  return (
    <>
      <div className="  flex justify-center  pt-[4rem] ">
        <footer className="grid auto-cols-auto sm:grid-cols-2  lg:grid-cols-4  md:grid-cols-3 gap-5  ">
          <div className=" grid justify-center ">
            <img
              src={logo}
              className="h-14  flex items-center"
              alt="FoodLand"
            />
            <span className="  text-[#212245]  self-center text-lg font-semibold whitespace-nowrap dark:text-white mt-1 font-rock">
              FoodLand
            </span>
            <p className=" leading-7 text-[#212245] break-words font-thin  mt-[0.5rem] font-istock  text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              pariatur accusamus
            </p>
          </div>
          <div className=" md:grid md:justify-center   ">
            <h5 className=" text-[#212245]  self-center text-xl font-semibold whitespace-nowrap  font-rock">
              Delivery Time
            </h5>
            <div className="font-istock  mt-[1.5rem]   text-[#212245] font-semibold">
              <p>Sunday - Thursday</p>
              <p className="font-thin">10:00am - 11:00pm</p>
            </div>
            <div className="font-istock  text-[#212245] font-semibold mt-[1rem]">
              <p>Friday - Saturday</p>
              <p className="font-thin"> Off day</p>
            </div>
          </div>

          <div className=" md:grid md:justify-center  ">
            <h5 className="  text-[#212245]  self-center text-xl font-semibold whitespace-nowrap  font-rock">
              Contact
            </h5>
            <div className="font-istock mt-[1.5rem]  text-[#212245] font-semibold">
              <p>Phone: 01712345678</p>
              <p>Email: example@gmail.com</p>
            </div>
            <div className="font-istock  text-[#212245] font-semibold mt-[1rem]">
              <p className="font-thin">
                Location: ZindaBazar, Sylhet-3100, Bangladesh
              </p>
            </div>
          </div>

          <div className=" md:grid ">
            <h5 className=" text-[#212245]  text-xl font-semibold whitespace-nowrap  font-rock">
              Newsletter
            </h5>
            <div className="font-istock  text-[#212245] font-semibold">
              <p className=" leading-7 break-words font-medium text-base mt-[0.5rem] font-istock  text-justify">
                Subscribe our newsletter
              </p>
            </div>
            <div className="flex justify-items-start ">
              <input
                type="text"
                id="base-input"
                placeholder="Enter your email"
                className=" place-self-center relative w-[80%]  h-10 p-1   bg-transparent border border-slate-950 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:outline-none "
              />
              <button className="w-12 place-self-center  h-8  ml-[-1rem] z-10  py-[4px] px-[10px]  hover:bg-[#212045] transition-all overflow-hidden   text-white rounded-sm bg-[#DF2020]">
                <i className="flex justify-center">
                  <RiSendPlaneLine size={15} />
                </i>
              </button>
            </div>
          </div>
        </footer>
      </div>
      <div className=" border-b border-red-200 pt-2"></div>
      <div className="py-[2rem] md:flex md:justify-between ">
        <p className=" text-rose-700">
          Copyright - 2022, website made by Me. All Rights Reserved.
        </p>
        <div className="flex gap-4 sm:mt-0 mt-4 justify-start">
          <i className="bg-[#Df2020] rounded-full p-[0.3rem] w-[28px] h-[28px]   hover:bg-[#212045] transition-all overflow-hidden   text-white cursor-pointer">
            <RiWhatsappLine color="#fff" size={18} />
          </i>
          <i className="bg-[#Df2020] rounded-full p-[0.3rem] w-[28px] h-[28px] hover:bg-[#212045] transition-all overflow-hidden   text-white cursor-pointer">
            <RiInstagramLine color="#fff" size={18} />
          </i>
          <i className="bg-[#Df2020] rounded-full p-[0.3rem] w-[28px] h-[28px] hover:bg-[#212045] transition-all overflow-hidden   text-white cursor-pointer">
            <RiGithubLine color="#fff" size={18} />
          </i>
          <i className="bg-[#Df2020] rounded-full p-[0.3rem] w-[28px] h-[28px] hover:bg-[#212045] transition-all overflow-hidden   text-white cursor-pointer ">
            <RiFacebookLine color="#fff" size={18} />
          </i>
        </div>
      </div>
    </>
  );
}
