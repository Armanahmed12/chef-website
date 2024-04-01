import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <footer style={{minHeight:'300px'}} className="grid grid-cols-1 md:grid-cols-3 gap-y-4 mt-6 py-6 px-2 p-md-4 bg-[#ffa60024] text-center text-md-start">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 col-start-1 col-span-2">
            <div>
                <h2 className="font-bold text-2xl mb-3">MENU</h2>
                <ul>
                    <li><a href="#">Private Chef</a></li>
                    <li><a href="#">Catering</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
            <div>
                <h2 className="font-bold text-2xl mb-3">CATERING</h2>
                <ul>
                    <li><a href="#">Corporate Events</a></li>
                    <li><a href="#">Weddings And Galas</a></li>
                    <li><a href="#">Special Events</a></li>
                    <li><a href="#">Cooking Classes</a></li>
                </ul>
            </div>
            <div>
                <h2 className="font-bold text-2xl mb-3">Resource</h2>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>
        </div>
        <div>
            <h2 className="font-bold text-2xl mb-3">Subscribe Us</h2>
            <p className="pb-2 font-semibold mb-3 text-black">Please subscribe with your email to get our each and every news when we offer some foods with enough discount.</p>
            <div className="flex gap-2">
                <input className="py-2 outline-0 border-2 bg-orange-500 border-orange-500 rounded px-2 w-full" type="email" name="" id="" placeholder="Email address"/>
                    <button
                        className="bg-orange-500 px-2 hover:bg-orange-600 rounded-md text-white block font-bold">Subscribe</button>
            </div>
        </div>
     </footer>
    )
};

export default Footer;