interface AboutProps {
  logo: React.ReactNode;
  text: string;
  description: string;
}

const AboutCard = ({ logo, text, description }: AboutProps) => {
  return (
    <div
      className="bg-secondary p-5 rounded-lg shadow-md shadow-primary border border-border hover:shadow-lg 
    transition-all duration-300 flex flex-col gap-2"
    >
      {logo}
      <p className="text-lg font-semibold text-foreground">{text}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default AboutCard;
