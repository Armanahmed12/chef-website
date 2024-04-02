import React, { useContext, useState } from 'react';
import '../Navigation/Navigation.css';
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import ActiveNavLink from './ActiveNavLink';
import { AuthenticationData } from '../../../inforProviders/AuthInfoProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navigation = () => {

    const [openNavLinks, setOpenNavLinks] = useState(false);
    const [showName, setShowName] = useState(false);
    const { loading, user, userLogOut } = useContext(AuthenticationData);
   
    // handle user log out
    const handleUserLogOut  = () =>{

           userLogOut()
           .then(() => {
            toast.success("User has logged Out.")
          }).catch(error => {
    
            console.log(error);
            alert("Logging out problem.")
    
          })
    }
    console.log(user);
    return (
        <nav className='header'>
       
            <div className='flex flex-grow-1 items-center w-full md:w-0 justify-between md:justify-normal z-20'>
                <h2 style={{ textShadow: '2px 2px 7px blue' }} className='text-2xl font-bold font-serif'>TasteHub</h2>
                {
                    openNavLinks ? <RxCross2 onClick={() => setOpenNavLinks(!openNavLinks)} className='block md:hidden text-2xl font-bold' /> :
                        <RxHamburgerMenu onClick={() => setOpenNavLinks(!openNavLinks)} className='text-2xl font-bold md:hidden block text-white' />
                }
            </div>
            <div onClick={()=>setOpenNavLinks(!openNavLinks)} className={`w-full md:w-none absolute left-0 ${openNavLinks ? "top-[64px]" : "-top-[100vh]"} md:static text-center duration-1000`}>
                <ul className='flex flex-col md:flex-row md:items-center justify-end py-4 md:py-0'>
                    <li> <ActiveNavLink path={'/'}>Home</ActiveNavLink></li>
                    <li> <ActiveNavLink path={'/blog'}>Blogs</ActiveNavLink></li>
                    <li><ActiveNavLink path={'/aboutUs'}>About us</ActiveNavLink></li>
                    {
                        loading && <span className="loading loading-spinner text-primary"></span>
                    }
                    {

                        (user && (user.photoURL)) && <div onMouseEnter={() => setShowName(!showName)} className='flex items-center justify-center gap-2 ml-[20px]'>

                            <img className="user-img" src={user?.photoURL} alt="" />

                            {
                                user.displayName && <span className={`text-white font-bold ml-2 ${showName ? "block" : "hidden"}`}>
                                    {user.displayName}
                                </span>
                            }

                        </div>
                    }
                    {
                        user ? <li onClick={handleUserLogOut} className='mx-0 md:mx-4'><button className='text-white bg-[#6d9200] p-2 rounded-md'> LogOut</button></li> : 
                        <li><ActiveNavLink path={'/logIn'}>Login</ActiveNavLink></li>
                    }
                   
                </ul>
                
            </div>

        </nav>
    );
};

export default Navigation;