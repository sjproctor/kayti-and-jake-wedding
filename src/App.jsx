import Footer from "./components/Footer"
import Main from "./pages/Main"
import PartyTime from "./pages/PartyTime"
import Postcard from "./pages/Postcard"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/party" element={<PartyTime />} />
        <Route path="/postcard" element={<Postcard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
