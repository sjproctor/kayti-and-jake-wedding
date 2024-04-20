import NavigationBarScroll from "../components/NavigationBarScroll"
import AboveTheFold from "../sections/AboveTheFold"
import Celebration from "../sections/Celebration"
import Contact from "../sections/Contact"
import HelpfulInfo from "../sections/HelpfulInfo"
import NoteFromSarah from "../sections/NoteFromSarah"
import OurStory from "../sections/OurStory"
import PhotoGallery from "../sections/PhotoGallery"
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
      <HelpfulInfo />
      <OurStory />
      <PhotoGallery />
      <Contact />
      <hr className="m-8" />
    </>
  )
}

export default Main
