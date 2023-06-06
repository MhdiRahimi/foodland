import { NavLink } from 'react-router-dom';
import { RiUserLine, RiShoppingBasketLine } from 'react-icons/ri';
import logo from '../assets/images/res-logo.png';
import { useEffect, useState } from 'react';
import CartShop from './CartShop';
import { useSelector } from 'react-redux';
export default function Nav() {
  let quantity = useSelector((state) => state.cartItems.quantity);

  const [navBtn, setNavBtn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  function toggleNav() {
    setNavBtn(!navBtn);
  }
  useEffect(() => {
    toggleNav();
  }, []);

  function changeNav() {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeNav);
  const activeLink = {
    color: '#DF2020',
  };
  return (
    <div
      className={`w-full sm:px-[2rem] z-40 transition-all duration-100 ease-in-out ${
        navbar
          ? 'bg-white top-0 fixed mx-auto shadow-md shadow-[#ebd9dc]'
          : 'bg-transparent mx-auto '
      }`}
    >
      <nav className=" ">
        <div className="w-full flex  items-center  justify-between mx-auto sm:p-5 p-[1rem]">
          <button
            onClick={toggleNav}
            className={
              navBtn === false
                ? `is-active md:hidden hamburger hamburger--spin z-20 `
                : 'md:hidden hamburger hamburger--spin z-20 '
            }
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <NavLink to="/" className="">
            <img
              src={logo}
              className="h-14 mx-auto flex items-center"
              alt="FoodLand"
            />
            <span className=" text-[#212245]  self-center text-lg font-semibold whitespace-nowrap ">
              FoodLand
            </span>
          </NavLink>
          <div className="flex md:order-2 md:space-x-6">
            <NavLink to="login">
              <RiUserLine size={25} />
            </NavLink>
            <button className="flex" onClick={() => setIsOpen(true)}>
              <RiShoppingBasketLine size={25} />
              <span className=" mt-[-11px] bg-red-500 text-white text-xs  mr-1 px-2.5 py-0.5 rounded-full ">
                {quantity}
              </span>
            </button>
          </div>
          <CartShop isOpen={isOpen} setIsOpen={setIsOpen} />
          {!navBtn && (
            <>
              <div className="flex z-10 md:hidden  transition-all delay-500   ">
                <input
                  type="checkbox"
                  id="drawer-toggle"
                  className="relative sr-only peer"
                  checked
                />

                <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
                <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>

                <div className="fixed top-0 left-0 z-10 w-full  h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
                  <div className="px-10 my-[8rem]">
                    <ul className="flex flex-col font-medium  rounded-lg md:flex-row md:space-x-8 space-y-10   ">
                      <li>
                        <NavLink
                          style={({ isActive }) => {
                            return isActive ? activeLink : null;
                          }}
                          onClick={toggleNav}
                          to="/"
                          className=" font-istock  text-lg font-semibold  block  text-[#212245] rounded md:bg-transparent md:text-[#212245] md:p-0 "
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          style={({ isActive }) => {
                            return isActive ? activeLink : null;
                          }}
                          to="food"
                          onClick={toggleNav}
                          className="font-istock   text-[#212245]   text-lg font-semibold  block   rounded  md:hover:bg-transparent md:hover:text-[#DF2020] md:p-0 "
                        >
                          Food
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={toggleNav}
                          style={({ isActive }) => {
                            return isActive ? activeLink : null;
                          }}
                          to={'cart'}
                          className="  text-[#212245]   font-istock text-lg font-semibold block  rounded  md:hover:bg-transparent md:hover:text-[#DF2020] md:p-0 "
                        >
                          Cart
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={toggleNav}
                          style={({ isActive }) => {
                            return isActive ? activeLink : null;
                          }}
                          to="contact"
                          className="   text-[#212245]  font-istock text-lg font-semibold block rounded  md:hover:bg-transparent hover:text-[#DF2020]   "
                        >
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="items-center justify-between  md:flex md:w-auto hidden ">
            <ul className="flex flex-col font-medium  rounded-lg md:flex-row md:space-x-8   ">
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? activeLink : null;
                  }}
                  to="/"
                  className=" font-istock  text-lg font-semibold  block  text-[#212245] rounded md:bg-transparent md:text-[#212245] md:p-0 "
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? activeLink : null;
                  }}
                  to="food"
                  className="font-istock   text-[#212245]   text-lg font-semibold  block   rounded  md:hover:bg-transparent md:hover:text-[#DF2020] md:p-0 "
                >
                  Food
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? activeLink : null;
                  }}
                  to={'cart'}
                  className="  text-[#212245]   font-istock text-lg font-semibold block  rounded  md:hover:bg-transparent md:hover:text-[#DF2020] md:p-0 "
                >
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? activeLink : null;
                  }}
                  to="contact"
                  className="   text-[#212245]  font-istock text-lg font-semibold block rounded  md:hover:bg-transparent hover:text-[#DF2020]   "
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
