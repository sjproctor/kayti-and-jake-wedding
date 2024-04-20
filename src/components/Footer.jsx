import footerLogo from "../assets/graphics/logo-footer.png"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Footer = () => {
  return (
    <>
      <div className="flex justify-center">
        <AnchorLink href="#home" className=" hover:cursor-pointer">
          <img
            src={footerLogo}
            alt="Kayti and Jake logo"
            className="mb-6 h-28 lg:h-44"
          />
        </AnchorLink>
      </div>
      <p className="text-center">
        Handcrafted with love by Sarah | &copy; 2024
      </p>
    </>
  )
}

export default Footer
