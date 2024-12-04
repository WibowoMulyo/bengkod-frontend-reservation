export interface button{
  className?: string,
  children: React.ReactNode,
  onClick?: (e:  React.MouseEvent<HTMLButtonElement>) => void,
  disabled?: boolean
}