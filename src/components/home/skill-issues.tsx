import { BsGit } from 'react-icons/bs'
import { FaNpm, FaPython } from 'react-icons/fa'
import { RiCss3Line, RiHtml5Line, RiJavascriptLine } from 'react-icons/ri'
import { SiPrisma, SiReact, SiRedux, SiTailwindcss } from 'react-icons/si'
import { TbBrandCpp, TbBrandKotlin, TbBrandTypescript } from 'react-icons/tb'
import { VscTerminalBash } from 'react-icons/vsc'

const SkillIssues = () => {
  return (
    <>
      <div>
        <div className="flex flex-auto items-center justify-center text-4xl text-gray-500 dark:text-gray-500">
          <BsGit />
          <FaNpm />
          <FaPython />
          <RiCss3Line />
          <RiHtml5Line />
          <RiJavascriptLine />
          <TbBrandCpp />
          <TbBrandKotlin />
          <TbBrandTypescript />
          <VscTerminalBash />
          <SiPrisma />
          <SiReact />
          <SiRedux />
          <SiTailwindcss />
        </div>
      </div>
    </>
  )
}

export default SkillIssues