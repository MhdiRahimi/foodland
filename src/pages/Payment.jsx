import { useLocation, useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cartshopSlice';
import { motion } from 'framer-motion';
export default function Payment() {
  let location = useLocation();
  let shipping = 30;
  let price = location.state?.item + shipping;
  let dispatch = useDispatch();
  let navigate = useNavigate();

  function checkout() {
    dispatch(clearCart());
    alert('checkout completed ...');
    navigate('/');
  }
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
        <Banner title={'Checkout'} />
      </div>
      <div className="p-[4rem] md:flex grid ">
        <div className="md:w-4/6 w-full  mr-[2rem]">
          <p className="text-lg font-rock font-base text-[#212529] pb-4">
            Shipping Address
          </p>

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
            className="   w-full  mb-[4rem] h-10 p-2 border-t-0 border-l-0 border-r-0   bg-transparent border border-b-[rgba(33,34,69,.2980392156862745)] text-gray-900 text-md rounded-sm  focus:outline-none "
          />
          <input
            type="text"
            id="base-input"
            placeholder="Phone number"
            className="   w-full  mb-[4rem] h-10 p-2 border-t-0 border-l-0 border-r-0   bg-transparent border border-b-[rgba(33,34,69,.2980392156862745)] text-gray-900 text-md rounded-sm  focus:outline-none "
          />
          <input
            type="text"
            id="base-input"
            placeholder="Address"
            className="   w-full  mb-[4rem] h-10 p-2 border-t-0 border-l-0 border-r-0   bg-transparent border border-b-[rgba(33,34,69,.2980392156862745)] text-gray-900 text-md rounded-sm  focus:outline-none "
          />
          <button
            onClick={price && checkout}
            className="  px-8 py-2 font-istock text-sm font-bold hover:bg-[#212045] transition-all relative inline-flex items-center justify-center  text-cente overflow-hidden   text-white rounded-sm bg-[#DF2020]  "
          >
            Checkout
          </button>
        </div>
        <div className="md:w-2/6 w-[100%] mt-4 md:mt-0 bg-[#FDE4E4] h-[220px] ">
          <div className="py-5 px-8 flex justify-between">
            <h6 className="font-rock font-medium text-lg">Subtotal:</h6>
            <span className="text-lg font-rock font-base">
              ${(price - shipping).toFixed(0)}
            </span>
          </div>
          <div className="py-0 px-8 flex justify-between">
            <h6 className="font-rock font-medium text-lg">Shipping:</h6>
            <span className="text-lg font-rock font-base">${shipping}</span>
          </div>
          <div className=" w-4/5 flex justify-center mx-auto my-[2rem] border-t-[1px] border-gray-300"></div>
          <div className=" px-8 flex justify-between">
            <h6 className="font-rock font-medium text-2xl">Total:</h6>
            <span className="text-lg font-rock font-base">
              $ {price.toFixed(0)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
