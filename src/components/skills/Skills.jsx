import "./skills.css";
import cPlusPlus from "../../assets/c++.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import mongodb from "../../assets/mongodb.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";
import webrtc from "../../assets/webrtc.png";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      type: "node js",
      icon: node,
      fluency: 4,
    },
    {
      type: "c++",
      icon: cPlusPlus,
      fluency: 4,
    },
    {
      type: "react",
      icon: react,
      fluency: 3,
    },
    {
      type: "css",
      icon: css,
      fluency: 4,
    },
    {
      type: "html",
      icon: html,
      fluency: 4,
    },
    {
      type: "tailwind",
      icon: tailwind,
      fluency: 3,
    },
    {
      type: "webrtc",
      icon: webrtc,
      fluency: 2,
    },
    {
      type: "mongo",
      icon: mongodb,
      fluency: 2,
    },
  ];

  return (
    <div className="w-full h-full md:px-[0.5rem] flex flex-wrap">
      {/* skill container */}
      <div className=" md:flex flex-row-reverse justify-between w-full items-center">
        <section className="w-full md:h-full py-[2rem] px-[2rem] items-center">
          <h1
            style={{ letterSpacing: "1.2px" }}
            className=" font-semibold mb-[1rem] underline underline-offset-8 text-[1.2rem] "
          >
            Technicall Skills.
          </h1>
          {skills.map((item, i) => {
            let fluency_array = [];
            let delay = 0.2;
            for (let i = 0; i < item?.fluency; i++) {
              fluency_array.push(
                <div
                  key={i * 20}
                  style={{ animationDelay: `${0.5 + delay}s` }}
                  className="outer_casing border-[1.2px] flex justify-center items-center rounded-full h-[1rem] aspect-square border-solid border-white"
                >
                  {/* ball */}
                  <span
                    style={{ animationDelay: `${delay - 0.2}s` }}
                    className="child bg-white block rounded-full aspect-square h-[0.5rem]"
                  ></span>
                </div>
              );
              delay += 0.2;
            }
            if (item.fluency < 5) {
              for (let i = item.fluency; i < 5; i++) {
                fluency_array.push(
                  <div
                    key={i * 80}
                    style={{ animationDelay: "0.5s" }}
                    className="outer_casing border-[1.2px] flex justify-center items-center rounded-full h-[1rem] aspect-square border-solid border-white"
                  ></div>
                );
              }
            }

            return (
              <motion.div
                key={i}
                className="container hover:bg-[#231b14] px-[0.5rem] py-[0.25rem] rounded-md skills  my-[0.8rem] flex items-center justify-between"
              >
                <div className="flex-[2] flex">
                  <img
                    src={item.icon}
                    alt=""
                    className="h-[2rem] aspect-square opacity-[0.8]"
                  />
                  <span className="pl-[0.5rem] flex items-center capitalize font-[600] ">
                    {item.type}
                  </span>
                </div>
                <div className="flex-[1] flex gap-x-[0.5rem]">
                  {/* meteorite */}
                  {fluency_array}
                </div>
              </motion.div>
            );
          })}
        </section>
        <section className="w-full md:h-full p-[2rem]">
          <div>
            <h1
              style={{ letterSpacing: "1.2px" }}
              className="text-[1.24rem] underline underline-offset-8 font-[600]"
            >
              Other skills.
            </h1>
            <div className="flex mt-[1rem] flex-wrap gap-3 pt-[1rem]">
              <span className="px-[0.5rem] py-[0.15rem] rounded-sm bg-[#e2e5e6] text-gray-900">
                Git
              </span>
              <span className="px-[0.5rem] py-[0.15rem] rounded-sm bg-[#e2e5e6] text-gray-900">
                Git-hub
              </span>
              <span className="px-[0.5rem] py-[0.15rem] rounded-sm bg-[#e2e5e6] text-gray-900">
                Photoshop
              </span>
              <span className="px-[0.5rem] py-[0.15rem] rounded-sm bg-[#e2e5e6] text-gray-900">
                Figma
              </span>
            </div>
          </div>
          <div className="mt-[2.5rem]">
            <h1
              style={{ letterSpacing: "1.2px" }}
              className="text-[1.24rem] underline underline-offset-8 font-[600]"
            >
              Languages.
            </h1>
            <div className="flex flex-wrap mt-[1rem] gap-3 pt-[1rem]">
              <span className="px-[0.5rem] py-[0.15rem] rounded-sm bg-[#e2e5e6] text-gray-900">
                Hindi
              </span>
              <span className="px-[0.5rem] py-[0.15rem] rounded-sm bg-[#e2e5e6] text-gray-900">
                English
              </span>
              <span className="px-[0.5rem] py-[0.15rem] rounded-sm bg-[#e2e5e6] text-gray-900">
                Japanese
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
