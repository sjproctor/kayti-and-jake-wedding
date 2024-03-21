import hikingLola from "../assets/hiking-lola.jpeg"
import NavigationButton from "../components/NavigationButton"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Contact = () => {
  return (
    <div className="m-4" id="contact">
      <AnchorLink href="#home" className="hover:cursor-pointer">
        <h2 className="m-3 text-center font-moontime text-6xl">Contact Us</h2>
      </AnchorLink>
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        As we are so lucky to have a home and life together, we feel there is no
        need for any gifts beyond your well wishes. We would prefer your
        presence at our celebratory gathering rather than presents!
      </p>
      <img
        src={hikingLola}
        alt="Kayti and Jake with Lola dog on a hike"
        className="dark:shadow-black/30 m-5 mx-auto w-64 rounded-full shadow-lg"
      />
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        If you would like to mark the occasion of our marriage with a gift, we
        would be more than grateful. Please do not feel obliged in any way.
      </p>
      <div className="mt-4 sm:mx-4 md:mx-12 lg:mx-48">
        We are both on Venmo:
      </div>
      <div className="mt-4 sm:mx-4 md:mx-12 lg:mx-48">
        <div>
          <a>Kayti Venmo placeholder</a>
        </div>
        <div>
          <a>Jake Venmo placeholder</a>
        </div>
      </div>
      <div className="mt-4 sm:mx-4 md:mx-12 lg:mx-48">
        Amazon Wishlist placeholder
      </div>
      <div className="mt-4 sm:mx-4 md:mx-12 lg:mx-48">Mailing address:</div>
      <div className="mt-4 sm:mx-4 md:mx-12 lg:mx-48">Kayti and Jake</div>
      <div className="sm:mx-4 md:mx-12 lg:mx-48">2707 Malibu Drive</div>
      <div className="sm:mx-4 md:mx-12 lg:mx-48">Boise, Idaho 83705</div>
      <NavigationButton linkName="View Postcard Mailer" location="/postcard" />
    </div>
  )
}

export default Contact
