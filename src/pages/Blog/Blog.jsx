import React, { useRef } from 'react';
import '../Blog/Blog.css'
import ReactToPrint from 'react-to-print';
import { FaPrint } from 'react-icons/fa';


const Blog = () => {

    const ref = useRef();

    return (
        <div>
            {/* pdf */}

            <div className='text-xl border-2 border-solid border-red-500 inline-block px-2 rounded-md m-2 bg-[#ff00001b]'>
                <ReactToPrint trigger={() => <button className='text-red-500 flex items-center gap-2'><FaPrint/> Print</button>} content={() => ref.current} />
            </div>

            <div ref={ref} id='blogs-container' className='print md:p-8 px-4 py-4 text-justify'>
                <h2 className='text-center'> Questions with Answer</h2>
                <hr className='md:w-3/5 w-4/5 mx-auto my-4 border-red-500' />
                <div className='mt-6'>
                    <h2>1. Tell us the differences between uncontrolled and controlled components.</h2>
                    <p>
                        In React, controlled components let you control the data in your forms using state. This means you have full power over what goes into the form and where it goes. On the other hand, uncontrolled components rely on the web browser to handle form data, which limits your control as a developer. Controlled components give you more freedom to customize and work with form data compared to uncontrolled components.</p>
                </div>

                <div>
                    <h2>2. How to validate React props using PropTypes?</h2>
                    <p>To validate React props using PropTypes, you first need to import PropTypes from the 'prop-types' package. Then, you define the propTypes property on your component and specify the type of each prop you want to validate.</p>
                </div>
                <div>
                    <h2>3. Tell us the difference between nodejs and express js.</h2>
                    <p>Node.js is a runtime environment for executing JavaScript code outside of a web browser. Express.js is a web application framework for Node.js. It provides a set of features and tools for building web applications and APIs more easily with Node.js. In short, Node.js is the platform, while Express.js is a framework that runs on top of Node.js to simplify web development.</p>
                </div>
                <div>
                    <h2>4. What is a custom hook, and why will you create a custom hook ?</h2>
                    <p>Custom hooks, denoted by the "use" prefix, are JavaScript functions encapsulating reusable logic for widespread application. They streamline code by extracting complex logic shared across multiple components, ensuring cleaner, more comprehensible code. These hooks enhance code organization and maintainability by centralizing shared logic for reuse across various application sections.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;