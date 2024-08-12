import React, { useEffect, useState } from 'react';
import img from '../../src/res/img/forgot.svg';
import { Flowbite, Navbar } from 'flowbite-react';
import { Button, Label } from 'flowbite-react';
import { name, serverURL, websiteURL, company, logo } from '../constants';
import DarkModeToggle from '../components/DarkModeToggle';
import LogoComponent from '../components/LogoComponent';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AiOutlineLoading } from 'react-icons/ai';
import Logo from "../assets/PMC_logo.png"
import AI from "../assets/AI.png"

const ForgotPassword = () => {

    const storedTheme = sessionStorage.getItem('darkMode');
    const [email, setEmail] = useState('');
    const [processing, setProcessing] = useState(false);
    const [seconds, setSeconds] = useState(60);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const navigate = useNavigate();
    function redirectSignUp() {
        navigate("/signin");
    }

    useEffect(() => {

        function redirectHome() {
            navigate("/home");
        }

        if (sessionStorage.getItem('auth')) {
            redirectHome();
        }

        let timer;

        if (isTimerRunning) {
            timer = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds === 1) {
                        clearInterval(timer);
                        setIsTimerRunning(false);
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timer);

    }, [isTimerRunning]);

    const formattedTime = `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;

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

    const handleReset = async (e) => {
        e.preventDefault();
        if (!email) {
            showToast('Please fill in all required fields');
            return;
        }
        const postURL = serverURL + '/api/forgot';
        try {
            setProcessing(true);
            const response = await axios.post(postURL, { email, name, company, logo });
            if (response.data.success) {
                showToast(response.data.message);
                setSeconds(60);
                setIsTimerRunning(true);
            } else {
                showToast(response.data.message);
            }
        } catch (error) {
            showToast('Internal Server Error');
        }
    };

    return (
       
        <section className="relative overflow-hidden h-screen flex items-center bg-no-repeat bg-left bg-cover bg-fixed" style={{
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
    
                                <h5 className="mt-6 text-xl font-semibold text-white">Forgot password</h5>
    
                                <p className="text-slate-400 mt-2">Please enter your email address. You will receive a link to create a new password via email.</p>
    
                                <form onSubmit={handleReset} className="text-start mt-4">
                                    <div className="grid grid-cols-1">
                                        <div className="mb-4">
                                            <label className="font-semibold text-white" htmlFor="LoginEmail">Email Address:</label>
                                            <input onChange={(e) => setEmail(e.target.value)} id="LoginEmail" type="email" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent bg-slate-900 text-slate-200 rounded outline-none border  focus:border-amber-400 border-gray-800 dfocus:border-amber-400 focus:ring-0" placeholder="name@example.com"/>
                                        </div>
        
                                        <div className="mb-4">
                                            <input type="submit" className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amberbg-amber-500 text-white rounded-md w-full" value="Send"/>
                                        </div>
    
        
                                        <div className="text-center">
                                            <span className="text-slate-400 me-2">Remember your password ? </span> <span onClick={redirectSignUp} className="text-white font-bold inline-block">Sign in</span>
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

export default ForgotPassword;