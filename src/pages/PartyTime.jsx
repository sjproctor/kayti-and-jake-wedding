import React, { Suspense } from "react"
import NavigationButton from "../components/NavigationButton"
import NavigationPages from "../components/NavigationHome"
const GoogleMap = React.lazy(() => import("../components/GoogleMap"))
import { Link } from "react-router-dom"

const PartyTime = () => {
  return (
    <>
      <div className="hover:cursor-pointer">
        <NavigationPages />
      </div>
      <div className="m-4" id="party">
        <Link to="/" className="hover:cursor-pointer">
          <h2 className="m-3 text-center font-moontime text-6xl">
            Party Information
          </h2>
        </Link>
        <div className="mb-3 md:mx-10 lg:mx-40 lg:max-w-5xl">
          You are invited to a gathering of friends and family to celebrate with
          Kayti and Jake on August 31, 2024.
        </div>
        <div className="mb-3 md:mx-10 lg:mx-40 lg:max-w-5xl">
          <p>Location: Basque Center</p>
          <p>Address: 601 W Grove St, Boise, Idaho 83702</p>
          <p>Date: Saturday, August 31, 2024</p>
          <p>Time: TBA</p>
          <p>
            Dress code: Casual, please wear whatever makes you feel most
            comfortable.
          </p>
          <p>What to expect: Lorem ipsum.</p>
          <p>What to bring: Yourself!</p>
          <p>Parking: Lorem ipsum.</p>
          <p>Transportation: Lorem ipsum.</p>
        </div>
      </div>
      <NavigationButton linkName="RSVP For the Party" location="/rsvp" />
      <div className="w-screen">
        <Suspense fallback={<p>loading...</p>}>
          <GoogleMap />
        </Suspense>
      </div>
    </>
  )
}

export default PartyTime
