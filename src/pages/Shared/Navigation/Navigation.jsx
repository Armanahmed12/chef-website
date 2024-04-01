import React, { useContext, useState } from 'react';
import '../Navigation/Navigation.css';
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import ActiveNavLink from './ActiveNavLink';
import { AuthenticationData } from '../../../inforProviders/AuthInfoProvider';


const Navigation = () => {
    const [openNavLinks, setOpenNavLinks] = useState(false);
    const [showName, setShowName] = useState(false);
    const { loading, user } = useContext(AuthenticationData);

    console.log(user);
    // showing userName when user hovers over the user photo
    const showUserName = () => {

        setShowName(true);
        alert("hello")
    }
    return (
        <nav className='header'>
            <div className='flex flex-grow-1 items-center w-full md:w-0 justify-between md:justify-normal z-20'>
                <h2 style={{ textShadow: '2px 2px 7px blue' }} className='text-2xl font-bold font-serif'>TasteHub</h2>
                {
                    openNavLinks ? <RxCross2 onClick={() => setOpenNavLinks(!openNavLinks)} className='block md:hidden text-2xl font-bold' /> :
                        <RxHamburgerMenu onClick={() => setOpenNavLinks(!openNavLinks)} className='text-2xl font-bold md:hidden block text-white' />
                }
            </div>
            <div className={`w-full md:w-none absolute left-0 ${openNavLinks ? "top-[64px]" : "-top-[100vh]"} md:static text-center duration-1000`}>
                <ul className='flex flex-col md:flex-row md:items-center justify-end py-4 md:py-0'>
                    <li> <ActiveNavLink path={'/'}>Home</ActiveNavLink></li>
                    <li> <ActiveNavLink path={'/blog'}>Blogs</ActiveNavLink></li>
                    <li><ActiveNavLink path={'/aboutUs'}>About us</ActiveNavLink></li>
                    {
                        loading && <span className="loading loading-spinner text-primary"></span>
                    }
                    {

                        user && user.photoURL ? <div onMouseEnter={() => setShowName(!showName)} className='flex items-center justify-center gap-2 ml-[20px]'>

                            <img className="user-img" src={user?.photoURL} alt="" />

                            {
                                user.displayName && <span className={`text-white font-bold ${showName ? "block" : "hidden"}`}>
                                    {user.displayName}
                                </span>
                            }

                        </div> : !(loading) && <li><ActiveNavLink path={'/logIn'}>Login</ActiveNavLink></li>
                    }
                   
                </ul>
                
            </div>
        </nav>
    );
};

export default Navigation;