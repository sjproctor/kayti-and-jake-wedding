import AnchorLink from "react-anchor-link-smooth-scroll"

const Celebration = () => {
  return (
    <div className="m-4" id="celebration">
      <AnchorLink smooth href="#home" className="hover:cursor-pointer">
        <h2 className="m-3 text-center font-moontime text-6xl">Celebration</h2>
      </AnchorLink>
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        You are invited to a gathering of friends and family to celebrate with
        Kayti and Jake on August 31, 2024.
      </p>
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        Location: Basque Center, 601 W Grove St, Boise, Idaho 83702
      </p>
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">Time: TBD</p>
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        Dress code: Casual! Please wear whatever makes you feel most
        comfortable.
      </p>
    </div>
  )
}

export default Celebration
