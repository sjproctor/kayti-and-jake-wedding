import downtown from "../assets/downtown.jpeg"

const Landing = () => {
  return (
    <main className="m-auto text-center">
      <h1 className="m-3 font-moontime text-8xl">Jake + Kayti</h1>
      <h3 className="m-2">06.08.2024</h3>
      <div className="flex justify-center">
        <img
          src={downtown}
          alt="Jake and Kayti kissing under an artistic structure in downtown Boise"
          className="dark:shadow-black/30 h-auto max-w-full rounded-lg shadow-lg"
        />
      </div>
    </main>
  )
}

export default Landing
