import AnchorLink from "react-anchor-link-smooth-scroll"
import PropTypes from "prop-types"

const ScrollLink = ({ linkName, location }) => {
  return (
    <AnchorLink
      href={location}
      className="border-gray-100 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent block border-b py-2 pl-3 pr-4 hover:cursor-pointer md:border-0 md:p-0"
    >
      {linkName}
    </AnchorLink>
  )
}

ScrollLink.propTypes = {
  linkName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default ScrollLink
