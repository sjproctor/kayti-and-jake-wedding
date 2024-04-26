import AnchorLink from "react-anchor-link-smooth-scroll"
import { BiBowlRice } from "react-icons/bi"
import { PiChampagne } from "react-icons/pi"
import { BiParty } from "react-icons/bi"
import { CiBeerMugFull } from "react-icons/ci"
import { FaRegHandPeace } from "react-icons/fa6"
import { LiaCheeseSolid } from "react-icons/lia"

const Timeline = () => {
  return (
    <div className="m-2">
      <ol className="relative ml-4 border-s border-gray md:ml-16">
        <li className="mb-8 ms-5">
          <div className="absolute -start-4 mt-4 rounded-full border bg-white text-center text-gray">
            <div className="flex justify-center p-1.5 align-bottom">
              <BiParty />
            </div>
          </div>
          <time className="mb-1 text-sm font-normal leading-none text-gray">
            5 pm
          </time>
          <h3 className="text-lg font-semibold">Start the Party!</h3>
          <p>
            We will be in the backyard of Kayti and Jake&apos;s at{" "}
            <b>2707 Malibu Road, Boise, Idaho 83705</b>.
          </p>
          <p>
            <AnchorLink href="#map">See the map</AnchorLink>.
          </p>
          <p className="mb-2">Drinks, snacks, and music will commence.</p>
        </li>
        <li className="mb-8 ms-5">
          <div className="absolute -start-4 mt-4 rounded-full border bg-white text-center text-gray">
            <div className="flex justify-center p-1.5 align-bottom">
              <BiBowlRice />
            </div>
          </div>
          <time className="mb-1 text-sm font-normal leading-none text-gray">
            6 pm
          </time>
          <h3 className="text-lg font-semibold">Dinner is Available</h3>
          <p>
            We will have Kanak Attack and Taco trucks with a variety of options.
          </p>
          <p className="mb-2">Dinner will be available from 6 pm to 8 pm.</p>
        </li>
        <li className="mb-8 ms-5">
          <div className="absolute -start-4 mt-4 rounded-full border bg-white text-center text-gray">
            <div className="flex justify-center p-1.5 align-bottom">
              <PiChampagne />
            </div>
          </div>
          <time className="mb-1 text-sm font-normal leading-none text-gray">
            7 pm
          </time>
          <h3 className="text-lg font-semibold">Toast to Kayti and Jake</h3>
          <p>
            We will provide bubbly beverages to toast to the bride and groom.
          </p>
          <p className="mb-2">Short speeches are welcome. But no pressure!</p>
        </li>
        <li className="mb-8 ms-5">
          <div className="absolute -start-4 mt-4 rounded-full border bg-white text-center text-gray">
            <div className="flex justify-center p-1.5 align-bottom">
              <LiaCheeseSolid />
            </div>
          </div>
          <time className="mb-1 text-sm font-normal leading-none text-gray">
            8 pm
          </time>
          <h3 className="text-lg font-semibold">Dinner Service Ends</h3>
          <p className="mb-2">
            The food trucks will wrap up but snacks will be available.
          </p>
        </li>
        <li className="mb-8 ms-5">
          <div className="absolute -start-4 mt-4 rounded-full border bg-white text-center text-gray">
            <div className="flex justify-center p-1.5 align-bottom">
              <FaRegHandPeace />
            </div>
          </div>
          <time className="mb-1 text-sm font-normal leading-none text-gray">
            9 pm
          </time>
          <h3 className="text-lg font-semibold">Wrap Up</h3>
          <p className="mb-2">
            We will wrap up our backyard party out of respect for Kayti and
            Jake&apos;s neighbors.
          </p>
        </li>
        <li className="mb-8 ms-5">
          <div className="absolute -start-4 mt-4 rounded-full border bg-white text-center text-gray">
            <div className="flex justify-center p-1.5 align-bottom">
              <CiBeerMugFull />
            </div>
          </div>
          <time className="mb-1 text-sm font-normal leading-none text-gray">
            10 pm
          </time>
          <h3 className="text-lg font-semibold">After Party</h3>
          <p>Ummm.... did someone say after party?</p>
          <p className="mb-2">Location TBD.</p>
        </li>
      </ol>
    </div>
  )
}

export default Timeline
