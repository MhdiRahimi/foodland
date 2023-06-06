import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/cartshopSlice';
import { NavLink, useNavigate } from 'react-router-dom';
export default function TableCart() {
  let carts = useSelector((state) => state.cartItems.cart);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  console.log(carts);
  let price = [];
  carts?.map((item) => {
    price.push(item.price * item.quanty);
  });

  function forwardPrice() {
    navigate(`/payment`, {
      state: {
        item: sum,
      },
    });
  }

  const sum = price.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  return (
    <>
      <div className=" mx-auto md:px-[4rem] p-[1rem] text-lg font-thin font-rock text-left text-gray-900 bg-transparent ">
        Subtotal: $
        <span className="font-rock font-medium text-2xl text-md text-[#DF2020]">
          {sum}
        </span>
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          Taxes and shipping will calculate at checkout
        </p>
        <div className="mt-[3rem] sm:flex  sm:gap-10 grid w-3/5 md:3/4  gap-4 ">
          <button className="  px-4 py-1 font-istock text-sm font-bold hover:bg-[#212045] transition-all relative inline-flex items-center justify-center  text-cente overflow-hidden   text-white rounded-md bg-[#DF2020]  ">
            <NavLink to={'/food'}>Continue Shopping</NavLink>
          </button>
          <button
            onClick={sum > 0 && forwardPrice}
            className="  px-4 py-1 font-istock text-sm font-bold hover:bg-[#212045] transition-all relative inline-flex items-center justify-center  text-cente overflow-hidden   text-white rounded-md bg-[#DF2020]  "
          >
            Proceed to checkout
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto  sm:rounded-lg md:p-[4rem] mt-[2rem] p-0">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className=" text-[#212529]  font-istock font-semibold text-lg border-b-2 border-black">
            <tr>
              <th scope="col" className="px-8 py-2">
                Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[#212529]  font-istock  text-center"
              >
                Product Title
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Delete
              </th>
            </tr>
          </thead>
          {carts.map((food, i) => {
            return (
              <tbody
                key={i}
                className="bg-transparent   text-[#212529]  font-istock font-thin text-lg "
              >
                <tr>
                  <th scope="row" className="px-6 py-4 font-medium ">
                    <img className="w-[63px] h-[63px]  " src={food.image01} />
                  </th>
                  <td className="px-6 py-4 text-center">{food.title}</td>
                  <td className="px-6 py-4 text-center">${food.price}</td>
                  <td className="px-6 py-4 text-center">{food.quanty}</td>
                  <td className="px-6 py-4 ">
                    <i
                      onClick={() => dispatch(removeItem(food))}
                      className="text-center flex justify-center cursor-pointer"
                    >
                      <RiDeleteBinLine size={18} color="#DF2020" />
                    </i>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}
