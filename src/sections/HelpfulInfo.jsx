import AnchorLink from "react-anchor-link-smooth-scroll"

const HelpfulInfo = () => {
  return (
    <div className="m-4 text-center" id="info">
      <AnchorLink href="#home" className="hover:cursor-pointer">
        <h2 className="m-3 text-center font-moontime text-6xl">
          Helpful Information
        </h2>
      </AnchorLink>
      <div>
        <h3 className="text-lg font-extrabold">Question</h3>
        <p>Answer</p>
        <h3 className="text-lg font-extrabold">Question</h3>
        <p>Answer</p>
        <h3 className="text-lg font-extrabold">Question</h3>
        <p>Answer</p>
        <h3 className="text-lg font-extrabold">Question</h3>
        <p>Answer</p>
        <h3 className="text-lg font-extrabold">Question</h3>
        <p>Answer</p>
        <h3 className="text-lg font-extrabold">Question</h3>
        <p>Answer</p>
      </div>
    </div>
  )
}

export default HelpfulInfo
