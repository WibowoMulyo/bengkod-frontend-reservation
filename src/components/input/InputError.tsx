import input from "../interface/Input";

interface inputerror {
  className?: string,
  value?: string,
}

const InputError = ({ className, value = '' }: input) => {
  return (
      value.length > 1 ?
        <div className="text-center bg-red-100 py-1 px-2 flex items-center gap-x-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="size-6 stroke-red-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <p className="text-red-600 font-normal"> {value} </p>
        </div>
        : ''
  )
}

export default InputError;