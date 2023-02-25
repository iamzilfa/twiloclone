const Hero = () => {
  return (
    <div className="bg-gradient-to-l from-[#25558d] to-[#0a2d57] h-[35.0043rem] mt-20">
      <div className="mx-auto container px-6 w-full max-w-104 relative">
        <div className="py-16 w-[21.375rem] text-white">
          <div>
            <h1 className="text-4xl font-RobotoBold leading-[2.7rem] tracking-[0.0125rem]">
              TUM. The Entrepreneurial University
            </h1>
          </div>
          <div className="mt-6">
            <p className="text-xl leading-[1.875rem] tracking-[0.0125rem]">
              Innovation through talent, excellence and responsibility
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <video
          src="https://www.tum.de/fileadmin/w00bfo/www/Startseite/tum_startseite_header_010922.mp4"
          alt="video"
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          playsinline="playsinline"
          className=""
        ></video>
      </div>
    </div>
  );
};

export default Hero;
