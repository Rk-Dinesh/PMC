import React from 'react';
import { useNavigate } from "react-router-dom";
import image from "../../assets/Presentation2.gif";

const SlideOne = () => {

    const navigate = useNavigate();

    function redirectSignIn() {
        navigate("/signin");
    }
    function redirectSignUp() {
        navigate("/signup");
    }


    return (
        // <div className="flex flex-col items-center dark:bg-black">

        //     <h1 className="text-6xl font-black mt-20 max-md:text-3xl dark:text-white">Ai Course Generator</h1>

        //     <p className="text-center text-black mt-6 max-w-2xl font-medium max-md:text-xs dark:text-white">
        //         Revolutionize your learning journey with our AI Course Generator SaaS
        //         Effortlessly create engaging and personalized courses tailored to your needs
        //     </p>

        //     <div className="flex space-x-4 mb-4 mt-6">
        //         <button onClick={redirectSignIn} className="border-black text-black border px-3 py-2 font-medium dark:border-white dark:text-white">
        //             SignIn
        //         </button>
        //         <button onClick={redirectSignUp} className="bg-black text-white px-3 py-2 font-medium dark:bg-white dark:text-black">
        //             SignUp
        //         </button>
        //     </div>

        //     <img
        //         src={slide}
        //         alt="Your Alt Text"
        //         className="w-full max-w-screen-xl mx-auto my-10 md:my-10"
        //     />
        // </div>
        <section className="relative table w-full lg:py-40 md:py-36 pt-36 pb-24 overflow-hidden bg-slate-900 p-2">
        <div className="container relative z-1">
          <div className="relative grid lg:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-7">
              <div className="lg:me-6 lg:text-start text-center px-8 -pl-5">
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5">
                  Create Your Course,
                  <br /> Your Way{" "}
                </h1>
                <p className="text-lg text-white max-w-xl lg:ms-0 mx-auto">
                  Pick My Course is your AI-powered co-pilot for crafting
                  exceptional online courses. Effortlessly transform your
                  knowledge into engaging lessons complete with text, images, or
                  videos. Unleash your learning potential today!
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative after:content-[''] after:absolute lg:after:-top-0 after:-top-10 after:-right-32 after:w-[36rem] after:h-[36rem] after:border-2 after:border-dashed after:border-slate-700/10 dark:after:border-slate-200/10 after:rounded-full after:animate-[spin_120s_linear_infinite] after:-z-1 before:content-[''] before:absolute lg:before:-top-24 before:-top-36 before:-right-56 before:w-[48rem] before:h-[48rem] before:border-2 before:border-dashed before:border-slate-700/10 dark:before:border-slate-200/10 before:rounded-full before:animate-[spin_240s_linear_infinite] before:-z-1">
               
                  <img
                    src={image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "1000px", height: "auto" }}
                    className="lg:max-w-none lg:-ms-28"
                    alt=""
                  />
               
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SlideOne;
