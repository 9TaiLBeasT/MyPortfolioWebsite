
import { CustomButton } from "../ui/CustomButton";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

export const ProjectCard = ({
  image,
  title,
  description,
  technologies,
  githubLink,
  liveLink,
}: ProjectCardProps) => {
  return (
    <div className="border border-muted bg-card rounded-lg overflow-hidden card-hover">
      <div className="relative group overflow-hidden">
        <img src={image} className="aspect-[1.65] object-cover w-full transition-transform duration-500 group-hover:scale-110" alt={title} />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="flex flex-wrap w-full gap-2 text-muted-foreground font-normal p-4">
        {technologies.map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-muted/30 rounded text-sm">{tech}</span>
        ))}
      </div>
      
      <div className="border-t border-muted flex w-full flex-col p-6">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground font-normal mt-4">{description}</p>
        <div className="flex gap-4 mt-6">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <CustomButton 
                variant="github" 
                icon="github"
              >
                GitHub
              </CustomButton>
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <CustomButton 
                variant="live" 
                icon="live"
              >
                Live
              </CustomButton>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
