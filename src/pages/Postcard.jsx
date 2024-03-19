import AnchorLink from "react-anchor-link-smooth-scroll"
import postcardFront from "../assets/postcard-front.png"
import postcardBack from "../assets/postcard-back.png"

const Postcard = () => {
  return (
    <div className="m-4" id="postcard">
      <AnchorLink smooth href="#home" className="hover:cursor-pointer">
        <h2 className="m-3 text-center font-moontime text-6xl">Postcard</h2>
      </AnchorLink>
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        Here is the digital version of our postcard mailer.
      </p>
      <div className="lg:mx-auto lg:w-1/2">
        <img
          src={postcardFront}
          alt="Front of Kayti and Jake's postcard invitation"
          className="mb-5 border-2"
        />
        <img
          src={postcardBack}
          alt="Back of Kayti and Jake's postcard invitation"
          className="border-2"
        />
      </div>
    </div>
  )
}

export default Postcard
