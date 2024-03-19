import AnchorLink from "react-anchor-link-smooth-scroll"
import postcardFront from "../assets/postcard-front.png"
import postcardBack from "../assets/postcard-back.png"
import jsPDF from "jspdf"

const Postcard = () => {
  const downloadPDF = () => {
    const doc = new jsPDF()
    const imgWidth = doc.internal.pageSize.getWidth()
    const imgHeight = doc.internal.pageSize.getHeight()

    doc.addImage(postcardFront, "PNG", 0, 0, imgWidth, imgHeight)
    doc.addPage()

    doc.addImage(postcardBack, "PNG", 0, 0, imgWidth, imgHeight)
    doc.save("postcard.pdf")
  }
  return (
    <div className="m-4" id="postcard">
      <AnchorLink smooth href="#home" className="hover:cursor-pointer">
        <h2 className="m-3 text-center font-moontime text-6xl">Postcard</h2>
      </AnchorLink>
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        Here is the digital version of our postcard mailer.
      </p>
      <div className="text-center">
        <button
          className="hover:text-greenGold m-2 rounded border  px-4 py-2"
          onClick={downloadPDF}
        >
          Download Postcard
        </button>
      </div>
      <div className="lg:mx-auto lg:w-1/2">
        <img
          src={postcardFront}
          alt="Front of Kayti and Jake's postcard invitation"
          className="mb-5 border-2"
        />
        <img
          src={postcardBack}
          alt="Back of Kayti and Jake's postcard invitation"
          className="border-2"
        />
      </div>
    </div>
  )
}

export default Postcard
