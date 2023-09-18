import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
  const projects = [
    {
      name: "Board-em",
      link: "https://boardem141.netlify.app",
      desc: "Board-em was my first project using the MERN stack. It is basically a mix between email and X (Twitter) with both a public and private side. I got the opportunity to learn a lot from developing this website about authentication and data handling and how to make a website responsive to data changes."
    },
    {
      name: "Poke-memo",
      link: "https://poke-memo141.netlify.app",
      desc: "Poke-memo was my first project using the React. It is a memory-based game about pokemon you have already selected before. If you 'Catch-em-all!!', you win the game. It is a basic demo of how React can make repetitive components easy with the integration of javascript and html in one place"
    },
    {
      name: "Coming Soon",
      link: "#",
      desc: "As a fresh full-stack developer, I have a lot to learn and grow. I am constantly working on new projects to showcase my skills, this portfolio being the latest. Soon there will be a project here worth show-casing some aspect of my skill-set, maybe it could be one of the projects you ask me to build."
    },
    {
      name: "Coming Soon",
      link: "#",
      desc: "As a fresh full-stack developer, I have a lot to learn and grow. I am constantly working on new projects to showcase my skills, this portfolio being the latest. Soon there will be a project here worth show-casing some aspect of my skill-set, maybe it could be one of the projects you ask me to build."
    }
  ] 
  return (
    <div className="flex flex-col gap-2" id="projects">
      <h2 className="text-white text-3xl font-bold border-b-2 border-white w-max mx-auto p-2">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:px-12 xsm:p-6">
        {projects.map(project => <ProjectCard project={project} key={project.name} />)}
      </div>
    </div>
  )
}
