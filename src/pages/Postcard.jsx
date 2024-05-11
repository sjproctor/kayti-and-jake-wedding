import postcardBack from "../assets/postcard-mailer/postcard-back.png"
import postcardFront from "../assets/postcard-mailer/postcard-front.png"
import NavigationBarPage from "../components/NavigationBarPage"
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
      <NavigationBarPage />
      <h2 className="text-center font-moontime text-8xl md:text-9xl">
        Postcard
      </h2>
      <div className="mx-2 text-center md:mx-10 lg:mx-40 lg:max-w-5xl">
        <p>
          Here is the digital version of Kayti and Jake&apos;s invitation
          postcard mailer. You are welcome to download a copy using the button
          below.
        </p>
        <p>
          If you didn&apos;t receive a postcard or you would like an additional
          print copy&nbsp;
          <a href="mailto:kj.partytime@gmail.com?cc=sproctor950@gmail.com &subject=Postcard Mailer">
            please reach out here
          </a>
          .
        </p>
        <button
          className="m-8 border px-4 py-2 shadow-2xl hover:text-greenGold"
          onClick={downloadPDF}
        >
          Download Postcard
        </button>
      </div>
      <div className="m-2 mb-8 lg:mx-auto lg:w-1/2">
        <img
          src={postcardFront}
          alt="Front of Kayti and Jake's postcard invitation"
          className="mb-5 h-auto w-max border-2"
        />
        <img
          src={postcardBack}
          alt="Back of Kayti and Jake's postcard invitation"
          className="h-auto w-max border-2"
        />
      </div>
    </>
  )
}

export default Postcard
