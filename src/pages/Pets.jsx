import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import NavigationBarPage from "../components/NavigationBarPage"
import PictureModal from "../utilities/PictureModal"
import treeLogo from "../assets/graphics/tree-logo.png"
import allTheLip from "../assets/pets/all-the-lip.jpeg"
import babyNecktie from "../assets/pets/baby-necktie.jpg"
import bestPicEver from "../assets/pets/best-pic-ever.jpeg"
import goodDogs from "../assets/pets/good-dogs.jpg"
import kaytiBaby from "../assets/pets/kayti-baby.jpeg"
import lolaJakeNap from "../assets/pets/lola-jake-nap.jpeg"
import lolaPatio from "../assets/pets/lola-patio.jpg"
import lolaWrap from "../assets/pets/lola-wrap.png"
import sleepingLola from "../assets/pets/sleeping-lola.jpeg"
import toastDishwasher from "../assets/pets/toast-dishwasher.jpeg"
import tuxBurrito from "../assets/pets/tux-burrito.jpg"

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
          <div className="mx-2 h-auto w-64">
            <PictureModal
              source={goodDogs}
              altText="Tux, Lola, Bowie, and Jager in their wedding neckties"
            />
            <p className="mb-2 w-64 text-center text-xs text-gray">
              Good dogs in their wedding neckties.
            </p>
          </div>
          <div className="mx-2 h-auto w-64">
            <PictureModal
              source={babyNecktie}
              altText="Baby Dog sleeping on a wooden deck wearing a necktie that says 'I Do Too'"
            />
            <p className="mb-2 w-64 text-center text-xs text-gray">
              Baby Dog in her wedding attire.
            </p>
          </div>
          <div className="mx-2 h-auto w-64">
            <PictureModal
              source={toastDishwasher}
              altText="Toast kitty in the dishwasher"
            />
            <p className="mb-2 w-64 text-center text-xs text-gray">
              Toast kitty in the dishwasher.
            </p>
          </div>
          <div className="mx-2 h-auto w-64">
            <PictureModal
              source={kaytiBaby}
              altText="Kayti and Baby Dog chilling on a trampoline"
            />
            <p className="mb-2 w-64 text-center text-xs text-gray">
              Kayti and Baby Dog.
            </p>
          </div>
          <div className="mx-2 h-auto w-64">
            <PictureModal
              source={lolaJakeNap}
              altText="Jake and Lola taking a cuddly nap"
            />
            <p className="mb-2 w-64 text-center text-xs text-gray">
              Lola cuddles.
            </p>
          </div>
        </div>
        <div>
          <div className="mx-2 h-auto w-64">
            <PictureModal
              source={bestPicEver}
              altText="Bowie, Lola, Tux, and Jager posing correctly. Baby Dog being a dork."
            />
            <p className="mb-2 w-64 text-center text-xs text-gray">
              One of these things is not like the others.
            </p>
          </div>
          <div className="mx-2 h-auto w-64">
            <PictureModal
              source={sleepingLola}
              altText="Lola dog sleeping on a couch piled with pillows"
            />
            <p className="mb-2 w-64 text-center text-xs text-gray">
              Sleeping Lola dog.
            </p>
          </div>
          <div className="mx-2 h-auto w-64">
            <PictureModal
              source={tuxBurrito}
              altText="Tux wrapped in a blanket burrito"
            />
            <p className="mb-2 w-64 text-center text-xs text-gray">
              Tux burrito.
            </p>
          </div>
          <div className="mx-2 h-auto w-64">
            <PictureModal
              source={lolaPatio}
              altText="Lola on the cabin patio"
            />
            <p className="mb-2 w-64 text-center text-xs text-gray">
              Lola at the wedding.
            </p>
          </div>
          <div className="mx-2 h-auto w-64">
            <PictureModal
              source={allTheLip}
              altText="Lola's face on Kayti's lap."
            />
            <p className="mb-2 w-64 text-center text-xs text-gray">
              Friday nights at home with Lola.
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
      <Footer />
    </>
  )
}

export default Pets
