import ResponsiveImage from "./ResponsiveImage";

interface YoutubeEmbedded {
  src?: string;
  height?: number;
  width?: number;
  className?: string;
}

const YoutubeEmbedded = ({ src = "", height, width, className }: YoutubeEmbedded) => {
  return (
    <div className={"aspect-w-16 aspect-h-9" + className}>
      <iframe
        height={height}
        width={width}
        src= {src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>

    
  );
};

export default YoutubeEmbedded;
