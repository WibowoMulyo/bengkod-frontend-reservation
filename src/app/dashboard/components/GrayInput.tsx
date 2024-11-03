interface grayinput{
  className?: string,
  value?: string | number,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  errorValue?: string,
}

const GrayInput = ({ className, value, onChange, errorValue} : grayinput) => {
  return (
    <div className="font-normal w-full mr-auto">
      <input type="text" 
      className={"border-2 rounded-lg pl-[1.5%] py-[1%] pr-[10%] text-gray-500 text-[16px] mt-2 " + (errorValue ? "border-red-300" : '') + " "+ className}
       value={value} 
       onChange={onChange}
       />

       {errorValue && <div className="text-red-500 text-sm mt-1">
                      <p>Harus menggunakan email mahasiswa</p>
                    </div>}
    </div>
  )
}

export  default GrayInput;
