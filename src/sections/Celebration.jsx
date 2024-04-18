import { Link } from "react-router-dom"

const Celebration = () => {
  return (
    <div className="bg-gray text-white p-4 text-center" id="celebration">
      <h2 className="m-3 font-moontime text-6xl">Celebration</h2>
      <p className="mx-4 md:mx-40 md:max-w-5xl">
        Please join us for fun, food, drinks, music and general merriment.
      </p>
      <br />
      <div className="mx-4 md:mx-40 md:max-w-5xl">
        <p className="text-2xl">Saturday, August 31, 2024</p>
        <p className="text-3xl uppercase">Boise, Idaho</p>
        <p className="text-2xl">Kayti and Jake&apos;s House</p>
        <p className="text-2xl">2707 Malibu Road | 83705</p>
      </div>
      <br />
      <div className="mx-4 md:mx-40 md:max-w-5xl">
        <p className="">4 pm music and beverages | 5 pm dinner</p>
      </div>
      <br />
      <div className="mx-4 md:mx-40 md:max-w-5xl">
        <Link to="/party" className="!decoration-solid">
          See More Information
        </Link>
      </div>
    </div>
  )
}

export default Celebration
