import belize from "../assets/belize.jpeg"
import flowerLogo from "../assets/graphics/flower-logo.png"

const HelpfulInfo = () => {
  return (
    <div id="info" className="text-center">
      <div className="relative text-center">
        <img
          src={belize}
          alt="Kayti and Jake in the back of a golf cart in Belize"
          className="opacity-50"
        />
        <div className="absolute left-0 right-0 top-4 md:top-12">
          <h1 className="font-moontime text-5xl md:text-9xl">
            Helpful Information
          </h1>
        </div>
      </div>
      <div className="m-auto w-11/12 py-8 md:w-1/2">
        <h3 className="text-lg font-extrabold">
          Hey Sarah, I have some questions.
        </h3>
        <p>Great, I have some answers.</p>
        <br />
        <h3 className="text-lg font-extrabold">So, when is the wedding?</h3>
        <p>
          Kayti and Jake are officially tying the knot in a small ceremony in
          early June. They are throwing a party to celebrate with family and
          friends on August 31st, 2024.
        </p>
        <br />
        <h3 className="text-lg font-extrabold">
          I am invited to the celebration?
        </h3>
        <p>Heck yes you are!</p>
        <br />
        <h3 className="text-lg font-extrabold">What&apos;s the party vibe?</h3>
        <p>
          The celebration will be in Kayti and Jake&apos;s backyard. There will
          be beverages, food, music, music and dancing. Kayti and Jake just want
          to hang out with all the people they love and have some fun. Think
          more summer BBQ vibes less traditional wedding reception.
        </p>
        <br />
        <h3 className="text-lg font-extrabold">Can I bring my kiddos?</h3>
        <p>Bring the fam! Humans of all age are welcome.</p>
        <br />
        <h3 className="text-lg font-extrabold">What about my dog?</h3>
        <p>
          As you know, Kayti and Jake love dogs. But, there are going to be a
          lot of people and open gates in the yard so Kayti and Jake have asked
          not to have pets. Their own pitty, Lola Moon will be at doggy daycare
          during the celebration.
        </p>
        <br />
        <h3 className="text-lg font-extrabold">What time should I arrive?</h3>
        <p>Answer</p>
        <br />
        <h3 className="text-lg font-extrabold">What should I wear?</h3>
        <p>Answer</p>
        <br />
        <h3 className="text-lg font-extrabold">What should I bring?</h3>
        <p>Answer</p>
        <br />
        <h3 className="text-lg font-extrabold">Where should I park?</h3>
        <p>Answer</p>
        <br />
        <h3 className="text-lg font-extrabold">Question</h3>
        <p>Answer</p>
        <br />
      </div>
      <div className="flex justify-center">
        <img
          src={flowerLogo}
          className="m-8 w-28"
          alt="Kayti and Jake wedding logo"
        />
      </div>
    </div>
  )
}

export default HelpfulInfo
