import burger from '../assets/images/hamburger.png';
import pizza from '../assets/images/pizza.png';
import bread from '../assets/images/bread.png';
import { useDispatch, useSelector } from 'react-redux';
import { changeTab } from '../features/productsSlice';
export default function Tabs() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.products.tab);
  return (
    <>
      <div className="md:w-full w-2/4 justify-center mx-auto bg-[#DF2020] p-[20px] rounded-lg mt-[3rem] ">
        <div
          className=" md:flex grid justify-center transition duration-150 ease-in-out"
          role="group"
        >
          <button
            type="button"
            className={
              activeTab === 'all'
                ? ' mx-auto my-2 md:mx-2  bg-white text-[#FD2020]    rounded-md place-items-center flex text-center font-semibold text-md   px-6 pb-2 pt-2.5   leading-normal  transition-all duration-550 ease-in-out '
                : ' mx-auto my-2 md:mx-2  hover:bg-white hover:text-[#FD2020] hover:transition-all hover:duration-500   rounded-md place-items-center flex text-center font-semibold text-md   px-6 pb-2 pt-2.5   leading-normal text-white transition-all duration-550 ease-in-out   '
            }
            data-te-ripple-init
            data-te-ripple-color="light"
            id={'all'}
            onClick={(e) => dispatch(changeTab(e.target.id))}
          >
            All
          </button>
          <button
            type="button"
            className={
              activeTab === 'burger'
                ? ' mx-auto md:mx-2  my-2  bg-white text-[#FD2020]    rounded-md place-items-center flex text-center font-semibold text-md   px-6 pb-2 pt-2.5   leading-normal  transition-all duration-550 ease-in-out '
                : ' mx-auto md:mx-2  my-2  hover:bg-white hover:text-[#FD2020] hover:transition-all hover:duration-500   rounded-md place-items-center flex text-center font-semibold text-md   px-6 pb-2 pt-2.5   leading-normal text-white transition-all duration-550 ease-in-out   '
            }
            id="burger"
            onClick={(e) => dispatch(changeTab(e.target.id))}
          >
            <img src={burger} className="w-[20px] h-[20px] mr-2 mt-[1px]" />
            Burger
          </button>
          <button
            type="button"
            className={
              activeTab === 'pizza'
                ? ' mx-auto md:mx-2   my-2 bg-white text-[#FD2020]    rounded-md place-items-center flex text-center font-semibold text-md   px-6 pb-2 pt-2.5   leading-normal  transition-all duration-550 ease-in-out '
                : ' mx-auto md:mx-2  my-2 hover:bg-white hover:text-[#FD2020] hover:transition-all hover:duration-500   rounded-md place-items-center flex text-center font-semibold text-md   px-6 pb-2 pt-2.5   leading-normal text-white transition-all duration-550 ease-in-out   '
            }
            id="pizza"
            onClick={(e) => dispatch(changeTab(e.target.id))}
          >
            <img src={pizza} className="w-[20px] h-[20px] mr-2 mt-[1px]" />
            Pizza
          </button>
          <button
            type="button"
            className={
              activeTab === 'bread'
                ? ' mx-auto md:mx-2  my-2  bg-white text-[#FD2020]    rounded-md place-items-center flex text-center font-semibold text-md   px-6 pb-2 pt-2.5   leading-normal  transition-all duration-550 ease-in-out '
                : ' mx-auto md:mx-2  my-2  hover:bg-white hover:text-[#FD2020] hover:transition-all hover:duration-500   rounded-md place-items-center flex text-center font-semibold text-md   px-6 pb-2 pt-2.5   leading-normal text-white transition-all duration-550 ease-in-out   '
            }
            id="bread"
            onClick={(e) => dispatch(changeTab(e.target.id))}
          >
            <img src={bread} className="w-[20px] h-[20px] mr-2 mt-[1px]" />
            Bread
          </button>
        </div>
      </div>
    </>
  );
}
