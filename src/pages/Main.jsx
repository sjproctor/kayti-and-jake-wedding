import NavigationMain from "../components/NavigationMain"
import Celebration from "../sections/Celebration"
import Ceremony from "../sections/Ceremony"
import Contact from "../sections/Contact"
import Landing from "../sections/Hero"
import OurStory from "../sections/OurStory"
import Photos from "../sections/Photos"

const Main = () => {
  return (
    <>
      <div className="hover:cursor-pointer">
        <NavigationMain />
      </div>
      <Landing />
      <hr className="m-8" />
      <Celebration />
      <hr className="m-8" />
      <OurStory />
      <hr className="m-8" />
      <Ceremony />
      <hr className="m-8" />
      <Contact />
      <hr className="m-8" />
      <Photos />
      <hr className="m-8" />
    </>
  )
}

export default Main
