import NavigationLogo from "./NavigationScrollLogo"
import PageLink from "./PageLink"
import { Navbar } from "flowbite-react"

const NavigationHome = () => {
  return (
    <div className="sticky top-0 z-10">
      <Navbar fluid>
        <NavigationLogo />
        <PageLink linkName="home" location="/" />
      </Navbar>
    </div>
  )
}

export default NavigationHome
