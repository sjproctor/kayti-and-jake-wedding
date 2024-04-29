import NavigationBarPage from "../components/NavigationBarPage"
import marryMe from "../assets/marry-me.jpeg"
import treeLogo from "../assets/graphics/tree-logo.png"

const Ceremony = () => {
  return (
    <div id="ceremony">
      <NavigationBarPage />
      <img
        src={marryMe}
        alt="Kayti and Jake in Belize with palm fronds spelling out 'Marry Me'"
        className="h-auto w-max"
      />
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
