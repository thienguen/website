import clsx from 'clsx'

type ProgressBarProps = {
  steps: string[]
  currentStep: number
  isFullWidth?: boolean
}

const ProgressBar = ({ steps, currentStep, isFullWidth }: ProgressBarProps) => {
  return (
    <div className={clsx(isFullWidth ? 'w-full' : 'w-11/12 lg:w-2/3', 'mx-auto')}>
      {/* Progress Bar section */}
      <div className="flex h-1 items-center justify-between bg-gray-300 dark:bg-gray-800">
        {/* The current step we are at */}
        <div
          className={`flex h-1 w-1/3 items-center 
          ${
            currentStep - 1 >= 0
              ? 'bg-[#4B68B8] dark:bg-[#D9DADB]' // Active
              : 'bg-gray-300 from-gray-500 to-gray-700 dark:bg-gradient-to-r' // Inactive
          }`}
        />

        {/* after that, the rest of the bar should be gray */}
        {steps.slice(0, steps.length - 2).map((step, index) => {
          console.log(step)
          return (
            <div
              key={index}
              className={`relative flex h-1 w-1/3 items-center justify-between ${
                currentStep - 1 >= index + 1
                  ? 'bg-[#4B68B8] dark:bg-[#D9DADB]' // Active
                  : 'bg-gray-300  dark:bg-gray-700' // Inactive
              }`}
            >
              <div
                className={`${
                  currentStep - 1 >= index
                    ? 'bg-[#4B68B8] dark:bg-[#D9DADB]' // Active
                    : 'bg-gray-300  dark:bg-gray-700' // Inactive
                } -ml-2 flex h-3 w-3 items-center justify-center rounded-full shadow`}
              />
            </div>
          )
        })}

        {/* End Section??? */}
        <div className="relative -mr-3 flex h-3 w-3 items-center justify-center rounded-full bg-white shadow dark:bg-gray-800">
          <div
            className={`h-3 w-3 rounded-full ${
              currentStep >= steps.length - 1
              ? 'bg-[#4B68B8] dark:bg-[#D9DADB]' // Active
              : 'bg-gray-300  dark:bg-gray-700' // Inactive
            }`}
          />
        </div>
        <div className="flex w-1/3 justify-end">
          <div
            className={`h-3 w-3 rounded-full shadow ${
              currentStep >= steps.length
              ? 'bg-[#4B68B8] dark:bg-[#D9DADB]' // Active
              : 'bg-gray-300  dark:bg-gray-700' // Inactive
            }`}
          />
        </div>
      </div>

      {/* Text labels section */}
      <div className={`grid auto-cols-fr grid-flow-col font-dosis text-sm`}>
        {steps.map((step, index) => {
          return (
            <p
              key={index}
              className={`text-center font-bold ${
                currentStep - 1 >= index
                  ? 'text-sky-500 dark:text-[#D9DADB]' // Active
                  : 'text-gray-300 dark:text-gray-600' // Inactive
              }`}
            >
              {step}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default ProgressBar
