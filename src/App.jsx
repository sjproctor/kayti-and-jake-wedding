import "./App.css"
import downtown from "./assets/downtown.jpeg"

const App = () => {
  return (
    <>
      <h1 className="text">Jake + Kayti</h1>
      <img
        src={downtown}
        alt="Jake and Kayti kissing under an artistic structure in downtown Boise"
        className="downtown"
      />
      <h3 className="text">06.08.2024</h3>
    </>
  )
}

export default App
