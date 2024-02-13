import { HashLink } from "react-router-hash-link"

const Celebration = () => {
  return (
    <div className="m-4" id="celebration">
      <HashLink smooth to="#" className="hover:cursor-pointer">
        <h2 className="m-3 text-center font-moontime text-6xl">Celebration</h2>
      </HashLink>
      <p className="">
        You are cordially invited to celebrate with Jake and Kayti this fall at
        a venue and date to be determined.
      </p>
    </div>
  )
}

export default Celebration
