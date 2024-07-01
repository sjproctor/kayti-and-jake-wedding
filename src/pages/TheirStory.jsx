import { Link } from "react-router-dom"
import NavigationBarPage from "../components/NavigationBarPage"
import PictureModal from "../components/PictureModal"
import flowerLogo from "../assets/graphics/flower-logo.png"
import beach from "../assets/beach.jpeg"
import festival from "../assets/festival.jpeg"
import graduation from "../assets/graduation.jpeg"
import jasmine from "../assets/jasmine.jpeg"
import patio from "../assets/patio.jpeg"
import proposal from "../assets/proposal.jpeg"
import ring from "../assets/ring.jpeg"
import jakeCamping from "../assets/baby-pics/jake-camping.jpg"
import kaytiStripes from "../assets/baby-pics/kayti-stripes.jpg"

const TheirStory = () => {
  return (
    <>
      <NavigationBarPage />
      <div className="relative h-52 text-center sm:h-[25rem] md:h-[30rem] lg:h-[35rem] xl:h-[46rem]">
        <img
          src={beach}
          alt="Jake kissing Kayti on the cheek on a beach"
          className="h-auto w-max opacity-50"
        />
        <div className="absolute left-0 right-0 top-4 md:top-12">
          <h2 className="font-moontime text-7xl md:text-9xl">Their Story</h2>
        </div>
      </div>
      <div className="py-10">
        <p className="gray-header-text">All About Kayti + Jake</p>
      </div>
      <div className="m-auto w-11/12 md:mb-96 lg:w-1/2">
        <p className="mb-4 text-justify">
          You know when you think of Kayti, or when you think of Jake, or when
          you think of Kayti and Jake together, and the thing that comes to mind
          is,&nbsp;
          <em>they are so nice</em>? Well, turns out their story is pretty nice,
          too.
        </p>
        <div className="mb-4 flex h-auto w-64 justify-center md:float-right md:ml-4">
          <PictureModal
            source={festival}
            altText="Kayti and Jake at a music festival"
          />
        </div>
        <p className="mb-4 text-justify">
          Kayti and Jake started dating in the summer of 2021. While that kicks
          off this part of the story, their paths had crossed a few times before
          that summer. Kayti and Jake met for the first time over 30 years ago.
          Jake&apos;s mom, Sue Dahlgren, was Kayti&apos;s preschool teacher.
          Kayti, along with many other tots, was invited to the Dahlgren house
          for a Halloween party in 1993. Kayti attended in her most favorite
          costume, Princess Jasmine.
        </p>
        <div className="mb-4 flex h-auto w-64 justify-center md:float-left md:mr-4">
          <div>
            <PictureModal
              source={jasmine}
              altText="Kayti in a Princess Jasmine halloween costume on the Dahlgren's porch"
            />
            <p className="w-64 text-xs text-gray">
              Kayti on the Dahlgren&apos;s porch in her favorite Halloween
              costume, 1993.
            </p>
          </div>
        </div>
        <p className="mb-4 text-justify">
          Since Kayti and Jake are very nice people, they naturally have many,
          many friends. An overlap in their friend groups found Kayti as a
          roommate to Jake&apos;s college girlfriend in 2011. Kayti and Jake
          stayed good friends over the next 10 years, often running into each
          other around town. Kayti loved seeing Jake and getting one of his
          signature hugs.
        </p>
        <p className="mb-4 text-justify">
          In 2021, Jake had back surgery and Kayti reached out during his
          convalescence with an invitation for a short walk to catch up and
          chat. The two talked about life, love, where they were in their
          journeys, and what their futures held. Their short walk ended up
          lasting over three hours. Neither had expected this to be the start of
          a life-changing relationship. They both intended to continue on their
          respective paths, but there was no denying it. They were smitten.
        </p>
        <div className="mb-4 flex h-auto w-64 justify-center md:float-left md:mr-4">
          <PictureModal
            source={patio}
            altText="Kayti and Jake sitting on a patio with a mountain view in the background"
          />
        </div>
        <p className="mb-4 text-justify">
          Fluttery feelings aside, they took it slow and allowed their
          relationship to develop organically. They were both determined to
          honor their goals, friends, and family. But they knew this was
          something special. Before too long, I love yous were said and they
          began happily merging their lives. In the summer of 2022, Kayti
          finished her graduate degree and moved into Jake&apos;s house.
        </p>
        <div className="mb-4 flex h-auto w-64 justify-center md:float-right md:ml-4">
          <div>
            <PictureModal
              source={graduation}
              altText="Kayti and Jake at BSU after Kayti's graduation commencement"
            />
            <p className="w-64 text-xs text-gray">
              Kayti and Jake at BSU after Kayti&apos;s graduation commencement,
              May 2022.
            </p>
          </div>
        </div>
        <p className="mb-4 text-justify">
          In January 2023, the Dahlgren and Proctor families spent a beautiful
          seven days in Belize. The nine-person crew of parents, siblings, and
          partners got along beautifully! While this was quite the adventure in
          itself, Jake had a surprise. During a tour of the Mayan ruin
          Xunantunich in western Belize, the group climbed to the top of the
          largest monument that afforded views all the way to Guatemala. On the
          top of the structure, 130 feet from the valley floor, Jake proposed.
          Kayti, of course, said yes!
        </p>
        <div className="mb-4 flex h-auto w-64 justify-center md:float-left md:mr-4">
          <div>
            <PictureModal
              source={proposal}
              altText="Jake on one knee proposing to Kayti on the top of the Xunantunich monument"
            />
            <p className="w-64 text-xs text-gray">
              Jake proposing to Kayti on the top of the Xunantunich monument in
              Belize, January 2023.
            </p>
          </div>
        </div>
        <p className="mb-4 text-justify">
          Kayti and Jake were married in a small wedding&nbsp;
          <Link to="/ceremony">ceremony</Link> on the banks of the Middle Fork
          of the Payette river near Garden Valley, Idaho on June 8th, 2024. They
          will be celebrating with extended family and friends on August 31,
          2024, in Boise, Idaho. They&apos;re so grateful for the love and
          support their friends and family have shown through the years. Every
          twist and turn has led to this moment and they are so excited to start
          the next chapter of their lives. It is all very nice.
        </p>
        <div className="mb-4 flex h-auto w-64 justify-center md:float-right md:ml-4">
          <div>
            <PictureModal
              source={ring}
              altText="Kayti wearing her new engagement ring next to a hibiscus"
            />
            <p className="w-64 text-xs text-gray">
              Kayti&apos;s moss agate engagement ring was handmade by Jake.
            </p>
          </div>
        </div>
      </div>
      <div className="m-auto w-11/12 text-center md:w-1/2">
        <p className="gray-header-text">Photo Gallery</p>
        <p>
          These two are so adorable, right? <Link to="/photos">Click here</Link>
          &nbsp; for more pictures of the lovely couple.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <img
          src={jakeCamping}
          alt="Baby Jake all dirty while camping"
          className="h-60 w-auto p-4"
        />
        <img
          src={kaytiStripes}
          alt="Baby Kayti in a striped outfit"
          className="h-60 w-auto p-4"
        />
      </div>
      <div className="flex justify-center">
        <img
          src={flowerLogo}
          className="m-8 h-auto w-28"
          alt="Kayti and Jake wedding logo"
        />
      </div>
    </>
  )
}

export default TheirStory
