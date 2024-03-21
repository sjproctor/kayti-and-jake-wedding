import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const HeaderLogo = () => {
  return (
    <Link to="/" className="hover:cursor-pointer">
      <img
        src={logo}
        className="mr-2 w-16 md:w-16 lg:w-16"
        id="home"
        alt="Kayti and Jake wedding logo"
      />
    </Link>
  )
}

export default HeaderLogo
