import { forwardRef, useEffect, useRef } from 'react';
interface input {
  className?: string,
  disabled?: boolean,
  placeholder?: string,
  type?: string,
  value: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const InputTextOrDate = forwardRef<HTMLInputElement, input>(function myInput({className, disabled, placeholder, type, value, onChange, ...props}, ref){
  const input = ref ? ref : useRef()
  return(
    <input 
      className={'rounded-md text-[14px] p-1 border-[2px] shadow-[1px_2px_2px_rgba(0,0,0,0.1)] ' + className}
      type={type ? type : 'text'}
      value={value}
      disabled={disabled ? disabled : false}
      placeholder={placeholder ? placeholder : ''}
      onChange={onChange}
      ref={ref}
      {...props}
    />
  )
})


export default InputTextOrDate;