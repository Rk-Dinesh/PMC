import React from 'react';
import Capta from "../../assets/Capta.png";
import { FiCheckCircle } from "react-icons/fi";


const SlideFive = () => {
    return (
        <section className=" bg-slate-900 px-20 py-4">
        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
            <div className="relative order-1 md:order-2">
              <img src={Capta} alt="" className="rounded" />
            </div>

            <div className="order-2 md:order-1">
              <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
                Inbuilt AI Teacher <br /> Your AI Learning Companion
              </h4>
              <p className="text-slate-400">
                Get stuck on a tricky concept? Our AI teacher is here to help!
                Ask away – from basic questions to complex problem-solving, our
                AI tutor provides clear and concise explanations. Learn at your
                own pace with personalized support, anytime, anywhere.
              </p>
              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" /> Get
                  quick and accurate explanations to your questions 24/7.
                </li>
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" /> Our
                  AI adapts to your learning style and pace.
                </li>
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />{" "}
                  Overcome learning obstacles with clear and concise
                  explanations.
                </li>
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />{" "}
                  Strengthen your understanding through interactive exercises.
                </li>
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                  Access knowledge across a wide range of subjects.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SlideFive;
