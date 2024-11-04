import ResponsiveImage from "./components/ResponsiveImage";

const forthSec = () => {
  return (
    <div className="my-24" id="tutorial">
      <div
        className="flex flex-col justify-center mx-auto sm:w-sm p-4 bg-white border border-gray-200 rounded-3xl shadow
          md:max-w-4xl"
      >
        <ResponsiveImage src="/img/benlogo.png" width={50} height={50} className="w-[50px] h-[50px]" alt="manajemen waktu"/>
        <h2 className="font-semibold text-gray-900 text-[24px] md:text-3xl">Bengkel Koding</h2>
        <p className="text-[12px] md:text-lg m mt-0">
          Berikut adalah tutorial memesan tempat belajar melalui website bengkel
          koding
        </p>

        {/* <div className="my-2 flex justify-center items-center w-full mt-8">
          <iframe
            className="min-w-full rounded-lg aspect-video mb-12"
            src="https://www.youtube.com/embed/zFBgde9m72Y?si=NI0AUaWtKFwgXi2d"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div> */}
      </div>
    </div>
  );
};

export default forthSec;
