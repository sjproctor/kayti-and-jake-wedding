import NavigationBarPage from "../components/NavigationBarPage"
import mountain from "../assets/mountain.jpeg"

const Registry = () => {
  return (
    <>
      <NavigationBarPage />
      <div className="relative h-48 text-center sm:h-[24rem] md:h-[28rem] lg:h-[30rem] xl:h-[37rem] 2xl:h-[48rem]">
        <img
          src={mountain}
          alt="Kayti and Jake taking a selfie in front of tree covered mountains"
          className="h-auto w-full opacity-50"
        />
        <div className="absolute left-0 right-0 top-1 md:top-7">
          <h2 className="font-moontime text-7xl md:text-9xl">Registry</h2>
        </div>
      </div>
      <div className="m-auto w-11/12 pt-8 md:w-1/2">
        <p className="m-2 text-center font-alice text-xl uppercase text-gray md:text-2xl">
          Presence Over Presents
        </p>
        <div className=" bg-champagne px-2 py-4 text-center md:p-8 md:text-lg">
          <p>
            Kayti and Jake are very lucky to have a home and life together so
            there is no need for any gifts beyond your well wishes. They would
            prefer your presence at the August celebration rather than presents.
          </p>
        </div>
      </div>
      <br />
      <div className="text-center md:mx-10 lg:mx-40 lg:max-w-5xl">
        <p className="p-4">
          If you would like to mark the occasion of their marriage with a gift,
          they would be more than grateful. Please do not feel obliged in any
          way.
        </p>
        <h3 className="text-lg font-extrabold">Venmo</h3>
        <p>
          Kayti Venmo: @
          <a href="https://account.venmo.com/u/Kayti" target="blank">
            Kayti
          </a>
        </p>
        <p>
          Jake Venmo: @
          <a href="https://account.venmo.com/u/jake-dahlgren-1" target="blank">
            jake-dahlgren-1
          </a>
        </p>
        <br />
      </div>
      <div className="text-center md:mx-10 lg:mx-40 lg:max-w-5xl">
        <h3 className="text-lg font-extrabold">Amazon List</h3>
        <p>
          <a
            href="https://www.amazon.com/hz/wishlist/ls/31MTRVFFBOV4Q?ref_=wl_share"
            target="blank"
          >
            Wedding Registry
          </a>
        </p>
        <br />
      </div>
      <div className="text-center md:mx-10 lg:mx-40 lg:max-w-5xl">
        <h3 className="text-lg font-extrabold">Mailing Address</h3>
        <p>Kayti Proctor and Jake Dahlgren</p>
        <p>2707 Malibu Drive</p>
        <p>Boise, Idaho 83705</p>
        <br />
      </div>
    </>
  )
}

export default Registry
