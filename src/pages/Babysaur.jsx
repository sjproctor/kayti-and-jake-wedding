import { useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import FooterBabysaur from "../components/FooterBabysaur"
import GoogleMap from "../components/GoogleMap"
import FormSubmissionAlert from "../utilities/forms/FormSubmissionAlert"
import SetFaviconAndTabTitle from "../utilities/SetFaviconAndTabTitle"
import ScrollLink from "../utilities/ScrollLink"
import clouds from "../assets/babysaur/clouds.png"
import rainbow from "../assets/babysaur/rainbow.png"
import pennantBanner from "../assets/babysaur/pennant-banner.png"
import babyDot from "../assets/babysaur/baby-dot.png"
import babyStars from "../assets/babysaur/baby-stars.png"

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
    <div className="font-montserratRegular text-babysaurDarkBlue">
      <SetFaviconAndTabTitle tabTitle="KJ + Babysaur" favicon={favicon} />
      <div
        style={{ backgroundImage: `url(${clouds})`, backgroundSize: "cover" }}
        className="py-16 text-center"
      >
        <h1 className="font-marykate text-center text-5xl md:text-7xl">
          Baby Dahlgren
        </h1>
        <div className="m-auto w-11/12 text-center md:w-1/2">
          <div className="flex justify-center">
            <img
              src={rainbow}
              className="mb-8 h-auto w-40"
              alt="hand-drawn rainbow"
            />
          </div>
          <div className="-rotate-40">
            <h3 className="font-marykate text-2xl font-extrabold md:text-3xl">
              Kayti & Jake are prego, y&apos;all!
            </h3>
          </div>
          <p className="my-8">
            Baby Boy is due mid-October and his parents-to-be could not be more
            excited. We hope you can join us to celebrate the new addition to
            our family.
          </p>
          <div className="flex items-center justify-center bg-cream lg:text-xl">
            <div className="m-1 w-32 lg:m-6">
              <p>Saturday</p>
            </div>
            <div className="border-babysaurDarkBlue h-16 border-r-2 border-solid lg:h-24"></div>
            <div className="m-7">
              <p>July</p>
              <p className="font-garamond text-3xl/none tracking-widest lg:text-6xl/none">
                26
              </p>
              <p>2025</p>
            </div>
            <div className="border-babysaurDarkBlue h-16 border-l-2  border-solid lg:h-24"></div>
            <div className="m-1 w-32 lg:m-6">
              <p>2 - 5 pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto w-11/12 py-4 text-center md:w-1/3 lg:pb-12">
        <div className="relative mb-8">
          <img
            src={pennantBanner}
            alt="pennant banner graphic"
            className="w-full"
          />
          <h2 className="gray-header-text-babysaur absolute inset-0 flex items-center justify-center pb-16">
            Party Details
          </h2>
        </div>
        <p>
          The shower will be a coed, family friendly hangout. Everyone is
          welcome!
        </p>
        <div className="flex justify-center">
          <img src={babyDot} alt="dot icon" className="m-6 h-4" />
        </div>
        <p>
          We will be out in Kayti & Jake&apos;s beautiful backyard enjoying
          food, drinks, and playing yard games.
        </p>
        <div className="flex justify-center">
          <img src={babyDot} alt="dot icon" className="m-6 h-4 rotate-90" />
        </div>
        <p>
          We know life is busy! You are welcome to stay the whole time or pop in
          for a quick hello.
        </p>
        <div className="flex justify-center">
          <img src={babyDot} alt="dot icon" className="m-6 h-4 rotate-45" />
        </div>
        <p>2707 Malibu Road</p>
        <p className="pb-2">Boise, Idaho 83705</p>
        <ScrollLink
          linkName="See Google map"
          location="#googleMap"
          className="font-montserratRegular text-babysaurDarkBlue"
        />
        <br />
      </div>
      <div className="bg-cream">
        <div className="m-auto w-11/12 py-8 text-center md:w-1/2">
          <h2 className="gray-header-text-babysaur">RSVP</h2>
          <p className="lg:px-16">
            Please drop a quick RSVP so we can get the right amount of food and
            drinks.
          </p>
          <br />
          <FormSubmissionAlert
            submissionBackgroundColor="bg-white"
            submissionAlert={submissionAlert}
            setSubmissionAlert={setSubmissionAlert}
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white px-4 py-2 md:px-16 md:py-8"
          >
            <fieldset className="group">
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                className="bg-transparent focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-r-0 px-0 py-2.5 text-sm text-gray focus:outline-none focus:ring-0"
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
                className="bg-transparent focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-r-0 px-0 py-2.5 text-sm text-gray focus:outline-none focus:ring-0"
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
                className="bg-transparent focus:border-blue-600 peer block w-1/6 appearance-none border-0 border-b-2 border-r-0 px-0 py-2.5 text-center text-sm text-gray focus:outline-none focus:ring-0"
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
                className="bg-transparent focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-r-0 px-0 py-2.5 text-sm text-gray focus:outline-none focus:ring-0"
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
      <div
        style={{
          backgroundImage: `url(${babyStars})`
        }}
        className="h-80 bg-cover py-16 text-center"
      >
        <div className="m-auto w-11/12 py-4 md:w-1/2 lg:pb-12">
          <h2 className="gray-header-text-babysaur">Registry</h2>
          <p>
            Kayti & Jake are registered{" "}
            <a href="https://my.babylist.com/kayti-dahlgren" target="_blank">
              here
            </a>
            .
          </p>
        </div>
      </div>
      <div className="mb-12 mt-8" id="googleMap">
        <GoogleMap />
      </div>
      <FooterBabysaur />
    </div>
  )
}

export default Babysaur
