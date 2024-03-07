import { Navbar } from "flowbite-react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import logo from "../assets/logo.png"

const Navigation = () => {
  return (
    <Navbar fluid rounded>
      <AnchorLink smooth href="#home" className="hover:cursor-pointer">
        <img
          src={logo}
          className="mr-2 w-16 md:w-16 lg:w-16"
          id="home"
          alt="Kayti and Jake wedding logo"
        />
      </AnchorLink>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <AnchorLink
            smooth
            href="#celebration"
            className="hover:cursor-pointer"
          >
            Celebration
          </AnchorLink>
        </Navbar.Link>
        <Navbar.Link>
          <AnchorLink smooth href="#our-story" className="hover:cursor-pointer">
            Our Story
          </AnchorLink>
        </Navbar.Link>
        <Navbar.Link>
          <AnchorLink smooth href="#ceremony" className="hover:cursor-pointer">
            Ceremony
          </AnchorLink>
        </Navbar.Link>
        <Navbar.Link>
          <AnchorLink smooth href="#contact" className="hover:cursor-pointer">
            Contact Information
          </AnchorLink>
        </Navbar.Link>
        <Navbar.Link>
          <AnchorLink smooth href="#photos" className="hover:cursor-pointer">
            Photos
          </AnchorLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
