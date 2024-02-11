import { Navbar } from "flowbite-react"
import { HashLink } from "@xzar90/react-router-hash-link"
import logo from "../assets/logo.png"

const Navigation = () => {
  return (
    <Navbar fluid rounded>
      <HashLink smooth to="#" className="hover:cursor-pointer">
        <img
          src={logo}
          className="mr-3 h-8 sm:h-11"
          id="home"
          alt="Jake and Kayti wedding logo"
        />
      </HashLink>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <HashLink smooth to="#our-story" className="hover:cursor-pointer">
            Our Story
          </HashLink>
        </Navbar.Link>
        <Navbar.Link>
          <HashLink smooth to="#celebration" className="hover:cursor-pointer">
            Celebration
          </HashLink>
        </Navbar.Link>
        <Navbar.Link>
          <HashLink smooth to="#contact" className="hover:cursor-pointer">
            Contact Information
          </HashLink>
        </Navbar.Link>
        <Navbar.Link>
          <HashLink smooth to="#photos" className="hover:cursor-pointer">
            Photos
          </HashLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
