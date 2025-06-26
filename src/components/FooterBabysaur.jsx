import babysaur from "../assets/babysaur/babysaur.png"
import NavigationScrollLogo from "../utilities/NavigationScrollLogo"
import { Link } from "react-router-dom"

const FooterBabysaur = () => {
  return (
    <>
      <hr className="m-4 text-lightGray" />

      <div className="flex justify-between">
        <div className="my-2 ml-4 text-xs text-gray md:text-base lg:ml-8">
          <p>Crafted with 🩵 by Auntie Sarah &copy; 2025</p>
          <p>
            Issues, questions, feedback?
            <Link to="/contact" className="pl-1">
              Contact me
            </Link>
          </p>
        </div>
        <NavigationScrollLogo
          source={babysaur}
          className="mb-4 mr-4 h-12 hover:cursor-pointer md:h-20"
          altText="graphic of a blue baby dinosaur hatching from a speckled egg"
        />
      </div>
    </>
  )
}

export default FooterBabysaur
