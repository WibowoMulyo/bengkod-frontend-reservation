const forthSec = () => {
  return (
    <div className="mx-4 my-16" id="tutorial">
      <div
        className="flex flex-col justify-center items-center mx-auto text-center sm:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow
          md:max-w-4xl md:max-h-fit"
      >
        <img
          className="mx-auto mt-6 size-[50px] md:size-20"
          src="./img/benlogo.png"
          alt="manajemen waktu"
        />
        <h2 className="font-bold text-[24px] md:text-3xl">Bengkel Koding</h2>
        <p className="text-[12px] md:text-lg md:m-4 md:mx-40 mt-0">
          Berikut adalah tutorial memesan tempat belajar melalui website bengkel
          koding
        </p>

        <div className="my-2 flex justify-center items-center w-full mt-8">
          <iframe
            className="min-w-full rounded-lg aspect-video mb-12"
            src="https://www.youtube.com/embed/zFBgde9m72Y?si=NI0AUaWtKFwgXi2d"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default forthSec;
