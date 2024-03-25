import { useState } from "react"
import NavigationPages from "../components/NavigationHome"
import { Link } from "react-router-dom"

const Reservation = () => {
  const [yesStatus, setYesStatus] = useState("hidden")
  const [noStatus, setNoStatus] = useState("hidden")

  const submit = () => {
    alert("Your response has been submitted!")
  }
  const handleStatus = (status) => {
    setTimeout(() => {
      if (status === "yes") {
        setYesStatus("")
        setNoStatus("hidden")
      } else if (status === "no") {
        setYesStatus("hidden")
        setNoStatus("")
      }
    }, 100)
  }
  return (
    <>
      <div className="hover:cursor-pointer">
        <NavigationPages />
      </div>
      <div className="m-4" id="rsvp">
        <Link to="/" className="hover:cursor-pointer">
          <h2 className="m-3 text-center font-moontime text-6xl">RSVP</h2>
        </Link>
        <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
          We are excited to celebrate with you! However, we know life can be
          busy and we don&apos;t want anyone to feel obligated to attend if it
          creates a hardship in any way. We feel lucky to have such wonderful
          family and friends, all we ask for is your well wishes.
        </p>
        <br />
        <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
          In order for us to plan properly, please fill out the form below to
          let us know if you are able to attend. Lorem ipsum children and pets.
        </p>
        <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">* required fields</p>
        <form className="w-full md:mx-10 lg:mx-40">
          <div className="my-2" id="name">
            <label htmlFor="name">Your name(s)*</label>
            <br />
            <input
              type="text"
              name="name"
              className="w-4/5 rounded-lg md:w-1/2 lg:w-1/4"
            />
          </div>
          <div className="my-2" id="email">
            <label htmlFor="email">Your contact email*</label>
            <br />
            <input
              type="email"
              name="email"
              className="w-4/5 rounded-lg md:w-1/2 lg:w-1/4"
            />
          </div>
          <div className="my-2">
            <div>
              <p>Will you attend?*</p>
            </div>
            <div>
              <input
                type="radio"
                name="rsvp"
                className="mr-2 rounded-lg"
                onClick={() => handleStatus("yes")}
              />
              <label htmlFor="yes">Yes, I/we will be there.</label>
              <br />
              <input
                type="radio"
                name="rsvp"
                className="mr-2 rounded-lg"
                onClick={() => handleStatus("no")}
              />
              <label htmlFor="no">No, sending well wishes and regrets.</label>
            </div>
          </div>
          <div id="yes" className={yesStatus}>
            <br />
            <p>Yay we are excited to see you!</p>
            <div className="my-2" id="guest">
              <input
                type="number"
                name="number"
                min="1"
                max="10"
                className="mr-2 w-10 rounded-lg pl-3"
              />
              <label htmlFor="number">Number in your party*</label>
            </div>
            <div className="my-2" id="yes-message">
              <textarea
                name="message"
                className="w-full resize-x rounded-lg px-4 py-3 md:w-3/4 lg:w-1/2"
                placeholder="Include an optional message with your RSVP..."
                rows="4"
              ></textarea>
            </div>
            <div className="text-center md:text-left">
              <button
                className="m-2 rounded-full border px-4 py-2 shadow-2xl hover:text-greenGold"
                onClick={submit}
              >
                Submit RSVP
              </button>
            </div>
          </div>
          <div id="no" className={noStatus}>
            <div className="my-2" id="no-message">
              <br />
              <p>Thanks for letting us know!</p>
              <textarea
                name="message"
                className="w-full resize-x rounded-lg px-4 py-3 md:w-3/4 lg:w-1/2"
                placeholder="Include an optional message with your regrets..."
                rows="4"
                cols="27"
              ></textarea>
            </div>
            <div className="text-center md:text-left">
              <button
                className="m-2 rounded-full border px-4 py-2 shadow-2xl hover:text-greenGold"
                onClick={submit}
              >
                Submit Regrets
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Reservation
