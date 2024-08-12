import React, { useEffect, useState } from 'react';
import img from '../../src/res/img/signup.svg';
import { Flowbite, Navbar } from 'flowbite-react';
import { Button, Label } from 'flowbite-react';
import { company, logo, name, serverURL, websiteURL } from '../constants';
import DarkModeToggle from '../components/DarkModeToggle';
import LogoComponent from '../components/LogoComponent';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLoading } from 'react-icons/ai';
import Logo from "../assets/PMC_logo.png"
import AI from "../assets/AI.png"

const SignUp = () => {

    const storedTheme = sessionStorage.getItem('darkMode');
    const [mName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [processing, setProcessing] = useState(false);
    const [acceptTnC, setAcceptTnC] = useState(false);

    const navigate = useNavigate();

    function redirectSignIn() {
        navigate("/signin");
    }

    function redirectHome() {
        navigate("/home");
    }

    function redirectTerms() {
        navigate("/terms");
      }
    
      function redirectPrivacy() {
        navigate("/privacy");
      }

    // useEffect(() => {

    //     if (sessionStorage.getItem('auth')) {
    //         redirectHome();
    //     }

    // }, []);

    const showToast = async (msg) => {
        setProcessing(false);
        toast(msg, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!mName || !email || !password) {
            showToast('Please fill in all required fields');
            return;
        } else if (password.length < 9) {
            showToast('Password should be at least 9 characters');
            return;
        }else if (!acceptTnC) {
            showToast('You must accept the Terms of Service and Privacy Policy');
            return;
        }
        const postURL = serverURL + '/api/signups';
        const type = 'free';
        try {
            setProcessing(true);
            const response = await axios.post(postURL, { email, mName, password, type,logo,company });
            if (response.data.success) {
                showToast(response.data.message);
                sessionStorage.setItem('email', email);
                sessionStorage.setItem('mName', mName);
                //sessionStorage.setItem('auth', true);
                sessionStorage.setItem('uid', response.data.userId);
                sessionStorage.setItem('type', 'free');
                redirectSignIn()
            } else {
                showToast(response.data.message);
                redirectSignIn()
            }
        } catch (error) {
            showToast('Internal Server Error');
        }
    };

   

    return (
        <section className="relative overflow-hidden h-screen flex items-center  bg-no-repeat bg-left bg-cover bg-fixed " style={{
            backgroundImage: `url(${AI})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
        <div className="absolute inset-0 bg-slate-950/20"></div>
        <div className="container relative">
            <div className="md:flex justify-end">
                <div className="lg:w-1/3 md:w-2/4">
                    <div className="rounded shadow bg-slate-900 p-6">
                        <img src={Logo} alt="" className='w-16 h-16' />
    
                        <h5 className="mt-6 text-xl font-semibold text-white">Create an account</h5>
    
                        <form onSubmit={handleSignup} className="text-start mt-4">
                            <div className="grid grid-cols-1">
                                <div className="mb-4">
                                    <label className="font-semibold  text-white" htmlFor="RegisterName">Your Name:</label>
                                    <input value={mName} onChange={(e) => setName(e.target.value)} id="RegisterName" type="text" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent bg-slate-900 text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0" />
                                </div>
    
                                <div className="mb-4">
                                    <label className="font-semibold  text-white" htmlFor="LoginEmail">Email Address:</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} id="LoginEmail" type="email" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent bg-slate-900 text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0" />
                                </div>
    
                                <div className="mb-4">
                                    <label className="font-semibold  text-white" htmlFor="LoginPassword">Password:</label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} id="LoginPassword" type="password" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent bg-slate-900 text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0" />
                                </div>
    
                                <div className="mb-4">
                                    <div className="flex items-center w-full mb-0">
                                        <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-amber-400 focus:border-amber-300 focus:ring focus:ring-offset-0 focus:ring-amber-200 focus:ring-opacity-50 cursor-pointer me-2" type="checkbox" value="" id="AcceptT&C " checked={acceptTnC} onChange={(e) => setAcceptTnC(e.target.checked)}/>
                                        <label className="form-check-label text-slate-400 cursor-pointer" htmlFor="AcceptT&C">I Accept <span href="" className="text-amber-400"> <span onClick={redirectTerms}>Terms of Service</span> & <span onClick={redirectPrivacy}>Privacy Policy</span></span></label>
                                    </div>
                                </div>
    
                                <div className="mb-4">
                                    <input type="submit" className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amberbg-amber-500 text-white rounded-md w-full" value="Register"/>
                                </div>
    
                                <div className="text-center">
                                    <span className="text-slate-400 me-2">Already have an account ? </span> <p onClick={redirectSignIn} className="text-white font-bold inline-block">Sign in</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default SignUp;