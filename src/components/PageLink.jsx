import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const PageLink = ({ linkName, location }) => {
  return (
    <Link
      to={location}
      className="md:hover:bg-transparent text-gray block border-b px-3 py-2 font-alice text-xs uppercase no-underline hover:cursor-pointer md:border-0 md:p-0"
    >
      {linkName}
    </Link>
  )
}

PageLink.propTypes = {
  linkName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default PageLink
