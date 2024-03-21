import NavigationButton from "../components/NavigationButton"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Ceremony = () => {
  return (
    <div className="m-4" id="ceremony">
      <AnchorLink href="#home" className="hover:cursor-pointer">
        <h2 className="m-3 text-center font-moontime text-6xl">Ceremony</h2>
      </AnchorLink>
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        Kayti and Jake will exchange vows in a small ceremony this June in the
        mountains near Garden Valley, Idaho. They will be joined by their
        immediate family, long-time best friends, and many helpful dogs.
      </p>
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        [WIP] Photos from the ceremony will be posted on this site. You can also
        follow Kayti and Jake on socials and search for the hashtag #lorem-ipsum
        for more content.
      </p>
      <br />
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        You are invited to a gathering of friends and family to celebrate with
        Kayti and Jake on August 31, 2024.
      </p>
      <NavigationButton linkName="More Party Information" location="/party" />
    </div>
  )
}

export default Ceremony
