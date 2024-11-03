interface Props extends React.PropsWithChildren {}

const render: React.FC<Props> = ({children}) => {
    return(
        <div className="">{children}</div>
    )
}

export default render;