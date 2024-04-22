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
        <ScrollLink linkName="rsvp" location="#rsvp" />
        <PageLink linkName="their story" location="/our-story" />
        <PageLink linkName="photo gallery" location="/photos" />
        <ScrollLink linkName="registry" location="#registry" />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBarScroll
