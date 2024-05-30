import NavigationBarPage from "../components/NavigationBarPage"
import marryMe from "../assets/marry-me.jpeg"
import license from "../assets/license.jpeg"
import treeLogo from "../assets/graphics/tree-logo.png"

const Ceremony = () => {
  return (
    <div>
      <NavigationBarPage />
      <div className="h-44 text-center sm:h-[22rem] md:h-[26rem] lg:h-[34rem] xl:h-[42rem] 2xl:h-[52rem]">
        <img
          src={marryMe}
          alt="Kayti and Jake in Belize with palm fronds spelling out 'Marry Me'"
          className="h-auto w-max"
        />
      </div>
      <h2 className="text-center font-moontime text-7xl md:text-9xl">
        Ceremony
      </h2>
      <div className="m-auto w-11/12 text-center md:w-1/2">
        <h3 className="text-lg font-extrabold">The Wedding</h3>
        <p>
          Kayti and Jake will be tying the knot in a small ceremony in early
          June.
        </p>
        <br />
        <h3 className="text-lg font-extrabold">Officiant Erik</h3>
        <p>
          Kayti and Jake asked long time friend and partner-in-law, Erik
          Engstrom, to perform the marriage ceremony. Erik was very honored to
          accept and was ordained by the top Google search result.
        </p>
        <br />
        <div className="flex justify-center">
          <img
            src={license}
            alt="Kayti and Jake holding their newly acquired marriage license"
            className="mb-8 h-auto w-72"
          />
        </div>
        <h3 className="text-lg font-extrabold">Updates Coming!</h3>
        <p>Check back in mid-June for details and photos from the ceremony.</p>
        <br />
      </div>
      <div className="flex justify-center">
        <img
          src={treeLogo}
          alt="Kayti and Jake wedding logo"
          className="mb-8 h-auto w-28"
        />
      </div>
    </div>
  )
}

export default Ceremony
