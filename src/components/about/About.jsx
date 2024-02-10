import { useState } from "react";
import "./about.css";
import cPlusPlus from "../../assets/c++.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import mongodb from "../../assets/mongodb.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";
import webrtc from "../../assets/webrtc.png";
import { motion } from "framer-motion";

const About = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const skills = [
    {
      type: "node js",
      image: node,
      p_l: "15rem",
      p_b: "1.5rem",
    },
    {
      type: "c++",
      image: cPlusPlus,
      p_l: "9rem",
      p_b: "5rem",
    },
    {
      type: "react",
      image: react,
      p_l: "16rem",
      p_b: "16rem",
    },
    {
      type: "css",
      image: css,
      p_l: "16rem",
      p_b: "8.5rem",
    },
    {
      type: "html",
      image: html,
      p_l: "4.5rem",
      p_b: "10rem",
    },
    {
      type: "tailwind",
      image: tailwind,
      p_l: "10rem",
      p_b: "13rem",
    },
    {
      type: "webrtc",
      image: webrtc,
      p_l: "4rem",
      p_b: "17rem",
    },
    {
      type: "mongo",
      image: mongodb,
      p_l: "12rem",
      p_b: "22rem",
    },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleHover = (index) => {
    setHoveredSkill(index);
  };

  const handleHoverExit = () => {
    setHoveredSkill(null);
  };

  return (
    <div className="flex relative justify-between h-full md:px-[1rem] overflow-hidden ">
      <div className="flex flex-[2] items-center">
        <div className="md:pl-[4rem] pl-[2rem] grid gap-y-[2rem]">
          <div className="rounded-full  max-w-fit bg-gray-800 py-[0.25rem] shadow-sm shadow-[#e3e3e3] px-[1rem] ">
            Futuristic web developer
          </div>
          <div>
            <div className="py-[0.8rem]">
              <span className="flex">
                <h1 className="m-0 p-0 leading-[0.9] md:text-[2.9rem] text-[2rem]  font-[700]">
                  Providing
                </h1>
                <h1
                  id="hero_text"
                  className="ml-[0.25em] p-0 leading-[0.9] md:text-[2.9rem] text-[2rem]  font-[700] text-yellow-800"
                >
                  the best
                </h1>
              </span>
              <h1 className="m-0 p-0 leading-[0.9] md:text-[2.9rem] text-[2rem]  font-[700]">
                project experience.
              </h1>
            </div>
            <span className="text-sm text-gray-300 block max-w-[500px] ">
              I&apos;am a Full Stack Software Engineer with experience in
              Website, Mobile and Software development. Check out my projects
              and skills.
            </span>
          </div>

          <button className="bg-yellow-800 hover:scale-[1.02] outline-none border-none max-w-fit block py-[0.25rem]">
            See Resume
          </button>
        </div>
      </div>
      <div
        id="skills_container"
        className="w-full md:flex-[1] flex-[0.5] flex md:items-end items-center justify-end"
      >
        {/* box container */}
        <div className="w-[100%] md:block hidden ">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative h-full"
          >
            {/* boxes */}

            {skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 0.8,
                  },
                }}
                whileHover={{ opacity: 1 }}
                style={{
                  left: skill.p_l,
                  bottom: skill.p_b,
                }}
                className={` childrens absolute h-[3rem] aspect-square rounded-[0.25rem]`}
                onMouseEnter={() => handleHover(i)}
                onMouseLeave={handleHoverExit}
              >
                <img
                  src={skill.image}
                  className="scale-[0.8] opacity-[1]"
                  alt=""
                />
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={
                    hoveredSkill === i
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: -20 }
                  }
                  transition={{ duration: 0.3 }}
                  className="absolute right-[110%] top-0 h-[3rem] rounded-r-[1.5rem] w-[8rem] z-10  bg-slate-300 flex items-center rounded shadow-md p-2"
                >
                  <span className="text-black capitalize font-[600]">
                    {skill.type}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-[100%] md:hidden flex flex-col items-end"
        >
          {skills.map((skill, i) => (
            <motion.div
              variants={{
                hidden: { x: 40, opacity: 0 },
                visible: { x: 0, opacity: 0.6 },
              }}
              key={i}
              style={{
                background:
                  "linear-gradient(125deg, rgb(300 244 225) , transparent)",
              }}
              className="w-[2.2rem] p-[0.3rem] my-[1rem] rounded-l-md aspect-square"
            >
              <img src={skill.image} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
