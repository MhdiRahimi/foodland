/* eslint-disable react/prop-types */

import { RiCloseLine } from 'react-icons/ri';
import { HiPlusSm, HiMinus } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import {
  decrementQuantity,
  addCart,
  removeItem,
} from '../features/cartshopSlice';

export default function CartProduct({ product }) {
  let dispatch = useDispatch();
  if (product.quanty < 1) {
    dispatch(removeItem(product));
  }

  return (
    <>
      <div className="flex justify-between mx-6 border-b-2 pb-2 mt-2 border-pink-100 ">
        <div className="w-1/7">
          <img
            src={product.image01}
            className=" object-cover  w-[50px] h-[50px] mt-2"
          />
        </div>
        <div className="grid w-4/6  ml-4">
          <h3 className='mb-1 text-justify  text-md font-rock text-[#212245] font-semibold  tracking-wide text-center"'>
            {product.title}
          </h3>
          <div className="flex gap-10 mt-2 ">
            <p className="text-[#212245] font-semibold">{product.quanty}x</p>
            <p className="text-[#Df2020] text-lg font-semibold font-istock">
              ${product.price * product.quanty.toFixed(1)}
            </p>
          </div>
          <div className="flex w-3/6 mt-4 bg-[#fde4e4] rounded-md p-1 justify-between ">
            <button onClick={() => dispatch(addCart(product))}>
              <HiPlusSm size={20} />
            </button>
            <span className=" text-lg self-center my-auto">
              {product.quanty}
            </span>
            <button onClick={() => dispatch(decrementQuantity(product))}>
              <HiMinus size={20} />
            </button>
          </div>
        </div>
        <div
          onClick={() => dispatch(removeItem(product))}
          className="mr-0 cursor-pointer text-center w-1/5 my-auto flex justify-end"
        >
          <RiCloseLine size={24} color="#212245" />
        </div>
      </div>
    </>
  );
}
