import flowerLogo from "../assets/graphics/flower-logo.png"
import sarah from "../assets/sarah.jpeg"

const NoteFromSarah = () => {
  return (
    <>
      <div className="mx-8 mt-8 md:ml-96 md:mt-12 md:flex md:w-1/2">
        <img
          src={sarah}
          alt="Kayti's fabulous older sister, Sarah wearing a bunny hat and blowing a bubble"
          className="float-left mx-2 h-36 w-auto"
        />
        <div>
          <p className="px-2 text-xs">
            When Kayti and Jake started planning this whole wedding shindig they
            only wanted two things. They wanted to throw a party to celebrate
            with family and friends, and they wanted to make as few decisions as
            possible about said party.
          </p>
          <p className="px-2 text-xs">
            So here we are. This website is full of decisions not made by Kayti
            and Jake for which they are very grateful.
          </p>
          <p className="px-2 text-xs">
            I will continue to add updates as the event grows nearer. Please
            continue to check back!
          </p>
          <br />
          <p className="px-4 text-xs">
            --Made with love by Sarah, Kayti&apos;s beautiful and wise older
            sister
          </p>
        </div>
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

export default NoteFromSarah
