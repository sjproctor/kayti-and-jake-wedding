import AnchorLink from "react-anchor-link-smooth-scroll"
import NavigationButton from "../components/NavigationButton"

const Celebration = () => {
  return (
    <div className="m-4" id="celebration">
      <AnchorLink href="#home" className="hover:cursor-pointer">
        <h2 className="m-3 text-center font-moontime text-6xl">
          Party Information
        </h2>
      </AnchorLink>
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        You are invited to a gathering of friends and family to celebrate with
        Kayti and Jake on August 31, 2024.
      </p>
      <NavigationButton linkName="More Information" location="/party" />
    </div>
  )
}

export default Celebration
