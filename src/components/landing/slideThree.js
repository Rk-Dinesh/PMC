import React from "react";
import PMC from "../../assets/PMC.jpeg";
import { useNavigate } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const SlideThree = () => {
    const navigate = useNavigate();

    function redirectSignUp() {
        navigate("/signup");
    }
    return (
        <section className=" bg-slate-900 px-20 py-10">
        <div className="container relative md:mt-24 mt-16 ">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10">
            <div className="relative ">
              <img src={PMC} alt="" className="rounded" />
            </div>

            <div className="">
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
                Elevate Your Learning Experience
              </h3>
              <p className="text-slate-400 max-w-xl">
                Discover the future of learning with Pick My Course. Our
                AI-powered platform creates engaging courses tailored to your
                needs. Spend less time searching for information and more time
                mastering new skills. Unlock your full potential today!
              </p>

              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />{" "}
                  AI-Powered Course Generation
                </li>
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" /> Our
                  Customizable Course Format
                </li>
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />{" "}
                  User-Friendly Interface
                </li>
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />{" "}
                  Time-Saving Solution
                </li>
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />{" "}
                  Engaging Course Content
                </li>
              </ul>

              <div className="mt-4 flex items-center gap-3">
                <span
                  onClick={redirectSignUp}
                  className="hover:text-amber-400 font-medium duration-500 text-white"
                >
                  Start Now{" "}
                </span>
                <IoIosArrowForward className=" text-[20px] align-middle text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SlideThree;
