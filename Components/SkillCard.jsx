export const SkillCard = ({skill}) => {

  console.log(skill.primaryColor)
  return (
    <div className={`p-10 group text-white hover:text-[${skill.primaryColor}] flex flex-col w-full h-64 items-center justify-center rounded-xl gap-3`}>
      <div className={`w-16 h-16 group-hover:scale-110`}>{skill.svg}</div>
      <h3 className="text-xl font-bold">{skill.name}</h3>
    </div>
  )
}
