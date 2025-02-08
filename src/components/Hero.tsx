export const Hero = () => {
  return (
    <div className="relative w-full phone-sm:w-100 phone-md:w-[500px] phone-lg:w-[600px] sm:w-full md:w-full mt-16 overflow-hidden">
      <div className="w-full aspect-video">
        <video
          loop
          muted
          autoPlay
          disablePictureInPicture
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/bg-Hero.webm" type="video/webm"/>
          <source src="/bg-Hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="absolute inset-0 flex flex-col justify-center items-center z-10 
                      pt-12 mb-10"
      >
        {/* EL RESPONSIVE DEL TAMAÑO DEL TEXTO ESTA REALIZADO EN INDEX.CSS */}
        <h1
          id="hero-title"
          className="font-extrabold text-white text-center drop-shadow-lg 
                     mb-1
                     text-2xl md:text-6xl "
        >
          Mora Montajes
        </h1>
        <p
          className="text-blue-500 text-center font-extrabold drop-shadow-lg
                      text-sm md:text-2xl"
        >
          Ingenieria y Montajes
        </p>
      </div>
    </div>
  )
}

