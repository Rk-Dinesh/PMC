import React from 'react';
import { useNavigate } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const SlideSix = () => {

    const navigate = useNavigate();

 
    function redirectSignUp() {
        navigate("/signup");
    }

    return (
        <section className=" bg-slate-900 px-20 py-10 pb-10" id="pricing-section">
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
              You dont have to choose between cost, time and quality
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Artificial intelligence makes it fast easy to create content for
              your blog, social media, website, and more!
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            <div className="relative overflow-hidden rounded-md shadow shadow-gray-800">
              <div className="p-6">
                <h5 className="text-2xl leading-normal font-semibold  text-white">
                  Free
                </h5>
                <p className="text-slate-400 mt-2">
                  For anyone to try AI video creation
                </p>
                <div className="flex mt-4">
                  <span className="text-lg font-semibold text-white">$</span>
                  <span className="text-5xl font-semibold mb-0 ms-1 text-white">
                    0
                  </span>
                </div>
                <p className="text-slate-400 uppercase text-xs">per month</p>

                <div className="mt-8">
                  <span
                    onClick={redirectSignUp}
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400/5 hover:bg-amber-400 rounded border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white"
                  >
                    Try For Free
                  </span>

                 
                </div>
              </div>

              <div className="p-6 bg-slate-800">
                <ul className="list-none text-slate-400">
                  <li className="font-semibold text-white text-sm uppercase">
                    Features:
                  </li>

                  <li className="flex items-center mt-2 text-white font-semibold">
                    <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                    Generate 1 free course
                  </li>
                  <li className="flex items-center mt-2 text-white font-semibold">
                    <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />{" "}
                    5 sub topics
                  </li>
                  <li className="flex items-center mt-2 text-white font-semibold">
                    <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />{" "}
                    AI Teacher
                  </li>
                  <li className="flex items-center mt-2 text-white font-semibold">
                    <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                    Theory & Image
                  </li>
                  <li className="flex items-center mt-2 text-slate-400">
                    <AiOutlineClose className="h-[18px] w-[18px] me-2" />
                    Theory & Video Course
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-md shadowshadow-gray-800">
              <div className="p-6">
                <h5 className="text-2xl leading-normal font-semibold text-white">
                  Monthly
                </h5>
                <p className="text-slate-400 mt-2">
                  For creators starting their journey
                </p>

                <div className="relative">
                  <div className="flex mt-4">
                    <span className="text-lg font-semibold text-white">$</span>
                    <span className="">
                      <input
                        type="hidden"
                        id="business-amount"
                        className="form-control"
                      />
                      <p
                        className="text-5xl font-semibold mb-0 ms-1  text-white"
                        id="busi-amt"
                      >
                        1
                      </p>
                      <p className="text-slate-400 uppercase text-xs">
                        per month
                      </p>
                    </span>
                  </div>
                </div>
                <div className="mt-8">
                  <span
                   onClick={redirectSignUp}
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded"
                  >
                    Subscribe Now
                  </span>
                </div>
              </div>

              <div className="p-6 bg-slate-800">
                <ul className="list-none text-slate-400">
                  <li className="font-semibold text-white text-sm uppercase">
                    Features:
                  </li>

                  <li className="flex items-center mt-2 text-white font-semibold">
                    <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                    Generate 3 Courses/Month
                  </li>
                  <li className="flex items-center mt-2 text-white font-semibold">
                    <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />{" "}
                    10 sub topics
                  </li>
                  <li className="flex items-center mt-2 text-white font-semibold">
                    <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />{" "}
                    AI Teacher
                  </li>
                  <li className="flex items-center mt-2 text-white font-semibold">
                    <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                    Theory & Image
                  </li>
                  <li className="flex items-center mt-2 text-white font-semibold">
                    <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                    Theory & Video Course
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-md shadow shadow-gray-800">
              <div className="p-6">
                <h5 className="text-2xl leading-normal font-semibold  text-white">
                  Monthly Pro
                </h5>
                <p className="text-slate-400 mt-2">
                  For growing & established creators
                </p>

                <div className="relative">
                  <div className="flex mt-4">
                    <span className="text-lg font-semibold  text-white">$</span>
                    <span className="">
                      <input
                        type="hidden"
                        id="professional-amount"
                        className="form-control"
                      />
                      <p
                        className="text-5xl font-semibold mb-0 ms-1  text-white"
                        id="pro-amt"
                      >
                        5
                      </p>
                      <p className="text-slate-400 uppercase text-xs">
                        per month
                      </p>
                    </span>
                  </div>
                </div>
                <div className="mt-8">
                  <span
                    onClick={redirectSignUp}
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded"
                  >
                    Buy Now
                  </span>
                </div>
              </div>

              <div className="p-6 bg-slate-800">
                <ul className="list-none text-slate-400">
                  <li className="font-semibold text-white text-sm uppercase">
                    Features:
                  </li>

                  <li className="flex items-center mt-2 text-white font-semibold">
                    <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                    Generate 20 Courses/Month
                  </li>
                  <li className="flex items-center mt-2 text-white font-semibold">
                    <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />{" "}
                    10 sub topics
                  </li>
                  <li className="flex items-center mt-2 text-white font-semibold">
                    <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />{" "}
                    AI Teacher
                  </li>
                  <li className="flex items-center mt-2 text-white font-semibold">
                    <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                    Theory & Image
                  </li>
                  <li className="flex items-center mt-2 text-white font-semibold">
                    <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                    Theory & Video Course
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SlideSix;