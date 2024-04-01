import React from 'react';
import '../ClientComment/ClientComment.css'
import img1 from '../../../images/img-3.jpg'


const ClientComment = () => {
    return (
        <div>
            <h2 style={{ textShadow: '1px 1px 2px red' }} className='text-4xl text-black font-semibold font-serif text-center my-8'>
                Clients comments about us
            </h2>

            <div className='text-center my-2 mx-auto'>
                <p className='font-serif font-semibold text-blue-900'>We pride ourselves on what our happy clients say.</p>
            </div>
                 <hr className='md:w-3/5 w-4/5 mx-auto my-4' />
            <div className='client-section grid grid-cols-1 md:grid-cols-3 gap-3 mx-2 md:mx-8'>
                <div>
                    <img src={img1} alt="" />
                    <p>“When we were in Portugal we were all blown away by your service and will be recommending you to our friends.”</p>
                    <span>John Doe</span>
                </div>
                <div>
                    <img src='https://img.freepik.com/photos-premium/jeune-homme-beau_897093-360.jpg' alt="" />
                    <p>“Thank you for making my parents’ anniversary so special. The food was amazing, as was the service. A perfect evening.”</p>
                    <span>Jane Smith</span>
                </div>
                <div>
                    <img src='https://www.shutterstock.com/image-photo/young-hispanic-man-business-worker-260nw-2299069717.jpg' alt="" />
                    <p>“Was so impressed I had to find out more and tell my friends! Last week we attended a fabulous pre-wedding afternoon party”</p>
                    <span>Alice Johnson</span>
                </div>
            </div>
        </div>
    );
};

export default ClientComment;