import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthenticationData } from '../../inforProviders/AuthInfoProvider';
import '../SignUp/SignUp.css'
import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const { setUser, createNewUser, userInfoUndate } = useContext(AuthenticationData);

    // react-toast message
    const notify = (userName) => {

        toast.success(`well done ${userName}! Registration done successfully.`, {

            position: "top-center"

        });
    }

    const handleSignUp = (event) => {

        event.preventDefault();

        const form = event.target;
        const userName = form.userName.value;
        const userPhotoUrl = form.url.value;
        console.log(userPhotoUrl);
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value
        

        //  password length is checking
        if (password.length < 6) {

            toast.error('Password must be more than 5 characters.');
            return;
            
        }

        // password and confirm password are being checked for confirming that both are the same psw.
        if (!(password === confirmPassword)) {

            toast.error(`${userName} your Password and Confirm-password must be the same.`, {
                position: "top-center"
            });
            return;
        }

        //   Create new user
            createNewUser(email, password)
                .then(result => {

                    sendEmailVerification(result.user).then(() => {

                    }).catch(error => console.log(error.message));
                    userInfoUndate(userName,userPhotoUrl);
                    setUser(result.user);
                    form.reset();
                    notify(userName);
                    navigate('/')

                }).catch(error => {

                    toast.error(`${error}`, {

                        position: 'top-center'
                    });

                })

        } 

    return (
        <div id='register-compo' className='md:m-8 mx-3 my-8'>
              
            <div style={{ boxShadow: '0px 0px 5px 1px black' }} className='lg:w-2/5 md:w-3/4 mx-auto text-center p-4 rounded-md'>
                <h2 style={{ textShadow: '2px 2px 1px blue', letterSpacing: '3px' }} className='font-semibold text-3xl font-serif pb-5 text-[#d10096]'>Sign Up</h2>
                <form onSubmit={handleSignUp}>

                    <div className="form-element mb-3">
                        <label htmlFor="userNameFiled">User Name : </label><br />
                        <input type="text" name="userName" id="userNameFiled" placeholder='Write your email' required />
                    </div>

                          {/* user  photo */}
                        
                    <div className="form-element mb-3">
                        <label htmlFor="photoUrlFiled">User Url : </label><br />
                        <input type="url" name="url" id="photoUrlFiled" placeholder='Write your photo url'/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="emailField">Email : </label><br />
                        <input type="email" name="email" id="emailField" placeholder='Write your email' required />
                    </div>

                    <div className="form-element mt-3">
                        <label htmlFor="passwordFiled">Password : </label><br />
                       
                        <div className='password-field'>

                            <input style={{outline:"0!important"}} className='border-0' type={open ? 'text' : 'password'} name="password" id="passwordFiled" placeholder='Write your email' autoComplete='off' required />

                            {
                                open ?
                                    <FaEye onClick={() => setOpen(!open)} className='eye-icon text-red-500 text-3xl' />
                                              :
                                    <FaEyeSlash onClick={() => setOpen(!open)} className='eye-icon text-red-500 text-4xl' />
                            }
                        </div>
                    </div>

                    <div className="form-element mt-3">
                        <label htmlFor="confirmPaswFiled">Confirm Password : </label><br />
                        <input type={open ? 'text' : 'password'} name="confirmPassword" id="confirmPaswFiled" placeholder='Confirm your password' autoComplete='off' required />
                    </div>

                    <input className='bg-[red] mt-5 text-white fw-bold hover:cursor-pointer' type="submit" value="Sign Up" />
                    <h2>Already have an account?<Link className='text-blue-600 underline font-xl' to={'/login'}> Login</Link></h2>
                </form>
               
            </div>
        </div>
    );
};

export default SignUp;