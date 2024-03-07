import AnchorLink from "react-anchor-link-smooth-scroll"
import goth from "../assets/goth.jpeg"
import bolo from "../assets/bolo.jpeg"

const Photos = () => {
  return (
    <div className="m-4" id="photos">
      <AnchorLink smooth href="#home" className="hover:cursor-pointer">
        <h2 className="m-3 text-center font-moontime text-6xl">Photos</h2>
      </AnchorLink>
      <div className="lg:flex">
        <img
          src={goth}
          alt="Kayti and Jake in goth Halloween costumes"
          className="dark:shadow-black/30 m-5 mx-auto w-64 rounded-full shadow-lg"
        />
        <img
          src={bolo}
          alt="Jake in a bolo tie and Kayti in a green dress"
          className="dark:shadow-black/30 m-5 mx-auto w-64 rounded-full shadow-lg"
        />
      </div>
    </div>
  )
}

export default Photos
