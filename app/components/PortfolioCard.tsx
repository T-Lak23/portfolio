interface Project {
  title: string;
  image: string;
  tech: string[];
  features: string[];
  live: string;
}

const PortfolioCard = ({ project }: { project: Project }) => {
  return (
    <div
      key={project.title}
      className="group bg-card border border-border   rounded-xl   shadow-[8px_4px_0px_-2px_rgba(59,130,246,0.5)] 
             hover:shadow-[10px_6px_2px_-2px_rgba(59,130,246,0.6)]   transition-all duration-300 overflow-hidden flex flex-col"
    >
      <img
        src={project.image}
        alt="image"
        className="h-[200px] object-cover w-full rounded-t-xl group-hover:scale-[1.02] transition-transform duration-300"
      />

      <div className="p-6 py-8 flex flex-col gap-4 flex-grow">
        <h3 className="text-xl font-semibold text-foreground">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          {project.tech.map((t: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 rounded-md bg-secondary text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="list-disc list-inside text-sm text-foreground space-y-2">
          {project.features.map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {/* Live View Button */}

        <a
          href={project.live}
          target="_blank"
          className="mt-auto inline-block text-center bg-primary text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-primary/80 transition-colors"
        >
          Live View
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
