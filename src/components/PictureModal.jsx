import { useState } from "react"
import { Modal } from "flowbite-react"
import PropTypes from "prop-types"

const PictureModal = ({ source, altText }) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <img
        src={source}
        alt={altText}
        className="h-auto w-max"
        onClick={() => setOpenModal(true)}
      />
      <Modal
        dismissible
        popup
        show={openModal}
        size="4xl"
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="flex justify-center">
            <img src={source} alt={altText} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

PictureModal.propTypes = {
  source: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
}

export default PictureModal
