import { RiCloseCircleFill } from 'react-icons/ri';
import CartProduct from './CartProduct';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
export default function CartShop({ children, isOpen, setIsOpen }) {
  let carts = useSelector((state) => state.cartItems.cart);
  let quantity = useSelector((state) => state.cartItems.quantity);
  let navigate = useNavigate();
  let price = [];
  carts?.map((item) => {
    price.push(item.price * item.quanty);
  });

  const sum = price.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  function forwardPrice() {
    setIsOpen(false)
    navigate(`/payment`, {
      state: {
        item: sum,
      },
    });
  }

  return (
    <main
      className={
        '  min-h-full overflow-auto overflow-x-hidden fixed z-40 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out  ' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-500 translate-x-0 rounded-md  '
          : ' transition-all delay-500 opacity-0 translate-x-full rounded-md  ')
      }
    >
      <section
        className={
          ' rounded-lg  min-h-full  w-screen max-w-lg right-0 absolute bg-white shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        <article className="relative w-screen max-w-lg  flex flex-col justify-between  min-h-full ">
          <header className="p-4 font-bold text-lg">
            <button
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <RiCloseCircleFill size={34} color="#212245" />
            </button>
          </header>
          {children}
          {quantity > 0 ? (
            <div className="my-auto top-0 mb-20">
              {carts.map((cart, i) => (
                <CartProduct key={i} product={cart} quantity={quantity} />
              ))}
            </div>
          ) : (
            <div className="text-[#212245] font-istock font-semibold nx-auto flex justify-center text-xl">
              No item added to the cart
            </div>
          )}
        </article>
        <footer className="fixed bottom-0 w-full  bg-[#Df2020] h-auto p-4">
          <div className="flex  mt-auto justify-between mx-4 text-lg">
            <p className="text-white font-rock ">
              Subtotal : <span className="text-2xl">${sum.toFixed(0)}</span>
            </p>
            <button
              onClick={sum > 0 && forwardPrice}
              className="  hover:bg-slate-100 bg-white px-4 py-1 rounded-md my-auto text-[#212245] font-istock font-semibold  "
            >
              Checkout
            </button>
          </div>
        </footer>
      </section>

      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
