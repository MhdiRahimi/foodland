import Banner from '../components/Banner';
import TableCart from '../components/TableCart';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
export default function Cart() {
  let quantity = useSelector((state) => state.cartItems.quantity);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: '0.3', type: 'ease-in-out' },
        }}
      >
        <Banner title={'Your Cart'} />

        {quantity > 0 ? (
          <div className="md:p-[4rem] p-[1rem]">
            <TableCart />
          </div>
        ) : (
          <div className=" bg-[#df2020] w-1/2 rounded-md my-[4rem] p-4  text-[#fff] font-istock font-semibold mx-auto flex justify-center text-xl">
            No item added to the cart
          </div>
        )}
      </motion.div>
    </>
  );
}
