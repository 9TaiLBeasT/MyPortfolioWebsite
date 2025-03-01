
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "../ui/SectionTitle";
import { CustomButton } from "../ui/CustomButton";

export const Projects = () => {
  const projects = [
    {
      image: "/assets/projects/cancerforecast.jpg",
      title: "CancerForecast",
      description: "AI-Powered Cancer Detection System.",
      technologies: ["Python", "Tensorflow", "Scikit-learn", "Html", "Css"],
      githubLink: "https://github.com/9TaiLBeasT/CancerForecast",
      liveLink: "https://cancerforecast.streamlit.app/",
    },
  ];

  return (
    <section id="works" className="mt-32">
      <div className="flex justify-between items-center">
        <SectionTitle title="projects" className="flex-1" />
        <CustomButton variant="outline" size="sm" className="flex items-center">
          View all <span className="ml-2"></span>
        </CustomButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
