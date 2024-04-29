import hero from "../assets/hero.jpeg"
import heroMobile from "../assets/hero-mobile.jpeg"

const AboveTheFold = () => {
  return (
    <>
      {/* full screen view */}
      <div className="hidden text-center md:contents">
        <img
          src={hero}
          alt="Kayti and Jake sitting outdoors in the foreground of a mountain with wispy clouds in the sky"
          className="h-auto w-max opacity-50"
        />
        <div className="absolute left-0 right-0 top-12">
          <h1 className="font-moontime md:text-9xl">Kayti and Jake</h1>
        </div>
      </div>
      {/* mobile view */}
      <div className="text-center md:hidden">
        <img
          src={heroMobile}
          alt="Kayti and Jake sitting outdoors in the foreground of a mountain with wispy clouds in the sky"
          className="h-auto w-max opacity-50"
        />
        <div className="absolute left-0 right-0 top-20">
          <h1 className="font-moontime text-7xl sm:text-9xl">Kayti and Jake</h1>
        </div>
      </div>
    </>
  )
}

export default AboveTheFold
