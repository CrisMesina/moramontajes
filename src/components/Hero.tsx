

export const Hero = () => {
  return (
    <>
     <div>
        <div className="flex w-full">
          <video loop muted autoPlay disablePictureInPicture playsInline className="absolute w-full h-[500px] mt-24 object-cover p-2 rounded-3xl -z-10">
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
