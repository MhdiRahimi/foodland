import { NavLink } from 'react-router-dom';
import Banner from '../components/Banner';
import { motion } from 'framer-motion';
export default function Register() {
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
        <Banner title={'Signup'} />
      </div>
      <div className="  w-[90%] bg-[#fde4e4] md:w-3/6 p-[3rem] my-[4rem] flex justify-center mx-auto rounded-lg">
        <form className="w-full ">
          <input
            type="text"
            id="base-input"
            placeholder="Full name"
            className="   w-full  mb-[4rem] h-10 p-2 border-t-0 border-l-0 border-r-0   bg-transparent border border-b-[rgba(33,34,69,.2980392156862745)] text-gray-900 text-md rounded-sm  focus:outline-none "
          />
          <input
            type="text"
            id="base-input"
            placeholder="Email"
            className="   w-full   h-10 p-2 border-t-0 border-l-0 border-r-0   bg-transparent border border-b-[rgba(33,34,69,.2980392156862745)] text-gray-900 text-md rounded-sm  focus:outline-none "
          />
          <input
            type="password"
            id="base-input"
            placeholder="Password"
            className="   w-full  my-[4rem] h-10 p-2 border-t-0 border-l-0 border-r-0   bg-transparent border border-b-[rgba(33,34,69,.2980392156862745)] text-gray-900 text-md rounded-sm  focus:outline-none "
          />
          <button className=" flex justify-center lg:w-2/5 xl:w-1/5 w-1/2 px-6 py-2 font-istock text-sm font-bold  transition-all relative  items-center mx-auto  text-center overflow-hidden   text-white rounded-sm bg-[#DF2020]  ">
            Signup
          </button>
          <div className="flex mt-5 justify-center mx-auto">
            <p>Already have an account?</p>
            <p className="ml-2">
              {' '}
              <NavLink to="/login">Login</NavLink>
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
