import React, { useState } from 'react';
import { SlBasketLoaded } from 'react-icons/sl';
import { MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import Logo from '../img/Food.ly_Logo.png';
import Avatar from '../img/avatar.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {
    const [activeHeader,setActiveHeader]=useState('#');
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user ,cartShow, cartItems }, dispatch] = useStateValue();
    const [isMenu, setIsMenu] = useState(false);

    const login = async () => {
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]))
        } else {
            setIsMenu(!isMenu);
        }

    };

    const logout = () =>{
        setIsMenu(false);
        localStorage.clear();

        dispatch({
            type : actionType.SET_USER,
            user : null,
        });
    };

  const showCart = () => {
    dispatch({
        type : actionType.SET_CART_SHOW,
        cartShow: !cartShow,
    });
  }

    return (
        <header className="fixed z-50 w-screen scroll-smooth
        p-3 px-4 md:p-6 md:px-16 bg-primary">
            {/* Desktop & Tablet*/}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={"/"} className='flex items-center gap-2'>
                    <img src={Logo} className="w-8 object-cover" alt="logo" />
                    <p className='text-headingColor text-xl font-bold'>Food.ly</p>
                </Link>

                <div className='flex items-center gap-8 '>
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className='flex items-center gap-8'>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                        <a href='#' onClick={() => setActiveHeader('#')} className={activeHeader === '#' ? 'active' : ''}>Home</a>
                        </li>    
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <a href='#menu' onClick={() => setActiveHeader('#menu')} className={activeHeader === '#menu' ? 'active' : ''} >Menu</a>
                        </li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <a href='#service' onClick={() => setActiveHeader('#service')} className={activeHeader === '#service' ? 'active' : ''} > Service </a>
                        </li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <a href='#about' onClick={() => setActiveHeader('#about')} className={activeHeader === '#about' ? 'active' : ''} > About Us </a>
                        </li>
                    </motion.ul>

                    <dir className="relative flex items-center justify-center">
                        <SlBasketLoaded className='text-textColor text-2xl cursor-pointer' onClick={showCart}/>
                        {cartItems && cartItems.length > 0 && (
                            <div className='absolute -top-4 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
                        </div>
                        )}
                    </dir>

                    <div className='relative'>
                        <motion.img whileTap={{ scale: 0.5 }}
                            src={user ? user.photoURL : Avatar}
                            className="w-0 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                            alt="userprofile"
                            onClick={login}
                        />
                        { isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12
                                right-0 '>
                                {user && user.email === "jaisingh051297@gmail.com" && (
                                    <Link to={"/createItem"}>
                                        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
                                    transition-all duration-100 ease-in-out text-textColor text-base'
                                    onClick={() =>setIsMenu(false)}
                                    >New Item <MdAdd /> </p>
                                    </Link>
                                )}
                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 
                                transition-all duration-100 ease-in-out text-textColor text-base'
                                onClick={logout}
                                >Logout <MdLogout /></p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile*/}
            <div className='flex items-center justify-between md:hidden
             w-full h-full '>
                <dir className="relative flex items-center justify-center">
                        <SlBasketLoaded className='text-textColor text-2xl cursor-pointer' onClick={showCart} />
                        { cartItems && cartItems.length > 0 && (
                            <div className='absolute -top-4 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
                        </div>
                        )}
                </dir>
                <Link to={"/"} className='flex items-center  gap-2'>
                    <img src={Logo} className="w-8 object-cover" alt="logo" />
                    <p className='text-headingColor text-xl font-bold'>Food.ly</p>
                </Link>
                <div className='relative'>
                    <motion.img whileTap={{ scale: 0.5 }}
                        src={user ? user.photoURL : Avatar}
                        className="w-0 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                        alt="userprofile"
                        onClick={login}
                    />
                    {isMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12
                                right-0 '>
                            {user && user.email === "jaisingh051297@gmail.com" && (
                                <Link to={"/createItem"}>
                                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
                                    transition-all duration-100 ease-in-out text-textColor text-base'
                                    onClick={() =>setIsMenu(false)}
                                    >New Item <MdAdd /> </p>
                                </Link>
                            )}
                            <ul className='flex flex-col '>
                            <li className='text-base text-textColor hover:text-headingColor
                                 duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
                                onClick={() =>setIsMenu(false)}
                                ><Link to={"/home"}>Home</Link></li>
                                <li className='text-base text-textColor hover:text-headingColor 
                                duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
                                onClick={() =>setIsMenu(false)}
                                ><Link to={"/menu"}>Menu</Link></li>
                                <li className='text-base text-textColor hover:text-headingColor
                                 duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
                                onClick={() =>setIsMenu(false)}
                                ><Link to={"/service"}>Service</Link></li>
                                <li className='text-base text-textColor hover:text-headingColor
                                 duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
                                onClick={() =>setIsMenu(false)}
                                ><Link to={"/about"}>About Us</Link> </li>
                            </ul>
                            <p className='m-2 p-2 rounded-md shadow-md flex items-center justify-center
                             bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 
                                transition-all duration-100 ease-in-out text-textColor text-base'
                                onClick={logout}
                                >Logout <MdLogout /></p>
                        </motion.div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;