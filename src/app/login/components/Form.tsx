interface form {
  className?: string;
  header?: string;
  clue?: string;
}

const Form = ({ className, header, clue }: form) => {
  return (
    <div className={"" + className}>
      <h2>{header}</h2>
      <>{clue}</>
    </div>
  );
};

export default Form;
