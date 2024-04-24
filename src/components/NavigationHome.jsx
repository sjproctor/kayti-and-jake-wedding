import NavigationLogo from "./NavigationScrollLogo"
import { Navbar } from "flowbite-react"
import PageLink from "./PageLink"

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
