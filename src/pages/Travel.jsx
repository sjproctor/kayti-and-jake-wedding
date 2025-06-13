import airplane from "../assets/airplane.jpeg"
import Footer from "../components/Footer"
import NavigationBarPage from "../components/NavigationBarPage"
import HotelDetails from "../sections/travel/HotelDetails"
import TravelDetails from "../sections/travel/TravelDetails"
import AdventureDetails from "../sections/travel/AdventureDetails"

const Travel = () => {
  return (
    <>
      <NavigationBarPage />
      <div className="relative h-44 text-center sm:h-[19rem] md:h-[25rem] lg:h-[30rem] xl:h-[36rem] 2xl:h-[48rem]">
        <img
          src={airplane}
          alt="Kayti and Jake wearing headphones on a plane"
          className="h-auto w-max opacity-50"
        />
        <div className="absolute left-0 right-0 top-1 md:top-7">
          <h2 className="font-moontime text-6xl md:text-9xl">Travel Info</h2>
        </div>
      </div>
      <div>
        <HotelDetails />
        <TravelDetails />
        <AdventureDetails />
      </div>
      <Footer />
    </>
  )
}

export default Travel
