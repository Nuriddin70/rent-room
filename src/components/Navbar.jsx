import React, {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineShoppingCart, AiFillPhone, AiOutlineClose } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Navbar = () => {
  const [nav, SetNav] = useState(false)


  const handleNav = () => {
    SetNav(!nav)
  }
  
  return (
    <div>
    {/* Navbar */}
    <div className={nav ? "fixed w-full h-[4.5rem] flex justify-between items-center py-4 md:px-10 lg:px-14 px-6 text-sky-600" : 'hidden'}>
      {/* Humberger */}
      <div onClick={handleNav} className=" flex items-center ">
        <GiHamburgerMenu size={33} className="pr-2   md:hidden" />

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl text-sky-600">Room</h1>
      </div>

      {/* Search */}
      <div className=" hidden md:flex justify-between items-center">
        <button  onClick={handleNav} className="flex px-3 py-1.5 lg:px-4 lg:py-2.5 mr-10 bg-sky-600 text-white justify-between items-center hover:text-sky-600 hover:bg-white duration-300 rounded-xl">
          <GiHamburgerMenu className="pr-2 w-[1.5rem]" />
          Categories
        </button>
        <div className="flex w-[15rem] lg:w-[30rem] h-8 lg:h-10 items-center rounded-lg  truncate">
          <input
            type="text"
            placeholder="Search..."
            className="w-[90%] bg-sky-300 h-full p-4  text-white "
          />
          <div className="bg-sky-600 text-white h-full w-[10%] flex items-center justify-center hover:bg-sky-500  duration-300">
            <BsSearch />
          </div>
        </div>
      </div>

      {/* Icons */}
      <div className="flex h-11 items-center space-x-4">
        <FcLike size={28} />
        <BsFillPersonFill size={28} />
        <AiOutlineShoppingCart size={28} />
      </div>
    </div>
    {/* Menu List */}
    <div  className={!nav ? "flex  flex-col  h-screen ease-in-out  duration-500 " : 'fixed left-[100%]'}>
      <div onClick={handleNav} className="h-[13%] flex items-center self-end px-5 mb-2 text-red-900 font-bold hover:bg-red-900 hover:text-white duration-300">
        <AiOutlineClose />
        </div>
    
        <ul className="h-[calc(100vh - 12% -18%)] overflow-auto">
          <li>Женщинам</li>
          <li>Детям</li>
          <li>Обувь</li>
          <li>Дом</li>
          <li>Мужчинам</li>
          <li>Kichen</li>
          <li>Badroom</li>
          <li>Toilet</li>
          <li>Sofa</li>
          <li>Женщинам</li>
          <li>Детям</li>
          <li>Обувь</li>
          <li>Дом</li>
          <li>Мужчинам</li>
          <li>Kichen</li>
          <li>Badroom</li>
          <li>Toilet</li>
          <li>Sofa</li>
        </ul>
        <footer className=" h-[25%] bg-sky-600 text-white flex flex-col justify-center items-center py-10">
            <div className="flex items-center justify-between py-2">
              <GoLocation />
              <p className="ml-1">Anseong, Korea</p>
            </div>
            <div className="flex items-center justify-between">
            <AiFillPhone />
            <p className="ml-1" >01057049804</p>
            </div>
        
        </footer>
      </div>
    </div>
  );
};

export default Navbar;
