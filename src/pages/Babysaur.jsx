import { useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import FooterBabysaur from "../components/FooterBabysaur"
import GoogleMap from "../components/GoogleMap"
import FormSubmissionAlert from "../utilities/forms/FormSubmissionAlert"
import SetFaviconAndTabTitle from "../utilities/SetFaviconAndTabTitle"
import clouds from "../assets/babysaur/clouds.png"
import rainbow from "../assets/babysaur/rainbow.png"

const favicon =
  "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦕</text></svg>"

const Babysaur = () => {
  const [submissionAlert, setSubmissionAlert] = useState({
    visibility: "hidden",
    header: "",
    body: ""
  })
  const [willBeAttending, setWillBeAttending] = useState("hidden")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    const { name, email, status, guests, message } = data
    let finalMessage = message
    if (message.length === 0) {
      finalMessage = "No message included"
    }
    let finalGuests = guests
    if (status === "Will not be attending") {
      finalGuests = 0
    }
    try {
      const templateParams = {
        name,
        email,
        status,
        guests: finalGuests,
        message: finalMessage
      }
      await emailjs.send(
        "service_izpa2uz",
        "template_6y4jg0s",
        templateParams,
        "opwB1tSgZJHytVdTC"
        // RSVP template for kj.partytime
      )
      setSubmissionAlert({
        visibility: "",
        header: "Success!",
        body: "Thank you for your RSVP."
      })
    } catch (e) {
      console.log(e)
      setSubmissionAlert({
        visibility: "",
        header: "Oops!",
        body: "Something went wrong."
      })
    } finally {
      reset()
    }
  }

  return (
    <div className="font-montserratRegular">
      <SetFaviconAndTabTitle tabTitle="KJ + Babysaur" favicon={favicon} />
      <div className="flex justify-center">
        <img
          src={rainbow}
          className="m-4 h-auto w-40"
          alt="hand-drawn rainbow"
        />
      </div>
      <div
        style={{ backgroundImage: `url(${clouds})`, backgroundSize: "cover" }}
        className="text-center"
      >
        <h1 className="font-marykate m-4 text-center text-4xl md:text-6xl">
          Baby Dahlgren
        </h1>
        <div className="m-auto w-11/12 pb-12 text-center md:w-1/2">
          <h3 className="text-lg font-extrabold">
            Kayti & Jake are prego, y'all!
          </h3>
          <br />
          <p>
            Baby Boy is due mid-October and his parents-to-be could not be more
            excited. We hope you can join us in celebrating the new addition to
            our family.
          </p>
          <br />
          <p>
            As is on brand for Team KJ, this will be a casual, coed drop-in kind
            of gathering. We'll be hanging out in the backyard with food,
            drinks, and yard games. Pop in as suits your schedule, bring the
            family, stay as long as you would like.
          </p>
        </div>
      </div>
      <div className="m-auto w-11/12 pt-8 text-center md:w-1/2">
        <h2 className="gray-header-text-babysaur">Party Agenda</h2>
        <p>Check back soon for agenda, more details, and registry!</p>
        <br />
      </div>
      <div className="bg-cream">
        <div className="m-auto w-11/12 py-8 text-center md:w-1/2">
          <h2 className="gray-header-text-babysaur">RSVP</h2>
          <p>
            Drop a quick RSVP so we can get the right amount of food and drinks.
          </p>
          <br />
          <FormSubmissionAlert
            submissionBackgroundColor="bg-babyBlue"
            submissionAlert={submissionAlert}
            setSubmissionAlert={setSubmissionAlert}
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white md:px-16 px-4 md:py-8 py-2"
          >
            <fieldset className="group">
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                className="bg-transparent focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 px-0 py-2.5 text-sm text-gray focus:outline-none focus:ring-0"
                {...register("name", {
                  required: true
                })}
              />
              <div className="text-left">
                <label htmlFor="name" className="text-sm text-gray">
                  Your name(s) *
                </label>
              </div>
              {errors.name && errors.name.type === "required" && (
                <p className="text-left text-sm text-error">
                  Please enter your name
                </p>
              )}
            </fieldset>
            <fieldset className="group">
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                className="bg-transparent focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 px-0 py-2.5 text-sm text-gray focus:outline-none focus:ring-0"
                {...register("email", {
                  required: true
                })}
              />
              <div className="text-left">
                <label htmlFor="email" className="text-sm text-gray">
                  Your preferred email *
                </label>
              </div>
              {errors.email && errors.email.type === "required" && (
                <p className="text-left text-sm text-error">
                  Please enter your preferred email
                </p>
              )}
            </fieldset>
            <br />
            <fieldset className="group">
              <div className="flex justify-start">
                <input
                  id="yes"
                  type="radio"
                  name="status"
                  value="Will be attending"
                  className="mr-2 h-4"
                  onClick={() => setWillBeAttending("")}
                  {...register("status", {
                    required: true
                  })}
                />
                <label htmlFor="yes" className="text-sm text-gray">
                  Yes, count me/us in
                </label>
              </div>
              <div className="flex justify-start">
                <input
                  id="no"
                  type="radio"
                  name="status"
                  value="Will not be attending"
                  className="mr-2 h-4"
                  onClick={() => setWillBeAttending("hidden")}
                  {...register("status", {
                    required: true
                  })}
                />
                <label htmlFor="no" className="text-sm text-gray">
                  No, sending well wishes
                </label>
              </div>
              {errors.status && errors.status.type === "required" && (
                <p className="text-left text-sm text-error">
                  Please select a response
                </p>
              )}
            </fieldset>
            <fieldset className={`group ${willBeAttending}`}>
              <input
                id="guests"
                type="number"
                name="guests"
                autoComplete="guests"
                className="bg-transparent focus:border-blue-600 peer block w-1/6 appearance-none border-0 border-b-2 px-0 py-2.5 text-center text-sm text-gray focus:outline-none focus:ring-0"
                {...register("guests")}
              />
              <div className="text-left">
                <label htmlFor="guests" className="text-sm text-gray">
                  Number of guests
                </label>
              </div>
            </fieldset>
            <fieldset className="group">
              <input
                type="text"
                name="message"
                id="message"
                autoComplete="message"
                className="bg-transparent focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 px-0 py-2.5 text-sm text-gray focus:outline-none focus:ring-0"
                {...register("message")}
              />
              <div className="text-left">
                <label htmlFor="message" className="text-sm text-gray">
                  Optional message for Kayti & Jake
                </label>
              </div>
            </fieldset>
            <div className="text-center">
              <button
                className="mt-10 rounded-md border bg-cream px-4 py-2 text-gray shadow-2xl hover:bg-white active:translate-y-0.5"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <br />
      <div className="text-center">
        <h3 className="text-lg font-extrabold">The Dahlgren House</h3>
        <p>2707 Malibu Road</p>
        <p>Boise, Idaho 83705</p>
      </div>
      <br />
      <div className="w-screen">
        <GoogleMap />
      </div>
      <FooterBabysaur />
    </div>
  )
}

export default Babysaur
