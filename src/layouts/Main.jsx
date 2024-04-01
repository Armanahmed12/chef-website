import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../pages/Shared/Navigation/Navigation';
import Footer from '../pages/Footer/Footer';

const Main = () => {
    return (
        <div>
              <Navigation/>
                  <Outlet/>     
              <Footer/>
        </div>
    );
};

export default Main;