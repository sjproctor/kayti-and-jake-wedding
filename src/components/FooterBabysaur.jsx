import babysaur from "../assets/babysaur/babysaur.png"
import NavigationScrollLogo from "../utilities/NavigationScrollLogo"

const FooterBabysaur = () => {
  return (
    <>
      <hr className="m-4 text-lightGray" />

      <div className="flex justify-between">
        <div className="mx-4 my-2 ml-8 text-xs text-gray md:text-base">
          <p>Crafted with 🩵 by Auntie Sarah &copy; 2025</p>
          <p></p>
        </div>
        <NavigationScrollLogo
          source={babysaur}
          className="mb-4 mr-4 max-h-20 hover:cursor-pointer md:h-20"
          altText="graphic of a blue baby dinosaur hatching from a speckled egg"
        />
      </div>
    </>
  )
}

export default FooterBabysaur
