import PhotoWithText from "../components/PhotoWithText"
import belize from "../assets/belize.jpeg"
import flowerLogo from "../assets/graphics/flower-logo.png"

const HelpfulInfo = () => {
  return (
    <div id="info" className="text-center">
      <PhotoWithText
        fullScreen={belize}
        mobile={belize}
        altText="Kayti and Jake in the back of a golf cart in Belize"
        heading="Helpful Information"
      />
      <div className="py-8">
        <h3 className="text-lg font-extrabold">Question</h3>
        <p>Answer</p>
        <h3 className="text-lg font-extrabold">Question</h3>
        <p>Answer</p>
        <h3 className="text-lg font-extrabold">Question</h3>
        <p>Answer</p>
        <h3 className="text-lg font-extrabold">Question</h3>
        <p>Answer</p>
        <h3 className="text-lg font-extrabold">Question</h3>
        <p>Answer</p>
        <h3 className="text-lg font-extrabold">Question</h3>
        <p>Answer</p>
      </div>
      <div className="flex justify-center">
        <img
          src={flowerLogo}
          className="m-8 w-28"
          alt="Kayti and Jake wedding logo"
        />
      </div>
    </div>
  )
}

export default HelpfulInfo
