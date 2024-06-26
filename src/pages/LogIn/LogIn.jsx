import React, { useContext, useRef, useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthenticationData } from '../../inforProviders/AuthInfoProvider';
import { toast } from 'react-toastify';
import '../LogIn/LogIn.css'

const LogIn = () => {

    const [open, setOpen] = useState(false);
     const emailRef = useRef('eamil-ref');
     const location = useLocation();
     let navigate = useNavigate();
     const {loading,userLogIn,setUser,resetPassword,createUserWithGoogle,createUserWithGitHub} = useContext(AuthenticationData);
 
     let from = location.state?.from?.pathname || "/";
     console.log(from);
    const handleUserLogIn = (event) =>{
   
        
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogIn(email,password)
        .then(userCredential =>{
                 
                      form.reset();
                      setUser(userCredential.user);
                      navigate(from, { replace: true });

                     !(from.includes('chef')) &&  toast.success("Logged In successfully.",{

                        position : 'top-center'
                   });
                    

        }).catch(error =>{

            toast.error(`${error.message}`, {
            
                 position: "top-center"
   
             });
        })

    }


    // handle log In with your google account
    const signUpWithGoogle = () => {

        createUserWithGoogle()
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                setUser(result.user);
                navigate(from, { replace: true });
            }).catch(error => {

                console.log(error);
                toast.error(`${error.message}`,{

                     position: 'top-center'
                })
            })
    }

    // handle log In with Github 
    const handleLogInWithGithub = () => {

        createUserWithGitHub()
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                navigate(from, { replace: true });
            }).catch(error => {

                console.log(error);
                toast.error(`${error.message}`,{

                     position: 'top-center'
                })
            })
    }

    // Reset your account password with the email address
    const resetUserPassword = () =>{

          const email = emailRef.current.value;
          if(email.includes('@')){
             
                resetPassword(email)
                .then(()=>{
                    toast.success("We have sent you a email to change your password.",{
                        position: 'top-center'
                    })
                }).catch((error)=>{
                       
                       toast.error(`${error.message}`,{

                           position: 'top-center'
                       });
                })
          }else{
            {
                toast.error("Write your email first.", {
   
                     position : 'top-center'
                })
             }
          }
    }

    return (
        <div id='register-compo' className='md:m-8 mx-3 my-8'>
        
            <div style={{ boxShadow: '0px 0px 5px 1px black' }} className='lg:w-2/5 md:w-3/4 mx-auto text-center p-4 rounded-md'>
                <h2 style={{textShadow:'2px 2px 1px blue',letterSpacing:'3px'}} className='font-semibold text-3xl font-serif pb-5 text-[#d10096]'>Log in</h2>
                <form onSubmit={handleUserLogIn}>
                    <div className="form-element">
                        <label htmlFor="emailField">Email : </label><br />
                        <input type="email" ref={emailRef} name="email" id="emailField" placeholder='Write your email' required/>
                    </div>
                   
                    <div className="form-element mt-3">
                        <label htmlFor="passwordFiled">Password : </label><br />
                       
                     <div className='password-field'>

                     <input className='' type={open ? 'text' : 'password'} name="password" id="passwordFiled" placeholder='Write your email' autoComplete='off' required />

                            {
                                 open ?
                                 
                                 <FaEye onClick={()=>setOpen(!open)} className='eye-icon text-red-500 text-3xl' /> 
                                
                                 
                                 :  
                                 
                                 <FaEyeSlash onClick={()=>setOpen(!open)} className='eye-icon text-red-500 text-4xl' /> 
                                 
                              
                            }

                </div>
                        <h2 onClick={resetUserPassword} className='text-base text-right underline font-semibold text-blue-700 hover:cursor-pointer'>Forgot password?</h2>
                    </div>  

                    <input className='bg-[red] mt-5 text-white fw-bold hover:cursor-pointer' type="submit" value="Log in" />
                    <h2>New to Ema-john? <Link className='text-blue-600 underline font-xl' to={'/register'}>Create New Account</Link></h2>
                </form>

                <div className='flex items-center justify-center mt-5'>
                    <hr className=' border-1 w-full border-gray-500' />
                       <span className='font-bold px-2'>Or</span>
                    <hr className='border-1 w-full border-gray-500' />
                </div>

                <button onClick={signUpWithGoogle} className='lg:w-fit md:2/4 w-full text-white fw-bold mt-3 p-2 rounded flex items-center gap-2 mx-auto hover:cursor-pointer'> <FaGoogle /> Continue with Google</button>
                <button style={{background:'green'}} onClick={handleLogInWithGithub} className='lg:w-fit md:2/4 w-full text-white fw-bold mt-3 p-2 rounded flex items-center gap-2 mx-auto hover:cursor-pointer'> <FaGithub /> Continue with Github</button>

            </div>
        </div>
    );
};

export default LogIn;