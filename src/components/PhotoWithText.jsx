import PropTypes from "prop-types"

const PhotoWithText = ({ fullScreen, mobile, altText, heading }) => {
  return (
    <>
      {/* full screen view */}
      <div className="hidden md:contents">
        <div className="relative text-center">
          <img src={fullScreen} alt={altText} className="opacity-50" />
          <div className="absolute left-0 right-0 top-4">
            <h2 className="font-moontime text-9xl">{heading}</h2>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="md:hidden">
        <div className="relative text-center">
          <img src={mobile} alt={altText} className="opacity-50" />
          <div className="absolute left-0 right-0 top-2">
            <h2 className="font-moontime text-6xl">{heading}</h2>
          </div>
        </div>
      </div>
    </>
  )
}

PhotoWithText.propTypes = {
  fullScreen: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
}

export default PhotoWithText
