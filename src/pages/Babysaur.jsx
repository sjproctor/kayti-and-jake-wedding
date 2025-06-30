import FooterBabysaur from "../components/FooterBabysaur"
import GoogleMap from "../components/GoogleMap"
import AboveTheFold from "../sections/babysaur/AboveTheFold"
import PartyDetails from "../sections/babysaur/PartyDetails"
import Registry from "../sections/babysaur/Registry"
import RSVP from "../sections/babysaur/RSVP"
import SetFaviconAndTabTitle from "../utilities/SetFaviconAndTabTitle"

const favicon =
  "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦕</text></svg>"

const Babysaur = () => {
  return (
    <div className="babysaur-base">
      <SetFaviconAndTabTitle tabTitle="KJ + Babysaur" favicon={favicon} />
      <AboveTheFold />
      <PartyDetails />
      <RSVP />
      <Registry />
      <GoogleMap />
      <FooterBabysaur />
    </div>
  )
}

export default Babysaur
