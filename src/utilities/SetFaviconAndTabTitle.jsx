import { useEffect } from "react"
import PropTypes from "prop-types"

const SetFaviconAndTabTitle = ({ favicon, tabTitle }) => {
  return (
    useEffect(() => {
      document.title = tabTitle
      document.querySelector("link[rel='icon']").href = favicon
    }, [])
  )
}

SetFaviconAndTabTitle.propTypes = {
  favicon: PropTypes.string.isRequired,
  tabTitle: PropTypes.string.isRequired
}

export default SetFaviconAndTabTitle