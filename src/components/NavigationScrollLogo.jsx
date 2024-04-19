import leafLogo from "../assets/graphics/leaf-decoration.png"

const NavigationScrollLogo = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <img
      src={leafLogo}
      className="mr-2 w-20 hover:cursor-pointer"
      alt="Kayti and Jake wedding logo"
      onClick={handleScrollToTop}
    />
  )
}

export default NavigationScrollLogo
