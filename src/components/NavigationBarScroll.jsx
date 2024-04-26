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
        <ScrollLink linkName="faqs" location="#faq" />
        <ScrollLink linkName="rsvp" location="#rsvp" />
        <ScrollLink linkName="party information" location="#party" />
        <PageLink linkName="their story" location="/about" />
        <PageLink linkName="travel" location="/travel" />
        <PageLink linkName="registry" location="/registry" />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBarScroll
