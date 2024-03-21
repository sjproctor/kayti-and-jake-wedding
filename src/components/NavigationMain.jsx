import HeaderLogo from "./HeaderLogo"
import PageLink from "./PageLink"
import ScrollLink from "./ScrollLink"
import { Navbar } from "flowbite-react"

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
        <PageLink linkName="Photo Gallery" location="/photos" />
        <PageLink linkName="Postcard Mailer" location="/postcard" />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationMain
