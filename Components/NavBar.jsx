import "../styles/links.css"

export const NavBar = () => {
  return (
    <>
    <nav className="hidden fixed top-0 z-50 w-full text-white min-[450px]:flex justify-center p-8 min-[450px]:bg-opacity-100 bg-opacity-30 bg-black">
      <div className="hidden min-[450px]:flex gap-10 text-xl font-semibold font-mono navlinks">
        <a href="#home">Home</a>
        <a href="#skills">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

    </nav>
    <nav className="min-[450px]:hidden">
      <div className="flex justify-center z-20 min-[450px]:hidden">
        <div className="text-white">
            <svg viewBox="0 0 28 12" className="w-36" ><path d="M2 2 13 2 12 3 3 3 2 2M7 3 7 10 8 10 8 3M8 10 11 4 14 10 15 6 19 5 20 2 20 10 23 4 26 10 25 10 23 6 21 10 19 10 19 6 16 7 15 10 13 10 11 6 9 10 7 10Z" fill="currentColor"></path></svg>
        </div>
      </div>
    </nav>
    </>
  )
}
