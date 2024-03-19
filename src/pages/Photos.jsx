import AnchorLink from "react-anchor-link-smooth-scroll"
import bolo from "../assets/bolo.jpeg"
import camping from "../assets/camping.jpeg"
import goth from "../assets/goth.jpeg"
import tableRock from "../assets/table-rock.jpeg"

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
      <div className="lg:flex">
        <img
          src={camping}
          alt="Kayti and Jake wearing overalls in the car on the way to a camping trip"
          className="dark:shadow-black/30 m-5 mx-auto w-64 rounded-full shadow-lg"
        />
        <img
          src={tableRock}
          alt="Kayti and Jake with Lola on the top of Table Rock in Boise"
          className="dark:shadow-black/30 m-5 mx-auto w-64 rounded-full shadow-lg"
        />
      </div>
    </div>
  )
}

export default Photos
