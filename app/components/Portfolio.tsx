import { PortfolioConsts } from "../utils/PortfolioConsts";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-[12vh] py-20 flex flex-col gap-8 justify-center items-center lg:px-[6rem] px-[1rem] sm:px-[2rem]"
    >
      <div className="text-center">
        <p className="ovo">Portfolio</p>
        <p className="ovo text-3xl">My Works</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PortfolioConsts.map((project) => (
          <PortfolioCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
