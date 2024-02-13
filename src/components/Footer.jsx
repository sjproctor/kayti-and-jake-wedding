import footerLogo from "../assets/logo-footer.png"
import { HashLink } from "react-router-hash-link"

const Footer = () => {
  return (
    <HashLink smooth to="#" className="hover:cursor-pointer">
      <img src={footerLogo} alt="Jake and Kayti logo" />
    </HashLink>
  )
}

export default Footer
