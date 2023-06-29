import { BsGit } from 'react-icons/bs'
import { FaNpm, FaPython } from 'react-icons/fa'
import { RiCss3Line, RiHtml5Line, RiJavascriptLine } from 'react-icons/ri'
import { SiPrisma, SiReact, SiRedux, SiTailwindcss } from 'react-icons/si'
import { TbBrandCpp, TbBrandKotlin, TbBrandTypescript } from 'react-icons/tb'
import { VscTerminalBash } from 'react-icons/vsc'

const SkillIssues = () => {
  const icons = [
    <BsGit />,
    <FaNpm />,
    <FaPython />,
    <RiCss3Line />,
    <RiHtml5Line />,
    <RiJavascriptLine />,
    <TbBrandCpp />,
    <TbBrandKotlin />,
    <TbBrandTypescript />,
    <VscTerminalBash />,
    <SiPrisma />,
    <SiReact />,
    <SiRedux />,
    <SiTailwindcss />,
  ]

  return (
    <>
      <div className="m-12">
        <div className="flex animate-fade-in-2 flex-wrap items-center justify-center text-4xl">
          {icons.map((icon, index) => (
            <div key={index} className="m-2">
              {icon}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SkillIssues
