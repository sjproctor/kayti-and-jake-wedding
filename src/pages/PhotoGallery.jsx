import NavigationBarPage from "../components/NavigationBarPage"
import PictureModal from "../components/PictureModal"
import flowerLogo from "../assets/graphics/flower-logo.png"
import belizeBoat from "../assets/belize-boat.jpeg"
import bench from "../assets/bench.jpeg"
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
import jakeBaby from "../assets/baby-pics/jake-baby.jpg"
import jakeCasey from "../assets/baby-pics/jake-casey.jpg"
import jakeRick from "../assets/baby-pics/jake-rick.jpg"
import jakeSue from "../assets/baby-pics/jake-sue.jpg"
import kaytiIceCream from "../assets/baby-pics/kayti-ice-cream.jpg"
import kaytiLucy from "../assets/baby-pics/kayti-lucy.jpg"
import kaytiSarahDad from "../assets/baby-pics/kayti-sarah-dad.jpg"
import kaytiTub from "../assets/baby-pics/kayti-tub.jpg"
import greenField from "../assets/green-field.jpeg"

const PhotoGallery = () => {
  const columnOne = [
    {
      image: bolo,
      alt: "Jake in a bolo tie and Kayti in a green dress",
      text: ""
    },
    {
      image: goth,
      alt: "Kayti and Jake in goth Halloween costumes",
      text: "Goth Halloween"
    },
    {
      image: belizeBoat,
      alt: "Kayti and Jake on a boat in Belize",
      text: "Snorkel adventure in Belize"
    },
    {
      image: tableRock,
      alt: "Kayti and Jake with Lola on the top of Table Rock in Boise",
      text: "Top of Table Rock with Lola Moon"
    },
    { image: riverBend, alt: "Kayti and Jake in front of a winding river" },
    {
      image: punch,
      alt: "Kayti and Jake sharing a large cup of red drink with two crazy straws",
      text: ""
    },
    {
      image: boiseRiver,
      alt: "Jake and Kayti wearing sunglasses floating the river",
      text: "Floating the Boise River"
    },
    {
      image: fancy,
      alt: "Kayti and Jake all dressed up for an event",
      text: ""
    },
    {
      image: christmas,
      alt: "Kayti and Jake in front of a lit Christmas tree",
      text: "Happy holidays!"
    },
    {
      image: river,
      alt: "Kayti and Jake camping in front of a river",
      text: ""
    }
  ]
  const columnTwo = [
    {
      image: downtown,
      alt: "Kayti and Jake kissing under a structure at Treefort",
      text: ""
    },
    {
      image: greenField,
      alt: "Kayti in Jake's arms",
      text: ""
    },
    {
      image: engagement,
      alt: "Kayti and Jake kissing on the top of Xunantunich monument in Belize",
      text: "Newly engaged on the Xunantunich monument in Belize."
    },
    {
      image: lights,
      alt: "Kayti and Jake in front of a web of Christmas lights",
      text: ""
    },
    {
      image: lolaBaby,
      alt: "Kayti and Jake with new pup Lola Moon",
      text: "Lola Moon"
    },
    {
      image: mccall,
      alt: "Kayti and Jake on the shore of a lake",
      text: "Kayti and Jake in McCall"
    },
    {
      image: lolaCar,
      alt: "Kayti and Jake and Lola in the car",
      text: ""
    },
    {
      image: bench,
      alt: "Kayti and Jake on David's bench on the Boise greenbelt",
      text: "Kayti and Jake on David's memorial bench."
    },
    {
      image: hikingLola,
      alt: "Kayti and Jake with Lola in the foothills",
      text: ""
    }
  ]
  const jakeBabyPics = [
    {
      image: jakeBaby,
      alt: "Baby Jake all wrapped in blankets",
      text: "Baby Jake"
    },
    {
      image: jakeCasey,
      alt: "Kiddo Jake and Casey in fancy dress clothes",
      text: "Jake and sister, Casey"
    },
    {
      image: jakeRick,
      alt: "Jake and Papa Rick in cowboy boots and hat",
      text: "Jake and Papa Rick"
    },
    {
      image: jakeSue,
      alt: "Jake and Momma Sue",
      text: "Jake and Momma Sue"
    }
  ]
  const kaytiBabyPics = [
    {
      image: kaytiTub,
      alt: "Baby Kayti in a bathtub of bubbles",
      text: "Bubble Kayti"
    },
    {
      image: kaytiLucy,
      alt: "Kayti sledding with Lucy Dog",
      text: "Kayti and Lucy Dog"
    },
    {
      image: kaytiIceCream,
      alt: "Kiddo Kayti eating ice cream wearing a sun hat",
      text: "Kiddo Kayti"
    },
    {
      image: kaytiSarahDad,
      alt: "Kayti and sister, Sarah, on Dad's back",
      text: "Kayti with sister, Sarah, playing with Dad"
    }
  ]
  return (
    <>
      <NavigationBarPage />
      <h2 className="m-3 text-center font-moontime text-6xl md:text-9xl">
        Photo Gallery
      </h2>
      <div className="flex justify-center">
        <div>
          {columnOne.map((picture, index) => {
            return (
              <div className="w-40 px-2 pb-2 text-center md:w-80" key={index}>
                <PictureModal source={picture.image} altText={picture.alt} />
                <p className="text-xs text-gray">{picture.text}</p>
              </div>
            )
          })}
        </div>
        <div>
          {columnTwo.map((picture, index) => {
            return (
              <div className="w-40 px-2 pb-2 text-center md:w-80" key={index}>
                <PictureModal source={picture.image} altText={picture.alt} />
                <p className="text-xs text-gray">{picture.text}</p>
              </div>
            )
          })}
        </div>
      </div>
      <p className="m-2 text-center font-alice text-xl uppercase text-gray md:text-2xl">
        Baby Pics!
      </p>
      <div className="flex justify-center">
        <div>
          {jakeBabyPics.map((picture, index) => {
            return (
              <div className="w-40 px-2 pb-2 text-center md:w-80" key={index}>
                <PictureModal source={picture.image} altText={picture.alt} />
                <p className="text-xs text-gray">{picture.text}</p>
              </div>
            )
          })}
        </div>
        <div>
          {kaytiBabyPics.map((picture, index) => {
            return (
              <div className="w-40 px-2 pb-2 text-center md:w-80" key={index}>
                <PictureModal source={picture.image} altText={picture.alt} />
                <p className="text-xs text-gray">{picture.text}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={flowerLogo}
          className="m-4 h-auto w-28"
          alt="Kayti and Jake wedding logo"
        />
      </div>
    </>
  )
}

export default PhotoGallery
