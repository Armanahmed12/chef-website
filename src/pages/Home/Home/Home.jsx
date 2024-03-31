import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';


const Home = () => {
    const chefsData = useLoaderData();
    console.log(chefsData);
    return (
        <div>
            <Header />
            <div className='chef-section px-2 md:px-5'>
                <h1 style={{ textShadow: '1px 1px 1px black' }} className='font-bold font-serif text-4xl text-center mt-12 mb-14 text-[#a73902] tracking-widest'>Our Skilled Chefs</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        chefsData.map(eachChef => <Chef key={eachChef.id} chefInfo={eachChef} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;