import postcardBack from "../assets/postcard-mailer/postcard-back.png"
import postcardFront from "../assets/postcard-mailer/postcard-front.png"
import NavigationHome from "../components/NavigationHome"
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
    <>
      <div className="hover:cursor-pointer">
        <NavigationHome />
      </div>
      <div className="m-4" id="postcard">
        <h2 className="m-3 text-center font-moontime text-6xl">Postcard</h2>
        <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
          Here is the digital version of our postcard mailer. If you didn&apos;t
          receive our postcard or you would like an additional copy please reach
          out to Kayti and Jake. If you would like a digital copy you can
          download the postcard here.
        </p>
        <div className="text-center">
          <button
            className="m-2 rounded-full border px-4 py-2 shadow-2xl hover:text-greenGold"
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
    </>
  )
}

export default Postcard
