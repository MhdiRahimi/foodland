import Banner from '../components/Banner';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export default function Food() {
  const products = useSelector((state) => state.products.value);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: '0.3', type: 'ease-in-out' },
        }}
        className=""
      >
        <Banner title={'All Foods'} />
        <div className="md:px-[4rem] p-[1rem] mt-[4rem] md:flex md:justify-between grid justify-center">
          <input
            type="text"
            id="base-input"
            placeholder="I'm looking for..."
            className=" place-self-center relative md:w-[50%] w-full h-10 p-2   bg-transparent border border-[#fde4e4] text-gray-900 text-md rounded-sm focus:ring-blue-500 focus:outline-none "
          />
          <select
            data-te-select-init
            data-te-select-size="lg"
            className="place-self-center relative md:w-[30%] w-full mt-[1rem] md:mt-0  h-10 p-2   bg-transparent border border-[#fde4e4] text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:outline-none "
          >
            <option>Default</option>
            <option value="ascending">Alphabetically, A-Z</option>
            <option value="descending">Alphabetically, Z-A</option>
            <option value="high-price">High Price</option>
            <option value="low-price">Low Price</option>
          </select>
        </div>

        <div className="md:p-[4rem] p-[1rem] ">
          <div className="grid grid-cols-2  sm:grid-cols-2  lg:grid-cols-4  md:grid-cols-3  w-full gap-3 sm:gap-10  place-items-center  ">
            {products.map((food, i) => (
              <Card item={food} key={i} />
            ))}
          </div>
        </div>
        <div className="pb-[2rem]  flex justify-center ">
          <Pagination />
        </div>
      </motion.div>
    </>
  );
}
