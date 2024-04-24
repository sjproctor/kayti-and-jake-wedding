import { Link } from "react-router-dom"
import babyDog from "../assets/baby.png"

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <>
      <hr className="text-lightGray mx-4 mb-4" />

      <div className="flex justify-between">
        <div className="mx-4 my-2 ml-8 text-xs text-gray md:text-base">
          <p>
            Created with 💜 by the sister of the bride | Sarah Proctor &copy;
            2024
          </p>
          <p>
            Issues, questions, feedback?
            <Link to="/contact" className="px-1">
              Contact me.
            </Link>
          </p>
        </div>
        <img
          src={babyDog}
          className="mb-4 h-20 hover:cursor-pointer md:h-28"
          alt="Baby Dog with yellow and red flowers"
          onClick={handleScrollToTop}
        />
      </div>
    </>
  )
}

export default Footer
