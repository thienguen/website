import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'

interface StatCardProps {
  title: string
  value: string | number
  href : string
}

const StatCard: React.FC<StatCardProps> = ({ title, value, href }) => {
  return (
    <div className="bg-overlay mt-4 flex flex-col justify-between gap-2 rounded-sm p-4 text-slate-900 opacity-90 shadow-sm shadow-slate-700 dark:text-slate-300 dark:shadow-gray-400">
      <div className="group m-0 flex gap-1">
        {title}
        <a href={href} target="_blank" rel="noreferrer">
        <HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
        </a>
      </div>
      <h3 className="m-0">{value}</h3>
    </div>
  )
}

export default StatCard
