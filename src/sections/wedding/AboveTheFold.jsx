import hero from "../../assets/hero.jpeg"
import heroMobile from "../../assets/hero-mobile.jpeg"

const AboveTheFold = () => {
  return (
    <div className="h-96 text-center sm:h-[32rem] md:h-[20rem] lg:h-[21rem] xl:h-[32rem] 2xl:h-[40rem]">
      <picture>
        <source media="(min-width:500px)" srcSet={hero} />
        <img
          src={heroMobile}
          alt="Kayti and Jake sitting outdoors in the foreground of a mountain with wispy clouds in the sky"
          className="h-[calc(w-screen * 2)] w-screen opacity-50"
        />
      </picture>
      <div className="absolute left-0 right-0 top-20 md:top-12">
        <h1 className="font-moontime text-6xl sm:text-7xl md:text-9xl">
          Kayti and Jake
        </h1>
      </div>
    </div>
  )
}

export default AboveTheFold
