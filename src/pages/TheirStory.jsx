import { Link } from "react-router-dom"
import NavigationBarPage from "../components/NavigationBarPage"
import bench from "../assets/bench.jpeg"
import beach from "../assets/beach.jpeg"
import festival from "../assets/festival.jpeg"
import graduation from "../assets/graduation.jpeg"
import greenField from "../assets/green-field.jpeg"
import jasmine from "../assets/jasmine.jpeg"
import patio from "../assets/patio.jpeg"
import proposal from "../assets/proposal.jpeg"
import ring from "../assets/ring.jpeg"

const TheirStory = () => {
  return (
    <>
      <NavigationBarPage />
      <div className="relative text-center">
        <img
          src={beach}
          alt="Jake kissing Kayti on the cheek on a beach"
          className="opacity-50"
        />
        <div className="absolute left-0 right-0 top-4 md:top-12">
          <h2 className="font-moontime text-7xl md:text-9xl">Their Story</h2>
        </div>
      </div>
      <div>
        <p className="gray-header-text">All About Kayti + Jake</p>
        <div className="m-auto w-4/5 md:w-2/3">
          <img
            src={greenField}
            alt="Kayti in Jake's arms in a field of green grass"
            className="mb-2 w-64 md:float-right md:ml-4"
          />
          <p className="text-justify">
            You know when you think of Kayti, or when you think of Jake, or when
            you think of Kayti and Jake together, and the thing that comes to
            mind is,&nbsp;
            <em>they are so nice</em>? Well, turns out their story is pretty
            nice, too.
          </p>
          <br />
          <div className="mb-2 w-64 md:float-left md:mr-4">
            <img
              src={jasmine}
              alt="Kayti in a Princess Jasmine halloween costume on the Dahlgren's porch"
              className="w-64"
            />
            <p className="text-xs text-gray">
              Picture: Kayti on the Dahlgren&apos;s porch in her favorite
              costume.
            </p>
          </div>
          <p className="text-justify">
            Kayti and Jake started dating in the summer of 2021. While that
            kicks off this part of the story, their paths had crossed a few
            times before that summer. In fact, they first met over 30 years ago.
            Jake&apos;s mom, Sue Dahlgren, was Kayti&apos;s preschool teacher.
            Kayti, along with the many other tots, was invited to the Dahlgren
            house for a Halloween party in 1993. Kayti attended in her most
            favorite costume, Princess Jasmine.
          </p>
          <br />
          <img
            src={festival}
            alt="Kayti and Jake at a music festival"
            className="mb-2 w-64 md:float-right md:ml-4"
          />
          <p className="text-justify">
            Since Kayti and Jake are very nice people, they naturally have many,
            many friends. An overlap in their friend groups found Kayti as a
            roommate to Jake&apos;s college girlfriend in 2011. Kayti and Jake
            stayed good friends over the next 10 years, often running into each
            other around town. Kayti loved seeing Jake and getting one of his
            signature hugs.
          </p>
          <br />
          <div className="mb-2 w-64 md:float-left md:mr-4">
            <img
              src={bench}
              alt="Kayti and Jake on Dad's bench on the Boise greenbelt"
              className="w-64"
            />
            <p className="text-xs text-gray">
              Picture: Kayti and Jake on David&apos;s memorial bench.
            </p>
          </div>
          <p className="text-justify">
            In 2021, Jake had back surgery and Kayti reached out during his
            convalescence with an invitation for a short walk to catch up and
            chat. The two talked about life, love, where they were in their
            journeys, and where they hope to be in the future. Their short walk
            ended up lasting over three hours. Neither had expected this to be
            the start of a life-changing relationship. They both intended to
            continue on their own paths, but there was no denying it. They were
            smitten.
          </p>
          <br />
          <div className="mb-2 w-64 md:float-right md:ml-4">
            <img
              src={graduation}
              alt="Kayti and Jake at BSU after Kayti's graduation commencement"
              className="w-64"
            />
            <p className="text-xs text-gray">
              Picture: Kayti and Jake at BSU after Kayti&apos;s graduation
              commencement.
            </p>
          </div>
          <p className="text-justify">
            Fluttery feelings aside, they took it slow and allowed their
            relationship to develop organically. They were both determined to
            honor their own paths, goals, friends, and family. But they knew
            this was something special. Before too long, I love yous were said
            and they began happily merging their lives. In the summer of 2022,
            Kayti finished her graduate degree and moved into Jake&apos;s house.
          </p>
          <br />
          <div className="mb-2 w-64 md:float-left md:mr-4">
            <img
              src={proposal}
              alt="Jake on one knee proposing to Kayti on the top of the Xunantunich monument"
              className="w-64"
            />
            <p className="text-xs text-gray">
              Picture: Jake proposing to Kayti on the top of the Xunantunich
              monument in Belize.
            </p>
          </div>
          <p className="text-justify">
            In January 2023, the Dahlgren and Proctor families spent a beautiful
            seven days in Belize. The whole nine-person crew of parents,
            siblings, and partners got along beautifully! While this was quite
            the adventure in itself, Jake had a surprise. During a tour of the
            Mayan ruin Xunantunich in western Belize, the crew climbed to the
            top of the largest monument that afforded views all the way to
            Guatemala. On the top of the structure, 130 feet from the valley
            floor, Jake proposed. Kayti, of course, said yes!
          </p>
          <br />
          <img
            src={patio}
            alt="Kayti and Jake sitting on a patio with a mountain view in the background"
            className="mb-2 w-64 md:float-right md:ml-4"
          />
          <p className="text-justify">
            Kayti and Jake will have a{" "}
            <Link to="/ceremony">small wedding ceremony</Link> in the mountains
            near Garden Valley, Idaho in early June. This will be followed by a
            celebratory gathering with extended family and friends on August 31,
            2024 in Boise, Idaho. They&apos;re so grateful for the love and
            support their friends and family have shown through the years. Every
            twist and turn has led to this moment and they could not be more
            excited for the next chapter of their lives. It is all very nice.
          </p>
          <br />
        </div>
        <div className="mb-8 flex justify-center">
          <div>
            <img
              src={ring}
              alt="Jake on one knee proposing to Kayti on the top of the Xunantunich monument"
              className="w-64"
            />
            <p className="w-64 text-xs text-gray">
              Picture: Kayti&apos;s moss agate engagement ring was hand made by
              Jake.
            </p>
          </div>
        </div>
        <div className="m-auto mb-8 w-11/12 text-center md:w-1/2">
          <p className="gray-header-text">Photo Gallery</p>
          <p>
            These two are so adorable, right? <Link to="/">Click here</Link> for
            more pictures of the lovely couple.
          </p>
        </div>
      </div>
    </>
  )
}

export default TheirStory
