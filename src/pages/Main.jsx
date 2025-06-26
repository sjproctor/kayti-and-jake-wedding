import Footer from "../components/Footer"
import NavigationBarScroll from "../components/NavigationBarScroll"
import AboveTheFold from "../sections/wedding/AboveTheFold"
import Celebration from "../sections/wedding/Celebration"
import FAQ from "../sections/wedding/FAQ"
import NoteFromSarah from "../sections/wedding/NoteFromSarah"
import PartyTime from "../sections/wedding/PartyTime"
import Reservation from "../sections/wedding/Reservation"
import Welcome from "../sections/wedding/Welcome"
import { Link } from "react-router-dom"

const Main = () => {
  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="p-2 text-center bg-lightGold">
          <span>🦕&nbsp;&nbsp;</span>
          <Link to="/babysaur">Click here</Link> for baby shower info!
        </div>
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
