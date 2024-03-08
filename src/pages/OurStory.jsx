import AnchorLink from "react-anchor-link-smooth-scroll"
import bench from "../assets/bench.jpeg"
import graduation from "../assets/graduation.jpeg"
import greenField from "../assets/green-field.jpeg"
import festival from "../assets/festival.jpeg"
import jasmine from "../assets/jasmine.jpeg"
import patio from "../assets/patio.jpeg"
import proposal from "../assets/proposal.jpeg"

const OurStory = () => {
  return (
    <div className="m-4" id="our-story">
      <AnchorLink smooth href="#home" className="hover:cursor-pointer">
        <h2 className="m-3 text-center font-moontime text-6xl ">Our Story</h2>
      </AnchorLink>
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        You know when you think of Kayti, or when you think of Jake, or when you
        think of Kayti and Jake together, and the thing that comes to mind
        is,&nbsp;
        <em>they are so nice</em>? Well, turns out their story is pretty nice,
        too.
      </p>
      <img
        src={greenField}
        alt="Kayti in Jake's arms in a field of green grass"
        className="dark:shadow-black/30 m-5 mx-auto w-64 rounded-full shadow-lg"
      />
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        Kayti and Jake started dating in the summer of 2021. While that kicks
        off this part of the story, their paths had crossed a few times before
        that summer. In fact, they first met over 30 years ago. Jake&apos;s mom,
        Sue Dahlgren, was Kayti&apos;s preschool teacher. Kayti, along with the
        many other tots, was invited to the Dahlgren house for a Halloween party
        in 1993. Kayti attended in her most favorite costume, Princess Jasmine.
      </p>
      <img
        src={jasmine}
        alt="Kayti in a Princess Jasmine halloween costume"
        className="dark:shadow-black/30 m-5 mx-auto w-64 rounded-full shadow-lg"
      />
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        Since Kayti and Jake are very nice people, they naturally have many,
        many friends. An overlap in their friend groups found Kayti as a
        roommate to Jake&apos;s college girlfriend in 2011. Kayti and Jake
        stayed good friends over the next 10 years, often running into each
        other around town. Kayti loved seeing Jake and getting one of his
        signature hugs.
      </p>
      <img
        src={festival}
        alt="Kayti and Jake at a music festival"
        className="dark:shadow-black/30 m-5 mx-auto w-64 rounded-full shadow-lg"
      />
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        In 2021, Jake had back surgery and Kayti reached out during his
        convalescence with an invitation for a short walk to catch up and chat.
        The two talked about life, love, where they were in their journeys, and
        where they hope to be in the future. Their short walk ended up lasting
        over three hours. Neither had expected this to be the start of a
        life-changing relationship. They both indented to continue on their own
        paths, but there was no denying it. They were smitten.
      </p>
      <img
        src={bench}
        alt="Kayti and Jake on Dad's bench on the Boise greenbelt"
        className="dark:shadow-black/30 m-5 mx-auto w-64 rounded-full shadow-lg"
      />
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        Fluttery feelings aside, they took it slow and allowed their
        relationship to develop organically. They were both determined to honor
        their own paths, goals, friends, and family. But they knew this was
        something special. Before too long, I love yous were said and they began
        happily merging their lives. In the summer of 2022, Kayti finished her
        graduate degree and moved into Jake&apos;s house.
      </p>
      <img
        src={graduation}
        alt="Kayti and Jake at BSU after Kayti's graduation ceremony"
        className="dark:shadow-black/30 m-5 mx-auto w-64 rounded-full shadow-lg"
      />
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        In January 2023, the Dahlgren and Proctor families spent a beautiful
        seven days in Belize. The whole nine-person crew of parents, siblings,
        and partners got along beautifully! While this was quite the adventure
        in itself, Jake had a surprise. During a tour of the Mayan ruin
        Xunantunich in western Belize, the crew climbed to the top of the
        largest monument that afforded views all the way to Guatemala. On the
        top of the structure, 130 feet from the valley floor, Jake proposed.
        Kayti, of course, said yes!
      </p>
      <img
        src={proposal}
        alt="Jake on one knee proposing to Kayti on the top of the Xunantunich monument"
        className="dark:shadow-black/30 m-5 mx-auto w-64 rounded-full shadow-lg"
      />
      <p className="md:mx-10 lg:mx-40 lg:max-w-5xl">
        Kayti and Jake will have a small wedding ceremony in the mountains near
        Garden Valley, Idaho in June. This will be followed by a celebratory
        gathering with extended family and friends on August 31, 2024 in Boise,
        Idaho. They&apos;re so grateful for the love and support their friends
        and family have shown through the years. Every twist and turn has led to
        this moment and they could not be more excited for the next chapter of
        their lives. It is all very nice.
      </p>
      <img
        src={patio}
        alt="Kayti and Jake sitting on a patio with a mountain view in the background"
        className="dark:shadow-black/30 m-5 mx-auto w-64 rounded-full shadow-lg"
      />
    </div>
  )
}

export default OurStory
