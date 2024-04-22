import hikingLola from "../assets/hiking-lola.jpeg"
import NavigationButton from "../components/NavigationButton"

const Registry = () => {
  return (
    <div className="m-4" id="contact">
      <h2 className="m-3 text-center font-moontime text-6xl">Contact Us</h2>
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        Since we are very lucky to have a home and life together, we feel there
        is no need for any gifts beyond your well wishes. We would prefer your
        presence at our celebration rather than presents!
      </p>
      <img
        src={hikingLola}
        alt="Kayti and Jake with Lola dog on a hike"
        className="dark:shadow-black/30 m-5 mx-auto w-64 rounded-full shadow-2xl"
      />
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        If you would like to mark the occasion of our marriage with a gift, we
        would be more than grateful. Please do not feel obliged in any way.
      </p>
      <div className="mt-4 sm:mx-4 md:mx-12 lg:mx-48">
        We are both on Venmo.
      </div>
      <div className="mt-4 sm:mx-4 md:mx-12 lg:mx-48">
        <div>
          <a>Kayti Venmo: @Kayti</a>
        </div>
        <div>
          <a>Jake Venmo: @jake-dahlgren-1</a>
        </div>
      </div>
      <div className="mt-4 sm:mx-4 md:mx-12 lg:mx-48">
        Amazon Wishlist lorem ipsum
      </div>
      <div className="mt-4 sm:mx-4 md:mx-12 lg:mx-48">Mailing address:</div>
      <div className="mt-4 sm:mx-4 md:mx-12 lg:mx-48">Kayti and Jake</div>
      <div className="sm:mx-4 md:mx-12 lg:mx-48">2707 Malibu Drive</div>
      <div className="sm:mx-4 md:mx-12 lg:mx-48">Boise, Idaho 83705</div>
      <NavigationButton linkName="View Postcard Mailer" location="/postcard" />
    </div>
  )
}

export default Registry
