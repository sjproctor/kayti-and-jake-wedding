import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import Celebration from "./pages/Celebration"
import Ceremony from "./pages/Ceremony"
import Contact from "./pages/Contact"
import Landing from "./pages/Landing"
import OurStory from "./pages/OurStory"
import Photos from "./pages/Photos"
import Postcard from "./pages/Postcard"

const App = () => {
  return (
    <>
      <div className="hover:cursor-pointer sm:flex">
        <Navigation />
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
      <Postcard />
      <hr className="m-8" />
      <div className="flex justify-center">
        <Footer />
      </div>
    </>
  )
}

export default App
