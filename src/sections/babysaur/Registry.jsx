import babyDino from "../../assets/babysaur/baby-dino.png"
import babyStars from "../../assets/babysaur/baby-stars.png"

const Registry = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${babyStars})`
      }}
      className="bg-no-repeat text-center"
    >
      <div className="flex flex-wrap justify-center pt-20">
        <InfoCard title="Registry">
          <p>
            Kayti & Jake are registered on&nbsp;
            <a href="https://my.babylist.com/kayti-dahlgren" target="_blank">
              Baby List
            </a>
            . Diapers are also much appreciated!
          </p>
        </InfoCard>
        <InfoCard title="Kayti & Jake Dahlgren">
          <p>2707 Malibu Road</p>
          <p className="pb-2">Boise, Idaho 83705</p>
        </InfoCard>
      </div>
      <div className="flex justify-end">
        <img src={babyDino} alt="blue cartoon dino" className="m-4 h-28" />
      </div>
    </div>
  )
}

const InfoCard = ({ title, children }) => (
  <div className="bg-babysaurPeach m-4 w-96 p-8 md:p-12">
    <h3 className="babysaur-header-sm">{title}</h3>
    {children}
  </div>
)

export default Registry
