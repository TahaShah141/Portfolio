import '../styles/shadows.css'

export const ProjectCard = ({project}) => {

  
  return (
    <div className="relative h-72 w-full overflow-y-hidden rounded-xl glow-white border-4 border-black">
      <div className="h-full w-full bg-neutral-900 peer">

      </div>
      <div className="absolute bottom-0 w-full h-1/2 translate-y-full bg-black bg-opacity-30 peer-hover:translate-y-0 hover:translate-y-0 text-neutral-50 peer-hover:opacity-100 hover:opacity-100 duration-500">
        <p className="p-4">
          {project.desc}
        </p>
      </div>
    </div>
  )
}
