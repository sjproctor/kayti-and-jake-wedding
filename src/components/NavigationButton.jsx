import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const NavigationButton = ({ linkName, location }) => {
  return (
    <div className="text-center">
      <Link to={location}>
        <button className="m-2 border px-3 py-1 shadow-2xl hover:text-greenGold">
          {linkName}
        </button>
      </Link>
    </div>
  )
}

NavigationButton.propTypes = {
  linkName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default NavigationButton
