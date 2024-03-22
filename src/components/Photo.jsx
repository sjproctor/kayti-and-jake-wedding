import PropTypes from "prop-types"

const Photo = ({ source, altText }) => {
  return (
    <img
      src={source}
      alt={altText}
      className="dark:shadow-black/30 border-gray-400 m-5 mx-auto w-64 rounded-full shadow-2xl"
    />
  )
}

Photo.propTypes = {
  source: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
}

export default Photo
