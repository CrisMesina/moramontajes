

export const Hero = () => {
  return (
    <>
     <div className="">
        <div className="flex sm:w-96 phone:w-[600px] md:w-screen lg:md-screen w-full phone-sm:min-w-max">
          <video loop muted autoPlay disablePictureInPicture playsInline className="absolute h-[500px] w-full md:w-full sm:w-[700px] lg:w-full phone:w-[630px] phone-sm:w-[1270px] mt-24 object-cover p-2 rounded-3xl -z-10">
            <source src="/bg-Hero.mp4" type="video/mp4"/>
          </video>  
        </div>
        <div className="mb-72">
          <div className="w-full">
            <h1 id="hero-title" className="font-extrabold text-4xl p-4 drop-shadow flex mt-52 w-full text-center md:font-medium justify-center">
              Mora Montajes
            </h1>
            <p className=" text-blue-500 text-center font-extrabold text-3xl ">Ingenieria y Montajes</p>
          </div>
        </div>
     </div>
    </>
  )
}
