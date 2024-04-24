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
        <ScrollLink linkName="FAQs" location="#faq" />
        <ScrollLink linkName="rsvp" location="#rsvp" />
        <PageLink linkName="their story" location="/about" />
        <PageLink linkName="photo gallery" location="/photos" />
        <ScrollLink linkName="registry" location="#registry" />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBarScroll
