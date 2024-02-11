import downtown from "../assets/downtown.jpeg"

const Landing = () => {
  return (
    <main className="m-auto text-center">
      <h1 className="font-moontime text-8xl m-3">Jake + Kayti</h1>
      <h3 className="m-2">06.08.2024</h3>
      <div className="flex justify-center">
        <img
          src={downtown}
          alt="Jake and Kayti kissing under an artistic structure in downtown Boise"
          className="rounded-lg h-auto max-w-full shadow-lg dark:shadow-black/30"
        />
      </div>
    </main>
  )
}

export default Landing
