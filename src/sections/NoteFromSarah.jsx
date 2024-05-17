import { Link } from "react-router-dom"
import flowerLogo from "../assets/graphics/flower-logo.png"
import sarah from "../assets/sarah.jpeg"

const NoteFromSarah = () => {
  return (
    <>
      <div className="mx-8 mt-8 md:ml-96 md:mt-12 md:flex md:w-1/2">
        <img
          src={sarah}
          alt="Kayti's fabulous older sister, Sarah wearing a bunny hat and blowing a bubble"
          className="float-left mx-2 h-36 w-auto"
        />
        <div>
          <p className="px-2 text-xs">
            When Kayti and Jake decided to get married they only wanted two
            things. They wanted to throw a party to celebrate with family and
            friends, and they wanted to make very few decisions about said
            party.
          </p>
          <p className="px-2 text-xs">
            So here we are. This website is full of decisions not made by Kayti
            and Jake for which they are very grateful.
          </p>
          <p className="px-2 text-xs">
            I will continue to add updates so please check back!
          </p>
          <p className="p-4 text-xs">
            --Made with love by <Link to="/contact">Sarah</Link>, Kayti&apos;s
            beautiful and wise older sister
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={flowerLogo}
          className="m-8 h-auto w-28"
          alt="Kayti and Jake wedding logo"
        />
      </div>
    </>
  )
}

export default NoteFromSarah
