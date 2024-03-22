import downtown from "../assets/downtown.jpeg"

const Landing = () => {
  return (
    <main className="m-auto text-center">
      <h1 className="m-3 font-moontime text-6xl md:text-8xl">Kayti and Jake</h1>
      <div className="flex justify-center">
        <img
          src={downtown}
          alt="Kayti and Jake kissing under an artistic structure in downtown Boise"
          className="dark:shadow-black/30 h-auto max-w-full shadow-lg lg:rounded-lg"
        />
      </div>
    </main>
  )
}

export default Landing
