import React, { useEffect, useState } from 'react';
import { Navbar } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import { name, serverURL, websiteURL } from '../constants';
import DarkModeToggle from './DarkModeToggle';
import LogoComponent from './LogoComponent';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';
import Logo from '../assets/PMC_logo.png'

const Header = ({ isHome }) => {

  const storedTheme = sessionStorage.getItem('darkMode');
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (isHome && sessionStorage.getItem('uid') === null) {
      navigate("/signin");
    }
    async function dashboardData() {
      const postURL = serverURL + `/api/dashboard`;
      const response = await axios.post(postURL);
      sessionStorage.setItem('adminEmail', response.data.admin.email);
      if (response.data.admin.email === sessionStorage.getItem('email')) {
        setAdmin(true)
      }
    }
    if (sessionStorage.getItem('adminEmail')) {
      if (sessionStorage.getItem('adminEmail') === sessionStorage.getItem('email')) {
        setAdmin(true)
      }
    } else {
      dashboardData();
    }
  });

  function redirectSignIn() {
    navigate("/signin");
  }
  function redirectAdmin() {
    sessionStorage.setItem('darkMode', false);
    const webURL = websiteURL;
    window.location.href = webURL + '/dashboard';
  }
  function redirectFeatures() {
    navigate("/features");
  }
  function redirectSignUp() {
    navigate("/signup");
  }
  function redirectHome() {
    navigate("/home");
  }
  function redirectGenerate() {
    navigate("/create");
  }
  function redirectProfile() {
    navigate("/profile");
  }
  function Logout() {
    sessionStorage.clear();
    showToast('Logout Successful');
    redirectSignIn();
  }
  function redirectPricing() {
    navigate('/pricing', { state: { header: true } });
  }
  function redirectPricingTwo() {
    navigate('/pricing', { state: { header: false } });
  }

  function redirectTerms() {
    navigate("/terms");
  }

  function redirectPrivacy() {
    navigate("/privacy");
  }
  
  function redirectPricinglan() {
    // Navigate to the home page first if not already there
    navigate("/");
    // Smooth scroll to the pricing section
    setTimeout(() => {
        const pricingSection = document.getElementById("pricing-section");
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: "smooth" });
        }
    }, 100); // Delay to ensure the home page is fully loaded
}

  

  const showToast = async (msg) => {
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

  return (
    <Flowbite>
      {!isHome ?
        <>
         <nav className="bg-slate-800 p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Heading on the left */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="h-14 w-14" />
          <span className="text-white text-lg font-semibold hover:text-amber-500">PickMyCourse</span>
        </div>
        {/* Centered Navigation Links */}
        <div className="hidden md:flex space-x-8">
        <span onClick={redirectPricinglan} className="text-gray-300 hover:text-amber-500">
          Pricing
          </span>
         
          <span onClick={redirectPrivacy} className="text-gray-300 hover:text-amber-500">
          Privacy Policy
          </span>
          <span onClick={redirectTerms} className="text-gray-300 hover:text-amber-500">
          Terms Of Service
          </span>
         
        </div>
        {/* Sign In and Sign Up on the right */}
        <ul className="buy-button list-none mb-0">
          <li className="inline mb-0">
           <span onClick={redirectSignIn}>
           <span className="py-[6px] px-4 md:inline hidden items-center justify-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400/5 hover:bg-amber-400 border border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white font-semibold">
                Login
              </span>
              <span className="py-[6px] px-4 inline md:hidden items-center justify-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400 hover:bg-amber-500 border border-amber-400 hover:border-amber-500 text-white font-semibold">
                Login
              </span>
           </span>
          
          </li>

          <li className="md:inline hidden ps-1 mb-0">
            <span
            onClick={redirectSignUp}
              className="py-[6px] px-4 inline-block items-center justify-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400 hover:bg-amber-500 border border-amber-400 hover:border-amber-500 text-white font-semibold"
            >
              Signup
            </span>
          </li>
        </ul>
      </div>
    </nav>
        </>
        :
        <>
          <Navbar fluid className=' py-3 dark:bg-black border-b border-black dark:border-white'>
            <Navbar.Brand href={websiteURL} className="ml-1">
              <LogoComponent isDarkMode={storedTheme} />
              <span className="self-center whitespace-nowrap text-2xl font-black dark:text-white ">{name}</span>
            </Navbar.Brand>
            <div className="flex md:hidden justify-center items-center">
              <DarkModeToggle className='inline-flex items-cente md:hidden' />
              <Navbar.Toggle className='inline-flex items-center rounded-lg p-2 text-sm text-black hover:bg-white focus:outline-none focus:ring-0 focus:ring-gray-200 dark:text-white dark:hover:bg-black dark:focus:ring-gray-600 md:hidden' />
            </div>
            <Navbar.Collapse>
              <div className="hidden md:flex justify-center items-center">
                <DarkModeToggle />
              </div>
              <Navbar.Link className='border-b-0 text-black  font-normal mb-2 mt-2 dark:text-white  hover:bg-white dark:hover:bg-black hover:text-black md:hover:text-black dark:hover:text-white dark:md:hover:text-white' style={{ paddingLeft: '0px', paddingRight: '0px', paddingBottom: '10px', paddingTop: '10px' }} onClick={redirectHome}>Home</Navbar.Link>
              <Navbar.Link className='border-b-0 text-black  font-normal mb-2 mt-2 dark:text-white hover:bg-white dark:hover:bg-black hover:text-black md:hover:text-black dark:hover:text-white dark:md:hover:text-white' style={{ paddingLeft: '0px', paddingRight: '0px', paddingBottom: '10px', paddingTop: '10px' }} onClick={redirectProfile}>Profile</Navbar.Link>
              <Navbar.Link className='border-b-0 text-black  font-normal mb-2 mt-2 dark:text-white hover:bg-white dark:hover:bg-black hover:text-black md:hover:text-black dark:hover:text-white dark:md:hover:text-white' style={{ paddingLeft: '0px', paddingRight: '0px', paddingBottom: '10px', paddingTop: '10px' }} onClick={Logout}>Logout</Navbar.Link>
              <Navbar.Link className='border-b-0 text-black  font-normal mb-2 mt-2 dark:text-white hover:bg-white dark:hover:bg-black hover:text-black md:hover:text-black dark:hover:text-white dark:md:hover:text-white' style={{ paddingLeft: '0px', paddingRight: '0px', paddingBottom: '10px', paddingTop: '10px' }} onClick={redirectPricing}>Pricing</Navbar.Link>
              {admin ? <Navbar.Link className='border-b-0 text-black  font-normal mb-2 mt-2 dark:text-white hover:bg-white dark:hover:bg-black hover:text-black md:hover:text-black dark:hover:text-white dark:md:hover:text-white' style={{ paddingLeft: '0px', paddingRight: '0px', paddingBottom: '10px', paddingTop: '10px' }} onClick={redirectAdmin}>Admin</Navbar.Link> : <> </>}
              <Navbar.Link onClick={redirectGenerate} className='border-b-0 text-white  font-normal mb-2 mt-2 bg-black dark:text-black dark:bg-white  hover:bg-black dark:hover:bg-white md:dark:hover:bg-white md:hover:bg-black hover:text-white md:hover:text-white dark:hover:text-black dark:md:hover:text-black' style={{ paddingLeft: '15px', paddingRight: '15px', paddingBottom: '10px', paddingTop: '10px' }}>Generate Course</Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </>
      }

    </Flowbite>
  );
};

export default Header;