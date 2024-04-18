import flowerLogo from "../assets/flower-logo.png"

const SummaryText = () => {
  return (
    <>
      <div className="mx-4 mt-4 md:mx-40 md:mt-16 md:max-w-5xl">
        <p className="text-gray text-center text-2xl uppercase md:text-4xl">
          Kayti and Jake are getting married!
        </p>
        <br />
        <p className="text-center md:text-lg">
          Hi, everyone! 👋 This is Sarah, Kayti&apos;s beautiful and wise older
          sister. When Kayti and Jake started planning this whole wedding
          shindig they only wanted two things. They wanted to throw a party to
          celebrate with family and friends, and they wanted to make as few
          decisions as possible about said party. So here we are. This website
          is full of decisions not made by Kayti and Jake for which they are
          very grateful.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={flowerLogo}
          className="m-8 w-28"
          alt="Kayti and Jake wedding logo"
        />
      </div>
    </>
  )
}

export default SummaryText
