import '../src/particles.css'

export const Particles = ({circleCount=30}) => {

  const circles = []
  for (let i = 0; i < circleCount; i++) {
    circles.push(<span key={i} className="circle"></span>)
  }
  return (
    <div className='particle-container'>
      <div className="particles">
          {circles}
      </div>
    </div>
  )
}
