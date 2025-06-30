import RSVPForm from "../../utilities/forms/RSVPForm"

const RSVPSection = () => {
  return (
    <div className="bg-cream">
      <div className="standardPageLayout p-4">
        <h2 className="babysaur-header-lg">RSVP</h2>
        <p>
          Please drop a quick RSVP so we can be sure to get the right amount of
          food and drinks.
        </p>
        <br />
        <RSVPForm />
        <br />
      </div>
    </div>
  )
}

export default RSVPSection
