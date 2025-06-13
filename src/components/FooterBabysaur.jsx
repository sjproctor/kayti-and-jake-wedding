import { Link } from "react-router-dom"
import babysaur from "../assets/baby-pics/babysaur.png"

const FooterBabysaur = () => {
  return (
    <>
      <hr className="mx-4 mb-4 text-lightGray" />

      <div className="flex justify-between">
        <div className="mx-4 my-2 ml-8 text-xs text-gray md:text-base">
          <p>Crafted with 🩶 by Auntie Sarah</p>
          <p>Sarah Proctor &copy; 2025</p>
          <p>
            Issues, questions, feedback?
            <Link to="/contact" className="pl-1">
              Contact me
            </Link>
          </p>
        </div>
        <img
          src={babysaur}
          className="mb-4 h-20 hover:cursor-pointer md:h-28"
          alt="graphic of a blue baby dinosaur hatching from a speckled egg"
        />
      </div>
    </>
  )
}

export default FooterBabysaur
