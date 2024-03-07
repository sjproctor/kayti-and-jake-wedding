import footerLogo from "../assets/logo-footer.png"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Footer = () => {
  return (
    <AnchorLink smooth href="#home" className=" hover:cursor-pointer">
      <img
        src={footerLogo}
        alt="Kayti and Jake logo"
        className="mb-6 max-h-80"
      />
    </AnchorLink>
  )
}

export default Footer
