import Landing from "./pages/Landing"
import Celebration from "./pages/Celebration"
import Contact from "./pages/Contact"
import OurStory from "./pages/OurStory"
import Photos from "./pages/Photos"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <div className="sm:flex hover:cursor-pointer">
        <Navigation />
      </div>
      <Landing />
      <hr className="m-8" />
      <OurStory />
      <hr className="m-8" />
      <Celebration />
      <hr className="m-8" />
      <Contact />
      <hr className="m-8" />
      <Photos />
      <hr className="m-8" />
      <div className="flex justify-center">
        <Footer />
      </div>
    </>
  )
}

export default App
