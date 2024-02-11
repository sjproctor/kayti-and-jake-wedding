import { HashLink } from "@xzar90/react-router-hash-link"
import goth from "../assets/goth.jpeg"
import bolo from "../assets/bolo.jpeg"

const Photos = () => {
  return (
    <div className="m-4" id="photos">
      <HashLink smooth to="#" className="hover:cursor-pointer">
        <h2 className="font-moontime m-3 text-6xl text-center">Photos</h2>
      </HashLink>
      <div className="lg:flex">
        <img
          src={goth}
          alt="Jake and Kayti in goth Halloween costumes"
          className="rounded-full w-64 shadow-lg dark:shadow-black/30 m-5 mx-auto"
        />
        <img
          src={bolo}
          alt="Jake in a bolo tie and Kayti in a green dress"
          className="rounded-full w-64 shadow-lg dark:shadow-black/30 m-5 mx-auto"
        />
      </div>
    </div>
  )
}

export default Photos
