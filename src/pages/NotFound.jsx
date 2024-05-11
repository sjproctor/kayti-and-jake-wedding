import { Link } from "react-router-dom"
import NavigationBarPage from "../components/NavigationBarPage"
import treeLogo from "../assets/graphics/tree-logo.png"
import lola from "../assets/pets/lola.png"

const NotFound = () => {
  return (
    <>
      <NavigationBarPage />
      <h2 className="text-center font-moontime text-7xl md:text-9xl">
        Not Found
      </h2>
      <div className="m-auto w-11/12 text-center md:w-1/2">
        <p className="gray-header-text">Oops, you look lost.</p>
        <p className="font-extrabold">Lola Moon can help you!</p>
        <div className="flex justify-center">
          <Link to="/pets">
            <img src={lola} alt="Lola Moon" className="m-2 w-24" />
          </Link>
        </div>
        <p className="mb-2">
          <Link to="/">Click here</Link> to head back to the main page.
        </p>
        <p className="mb-2">
          You can read more about Kayti and Jake by&nbsp;
          <Link to="/about">clicking here</Link>.
        </p>
        <p className="mb-4">
          Something not working correctly? <Link to="/contact">Click here</Link>
          .
        </p>
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

export default NotFound
