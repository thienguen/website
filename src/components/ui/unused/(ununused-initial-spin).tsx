import { HiArrowRight } from 'react-icons/hi'

type InitialSpinProps = {
  onClick?: () => void
}

const InitialSpin = (props: InitialSpinProps) => {
  return (
    <>
      <div className="mx-0 sm:mx-auto">
        <button
          className="group relative flex h-[185px] w-[185px] items-center justify-center bg-cover bg-center bg-no-repeat"
          onClick={props.onClick}
        >
          <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">Start Here</span>
          <HiArrowRight className="absolute text-4xl transition-all duration-300 group-hover:translate-x-2" />
        </button>
      </div>
    </>
  )
}

export default InitialSpin
