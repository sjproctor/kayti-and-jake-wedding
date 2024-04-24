import { Link } from "react-router-dom"
import babyDog from "../assets/baby.png"

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <div className="ml-8 flex justify-between">
      <div className="mt-4 text-gray">
        <p>
          Created with 💜 by the sister of the bride | Sarah Proctor &copy; 2024
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
        className="mb-1 h-28 hover:cursor-pointer"
        alt="Baby Dog with yellow and red flowers"
        onClick={handleScrollToTop}
      />
    </div>
  )
}

export default Footer
