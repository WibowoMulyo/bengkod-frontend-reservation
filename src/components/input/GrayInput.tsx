
import input from '@/components/interface/Input';

const GrayInput = ({ className, value, onChange, errorValue, type = 'text', placeholder='',  name,...props} : input) => {
  return (
    <div className="font-normal w-full mr-auto mt-2">
      <input type={type}
      name={name}
      className={"border-2 rounded-lg text-[16px] " + (errorValue ? "border-red-300" : '') + " "+ className}
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
