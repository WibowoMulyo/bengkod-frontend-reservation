import ResponsiveImage from "./ResponsiveImage";

interface card {
  className?: string,
  srcImage?: string,
  header?: string,
  content?: string,
  alt?: string,
}

const Card = ({ className, srcImage="", header, content, alt='' }: card) => {
  return (
    <div
      className={"text-center items-center p-4 bg-white rounded-2xl flex flex-col w-[362px] min-h-[426px] " + className}
    >
      <ResponsiveImage src={srcImage} alt={alt} width={500} height={500} className="w-[250px] h-[250px] mx-auto"/>
      <h2 className="font-semibold my-2 text-[16px] md:text-2xl">{header}</h2>
      <p className="text-[10px] mx-4 md:text-[16px] my-auto">
        {content}
      </p>
    </div>
  )
}

export default Card;