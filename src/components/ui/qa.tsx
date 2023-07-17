interface QAProps {
  question: string
  answer: string

  customAnswer?: React.ReactNode
  height?: string
  cols?: string
}

export const QA = (props: QAProps) => {
  return (
    <div
      className={`${props.height ?? ''} ${
        props.cols ?? ''
      } rounded-lg border-gray-300 bg-gray-100 shadow-sm shadow-gray-400 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-gray-300 `}
    >
      <div className="flex h-full flex-col justify-center p-5 ">
        <h1 className="font-jetbrains-mono font-semibold text-slate-600 dark:text-white sm:text-lg">
          {props.question}
        </h1>
        {props.customAnswer ? (
          props.customAnswer
        ) : (
          <p className="mt-2 font-metropolis text-[14.5px] text-gray-500 dark:text-gray-400">{props.answer}</p>
        )}
      </div>
    </div>
  )
}
