import { IoSchool } from "react-icons/io5";
import AboutCard from "./AboutCard";
import { CgWebsite } from "react-icons/cg";
import { GrUserWorker } from "react-icons/gr";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-[12vh] py-20 flex flex-col gap-8 justify-center items-center lg:px-[6rem] px-[1rem] sm:px-[2rem]"
    >
      <div className="text-center">
        <p className="ovo">Introduction</p>
        <p className="ovo text-3xl">About Me</p>
      </div>
      <div className="flex  xl:flex-row flex-col items-center xl:items-start justify-center px-15 gap-6 mt-6">
        <img
          src="/hero.webp"
          alt="hero-image"
          className="object-cover object-top rounded-lg 
             w-[500px] h-[300px] sm:h-[400px] 
             xl:w-[300px] xl:h-full xl:flex-1"
        />

        <div className="flex-2 flex flex-col justify-center gap-6">
          <div className="  ovo  ">
            I&apos;m a full-stack web developer passionate about learning and
            building scalable, user-friendly applications. While I&apos;ve
            worked extensively with the MERN stack, I&apos;m always exploring
            new technologies and approaches to grow as a developer.
          </div>

          <AboutCard
            logo={<IoSchool className="size-6" />}
            text={"Education"}
            description={"Pursuing Bachelor of Computer Applications."}
          />
          <AboutCard
            logo={<CgWebsite className="size-6" />}
            text={"Experience"}
            description={
              "Built a few personal projects to grow my skills and understand the process."
            }
          />
          <AboutCard
            logo={<GrUserWorker className="size-6" />}
            text={"Hobbies"}
            description={"Building new projects and learning new things."}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
