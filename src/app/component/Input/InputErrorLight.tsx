import input from "../interface/Input";

const InputErrorLight = ({errorValue}: input) => {
  return errorValue && <p className="font-light text-red-600 text-xs">{errorValue}</p>
}

export default InputErrorLight;