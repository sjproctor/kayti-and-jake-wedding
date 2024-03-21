import React, { Suspense } from "react"
import { Link } from "react-router-dom"
const GoogleMap = React.lazy(() => import("../components/GoogleMap"))

const PartTime = () => {
  return (
    <>
      <div className="m-4" id="party">
        <Link to="/" className="hover:cursor-pointer">
          <h2 className="m-3 text-center font-moontime text-6xl">
            Celebration
          </h2>
        </Link>
      </div>
      <div className="mb-7">
        <div className="m-4">
          <p>Location: Basque Center</p>
          <p>Address: 601 W Grove St, Boise, Idaho 83702</p>
          <p>Time: TBA</p>
          <p>
            Dress code: Casual, please wear whatever makes you feel most
            comfortable.
          </p>
          <p>What to bring: Yourself!</p>
          <p>Parking: Lorem ipsum.</p>
          <p>Transportation: Lorem ipsum.</p>
        </div>
        <div className="w-screen">
          <Suspense fallback={<p>loading...</p>}>
            <GoogleMap />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default PartTime
