import { Link } from "react-router-dom"
import NavigationBarPage from "../components/NavigationBarPage"
import treeLogo from "../assets/graphics/tree-logo.png"
import lolaWrap from "../assets/pets/lola-wrap.png"
import toastDishwasher from "../assets/pets/toast-dishwasher.jpeg"

const Pets = () => {
  return (
    <>
      <NavigationBarPage />
      <h2 className="text-center font-moontime text-6xl md:text-9xl">
        Secret Pet Page
      </h2>
      <div className="m-auto w-11/12 text-center md:w-1/2">
        <p>Oh hey! You found the best page of all!</p>
        <p>
          If you got here by accident, Lola Moon will take you back to the main
          page.
        </p>
        <div className="flex justify-center">
          <Link to="/">
            <img src={lolaWrap} alt="Lola Moon" className="my-8 w-48" />
          </Link>
        </div>
        <div className="flex justify-center"></div>
        <p className="mb-4">
          Something not working correctly? <Link to="/contact">Click here</Link>
          .
        </p>
      </div>
      <div className="mb-4 flex justify-center">
        <div>
          <img
            src={toastDishwasher}
            alt="Toast kitty in the dishwasher"
            className="h-auto w-64"
            loading="lazy"
          />
          <p className="w-64 text-center text-xs text-gray">
            Toast kitty in the dishwasher.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={treeLogo}
          alt="Kayti and Jake wedding logo"
          className="mb-8 h-auto w-28"
        />
      </div>
    </>
  )
}

export default Pets
