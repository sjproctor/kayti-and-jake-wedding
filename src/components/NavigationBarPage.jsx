import NavigationPageLogo from "./NavigationPageLogo"
import PageLink from "./PageLink"
import { Navbar } from "flowbite-react"

const NavigationBarPage = () => {
  return (
    <div className="sticky top-0 z-10">
      <Navbar fluid>
        <NavigationPageLogo />
        <div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <PageLink linkName="home" location="/" />
          <PageLink linkName="travel" location="/travel" />
          <PageLink linkName="contact" location="/contact" />
          <PageLink linkName="ceremony" location="/ceremony" />
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBarPage
