import babyClouds from "../../assets/babysaur/baby-clouds.png"
import babyRainbow from "../../assets/babysaur/baby-rainbow.png"

const AboveTheFold = () => {
  return (
    <div
      style={{ backgroundImage: `url(${babyClouds})` }}
      className="bg-cover py-16"
    >
      <h1 className="text-center font-marykate text-5xl md:text-7xl">
        Baby Dahlgren
      </h1>
      <div className="standardPageLayout">
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
          excited. We hope you can join us to celebrate the new addition to our
          family.
        </p>
        <DateDisplay />
      </div>
    </div>
  )
}

const DateDisplay = () => (
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
    <div className="h-16 border-l-2 border-solid border-babysaurDarkBlue lg:h-24"></div>
    <div className="m-1 w-32 lg:m-6">
      <p>2 - 5 pm</p>
    </div>
  </div>
)

export default AboveTheFold
