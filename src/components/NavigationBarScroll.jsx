import NavigationScrollLogo from "./NavigationScrollLogo"
import PageLink from "./PageLink"
import ScrollLink from "./ScrollLink"
import { Navbar } from "flowbite-react"

const NavigationBarScroll = () => {
  return (
    <Navbar fluid>
      <NavigationScrollLogo />
      <div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <ScrollLink linkName="celebration" location="#celebration" />
        <ScrollLink linkName="helpful information" location="#info" />
        <ScrollLink linkName="our story" location="#our-story" />
        <ScrollLink linkName="photo gallery" location="#photos" />
        <ScrollLink linkName="contact us" location="#contact" />
        <PageLink linkName="rsvp" location="/rsvp" />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBarScroll
