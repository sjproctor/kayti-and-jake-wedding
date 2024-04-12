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
          Kayti and Jake on August 31, 2024. The party will be in Kayti and
          Jake&apos;s backyard.
        </div>
        <div className="mb-3 md:mx-10 lg:mx-40 lg:max-w-5xl">
          <p>Location: Kayti and Jake&apos;s House</p>
          <p>Address: 2707 Malibu Road, Boise, Idaho 83702</p>
          <p>Date: Saturday, August 31, 2024</p>
          <p>Time: 6 - 9 pm</p>
          <p>
            Dress code: The average August 31 temperature in Boise is 86
            degrees. Please wear whatever makes you feel most comfortable.
          </p>
          <a
            className="weatherwidget-io"
            href="https://forecast7.com/en/43d62n116d21/boise/?unit=us"
            data-label_1="BOISE"
            data-label_2="WEATHER"
            data-theme="original"
          >
            BOISE WEATHER
          </a>

          {
            !(function (d, s, id) {
              var js,
                fjs = d.getElementsByTagName(s)[0]
              if (!d.getElementById(id)) {
                js = d.createElement(s)
                js.id = id
                js.src = "https://weatherwidget.io/js/widget.min.js"
                fjs.parentNode.insertBefore(js, fjs)
              }
            })(document, "script", "weatherwidget-io-js")
          }

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
