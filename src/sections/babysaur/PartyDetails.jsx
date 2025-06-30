import babyDotIcon from "../../assets/babysaur/baby-dot-icon.png"
import babyPennantBanner from "../../assets/babysaur/baby-pennant-banner.png"

const PartyDetails = () => {
  return (
    <div className="py-4 lg:pb-12">
      <div className="relative my-8 flex justify-center">
        <img
          src={babyPennantBanner}
          alt="pennant banner graphic"
          className="md:w-2/3"
        />
        <h2 className="babysaur-header-lg absolute inset-0 flex items-center justify-center pb-24">
          Party Details
        </h2>
      </div>
      <div className="standardPageLayout">
        <p>
          The shower will be a coed, family friendly hangout. Everyone is
          welcome!
        </p>
        <DotIcon />
        <p>
          We will be out in Kayti & Jake&apos;s beautiful backyard enjoying
          food, drinks, and playing yard games.
        </p>
        <DotIcon rotation="rotate-90" />
        <p>
          We know life is busy! You are welcome to stay the whole time or pop in
          for a quick hello.
        </p>
        <DotIcon rotation="rotate-90" />
        <p>
          2707 Malibu Road <span className="text-xl">|</span> Boise, Idaho 83705
        </p>
      </div>
      <br />
    </div>
  )
}

const DotIcon = ({ rotation = "" }) => (
  <div className="flex justify-center">
    <img src={babyDotIcon} alt="dot icon" className={`m-4 h-4 ${rotation}`} />
  </div>
)

export default PartyDetails
