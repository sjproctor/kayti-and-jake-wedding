import NavigationBarPage from "../components/NavigationBarPage"
import flowerLogo from "../assets/graphics/flower-logo.png"
import belizeBoat from "../assets/belize-boat.jpeg"
import boiseRiver from "../assets/boise-river.jpeg"
import bolo from "../assets/bolo.jpeg"
import christmas from "../assets/christmas.jpeg"
import downtown from "../assets/downtown.jpeg"
import goth from "../assets/goth.jpeg"
import engagement from "../assets/engagement.jpeg"
import fancy from "../assets/fancy.jpeg"
import hikingLola from "../assets/hiking-lola.jpeg"
import lights from "../assets/lights.jpeg"
import lolaBaby from "../assets/lola-baby.jpeg"
import lolaCar from "../assets/lola-car.jpeg"
import mccall from "../assets/mccall.jpeg"
import punch from "../assets/punch.jpeg"
import river from "../assets/river.jpeg"
import riverBend from "../assets/riverbend.jpeg"
import tableRock from "../assets/table-rock.jpeg"

const PhotoGallery = () => {
  return (
    <>
      <NavigationBarPage />
      <h2 className="m-3 text-center font-moontime text-6xl md:text-9xl">
        Photo Gallery
      </h2>
      <div className="flex justify-center">
        <div>
          <div className="w-40 px-2 pb-2 text-center md:w-80">
            <img
              src={bolo}
              alt="Jake in a bolo tie and Kayti in a green dress"
            />
          </div>
          <div className="w-40 px-2 pb-2 text-center md:w-80">
            <img src={goth} alt="Kayti and Jake in goth Halloween costumes" />
            <p className="text-xs text-gray">Goth Halloween</p>
          </div>
          <div className="w-40 px-2 pb-2 text-center md:w-80">
            <img src={belizeBoat} alt="Kayti and Jake on a boat in Belize" />
            <p className="text-xs text-gray">Snorkel adventure in Belize</p>
          </div>
          <div className="w-40 px-2 pb-2 text-center md:w-80">
            <img
              src={tableRock}
              alt="Kayti a nd Jake with Lola on the top of Table Rock in Boise"
            />
            <p className="text-xs text-gray">
              Top of Table Rock with Lola Moon
            </p>
          </div>
          <div className="w-40 px-2 pb-2 text-center md:w-80">
            <img
              src={riverBend}
              alt="Kayti and Jake in front of a winding river"
            />
          </div>
          <div className="w-40 px-2 pb-2 text-center md:w-80">
            <img src={punch} alt="Kayti and Jake in front of a winding river" />
          </div>
          <div className="w-40 px-2 pb-2 text-center md:w-80">
            <img
              src={boiseRiver}
              alt="Jake and Kayti wearing sunglasses floating the river"
            />
            <p className="text-xs text-gray">Floating the Boise River</p>
          </div>
          <div className="w-40 px-2 pb-2 text-center md:w-80">
            <img src={fancy} alt="Kayti and Jake all dressed up for an event" />
          </div>
          <div className="w-40 px-2 pb-2 text-center md:w-80">
            <img
              src={christmas}
              alt="Kayti and Jake in front of a lit Christmas tree"
            />
            <p className="text-xs text-gray">Happy holidays!</p>
          </div>
        </div>
        <div>
          <div className="w-40 px-2 pb-2 text-center md:w-80">
            <img
              src={downtown}
              alt="Kayti and Jake kissing under a structure at Treefort"
            />
          </div>
          <div className="w-40 px-2 pb-2 text-center md:w-80">
            <img src={lolaBaby} alt="Kayti and Jake with new pup Lola Moon" />
            <p className="text-xs text-gray">Lola Moon</p>
          </div>
          <div className="w-40 px-2 pb-2 text-center md:w-80">
            <img src={mccall} alt="Kayti and Jake on the shore of a lake" />
          </div>
          <div className="w-40 px-2 pb-2 text-center md:w-80">
            <img src={lolaCar} alt="Kayti and Jake and Lola in the car" />
          </div>

          <div
            className="w-40 px-2
              pb-2 text-center md:w-80"
          >
            <img
              src={engagement}
              alt="Kayti and Jake kissing on the top of Xunantunich monument in Belize"
            />
            <p className="text-xs text-gray">
              Newly engaged on the Xunantunich monument in Belize.
            </p>
          </div>
          <div className="w-40 px-2 pb-2 text-center md:w-80">
            <img
              src={hikingLola}
              alt="Kayti and Jake with Lola in the foothills"
            />
          </div>
          <div className="w-40 px-2 pb-2 text-center md:w-80">
            <img
              src={lights}
              alt="Kayti and Jake in front of a web of Christmas lights"
            />
          </div>
          <div className="w-40 px-2 pb-2 text-center md:w-80">
            <img src={river} alt="Kayti and Jake camping in front of a river" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={flowerLogo}
          className="m-4 w-28"
          alt="Kayti and Jake wedding logo"
        />
      </div>
    </>
  )
}

export default PhotoGallery
