import ResponsiveImage from "./components/ResponsiveImage";

const forthSec = () => {
  return (
    <div className="my-24 mx-6" id="tutorial">
      <div
        className="flex flex-col justify-center items-center mx-auto sm:w-sm p-4 bg-white border border-gray-200 rounded-3xl shadow
          md:max-w-4xl"
      >
        <ResponsiveImage
          src="/img/benlogo.png"
          width={80}
          height={80}
          className="w-[80px] h-[80px] mt-8 md:mt-4"
          alt="manajemen waktu"
        />
        <h2 className="font-semibold text-gray-900 text-[24px] md:text-[30px]">
          Bengkel Koding
        </h2>
        <p className="text-[12px] text-center md:text-[16px] mt-0 max-w-[498px]">
          Berikut adalah tutorial memesan tempat belajar melalui website bengkel
          koding
        </p>

        <div className="aspect-w-16 aspect-h-9 my-12">
          <iframe
            className="w-full h-full md:h-[360px] rounded-lg"
            src="https://www.youtube.com/embed/u61F_qvdid0?si=vZugcyC2QBNNZku-"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default forthSec;
