import { Navbar } from "flowbite-react"
import HeaderLogo from "./HeaderLogo"
import PageLink from "./PageLink"
import ScrollLink from "./ScrollLink"

const NavigationMain = () => {
  return (
    <Navbar fluid rounded>
      <HeaderLogo />
      <div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <PageLink linkName="Party Information" location="/party" />
        <ScrollLink linkName="Our Story" location="#our-story" />
        <ScrollLink linkName="Ceremony" location="#ceremony" />
        <ScrollLink linkName="Contact Information" location="#contact" />
        <ScrollLink linkName="Photo Gallery" location="#photos" />
        <PageLink linkName="Postcard Mailer" location="/postcard" />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationMain
