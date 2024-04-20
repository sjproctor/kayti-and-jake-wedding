import belize from "../assets/belize.jpeg"
import flowerLogo from "../assets/graphics/flower-logo.png"

const HelpfulInfo = () => {
  return (
    <div id="info" className="text-center">
      <div className="relative text-center">
        <img
          src={belize}
          alt="Kayti and Jake in the back of a golf cart in Belize"
          className="opacity-50"
        />
        <div className="absolute left-0 right-0 top-4 md:top-12">
          <h1 className="font-moontime text-5xl md:text-9xl">
            Helpful Information
          </h1>
        </div>
      </div>
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
