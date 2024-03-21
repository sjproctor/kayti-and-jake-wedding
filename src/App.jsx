import Footer from "./components/Footer"
import Main from "./pages/Main"
import PartyTime from "./pages/PartyTime"
import PhotoGallery from "./pages/PhotoGallery"
import Postcard from "./pages/Postcard"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/party" element={<PartyTime />} />
        <Route path="/postcard" element={<Postcard />} />
        <Route path="/photos" element={<PhotoGallery />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
