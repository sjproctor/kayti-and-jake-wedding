import NavigationBarScroll from "../components/NavigationBarScroll"
import AboveTheFold from "../sections/AboveTheFold"
import Celebration from "../sections/Celebration"
import Contact from "../sections/Contact"
import HelpfulInfo from "../sections/HelpfulInfo"
import OurStory from "../sections/OurStory"
import PhotoGallery from "../sections/PhotoGallery"
import SummaryText from "../sections/SummaryText"

const Main = () => {
  return (
    <>
      <div className="sticky top-0 z-10">
        <NavigationBarScroll />
      </div>
      <AboveTheFold />
      <SummaryText />
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
