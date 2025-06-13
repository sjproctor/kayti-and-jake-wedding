import NavigationScrollLogo from "../utilities/NavigationScrollLogo"
import PageLink from "../utilities/PageLink"
import ScrollLink from "../utilities/ScrollLink"
import { Navbar } from "flowbite-react"
import leafLogo from "../assets/graphics/leaf-decoration.png"

const NavigationBarScroll = () => {
  return (
    <Navbar fluid>
      <NavigationScrollLogo source={leafLogo} className="mr-2 w-20 hover:cursor-pointer" altText="Kayti and Jake wedding logo" />
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
