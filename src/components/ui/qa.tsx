interface QAProps {
  question: string
  answer: string

  customAnswer?: React.ReactNode
  height?: string
  cols?: string
}

export const QA = (props: QAProps) => {
  return (
    <div className={`${props.height ?? ''} ${props.cols ?? ''} rounded-lg bg-[#f9f4f4] dark:bg-[#1a202c]`}>
      <div className="flex h-full flex-col justify-center p-5 ">
        <h1 className="text-[14px] font-bold text-slate-500 dark:font-bold dark:text-white sm:text-lg">
          {props.question}
        </h1>
        {props.customAnswer ? (
          props.customAnswer
        ) : (
          <p className="mt-2 font-metropolis text-gray-500 dark:text-gray-500">{props.answer}</p>
        )}
      </div>
    </div>
  )
}
