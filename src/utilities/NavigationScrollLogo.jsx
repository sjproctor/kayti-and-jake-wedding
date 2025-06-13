import PropTypes from "prop-types"

const NavigationScrollLogo = ({ source, className, altText }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <img
      src={source}
      className={className}
      alt={altText}
      onClick={handleScrollToTop}
    />
  )
}

NavigationScrollLogo.propTypes = {
  source: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
}

export default NavigationScrollLogo
