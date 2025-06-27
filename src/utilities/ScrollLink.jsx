import AnchorLink from "react-anchor-link-smooth-scroll"
import PropTypes from "prop-types"

const ScrollLink = ({ linkName, location, className }) => {
  return (
    <AnchorLink href={location} className={className}>
      {linkName}
    </AnchorLink>
  )
}

ScrollLink.propTypes = {
  linkName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

ScrollLink.defaultProps = {
  className: "scrollLinkNavigation"
}

export default ScrollLink
