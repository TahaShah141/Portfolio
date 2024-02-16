import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
  const projects = [
    {
      name: "Games",
      link: "https://games-tahashah.netlify.app",
      desc: "I have made this website to host the various games I have made and more that I will be making in the future. All the games share the same connection architecture and backend server, Thus encouraging reusability of components and logic."
    },
    {
      name: "WaveGen",
      link: "https://wavegen.netlify.app",
      desc: "WaveGen allows the user to design and create their own custom-made tiles using a pixelated drawing board. Then the user defines how their tiles will connect with one another. Finally with the help of wave function collapse algorithm, they can generate randomized but orderly images using their tiles as building blocks"
    },
    {
      name: "Board-em",
      link: "https://boardem141.netlify.app",
      desc: "Board-em was my first project using the MERN stack. It is basically a mix between email and X (Twitter) with both a public and private side. I got the opportunity to learn a lot from developing this website about authentication and data handling and how to make a website responsive to data changes."
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
