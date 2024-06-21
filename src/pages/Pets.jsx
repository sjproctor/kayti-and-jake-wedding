import { Link } from "react-router-dom"
import NavigationBarPage from "../components/NavigationBarPage"
import treeLogo from "../assets/graphics/tree-logo.png"
import lolaWrap from "../assets/pets/lola-wrap.png"
import toastDishwasher from "../assets/pets/toast-dishwasher.jpeg"
import kaytiBaby from "../assets/pets/kayti-baby.jpeg"
import sleepingLola from "../assets/pets/sleeping-lola.jpeg"
import tuxBurrito from "../assets/pets/tux-burrito.jpg"
import lolaPatio from "../assets/pets/lola-patio.jpg"
import babyNecktie from "../assets/pets/baby-necktie.jpg"

const Pets = () => {
  return (
    <>
      <NavigationBarPage />
      <h2 className="text-center font-moontime text-6xl md:text-9xl">
        Secret Pet Page
      </h2>
      <div className="m-auto w-11/12 text-center md:w-1/2">
        <p>Oh hey! You found the best page of all!</p>
        <p>
          If you got here by accident, Lola Moon will take you back to the main
          page.
        </p>
        <div className="flex justify-center">
          <Link to="/">
            <img src={lolaWrap} alt="Lola Moon" className="my-8 w-48" />
          </Link>
        </div>
        <div className="flex justify-center"></div>
        <p className="mb-4">
          Something not working correctly? <Link to="/contact">Click here</Link>
          .
        </p>
      </div>

      <div className="mb-4 flex flex-wrap justify-center">
        <div>
          <div>
            <img
              src={babyNecktie}
              alt="Baby Dog sleeping on a wooden deck wearing a necktie that says 'I Do Too'"
              className="mx-2 h-auto w-64"
              loading="lazy"
            />
            <p className="mb-2 w-64 text-center text-xs text-gray">
              Baby Dog in her wedding attire.
            </p>
          </div>
          <div>
            <img
              src={toastDishwasher}
              alt="Toast kitty in the dishwasher"
              className="mx-2 h-auto w-64"
              loading="lazy"
            />
            <p className="mb-2 w-64 text-center text-xs text-gray">
              Toast kitty in the dishwasher.
            </p>
          </div>
          <div>
            <img
              src={kaytiBaby}
              alt="Kayti and Baby Dog chilling on a trampoline"
              className="mx-2 h-auto w-64"
              loading="lazy"
            />
            <p className="mb-2 w-64 text-center text-xs text-gray">
              Kayti and Baby Dog.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src={sleepingLola}
              alt="Lola dog sleeping on a couch piled with pillows"
              className="mx-2 h-auto w-64"
              loading="lazy"
            />
            <p className="mb-2 w-64 text-center text-xs text-gray">
              Sleeping Lola dog.
            </p>
          </div>
          <div>
            <img
              src={tuxBurrito}
              alt="Tux wrapped in a blanket burrito"
              className="mx-2 h-auto w-64"
              loading="lazy"
            />
            <p className="mb-2 w-64 text-center text-xs text-gray">
              Tux burrito.
            </p>
          </div>
          <div>
            <img
              src={lolaPatio}
              alt="Lola on the cabin patio"
              className="mx-2 h-auto w-64"
              loading="lazy"
            />
            <p className="mb-2 w-64 text-center text-xs text-gray">
              Lola at the wedding.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={treeLogo}
          alt="Kayti and Jake wedding logo"
          className="mb-8 h-auto w-28"
        />
      </div>
    </>
  )
}

export default Pets
