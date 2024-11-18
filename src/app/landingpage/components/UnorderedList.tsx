import ResponsiveImage from "./ResponsiveImage"
interface unorderedlist {
  className?: string,
  srcImage?: string,
  header?: string,
  content?: string,
  alt?: string 
}

const UnorderedList = ({ className, srcImage="", header, content, alt="" }: unorderedlist) => {
  return (
    <div className={"flex my-2 space-x-4 items-center " + className}>
      <div>
        <ResponsiveImage src={srcImage} width={100} height={100} className="lg:w-[65px] lg:h-[65px] w-[45px] h-[45px]" alt={alt} />
      </div>
      <div className="">
        <h2 className="font-medium text-lg md:text-[24px]">{header}</h2>
        <p className="text-[10px] md:text-[14px]">
          {content}
        </p>
      </div>
    </div>
  )
}

export default UnorderedList;