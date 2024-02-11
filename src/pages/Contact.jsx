import { HashLink } from "@xzar90/react-router-hash-link"
import hikingLola from "../assets/hiking-lola.jpeg"

const Contact = () => {
  return (
    <div className="m-4" id="contact">
      <HashLink smooth to="#" className="hover:cursor-pointer">
        <h2 className="font-moontime m-3 text-6xl text-center">Contact Us</h2>
      </HashLink>
      <p className="">
        As we are so lucky to have a home and life together, we feel there is no
        need for any gifts beyond your well wishes. We would prefer your
        presence at our gathering this fall rather than presents!
      </p>
      <img
        src={hikingLola}
        alt="Jake and Kayti with Lola dog on a hike"
        className="rounded-full w-64 shadow-lg dark:shadow-black/30 m-5 mx-auto"
      />
      <p>
        However, if you would like to mark the occasion of our marriage with a
        gift, we would be more than grateful. Please do not feel obliged in any
        way.
      </p>
      <div className="mt-4 ml-6">We are both on Venmo:</div>
      <div className="mt-2 ml-6">
        <div>
          <a>Kayti Venmo placeholder</a>
        </div>
        <div>
          <a>Jake Venmo placeholder</a>
        </div>
      </div>
      <div className="mt-4 ml-6">Amazon Wishlist placeholder</div>
      <div className="mt-4 ml-6">Mailing address:</div>
      <div className="mt-2 ml-6">Jake and Kayti</div>
      <div className="ml-6">2707 Malibu Drive</div>
      <div className="ml-6">Boise, Idaho 83705</div>
    </div>
  )
}

export default Contact
