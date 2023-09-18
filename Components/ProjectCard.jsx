import '../styles/shadows.css'

export const ProjectCard = ({project}) => {

  
  return (
    <a href={project.link} className="relative h-72 w-full overflow-y-hidden rounded-xl glow-white border-4 border-black group">
      <div className="h-full w-full flex items-center justify-center bg-[#0c0c0c] peer">
        <p className='text-white font-serif text-4xl group-hover:opacity-30 duration-500'>{project.name}</p>
      </div>
      <div className="absolute bottom-0 w-full h-1/2 translate-y-full bg-black bg-opacity-30 peer-hover:translate-y-0 hover:translate-y-0 text-neutral-50 peer-hover:opacity-100 hover:opacity-100 duration-500">
        <p className="p-4">
          {project.desc}
        </p>
      </div>
    </a>
  )
}
