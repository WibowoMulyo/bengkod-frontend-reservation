interface label{
  children: React.ReactNode
  className?: string
}

const Label = ({className, children} : label) => {
  return(
    <h1 className={"font-medium " + className}>{children}</h1>
  )
}

export default Label;