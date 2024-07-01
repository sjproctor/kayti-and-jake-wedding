import NavigationBarPage from "../components/NavigationBarPage"
import marryMe from "../assets/marry-me.jpeg"
import license from "../assets/license.jpeg"
import treeLogo from "../assets/graphics/tree-logo.png"
import cakeChampagne from "../assets/ceremony/cake-champagne.jpg"
import jakeErikKayti from "../assets/ceremony/jake-erik-kayti.jpg"
import justMarried from "../assets/ceremony/just-married.jpg"
import kaytiCarry from "../assets/ceremony/kayti-carry.jpg"
import wedding from "../assets/ceremony/wedding.png"

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
          Kayti and Jake tied the knot in a small ceremony on June 8th, 2024, on
          the banks of the Middle Fork Payette River in Garden Valley. They were
          joined by their immediate family and closest friends.
        </p>
        <br />
        <div className="flex justify-center">
          <img
            src={wedding}
            alt="Kayti and Jake getting married with officiant Erik"
            className="mb-8 h-auto w-72"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={kaytiCarry}
            alt="Kayti being held up by all the boys"
            className="mb-8 h-auto w-80"
          />
        </div>
        <p>
          Kayti and Jake asked long time friend and partner-in-law, Erik
          Engstrom, to perform the marriage ceremony. Erik was very honored to
          accept and was ordained by the top Google search result.
        </p>
        <br />
        <div className="flex justify-center">
          <img
            src={jakeErikKayti}
            alt="Selfie of Jake, Erik, and Kayti in front of the river"
            className="mb-8 h-auto w-72"
          />
        </div>
        <p>
          The bride and groom had a wonderful weekend and are thankful to their
          family and friends for creating exactly the wedding they envisioned.
        </p>
        <br />
        <div className="flex justify-center">
          <img
            src={cakeChampagne}
            alt="Cake, cupcakes, and champagne flute display adorned with wildflowers and taper candles"
            className="mb-8 h-auto w-80"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={justMarried}
            alt="Kayti and Jake leaning on a pop up trailer decorated with a sign reading 'Just Married' and painted tin cans strung from the bumper"
            className="mb-8 h-auto w-72"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={license}
            alt="Kayti and Jake holding their newly acquired marriage license"
            className="mb-8 h-auto w-72"
          />
        </div>
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
