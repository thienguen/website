interface QAProps {
  question: string
  answer?: string

  customAnswer?: React.ReactNode
  height?: string
  cols?: string
}

export const QA = (props: QAProps) => {
  return (
    <div
      className={`${props.height ?? ''} ${
        props.cols ?? ''
      } rounded-md border-gray-300 bg-gray-100 opacity-90 shadow-sm shadow-slate-800 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-gray-400`}
    >
      <div className="flex h-full flex-col justify-center p-5 ">
        <h1 className="font-dosis font-semibold text-slate-600 dark:text-white sm:text-xl">{props.question}</h1>
        {props.customAnswer ? (
          <p className="mt-2 font-dosis text-base text-gray-500 dark:text-gray-400">{props.customAnswer}</p>
        ) : (
          <p className="mt-2 font-dosis text-base text-gray-500 dark:text-gray-400">{props.answer}</p>
        )}
      </div>
    </div>
  )
}
