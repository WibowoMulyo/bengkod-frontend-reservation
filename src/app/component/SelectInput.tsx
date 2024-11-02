type Rules = string | number;

interface selectinput{
  value: Rules,
  onChange: (value: Rules) =>  void,
  options: readonly Rules[]  
  mapLabel?: (option: Rules) => Rules,
  mapValue?: (option: Rules) => Rules,
  className: string,
}

const isAllowed = (v: any): v is Rules => typeof v ==='string' || typeof v === 'number';

const SelectInput = ({value, mapLabel, mapValue, onChange, options, className} :  selectinput) => {
  const toLabel = (option: Rules) => {
    if(mapLabel){
      return mapLabel(option)
    }

    return isAllowed(option) ? option : String(option)
  }

  const toValue = (option: Rules) => {
    if(mapValue){
      return mapValue(option)
    }

    return isAllowed(option) ? option : String(option)
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(options[e.target.selectedIndex])
  }
  
  return(
    <select value={value} onChange={handleChange}
    className={"border-[2px] shadow-[1px_2px_2px_rgba(0,0,0,0.1)] border-[#e5e5e5] rounded-lg text-[14px] font-medium p-1 pr-10 " + className}
    >
      {options.map(v => (
        <option value={toValue(v)} key={toValue(v)}>{toLabel(v)}</option>
      ))}
    </select>
  )
}

export default SelectInput;