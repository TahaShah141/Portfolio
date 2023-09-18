import { Particles } from "./Particles"
import { TypeWriter } from './TypeWriter'
import "../styles/fonts.css"

export const Hero = () => {


  return (
    <div className="relative" id="home">
      <Particles />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full">
        <div className="flex flex-col items-center text-white text-4xl gap-2 md:text-6xl">
          <h1 className="raleway text-3xl md:text-5xl lg:text-[72px]">Hi, I am</h1>
          <TypeWriter textStyling={"raleway-italic text-yellow-300"} words={["Taha Shah", "A Full-Stack Developer", "A Game Developer", "An Automation Expert"]} />
        </div>
      </div>
    </div>
  )
}
