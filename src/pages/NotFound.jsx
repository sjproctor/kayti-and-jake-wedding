import { Link } from "react-router-dom"
import NavigationBarPage from "../components/NavigationBarPage"
import treeLogo from "../assets/graphics/tree-logo.png"

const NotFound = () => {
  return (
    <>
      <NavigationBarPage />
      <h2 className="text-center font-moontime text-7xl md:text-9xl">
        Not Found
      </h2>
      <div className="m-auto w-11/12 text-center md:w-1/2">
        <p className="gray-header-text">
          Ooops, looks like this walk in the woods went the wrong way.
        </p>
        <br />
        <p>
          <Link to="/">Click here </Link> to head back to the main page.
        </p>
        <br />
        <p>
          You can read more about Kayti and Jake by{" "}
          <Link to="/about">clicking here</Link>.
        </p>
        <br />
        <p>
          Something not working correctly? <Link to="/contact">Click here</Link>
          .
        </p>
        <br />
      </div>
      <div className="flex justify-center">
        <img
          src={treeLogo}
          className="m-8 w-28"
          alt="Kayti and Jake wedding logo"
        />
      </div>
    </>
  )
}

export default NotFound
