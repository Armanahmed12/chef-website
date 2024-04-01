import React, { useState } from 'react';
import '../Navigation/Navigation.css';
import { Link } from 'react-router-dom';
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import ActiveNavLink from './ActiveNavLink';


const Navigation = () => {
    const [openNavLinks, setOpenNavLinks] = useState(false);
    return (
        <nav className='header'>
            <div className='flex justify-between items-center w-full z-20'>
                <h2 style={{ textShadow: '2px 2px 7px blue' }} className='text-2xl font-bold font-serif'>TasteHub</h2>
                {
                    openNavLinks ? <RxCross2 onClick={() => setOpenNavLinks(!openNavLinks)} className='block md:hidden text-2xl font-bold' /> :
                        <RxHamburgerMenu onClick={() => setOpenNavLinks(!openNavLinks)} className='text-2xl font-bold md:hidden block text-white' />
                }
            </div>
            <div className={`absolute left-0 ${openNavLinks ? "top-[64px]" : "-top-[100vh]"} md:static w-full text-center duration-1000`}>
                <ul className='flex flex-col md:flex-row md:items-center justify-end'>
                   <li> <ActiveNavLink path={'/'}>Home</ActiveNavLink></li>
                   <li> <ActiveNavLink path={'/blog'}>Blogs</ActiveNavLink></li>
                    <li><ActiveNavLink path={'/aboutUs'}>About us</ActiveNavLink></li>
                    <li><ActiveNavLink path={'/logIn'}>Login</ActiveNavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;