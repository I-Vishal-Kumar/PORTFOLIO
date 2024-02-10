import StarBg from "./StarBg";
import { motion } from "framer-motion";
import "../../index.css";
import background from "../../assets/new_background.png";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
const Layout = () => {
  const cardVariants = {
    offscreen: {
      x: 400,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };
  return (
    <section className="relative">
      <div className="absolute z-[-1] h-full  w-full top-0 left-0">
        <StarBg />
      </div>
      <section
        style={{
          background:
            "radial-gradient(circle at center top, rgba(243, 169, 105, 0.41) 0%, rgb(193 140 74 / 0%) 29%, rgba(126, 111, 101, 0.13) 66%) 0% 0% / 100% 100%, radial-gradient(18% 28% at 50% 0%, rgb(255 255 255 / 0%) 0%, rgb(0 0 0 / 0%) 100%), radial-gradient(18% 28% at 50% 0%, rgb(61 38 13 / 62%) 0%, rgba(7, 58, 255, 0) 100%)",
          backgroundSize: "100% 100%",
        }}
        className="relative min-h-screen bg-transparent"
        id="main-content"
      >
        <img
          src={background}
          alt=""
          className="absolute z-[-1] rotate-[180deg] translate-y-[-50px] md:translate-y-[-200px] md:left-[50%] md:translate-x-[-50%] md:w-[80vw]"
        />
        <header className="flex justify-between font-[600] h-[70px] px-[1rem] items-center">
          <div className="md:flex-[1] flex-[2] text-2xl">Vishal kumar</div>
          <div className="rounded-full hidden flex-[2] w-full md:flex items-center justify-evenly px-[0.5rem] text-gray-100 bg-gray-900 py-[0.35rem] opacity-[0.9] ">
            <span className="cursor-pointer hover:text-white">About me</span>
            <span className="cursor-pointer hover:text-white">Skills</span>
            <span className="cursor-pointer hover:text-white">Projects</span>
          </div>
          <div className="flex-[1] flex justify-evenly items-center ">
            <span className="cursor-pointer">
              <Instagram />
            </span>
            <span className="cursor-pointer">
              <GitHub />
            </span>
            <span className="cursor-pointer">
              <LinkedIn />
            </span>
          </div>
        </header>
        <motion.main className="flex flex-col  bg-transparent items-center ">
          {/* about section */}
          <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
            style={{ height: "calc(100vh - 70px" }}
            className=" w-[100vw]"
          >
            <About />
          </motion.section>

          <section className="py-[2rem] md:px-[2.5rem]  w-[100vw] ">
            <Projects />
          </section>

          <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
            className="min-h-[500px] md:min-h-fit md:px-[2.5rem]  w-[100vw] "
          >
            <Skills />
          </motion.section>

          <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
            className="py-[2rem] mt-[2rem] pt-[4rem]  w-[100vw] "
          >
            <Contact />
          </motion.section>
        </motion.main>
      </section>
    </section>
  );
};

export default Layout;
