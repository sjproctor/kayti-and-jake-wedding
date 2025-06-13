import Footer from "../components/Footer"
import NavigationBarScroll from "../components/NavigationBarScroll"
import AboveTheFold from "../sections/wedding/AboveTheFold"
import Celebration from "../sections/wedding/Celebration"
import FAQ from "../sections/wedding/FAQ"
import NoteFromSarah from "../sections/wedding/NoteFromSarah"
import PartyTime from "../sections/wedding/PartyTime"
import Reservation from "../sections/wedding/Reservation"
import Welcome from "../sections/wedding/Welcome"

const Main = () => {
  return (
    <>
      <div className="sticky top-0 z-10">
        <NavigationBarScroll />
      </div>
      <AboveTheFold />
      <Welcome />
      <NoteFromSarah />
      <Celebration />
      <FAQ />
      <Reservation />
      <PartyTime />
      <Footer />
    </>
  )
}

export default Main
