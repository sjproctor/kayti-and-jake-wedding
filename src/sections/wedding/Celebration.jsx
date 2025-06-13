import leafLogo from "../../assets/graphics/leaf-decoration.png"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Celebration = () => {
  return (
    <div className="bg-gray p-4 text-center text-white" id="celebration">
      <h2 className="font-moontime text-5xl md:text-9xl">Celebration</h2>
      <p className="md:mx-4">
        Please join us for fun, food, drinks, music, and general merriment.
      </p>
      <br />
      <div>
        <p className="font-alice text-2xl">Saturday, August 31, 2024</p>
        <p className="font-alice text-3xl uppercase">Boise, Idaho</p>
        <p className="font-alice text-2xl">Kayti and Jake&apos;s House</p>
        <p className="font-alice text-2xl">2707 Malibu Road | 83705</p>
      </div>
      <br />
      <div className="mx-4">
        <p>5 pm music and beverages | 6 pm dinner</p>
      </div>
      <br />
      <div className="mx-4">
        <AnchorLink href="#party" className="px-1">
          Click here for more information
        </AnchorLink>
      </div>
      <div className="flex justify-center py-4">
        <img
          src={leafLogo}
          className="mr-2 h-auto w-28"
          alt="Kayti and Jake wedding logo"
        />
      </div>
    </div>
  )
}

export default Celebration
