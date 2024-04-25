import { Link } from "react-router-dom"
import leafLogo from "../assets/graphics/leaf-decoration.png"

const NavigationPageLogo = () => {
  return (
    <Link to="/">
      <img
        src={leafLogo}
        className="mr-2 w-20 hover:cursor-pointer"
        alt="Kayti and Jake wedding logo"
      />
    </Link>
  )
}

export default NavigationPageLogo
