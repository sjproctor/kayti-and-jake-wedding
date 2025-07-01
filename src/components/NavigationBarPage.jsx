import NavigationPageLogo from "./NavigationPageLogo"
import PageLink from "../utilities/PageLink"
import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"

const NavigationBarPage = () => {
  return (
    <div className="sticky top-0 z-10">
      <div className="bg-lightGold p-2 text-center">
        <span>🦕&nbsp;&nbsp;</span>
        <Link to="/babysaur">Click here</Link> for baby shower info!
      </div>
      <Navbar fluid>
        <NavigationPageLogo />
        <div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <PageLink linkName="home" location="/" />
          <PageLink linkName="ceremony" location="/ceremony" />
          <PageLink linkName="photo gallery" location="/photos" />
          <PageLink linkName="their story" location="/about" />
          <PageLink linkName="travel" location="/travel" />
          <PageLink linkName="registry" location="/registry" />
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBarPage
