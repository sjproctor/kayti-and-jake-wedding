import HeaderLogo from "./HeaderLogo"
import { Link } from "react-router-dom"
import { Navbar } from "flowbite-react"

const NavigationHome = () => {
  return (
    <Navbar fluid rounded>
      <HeaderLogo />
      <Link
        to="/"
        className="border-gray-100 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent block py-2 pl-3 pr-4 hover:cursor-pointer md:border-0 md:p-0"
      >
        Home
      </Link>
    </Navbar>
  )
}

export default NavigationHome
