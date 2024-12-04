export default interface input {
  className?: string,
  disabled?: boolean,
  placeholder?: string,
  type?: string,
  value?: string,
  isFocused?: boolean,
  errorValue?: string,
  name?: string
  min?: string,
  max?:string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}