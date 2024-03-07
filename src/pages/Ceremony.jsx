import AnchorLink from "react-anchor-link-smooth-scroll"

const Ceremony = () => {
  return (
    <div className="m-4" id="ceremony">
      <AnchorLink smooth href="#home" className="hover:cursor-pointer">
        <h2 className="m-3 text-center font-moontime text-6xl">Ceremony</h2>
      </AnchorLink>
      <p className="uppercase md:mx-10 lg:mx-40 lg:max-w-5xl">
        Kayti and Jake will exchange vows in a small ceremony this June in the
        mountains near Crouch, Idaho. They will be joined by their immediate
        family, long-time best friends, and many helpful dogs.
      </p>
      <p className="uppercase md:mx-10 lg:mx-40 lg:max-w-5xl">
        [WIP] Photos from the ceremony will be posted on this site. You can also
        follow Kayti and Jake on socials and search for the hashtag #lorem-ipsum
        for more content.
      </p>
    </div>
  )
}

export default Ceremony
