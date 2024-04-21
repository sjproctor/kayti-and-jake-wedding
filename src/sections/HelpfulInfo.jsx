import belize from "../assets/belize.jpeg"
import treeLogo from "../assets/graphics/tree-logo.png"

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
          <h2 className="font-moontime text-5xl md:text-9xl">
            Helpful Information
          </h2>
        </div>
      </div>
      <div className="m-auto w-11/12 pt-8 md:w-1/2">
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
          I am invited to the celebration in August?
        </h3>
        <p>Heck yes you are!</p>
        <p>
          If you are excited about celebrating with Kayti and Jake, you are
          invited. We are expecting a pretty big turn out. That being said, we
          know life is busy and Kayti and Jake don&apos;t want anyone to feel
          obligated to attend if it creates a hardship in any way.
        </p>
        <br />
        <h3 className="text-lg font-extrabold">Should I RSVP?</h3>
        <p>
          Please do! We want to make sure we plan for the right number of
          guests. Please click here to RSVP by July 15, 2024.
        </p>
        <br />
        <h3 className="text-lg font-extrabold">What&apos;s the party vibe?</h3>
        <p>
          The celebration will be in Kayti and Jake&apos;s backyard. There will
          be beverages, food, music, and dancing. Kayti and Jake just want to be
          with all the people they love and have some fun. Think more summer BBQ
          hang less traditional wedding reception.
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
        <h3 className="text-lg font-extrabold">
          What&apos;s the schedule for the party?
        </h3>
        <p>
          We&apos;ll kick things off around 5 pm with beverages, snacks, and
          music. Dinner will be available from 6 pm to 8 pm. We&apos;ll do a
          toast to the bride and groom around 7 pm. The party will wind down
          around 9 pm out of respect for Kayti and Jake&apos;s neighbors.
        </p>
        <br />
        <h3 className="text-lg font-extrabold">What should I wear?</h3>
        <p>
          The party will be held outdoors in Kayti and Jake&apos;s backyard. We
          will have shade tents and misters, but expect it to be hot. August
          days in Boise typically hit 90 degrees. With that in mind, please wear
          whatever makes you feel comfortable. We will be on grass and gravel
          surfaces so choose your footwear accordingly.
        </p>
        <br />
        <h3 className="text-lg font-extrabold">What should I bring?</h3>
        <p>
          Yourself, your people, and your party pants! We will provide dinner,
          snacks, water, non-alcoholic drinks, beer, wine, cocktails, and other
          party amenities. Feel free to bring your own drinks or food if you
          prefer but we can&apos;t guarantee kitchen or fridge space.
        </p>
        <br />
        <h3 className="text-lg font-extrabold">
          What&apos;s the gift situation?
        </h3>
        <p>
          Kayti and Jake feel very lucky to have a home and life together, so
          there is no need for any gifts beyond your well wishes. They would
          prefer your presence rather than presents!
        </p>
        <p>
          If you would like to mark the occasion of their marriage with a gift,
          they would be more than grateful. Check out this link for more info.
        </p>
        <br />
        <h3 className="text-lg font-extrabold">Where should I park?</h3>
        <p>
          Kayti and Jake live in the neighborhood near Hillcrest. All parking
          will be on the street. You should expect to park a couple blocks away
          and walk. Please be respectful of Kayti and Jake&apos;s neighbors and
          do not block driveways. If you are going to be drinking alcohol, DO
          NOT DRIVE. We recommend carpooling and using ride shares.
        </p>
        <br />
        <h3 className="text-lg font-extrabold">
          I&apos;m traveling from out of town. What should I know as I plan my
          trip?
        </h3>
        <p>
          First of all, thanks for coming all the way to Boise to celebrate with
          Kayti and Jake. Secondly, we have a bunch of info for you to help you
          plan your travel and stay in Boise. Check out this link.
        </p>
        <br />
        <h3 className="text-lg font-extrabold">Anything else?</h3>
        <p>
          We are all looking forward to this event. I know that if you are a
          friend of Kayti and Jake you are a pretty cool person. Bring that cool
          person vibe along with your respect and consideration of other guests
          and neighbors, and we will all have a great time.
        </p>
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

export default HelpfulInfo
