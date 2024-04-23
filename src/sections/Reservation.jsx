import { useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import camping from "../assets/camping.jpeg"
import flowerLogo from "../assets/graphics/flower-logo.png"

const Reservation = () => {
  const [yesStatus, setYesStatus] = useState("hidden")
  const [noStatus, setNoStatus] = useState("hidden")
  const [submissionAlert, setSubmissionAlert] = useState({
    visibility: "hidden",
    header: "",
    body: ""
  })
  const [selectedStatus, setSelectedState] = useState({
    visibility: "hidden",
    buttonLabel: ""
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    let { name, email, guests, message } = data
    if (message.length === 0) {
      message = "No message included"
    }
    if (guests.length === 0) {
      guests = "Will not be attending"
    }
    try {
      const templateParams = {
        name,
        email,
        guests,
        message
      }
      await emailjs.send(
        "service_izpa2uz",
        "template_6y4jg0s",
        templateParams,
        "opwB1tSgZJHytVdTC"
        // emailjs docs say this is okay to do, still feels weird
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
      setYesStatus("hidden")
      setNoStatus("hidden")
      setSelectedState({
        visibility: "hidden",
        buttonLabel: ""
      })
      reset()
    }
  }

  const handleStatus = (status) => {
    setTimeout(() => {
      if (status === "yes") {
        setYesStatus("")
        setNoStatus("hidden")
        setSelectedState({
          visibility: "",
          buttonLabel: "Submit RSVP"
        })
      } else if (status === "no") {
        setYesStatus("hidden")
        setNoStatus("")
        setSelectedState({
          visibility: "",
          buttonLabel: "Submit"
        })
      }
    }, 100)
  }
  return (
    <div id="rsvp">
      <div className="relative text-center">
        <img
          src={camping}
          alt="Kayti and Jake in the car on their way to Garden Valley"
          className="opacity-50"
        />
        <div className="absolute left-0 right-0 top-4 md:top-12">
          <h2 className="font-moontime text-7xl md:text-9xl">RSVP</h2>
        </div>
      </div>
      <div className="mx-4 my-8 md:mx-40 md:max-w-5xl">
        <div className="bg-champagne px-2 py-2 text-center md:p-8">
          <p className="p-1">We hope you can join us for the celebration!</p>
          <p className="p-1">
            However, we know life is busy. Kayti and Jake don&apos;t want anyone
            to feel obligated to attend if it creates a hardship in any way.
            They feel lucky to have such wonderful family and friends, all they
            ask for is your well wishes.
          </p>
        </div>
      </div>
      <p className="m-2 text-center font-alice text-xl text-gray md:text-2xl">
        Please respond by July 1, 2024 so we can plan for the appropriate number
        of guests.
      </p>
      <div className="bg-lightGray p-4">
        <div className={submissionAlert.visibility}>
          <div
            className="relative m-1 border bg-opacity-50 p-1 md:mx-auto md:w-1/3"
            role="alert"
          >
            <strong className="font-bold">{submissionAlert.header}</strong>
            <span className="block">{submissionAlert.body}</span>
            <span className="absolute bottom-0 right-0 top-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={() =>
                  setSubmissionAlert({
                    visibility: "hidden",
                    header: "",
                    body: ""
                  })
                }
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        </div>
        <form className="md:mx-auto md:w-1/3" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="font-alice uppercase">
              Your name(s) *
            </label>
            <br />
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              className="w-full p-2"
              {...register("name", {
                required: true
              })}
            />
            {errors.name && errors.name.type === "required" && (
              <p className=" text-sm text-error">Name is required.</p>
            )}
          </div>
          <div className="my-2">
            <label htmlFor="email" className="font-alice uppercase">
              Your preferred email *
            </label>
            <br />
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              className="w-full p-2"
              {...register("email", {
                required: true
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="px-2 text-sm text-error">Email is required.</p>
            )}
          </div>
          <div className="my-2">
            <p className="font-alice uppercase">Will you attend? *</p>
            <input
              id="yes"
              type="radio"
              name="rsvp"
              className="mr-2 h-4 w-4"
              onClick={() => handleStatus("yes")}
            />
            <label htmlFor="yes">Yes, count me/us in.</label>
            <br />
            <input
              id="no"
              type="radio"
              name="rsvp"
              className="mr-2 h-4 w-4"
              onClick={() => handleStatus("no")}
            />
            <label htmlFor="no">No, sending well wishes.</label>
          </div>
          <div className={yesStatus}>
            <br />
            <p>Yay, we are excited to see you!</p>
            <div className="my-2">
              <input
                id="guests"
                type="number"
                name="guests"
                min="1"
                max="10"
                className="mr-2 w-16 p-2"
                {...register("guests")}
              />
              <label htmlFor="guests" className="font-alice uppercase">
                Number in your party *
              </label>
              {errors.name && errors.name.type === "required" && (
                <p className=" text-sm text-error">
                  Please enter a valid number.
                </p>
              )}
            </div>
          </div>
          <div className={noStatus}>
            <br />
            <p>Thanks for letting us know!</p>
          </div>
          <div className={selectedStatus.visibility}>
            <div className="my-2">
              <textarea
                name="message"
                className="w-full resize-x px-4 py-3"
                placeholder="Include an optional message for Kayti and Jake..."
                rows="4"
                cols="27"
                {...register("message")}
              ></textarea>
            </div>
            <div className={yesStatus}>
              <p className="text-xs text-gray">
                COA! By submitting this RSVP, you agree to be a courteous guest
                of Kayti and Jake. This includes self-regulating alcohol
                consumption, prioritizing the safety and well being of all
                guests, and respecting the property of others. DO NOT drive if
                you will be consuming alcohol. Thanks friends!
              </p>
              <br />
            </div>
            <div className="text-center">
              <button
                className="m-2 border bg-brightGold px-4 py-2 text-white shadow-2xl"
                onClick={handleSubmit}
              >
                {selectedStatus.buttonLabel}
              </button>
            </div>
          </div>
        </form>
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

export default Reservation
