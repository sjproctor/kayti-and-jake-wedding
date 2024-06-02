import { Link } from "react-router-dom"
import babyDog from "../assets/pets/baby.png"

const Footer = () => {
  return (
    <>
      <hr className="mx-4 mb-4 text-lightGray" />

      <div className="flex justify-between">
        <div className="mx-4 my-2 ml-8 text-xs text-gray md:text-base">
          <p>Crafted with 🩶 by the sister of the bride</p>
          <p>Sarah Proctor &copy; 2024</p>
          <p>
            Issues, questions, feedback?
            <Link to="/contact" className="pl-1">
              Contact me
            </Link>
          </p>
        </div>
        <Link to="/pets">
          <img
            src={babyDog}
            className="mb-4 h-20 hover:cursor-pointer md:h-28"
            alt="Baby Dog with her tongue hanging out"
          />
        </Link>
      </div>
    </>
  )
}

export default Footer
