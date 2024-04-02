import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../pages/Shared/Navigation/Navigation';
import Footer from '../pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';


const Main = () => {
    return (
        <div>
              <Navigation/>
                  <Outlet/>
              <Footer/>
              <ToastContainer/>
        </div>
    );
};

export default Main;