
import input from '@/components/interface/Input';

const GrayInput = ({ className, value, onChange, errorValue, type = 'text', placeholder='',  ...props} : input) => {
  return (
    <div className="font-normal w-full mr-auto">
      <input type={type}
      className={"border-2 rounded-lg text-[16px] mt-2 " + (errorValue ? "border-red-300" : '') + " "+ className}
       value={value} 
       onChange={onChange}
       placeholder={placeholder}
       {...props}
       />

       {errorValue && <div className="text-red-500 text-sm mt-1">
                      <p>{errorValue}</p>
                    </div>}
    </div>
  )
}

export  default GrayInput;
