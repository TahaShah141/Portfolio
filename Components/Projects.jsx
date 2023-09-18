import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
  const projects = [
    {
      name: "Board-em",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quo iure, tempore veniam voluptatum vero autem, atque perspiciatis, quidem repellat facilis nostrum quod unde mollitia minus maxime quos soluta? Fugit?"
    }
  ] 
  return (
    <div className="flex flex-col gap-2" id="projects">
      <h2 className="text-white text-3xl font-bold border-b-2 border-white w-max mx-auto p-2">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-12 py-6">
        {projects.map(project => <ProjectCard project={project} key={project.name} />)}
        {projects.map(project => <ProjectCard project={project} key={project.name} />)}
        {projects.map(project => <ProjectCard project={project} key={project.name} />)}
        {projects.map(project => <ProjectCard project={project} key={project.name} />)}
      </div>
    </div>
  )
}
