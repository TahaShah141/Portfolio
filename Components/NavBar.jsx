import "../styles/links.css"

export const NavBar = () => {
  return (
    <nav className="fixed top-0 z-20 w-full text-white flex justify-center p-8 bg-black">
      <div className="flex gap-10 text-xl font-semibold font-mono navlinks">
        <a href="#home">Home</a>
        <a href="#skills">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}
