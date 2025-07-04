import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import emailjs from "@emailjs/browser"
import flowerLogo from "../assets/graphics/flower-logo.png"
import belizeGolfCart from "../assets/belize-golf-cart.jpeg"
import Footer from "../components/Footer"
import NavigationBarPage from "../components/NavigationBarPage"

const Contact = () => {
  const [submissionAlert, setSubmissionAlert] = useState({
    visibility: "hidden",
    header: "",
    body: ""
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    const { name, email, message } = data
    try {
      const templateParams = {
        name,
        email,
        message
      }
      await emailjs.send(
        "service_izpa2uz",
        "template_or5oiyk",
        templateParams,
        "opwB1tSgZJHytVdTC"
        // emailjs docs say this is okay to do, still feels weird
      )
      setSubmissionAlert({
        visibility: "",
        header: "Success!",
        body: "Thank you for your email."
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
      <NavigationBarPage />
      <div className="relative h-48 text-center sm:h-[25rem] md:h-[30rem] lg:h-[35rem] xl:h-[46rem] 2xl:h-[56rem]">
        <img
          src={belizeGolfCart}
          alt="Jake, Sarah, Erik, and Kayti and Jake in a golf cart in Belize"
          className="h-auto w-max opacity-50"
        />
        <div className="absolute left-0 right-0 top-1 md:top-7">
          <h2 className="font-moontime text-6xl md:text-9xl">Contact Me</h2>
        </div>
      </div>
      <p className="header-lg">Well, Hey There!</p>
      <div className="standardPageLayout">
        <h3 className="text-lg font-extrabold">Questions and Feedback</h3>
        <p>
          If you are having issues with the website, need technical help, have
          general questions, need travel advice, or any other feedback please
          fill out this form.
        </p>
        <br />
        <div className={submissionAlert.visibility}>
          <div
            className="relative m-1 border bg-lightGold bg-opacity-50 p-1 md:mx-auto"
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <fieldset className="group relative z-0 w-full md:md:mb-5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="bg-transparent focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 px-0 py-2.5 text-sm text-gray focus:outline-none focus:ring-0"
                {...register("name", {
                  required: true
                })}
              />
              <div className="text-left">
                <label htmlFor="name" className="text-sm text-gray">
                  Your name *
                </label>
              </div>
              {errors.name && errors.name.type === "required" && (
                <p className="text-left text-sm text-error">
                  Name is required.
                </p>
              )}
            </fieldset>
            <fieldset className="group relative z-0 w-full md:mb-5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="bg-transparent focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 px-0 py-2.5 text-sm text-gray focus:outline-none focus:ring-0"
                {...register("email", {
                  required: true
                })}
              />
              <div className="text-left">
                <label htmlFor="email" className="text-sm text-gray">
                  Your contact email *
                </label>
              </div>
              {errors.email && errors.email.type === "required" && (
                <p className="text-left text-sm text-error">
                  Email is required.
                </p>
              )}
            </fieldset>
          </div>
          <fieldset className="group relative z-0 w-full md:mb-5">
            <input
              type="text"
              name="message"
              id="message"
              className="bg-transparent focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 px-0 py-2.5 text-sm text-gray focus:outline-none focus:ring-0"
              {...register("message", {
                required: true
              })}
            />
            <div className="text-left">
              <label htmlFor="message" className="text-sm text-gray">
                Message content *
              </label>
            </div>
            {errors.message && errors.message.type === "required" && (
              <p className="text-left text-sm text-error">
                Content is required.
              </p>
            )}
          </fieldset>

          <div className="text-center">
            <button
              className="m-2 border bg-brightGold px-4 py-2 shadow-2xl hover:bg-lightGold active:translate-y-0.5"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="m-auto w-11/12 pt-8 text-center md:w-1/2">
        <h3 className="text-lg font-extrabold">Postcard Mailer</h3>
        <p>
          <Link to="/postcard">Click here</Link> to view a digital copy of the
          postcard invitation you received in the mail.
        </p>
        <p>
          If you didn&apos;t receive a postcard or you would like an additional
          copy&nbsp;
          <a href="mailto:kj.partytime@gmail.com?cc=sproctor950@gmail.com &subject=Postcard Mailer">
            please reach out here
          </a>
          .
        </p>
        <br />
        <h3 className="text-lg font-extrabold">Website Details</h3>
        <p>
          This website was created by me, Sarah Proctor. It is built in React on
          Vite using Tailwind and Flowbite components. If you are interested in
          the technical specs, you can&nbsp;
          <a
            href="https://github.com/sjproctor/kayti-and-jake-wedding"
            target="blank"
          >
            read more here
          </a>
          . If you want to chat about code, let&apos;s f*cking chat! You
          can&nbsp;
          <a
            href="https://www.linkedin.com/in/sarahproctor-dev/"
            target="blank"
          >
            connect with me here
          </a>
          .
        </p>
        <br />
        <p className="header-lg">Some Obligatory Stuff</p>
        <h3 className="text-lg font-extrabold">
          The &ldquo;Be Cool&rdquo; Reminder
        </h3>
        <p>
          Gotta COA (Cover Our Asses)! By being on this website you are agreeing
          to act respectfully to everyone associated with Kayti and Jake&apos;s
          wedding celebration. If you choose to attend the celebration you agree
          to self-regulate your alcohol consumption, prioritize the safety and
          well being of all guests, and respect the property of others. Anyone
          who violates these agreements will be asked to leave. You also agree
          that you WILL NOT drive after consuming alcohol. Thanks friends!
        </p>
        <br />
        <h3 className="text-lg font-extrabold">Permissions</h3>
        <p>
          The code and the written copy on this website are the creation and
          intellectual property of me, Sarah Proctor. The logos and graphics
          were created by me using Canva. All pictures are owned by a member of
          my family and are being used with the permission of the photographer
          and the permission of those pictured. Nothing on this site can be used
          without permission from me, Sarah Proctor.
        </p>
        <br />
        <h3 className="text-lg font-extrabold">Privacy</h3>
        <p>
          No personal data is collected by site cookies. The information you
          share through the RSVP form will only be used for planning the
          celebration.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={flowerLogo}
          className="m-8 h-auto w-28"
          alt="Kayti and Jake wedding logo"
        />
      </div>
      <Footer />
    </>
  )
}

export default Contact
