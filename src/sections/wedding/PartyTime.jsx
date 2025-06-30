import AnchorLink from "react-anchor-link-smooth-scroll"
import Timeline from "../../components/Timeline"
import dlWedding from "../../assets/dl-wedding.jpeg"
import treeLogo from "../../assets/graphics/tree-logo.png"
import GoogleMap from "../../components/GoogleMap"

const PartyTime = () => {
  return (
    <div id="party">
      <div className="relative text-center">
        <img
          src={dlWedding}
          alt="Kayti and Jake looking snazzy at Dan and Laura's wedding"
          className="h-auto w-max opacity-50"
        />
        <div className="absolute left-0 right-0 top-4 md:top-12">
          <h2 className="font-moontime text-5xl md:text-9xl">
            Party Information
          </h2>
        </div>
      </div>
      <p className="header-lg">Celebration Schedule</p>
      <Timeline />
      <p className="header-lg">Details, Details, Details</p>
      <div className="mx-auto w-11/12 pt-4 text-center md:w-2/3">
        <h3 className="text-lg font-extrabold">What to know before...</h3>
        <p className="py-2">
          <b>RSVP: </b>Please
          <AnchorLink href="#rsvp" className="px-1">
            submit your RSVP
          </AnchorLink>
          as soon as possible. If your RSVP status changes, please resubmit the
          form and add a note.
        </p>
        <p className="py-2">
          <b>Attire: </b>We&apos;ll be outside on the grass and it&apos;s gonna
          be hot, y&apos;all. August temps in Boise regularly hit 90 degrees.
          Please wear whatever makes you feel comfortable. As a guide, think:
          sundresses, flipflops, rompers, linen button-ups. Not so much: formal
          wear or swimwear.
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
          Jake&apos;s neighbors! We HIGHLY recommend carpooling, biking, or
          using ride shares. We will have a large bike rack available for you to
          lock up your wheels.
        </p>
        <br />
        <h3 className="text-lg font-extrabold">What to know during...</h3>
        <p className="py-2">
          <b>Drinks: </b>We are doing drinks self-serve style. We will have
          water, non-alcoholic beverages, beer, wine, and cocktails. Alcohol is
          only available to adults of legal drinking age. Please regulate your
          alcohol consumption.
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
        <p className="header-lg">Resources</p>
        <h3 className="text-lg font-extrabold" id="map">
          Current seven day weather forecast
        </h3>
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
          !(function (dom, script, widget) {
            let scriptTag,
              scriptModule = dom.getElementsByTagName(script)[0]
            if (!dom.getElementById(widget)) {
              scriptTag = dom.createElement(script)
              scriptTag.widget = widget
              scriptTag.src = "https://weatherwidget.io/js/widget.min.js"
              scriptModule.parentNode.insertBefore(scriptTag, scriptModule)
            }
          })(document, "script", "weatherwidget-io-js")
        }
        <br />
        <h3 className="text-lg font-extrabold" id="map">
          Look, a map!
        </h3>
        <p>2707 Malibu Road</p>
        <p>Boise, Idaho 83705</p>
      </div>
      <br />
      <div className="w-screen">
        <GoogleMap />
      </div>
      <div className="flex justify-center">
        <img
          src={treeLogo}
          className="m-8 h-auto w-28"
          alt="Kayti and Jake wedding logo"
        />
      </div>
    </div>
  )
}

export default PartyTime
