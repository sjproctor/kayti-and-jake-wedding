import React, { Suspense } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Timeline from "../components/Timeline"
import dlWedding from "../assets/dl-wedding.jpeg"
import treeLogo from "../assets/graphics/tree-logo.png"
const GoogleMap = React.lazy(() => import("../components/GoogleMap"))

const PartyTime = () => {
  return (
    <div id="party">
      <div className="relative text-center">
        <img
          src={dlWedding}
          alt="Kayti and Jake looking snazzy at Dan and Laura's wedding"
          className="opacity-50"
        />
        <div className="absolute left-0 right-0 top-4 md:top-12">
          <h2 className="font-moontime text-5xl md:text-9xl">
            Party Information
          </h2>
        </div>
      </div>
      <p className="gray-header-text">Celebration Schedule</p>
      <Timeline />
      <p className="gray-header-text">Details, Details, Details</p>
      <div className="mx-auto w-11/12 pt-4 text-center md:w-2/3">
        <h3 className="text-lg font-extrabold">What to know before...</h3>
        <p className="py-2">
          <b>RSVP: </b>Please
          <AnchorLink href="#rsvp" className="px-1">
            submit the RSVP
          </AnchorLink>
          form by July 1, 2024. (Happy birthday, Kayti!) If your RSVP status
          changes, please resubmit the form and add a note.
        </p>
        <p className="py-2">
          <b>Attire: </b>We&apos;re gonna be outside on the grass and it&apos;s
          gonna be hot, y&apos;all. Temperatures in August in Boise regularly
          hit 90 degrees. Please wear what will make you feel comfortable. As a
          guide, think: sundresses, flipflops, rompers, linen button-ups. Not so
          much: swimwear or suits.
        </p>
        <p className="py-2">
          <b>What to bring: </b>We will have everything needed for a fun party.
          Additional beverage contributions are very appreciated.
        </p>
        <br />
        <h3 className="text-lg font-extrabold">
          What to know as you arrive...
        </h3>
        <p className="py-2">
          <b>Timing: </b>Need to come late or leave early? No problem. We know
          life is busy so do your thing.
        </p>
        <p className="py-2">
          <b>Parking: </b>All parking is on the street in Kayti and Jake&apos;s
          neighborhood. Spots close to the house will fill up early so be
          prepared to walk a few blocks. Please be respectful of Kayti and
          Jake&apos;s neighbors! We HIGHLY recommend using ride shares.
        </p>
        <br />
        <h3 className="text-lg font-extrabold">What to know during...</h3>
        <p className="py-2">
          <b>Drinks: </b>We are doing drinks self-serve style. Alcohol is
          available only to adults of legal drinking age. Please regulate your
          alcohol consumption. We will have water, non-alcoholic beverages,
          beer, wine, and cocktails. Beverage contributions are very
          appreciated.
        </p>
        <p className="py-2">
          <b>Food: </b>We&apos;ll have a variety of options for dinner as well
          as snacks and desserts. If you have dietary concerns you are welcome
          to bring your own food. We will have some extra cooler space.
        </p>
        <p className="py-2">
          <b>After hours: </b>Let&apos;s be real, there&apos;s gonna be an after
          party. Help Kayti and Jake by wrapping up the party promptly at 9 pm
          so we can get to the next location.
        </p>
        <br />
      </div>
      <div className="text-center">
        <p>
          <AnchorLink href="#faq" className="px-1">
            Click here for FAQs.
          </AnchorLink>
        </p>
        <br />
        <p className="gray-header-text">Resources</p>
        <h3 className="text-lg font-extrabold" id="map">
          Current seven day weather forecast
        </h3>
        <Suspense fallback={<p>loading...</p>}>
          <a
            className="weatherwidget-io"
            href="https://forecast7.com/en/43d62n116d21/boise/?unit=us"
            data-label_1="BOISE"
            data-label_2="WEATHER"
            data-theme="original"
          >
            Seven Day Boise Weather Forecast
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
        </Suspense>
        <br />
        <h3 className="text-lg font-extrabold" id="map">
          Look, a map!
        </h3>
        <p>2707 Malibu Road</p>
        <p>Boise, Idaho 83705</p>
      </div>
      <br />
      <div className="w-screen">
        <Suspense fallback={<p>loading...</p>}>
          <GoogleMap />
        </Suspense>
      </div>
      <div className="flex justify-center">
        <img
          src={treeLogo}
          className="m-8 w-28"
          alt="Kayti and Jake wedding logo"
        />
      </div>
    </div>
  )
}

export default PartyTime
