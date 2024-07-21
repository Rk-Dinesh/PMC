import React from 'react';
import Logo from '../../assets/PMC_logo.png';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { TfiTwitterAlt } from "react-icons/tfi";
import { IoIosHeart } from "react-icons/io";

const SlideSeven = () => {
  const storedTheme = sessionStorage.getItem('darkMode');

  const navigate = useNavigate();
  function redirectAbout() {
    navigate("/about");
  }
  function redirectContact() {
    navigate("/contact");
  }
  function redirectTerms() {
    navigate("/terms");
  }

  function redirectPrivacy() {
    navigate("/privacy");
  }

  function redirectSignUp() {
    navigate("/signup");
}

  return (
    <section>
    <div className="relative">
      <div className="shape absolute xl:-bottom-[30px] lg:-bottom-[16px] md:-bottom-[13px] -bottom-[5px] start-0 end-0 overflow-hidden z-1 rotate-180 text-slate-900">
        <svg
          className="w-full h-auto scale-[2.0] origin-top"
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <footer className="relative bg-gray-900 overflow-hidden px-20">
      {/* <span className="absolute blur-[200px] w-[300px] h-[300px] rounded-full top-0 -start-[0] bg-gradient-to-tl to-amber-400  from-fuchsia-600 z-0"></span> */}
      <div className="container-fluid relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 text-center">
            <div className="">
              <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl text-white tracking-normal mb-4">
                Generate Your First free Course
              </h4>
              

              <div className="mt-6">
                <span
                  onClick={redirectSignUp}
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-blue-800 border-gray-800    text-white rounded-md"
                >
                  Start Now!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative text-center">
        <div className="grid grid-cols-1 border-t border-slate-800">
          <div className="py-[30px] px-0">
            <div className="grid md:grid-cols-2 items-center">
              <div className="md:text-start text-center">
                <div className="flex items-center space-x-4">
                  <img src={Logo} alt="Logo" className="h-14 w-14 text-blue-700" />
                  <span className="text-white text-lg font-semibold hover:text-amber-500">
                    PickMyCourse
                  </span>
                </div>
              </div>

              <ul className="list-none footer-list md:text-end text-center mt-6 md:mt-0 space-x-3">
                <li className="inline">
                  <a
                    href="https://www.linkedin.com/company/pickmycourse"
                    target="_blank"
                    className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500  text-center border border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white"
                  >
                    <FaLinkedin className="h-6 w-6 align-middle text-blue-500" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://www.facebook.com/profile.php?id=61562719060394"
                    target="_blank"
                    className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white"
                  >
                    <FaFacebookSquare className="h-6 w-6 align-middle text-blue-500" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://www.instagram.com/dpickmycourse"
                    target="_blank"
                    className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white"
                  >
                    <FaInstagramSquare className="h-6 w-6 align-middle " />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://x.com/pickmycourseai"
                    target="_blank"
                    className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white"
                  >
                    <TfiTwitterAlt className="h-6 w-6 align-middle text-blue-500" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://www.youtube.com/channel/UCe_UWnFteINsaUmMF_iSGwQ"
                    target="_blank"
                    className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white"
                  >
                    <FaYoutube className="h-6 w-6 align-middle text-red-700" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container relative text-center">
          <div className="grid grid-cols-1">
            <div className="text-center flex justify-center items-center">
              <p className="text-gray-400 flex items-center">
                © PickMyCourse Design with{" "}
                <IoIosHeart className="text-orange-700 mx-1" /> by
                <a href="https://seenit.co/" target="_blank" className="text-reset ml-1">
                  SeenIT PTY LTD
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
  );
};

export default SlideSeven;
