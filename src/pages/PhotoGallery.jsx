import bolo from "../assets/bolo.jpeg"
import camping from "../assets/camping.jpeg"
import goth from "../assets/goth.jpeg"
import tableRock from "../assets/table-rock.jpeg"
import NavigationPages from "../components/NavigationHome"
import Photo from "../components/Photo"
import AnchorLink from "react-anchor-link-smooth-scroll"

const PhotoGallery = () => {
  return (
    <>
      <div className="hover:cursor-pointer">
        <NavigationPages />
      </div>
      <div className="m-4" id="photos">
        <AnchorLink href="#home" className="hover:cursor-pointer">
          <h2 className="m-3 text-center font-moontime text-6xl">
            Photo Gallery
          </h2>
        </AnchorLink>
        <div className="lg:flex">
          <Photo
            source={goth}
            altText="Kayti and Jake in goth Halloween costumes"
          />
          <Photo
            source={bolo}
            altText="Jake in a bolo tie and Kayti in a green dress"
          />
        </div>
        <div className="lg:flex">
          <Photo
            source={camping}
            altText="Kayti and Jake wearing overalls in the car on the way to a camping trip"
          />
          <Photo
            source={tableRock}
            altText="Kayti and Jake with Lola on the top of Table Rock in Boise"
          />
        </div>
      </div>
    </>
  )
}

export default PhotoGallery
