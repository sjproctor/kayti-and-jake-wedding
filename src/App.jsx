import { Routes, Route } from "react-router-dom"
import Ceremony from "./pages/Ceremony"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Main from "./pages/Main"
import NotFound from "./pages/NotFound"
import PhotoGallery from "./pages/PhotoGallery"
import Postcard from "./pages/Postcard"
import Registry from "./pages/Registry"
import TheirStory from "./pages/TheirStory"
import Travel from "./pages/Travel"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/postcard" element={<Postcard />} />
        <Route path="/about" element={<TheirStory />} />
        <Route path="/photos" element={<PhotoGallery />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ceremony" element={<Ceremony />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
