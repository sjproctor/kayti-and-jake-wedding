import { useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import FormSubmissionAlert from "./FormSubmissionAlert"

const RSVPForm = () => {
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
    <>
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
    </>
  )
}

export default RSVPForm
