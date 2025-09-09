interface ToolProps {
  icon: React.ReactNode;
  label: string;
}
const ToolCard = ({ icon, label }: ToolProps) => {
  return (
    <div className="flex flex-col items-center gap-2 w-20 text-center hover:scale-105 transition-transform">
      {icon}
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default ToolCard;
