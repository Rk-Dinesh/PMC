import React from 'react';
import { RiUserSearchLine } from "react-icons/ri";
import { TbHomePlus } from "react-icons/tb";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const SlideTwo = () => {
    return (
       
        <section className=" bg-slate-900 px-20 py-4">
        <div className="container relative md:mt-24 mt-16 ">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
              Create Your Course in 3 Easy Steps
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Quickly input your course topic. Choose images or videos. Our AI
              creates engaging content. Simple!
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-6 ite">
            <div className="relative p-6">
              <RiUserSearchLine className=" text-amber-400  text-[45px]" />

              <h5 className="text-xl font-semibold text-white my-5">
                Define Your Course
              </h5>

              <p className="text-slate-400">
                Start by outlining the core of your course. Clearly define your
                course topic and let our AI suggest relevant subtopics or add
                your own. You have complete control over the depth and breadth
                of your course.
              </p>
            </div>

            <div className="relative p-6">
              <MdOutlineAccountBalanceWallet className=" text-amber-400  text-[45px]" />

              <h5 className="text-xl font-semibold text-white my-5">
                Customize Your Course Structure
              </h5>

              <p className="text-slate-400">
                Tailor your course to your learners needs. Choose the ideal
                number of subtopics and decide whether you prefer a text-based
                course enhanced with images or a dynamic learning experience
                with videos.
              </p>
            </div>

            <div className="relative p-6">
              <TbHomePlus className=" text-amber-400  text-[45px]" />
              <h5 className="text-xl font-semibold text-white my-5">
                Generate Your Course
              </h5>

              <p className="text-slate-400">
              With a few clicks, Pick My Course transforms your vision into a fully-fledged online course. Our AI meticulously crafts engaging content, ensuring your course is informative and visually appealing. Sit back, relax, and watch your course come to life.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SlideTwo;
