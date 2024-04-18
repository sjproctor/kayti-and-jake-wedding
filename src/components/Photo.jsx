import PropTypes from "prop-types"

const Photo = ({ source, altText }) => {
  return (
    <img
      src={source}
      alt={altText}
      className="dark:shadow-black/30 m-auto w-64 shadow-2xl md:m-1"
    />
  )
}

Photo.propTypes = {
  source: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
}

export default Photo
