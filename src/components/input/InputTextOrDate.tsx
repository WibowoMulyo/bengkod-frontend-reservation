import { forwardRef, useEffect, useRef } from 'react';
import input from '@/components/interface/Input';

const InputTextOrDate = forwardRef<HTMLInputElement, input>(function myInput({className, disabled, placeholder, type, value, isFocused, onChange, min, max, errorValue, ...props}, ref){
  const input = useRef<HTMLInputElement>(null)

  // if(input.current.focus')

  useEffect(() => {
    if(isFocused && input.current){
      input.current.focus()
    }
  }, [])

  return(
    <div className="">
      <input 
        className={'rounded-md text-[14px] p-1 border-[2px] shadow-[1px_2px_2px_rgba(0,0,0,0.1)] outline-none focus:ring-primary-700 focus:ring-2 focus:outline-none' + className}
        type={type ? type : 'text'}
        value={value}
        disabled={disabled ? disabled : false}
        placeholder={placeholder ? placeholder : ''}
        onChange={onChange}
        ref={input}
        min={min}
        max={max}
        {...props}
      />
      {errorValue && <p className="font-light text-red-600 text-xs">{errorValue}</p>}
    </div>
  )
})


export default InputTextOrDate;