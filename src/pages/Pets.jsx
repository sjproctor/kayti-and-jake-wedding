import { Link } from "react-router-dom"
import NavigationBarPage from "../components/NavigationBarPage"
import treeLogo from "../assets/graphics/tree-logo.png"
import lolaWrap from "../assets/pets/lola-wrap.png"

const Pets = () => {
  return (
    <>
      <NavigationBarPage />
      <h2 className="text-center font-moontime text-7xl md:text-9xl">
        Secret Pet Page
      </h2>
      <div className="m-auto w-11/12 text-center md:w-1/2">
        <p className="mb-2">
          <Link to="/">Click here</Link> to head back to the main page.
        </p>
        <div className="flex justify-center">
          <img src={lolaWrap} alt="Lola Moon" className="my-8 w-48" />
        </div>
        <p className="mb-4">
          Something not working correctly? <Link to="/contact">Click here</Link>
          .
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={treeLogo}
          alt="Kayti and Jake wedding logo"
          className="mb-8 w-28"
        />
      </div>
    </>
  )
}

export default Pets
