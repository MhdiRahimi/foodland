/* eslint-disable react/prop-types */
import { easeInOut, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { addCart } from '../features/cartshopSlice';
import { useDispatch } from 'react-redux';

export default function Card({ item }) {
  let navigate = useNavigate();

  function forwardData() {
    navigate(`/fooddetail/${item.id}`, {
      state: {
        item: item,
      },
    });
  }

  const dispatch = useDispatch();

  return (
    <>
      <div className=" grid border text-center h-[271px] w-full  p-[20px] border-[#FDE4E4]">
        <motion.img
          onClick={forwardData}
          whileHover={{
            scale: 1.3,
            transition: {
              ease: easeInOut,
              duration: 0.3,
            },
          }}
          loading="lazy"
          className="w-[100px] h-[100px]  cursor-pointer flex mx-auto"
          src={item?.image01}
        />
        <h5
          onClick={forwardData}
          className="font-rock   cursor-pointer text-sm md:text-lg break-words  text-[#212045]"
        >
          {item?.title}
        </h5>

        <div className="grid lg:flex  items-end lg:justify-between justify-center ">
          <span className=" py-0 font-istock font-bold text-[#df2020]">
            ${item?.price}
          </span>

          <button
            onClick={() => dispatch(addCart(item))}
            className="  px-4 py-1 font-istock text-sm font-thin md:font-bold hover:bg-[#212045] transition-all relative inline-flex items-center justify-center  text-cente overflow-hidden   text-white rounded-md bg-[#DF2020] "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
