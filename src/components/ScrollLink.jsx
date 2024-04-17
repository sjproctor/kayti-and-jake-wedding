import AnchorLink from "react-anchor-link-smooth-scroll"
import PropTypes from "prop-types"

const ScrollLink = ({ linkName, location }) => {
  return (
    <AnchorLink
      href={location}
      className="md:hover:bg-transparent text-gray block border-b px-3 py-2 font-alice text-xs uppercase hover:cursor-pointer md:border-0 md:p-0"
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
