import FooterBabysaur from "../components/FooterBabysaur"
import GoogleMap from "../components/GoogleMap"
import RSVPForm from "../utilities/forms/RSVPForm"
import SetFaviconAndTabTitle from "../utilities/SetFaviconAndTabTitle"
import babyClouds from "../assets/babysaur/baby-clouds.png"
import babyDino from "../assets/babysaur/baby-dino.png"
import babyDotIcon from "../assets/babysaur/baby-dot-icon.png"
import babyPennantBanner from "../assets/babysaur/baby-pennant-banner.png"
import babyRainbow from "../assets/babysaur/baby-rainbow.png"
import babyStars from "../assets/babysaur/baby-stars.png"

const favicon =
  "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦕</text></svg>"

const Babysaur = () => {
  return (
    <div className="text-center font-montserratRegular text-babysaurDarkBlue">
      <SetFaviconAndTabTitle tabTitle="KJ + Babysaur" favicon={favicon} />
      <div
        style={{ backgroundImage: `url(${babyClouds})` }}
        className="bg-cover py-16"
      >
        <h1 className="font-marykate text-5xl md:text-7xl">Baby Dahlgren</h1>
        <div className="pageLayout">
          <div className="flex justify-center">
            <img
              src={babyRainbow}
              className="mb-8 w-1/3"
              alt="hand-drawn rainbow"
            />
          </div>
          <h3 className="font-marykate text-2xl font-extrabold md:text-3xl">
            Kayti & Jake are prego, y&apos;all!
          </h3>
          <p className="my-8">
            Baby Boy is due mid-October and his parents-to-be could not be more
            excited. We hope you can join us to celebrate the new addition to
            our family.
          </p>
          <div className="bg-babysaurPeach flex items-center justify-center lg:text-xl">
            <div className="m-1 w-32 lg:m-6">
              <p>Saturday</p>
            </div>
            <div className="h-16 border-r-2 border-solid border-babysaurDarkBlue lg:h-24"></div>
            <div className="m-7">
              <p>July</p>
              <p className="font-garamond text-3xl/none tracking-widest lg:text-6xl/none">
                26
              </p>
              <p>2025</p>
            </div>
            <div className="h-16 border-l-2 border-solid  border-babysaurDarkBlue lg:h-24"></div>
            <div className="m-1 w-32 lg:m-6">
              <p>2 - 5 pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 lg:pb-12">
        <div className="relative my-8 flex justify-center">
          <img
            src={babyPennantBanner}
            alt="pennant banner graphic"
            className="md:w-2/3"
          />
          <h2 className="gray-header-text-babysaur absolute inset-0 flex items-center justify-center pb-24">
            Party Details
          </h2>
        </div>
        <div className="pageLayout">
          <p>
            The shower will be a coed, family friendly hangout. Everyone is
            welcome!
          </p>
          <div className="flex justify-center">
            <img src={babyDotIcon} alt="dot icon" className="m-4 h-4" />
          </div>
          <p>
            We will be out in Kayti & Jake&apos;s beautiful backyard enjoying
            food, drinks, and playing yard games.
          </p>
          <div className="flex justify-center">
            <img
              src={babyDotIcon}
              alt="dot icon"
              className="m-4 h-4 rotate-90"
            />
          </div>
          <p>
            We know life is busy! You are welcome to stay the whole time or pop
            in for a quick hello.
          </p>
          <div className="flex justify-center">
            <img
              src={babyDotIcon}
              alt="dot icon"
              className="m-4 h-4 rotate-90"
            />
          </div>
          <p>2707 Malibu Road <span className="text-xl">|</span> Boise, Idaho 83705</p>
        </div>
        <br />
      </div>
      <div className="bg-cream">
        <div className="pageLayout p-4">
          <h2 className="gray-header-text-babysaur">RSVP</h2>
          <p>
            Please drop a quick RSVP so we can be sure to get the right amount
            of food and drinks.
          </p>
          <br />
          <RSVPForm />
          <br />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${babyStars})`
        }}
        className="bg-no-repeat text-center"
      >
        <div className="flex flex-wrap justify-center pt-20">
          <div className="bg-babysaurPeach m-4 w-96 p-8 md:p-12">
            <h3 className="gray-header-text-babysaur-small">Registry</h3>
            <p>
              Kayti & Jake are registered on&nbsp;
              <a href="https://my.babylist.com/kayti-dahlgren" target="_blank">
                Baby List
              </a>
              . Diapers are also much appreciated!
            </p>
          </div>
          <div className="bg-babysaurPeach m-4 w-96 p-8 md:p-12">
            <h3 className="gray-header-text-babysaur-small">
              Kayti & Jake Dahlgren
            </h3>
            <p>2707 Malibu Road</p>
            <p className="pb-2">Boise, Idaho 83705</p>
          </div>
        </div>
        <div className="flex justify-end">
          <img src={babyDino} alt="blue cartoon dino" className="m-4 h-28" />
        </div>
      </div>
      <div className="mb-12" id="googleMap">
        <GoogleMap />
      </div>
      <FooterBabysaur />
    </div>
  )
}

export default Babysaur
