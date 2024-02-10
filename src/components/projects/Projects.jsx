import { motion } from "framer-motion";
import { useState } from "react";
import react from "../../assets/react.png";
import chelsea_bg from "../../assets/chelsea_bg.jpg";
import filetransfer_bg from "../../assets/filetransfer_bg.jpg";

const Projects = () => {
  const [hovered_over, update_hover] = useState(null);
  function hover_exit() {
    update_hover(null);
  }
  function hovered(element_id) {
    update_hover(element_id);
  }
  const projects = [
    {
      title: "football betting",
      image: chelsea_bg,
      description: "football betting website build with html css js ",
    },
    {
      title: "file transfer",
      image: filetransfer_bg,
      description: "football betting website build with html css js ",
    },
  ];
  const cards = {
    offscreen: {
      x: 200,
    },
    onscreen: {
      x: 0,
    },
  };
  return (
    <motion.div className="md:px-10 px-5 py-0 w-full">
      {/* project card */}

      {projects.map((item, i) => (
        <motion.div
          key={i}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ once: true }}
          variants={cards}
          className="flex rounded-sm mb-[3rem] overflow-hidden h-[450px]  md:h-[400px] md:flex-row flex-col-reverse w-full"
        >
          <div className="flex-[0.3] items-center justify-center gap-y-3 text-orange-500 md:flex flex-col hidden w-full h-full bg-gray-300">
            <span className="w-[2px] h-[100px] bg-orange-400 block"></span>
            <span className="block">{i + 1}</span>

            <span className="block">/</span>

            <span className="block">{projects.length}</span>
          </div>
          <div className="flex-[1] flex flex-col justify-evenly py-2 w-full h-full bg-gray-300">
            <div className=" md:gap-y-4 gap-y-2 flex px-3 flex-col">
              {/* numbering */}
              <div className="flex  items-center">
                <span className="h-3 block aspect-square bg-orange-700 rounded-full"></span>
                <span className="text-black ml-3">No.</span>
                <span
                  style={{ fontFamily: "'Shadows Into Light' , cursive" }}
                  className="underline-offset-2 w-[2rem] text-xl font-[600] text-center border-b-gray-500 mx-[0.2rem] bg-gray-300 outline-none  border-b-[1.5px] text-black"
                >
                  {i + 1}
                </span>
              </div>
              {/* project title */}
              <span className="text-[1.875rem] capitalize text-gray-950 font-[500] leading-[125%]">
                {item.title}
              </span>
              {/* technologies used */}
              <div className="flex flex-wrap gap-3">
                <div className="md:p-2 py-1 px-2 bg-gray-400 text-gray-950 text-center rounded-sm">
                  UX/UI
                </div>
                <div className="md:p-2 py-1 px-2 bg-gray-400 text-gray-950 text-center rounded-sm">
                  Redesign
                </div>
                <div className="md:p-2 py-1 px-2 bg-gray-400 text-gray-950 text-center rounded-sm">
                  Growth
                </div>
              </div>
              {/* short description */}
              <div>
                <span className="text-[1rem] capitalize text-black font-[400]">
                  {item.description}
                </span>
              </div>
              {/* view project btn */}
              <div>
                <span
                  onMouseEnter={() => hovered(i)}
                  onMouseLeave={() => hover_exit()}
                  className="cursor-pointer relative py-[0.12rem] text-black font-[500] text-[1.1rem] "
                >
                  View Project
                  <motion.div
                    animate={hovered_over === i ? "vissible" : "hidden"}
                    transition={{ delay: 0.1 }}
                    variants={{
                      hidden: { scale: 0 },
                      vissible: { scale: 1 },
                    }}
                    whileHover={{ opacity: 1 }}
                    style={{ transform: "translateX(-50%)" }}
                    className="absolute w-[105%] bottom-0 h-[1.7px] bg-orange-800"
                  ></motion.div>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-[3] w-full h-full">
            <motion.div
              transition={{ delay: 0.2 }}
              initial={{ backgroundSize: "100%" }}
              whileHover={{ backgroundSize: "110%" }}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="flex-[1]  w-full h-full bg-gray-500"
            ></motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
