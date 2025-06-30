import { useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import FormField from "./FormField"
import FormSubmissionAlert from "./FormSubmissionAlert"
import RadioField from "./RadioField"


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

  const handleAttendanceChange = (attending) => {
    setWillBeAttending(attending ? "" : "hidden")
  }

  const onSubmit = async (data) => {
    const { name, email, status, guests, message } = data

    // Process form data
    const finalMessage = message.length === 0 ? "No message included" : message
    const finalGuests = status === "Will not be attending" ? 0 : guests

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
      )

      setSubmissionAlert({
        visibility: "",
        header: "Success!",
        body: "Thank you for your RSVP."
      })
    } catch (error) {
      console.error("Email submission error:", error)
      setSubmissionAlert({
        visibility: "",
        header: "Oops!",
        body: "Something went wrong."
      })
    } finally {
      reset()
      setWillBeAttending("hidden")
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
        <FormField
          id="name"
          type="text"
          name="name"
          label="Your name(s)"
          required
          autoComplete="name"
          register={register}
          errors={errors}
        />

        <FormField
          id="email"
          type="email"
          name="email"
          label="Your preferred email"
          required
          autoComplete="email"
          register={register}
          errors={errors}
        />

        <br />

        <fieldset className="group">
          <RadioField
            id="yes"
            value="Will be attending"
            label="Yes, count me/us in"
            name="status"
            onClick={() => handleAttendanceChange(true)}
            register={register}
            errors={errors}
          />
          <RadioField
            id="no"
            value="Will not be attending"
            label="No, sending well wishes"
            name="status"
            onClick={() => handleAttendanceChange(false)}
            register={register}
            errors={errors}
          />
          {errors.status && errors.status.type === "required" && (
            <p className="text-left text-sm text-error">
              Please select a response
            </p>
          )}
        </fieldset>

        <fieldset className={`group ${willBeAttending}`}>
          <FormField
            id="guests"
            type="number"
            name="guests"
            label="Number of guests"
            autoComplete="guests"
            className="w-1/6 text-center"
            register={register}
            errors={errors}
          />
        </fieldset>

        <FormField
          id="message"
          type="text"
          name="message"
          label="Optional message for Kayti & Jake"
          autoComplete="message"
          register={register}
          errors={errors}
        />

        <div className="text-center">
          <button
            type="submit"
            className="mt-10 rounded-md border bg-cream px-4 py-2 text-gray shadow-2xl hover:bg-white active:translate-y-0.5"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

export default RSVPForm
