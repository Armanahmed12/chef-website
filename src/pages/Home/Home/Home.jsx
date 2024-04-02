import React, { useState } from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';
import Food from '../Food/Food';
import ClientComment from '../ClientComment/ClientComment';


const Home = () => {
    const chefsData = useLoaderData();
    const [showAllData, setShowAllData] = useState(false);

    // the data that will be renderd
    const ourChefs = showAllData ? chefsData : chefsData.slice(0,6);
    return (
        <div>
            <Header />

                    {/* our chefs section */}
            <div className='chef-section mb-14 px-2 md:px-5'>
                <h1 style={{ textShadow: '1px 1px 2px red' }} className='font-bold font-serif text-4xl text-center mt-12 mb-14 text-[black] tracking-widest'>Our Skilled Chefs</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                         ourChefs.map(eachChef => <Chef key={eachChef.id} chefInfo={eachChef} />)
                    }
                   
                </div>
                   <button onClick={(event)=> {
                       
                       setShowAllData(true);
                       event.target.style.display = 'none'

                   }} className='py-2 px-4 rounded-md bg-black text-white mx-auto w-[120px] block my-10 font-bold'>Show All</button>
            </div>

              {/* About our foods */}

               <Food/>
               <ClientComment/>
               
        </div>
    );
};

export default Home;