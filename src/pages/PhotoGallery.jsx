import NavigationBarPage from "../components/NavigationBarPage"
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
      <h2 className="m-3 text-center font-moontime text-6xl">Photo Gallery</h2>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col flex-wrap">
          <div className="w-80 px-2">
            <img src={belizeBoat} alt="Kayti and Jake on a boat in Belize" />
            <p className="w-80 pb-2 text-center text-xs text-gray">
              Snorkel adventure in Belize
            </p>
          </div>
          <div className="w-80 px-2">
            <img
              src={bolo}
              alt="Jake in a bolo tie and Kayti in a green dress"
            />
            <p className="w-80 pb-2 text-center text-xs text-gray">
              Wedding snazz.
            </p>
          </div>
          <div className="w-80 px-2">
            <img
              src={tableRock}
              alt="Kayti and Jake with Lola on the top of Table Rock in Boise"
            />
            <p className="w-80 pb-2 text-center text-xs text-gray">
              Table Rock with Lola.
            </p>
          </div>
          <div className="w-80 px-2">
            <img
              src={riverBend}
              alt="Kayti and Jake in front of a winding river"
            />
            <p className="w-80 pb-2 text-center text-xs text-gray">
              ****need description.
            </p>
          </div>
          <div className="w-80 px-2">
            <img src={punch} alt="Kayti and Jake in front of a winding river" />
            <p className="w-80 pb-2 text-center text-xs text-gray">
              ****need description.
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap">
          <div className="w-80 px-2">
            <img src={goth} alt="Kayti and Jake in goth Halloween costumes" />
            <p className="w-80 pb-2 text-center text-xs text-gray">
              Goth Halloween 2022
            </p>
          </div>
          <div className="w-80 px-2">
            <img
              src={boiseRiver}
              alt="Jake and Kayti wearing sunglasses floating the river"
            />
            <p className="w-80 pb-2 text-center text-xs text-gray">
              Floating the Boise River.
            </p>
          </div>
          <div className="w-80 px-2">
            <img src={fancy} alt="Kayti and Jake all dressed up for an event" />
            <p className="w-80 pb-2 text-center text-xs text-gray">
              ****need description.
            </p>
          </div>
          <div className="w-80 px-2">
            <img
              src={christmas}
              alt="Kayti and Jake in front of a lit Christmas tree"
            />
            <p className="w-80 pb-2 text-center text-xs text-gray">
              ****need description.
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap">
          <div className="w-80 px-2">
            <img
              src={downtown}
              alt="Kayti and Jake kissing under a structure at Treefort"
            />
            <p className="w-80 pb-2 text-center text-xs text-gray">
              Smooching at Treefort.
            </p>
          </div>
          <div className="w-80 px-2">
            <img src={lolaBaby} alt="Kayti and Jake with new pup Lola Moon" />
            <p className="w-80 pb-2 text-center text-xs text-gray">
              Lola Moon.
            </p>
          </div>
          <div className="w-80 px-2">
            <img src={mccall} alt="Kayti and Jake on the shore of a lake" />
            <p className="w-80 pb-2 text-center text-xs text-gray">McCall.</p>
          </div>
          <div className="w-80 px-2">
            <img src={lolaCar} alt="Kayti and Jake and Lola in the car" />
            <p className="w-80 pb-2 text-center text-xs text-gray">
              ****need description.
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap">
          <div className="w-80 px-2">
            <img
              src={engagement}
              alt="Kayti and Jake kissing on the top of Xunantunich monument in Belize"
            />
            <p className="w-80 pb-2 text-center text-xs text-gray">
              Newly engaged on the Xunantunich monument in Belize.
            </p>
          </div>
          <div className="w-80 px-2">
            <img
              src={hikingLola}
              alt="Kayti and Jake with Lola in the foothills"
            />
            <p className="w-80 pb-2 text-center text-xs text-gray">
              Hiking with Lola.
            </p>
          </div>
          <div className="w-80 px-2">
            <img
              src={lights}
              alt="Kayti and Jake in front of a web of Christmas lights"
            />
            <p className="w-80 pb-2 text-center text-xs text-gray">
              ****need description.
            </p>
          </div>
          <div className="w-80 px-2">
            <img src={river} alt="Kayti and Jake camping in front of a river" />
            <p className="w-80 pb-2 text-center text-xs text-gray">
              ****need description.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhotoGallery
