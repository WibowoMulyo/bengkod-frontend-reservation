import ResponsiveImage from "./ResponsiveImage";

interface card {
  className?: string;
  srcImage?: string;
  header?: string;
  content?: string;
  alt?: string;
}

const Card = ({
  className,
  srcImage = "",
  header,
  content,
  alt = "",
}: card) => {
  return (
    <div
      className={
        "text-center items-center p-4 bg-white rounded-2xl flex flex-col w-[239px] h-[240px]" +
        className
      }
    >
      <ResponsiveImage
        src={srcImage}
        alt={alt}
        width={150}
        height={150}
        className="w-[150px] h-[150px] mx-auto"
      />
      <h2 className="font-semiboldmy-2 text-[16px] md:text-2xl">{header}</h2>
      <p className="text-[10px] mx-4 md:text-[16px] my-2">{content}</p>
    </div>
  );
};

export default Card;
