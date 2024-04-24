import NavigationBarScroll from "../components/NavigationBarScroll"
import AboveTheFold from "../sections/AboveTheFold"
import Celebration from "../sections/Celebration"
import FAQ from "../sections/FAQ"
import NoteFromSarah from "../sections/NoteFromSarah"
import PartyTime from "../sections/PartyTime"
import Reservation from "../sections/Reservation"
import Welcome from "../sections/Welcome"

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
    </>
  )
}

export default Main
