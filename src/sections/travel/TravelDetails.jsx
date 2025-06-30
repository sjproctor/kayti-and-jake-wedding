const TravelDetails = () => {
  return (
    <div className="text-center">
      <div className="standardPageLayout">
        <p className="header-lg">Travel to Boise</p>
      </div>
      <div className="mx-8 flex flex-wrap justify-around">
        <div className="my-4 md:w-1/4">
          <h3 className="font-extrabold text-greenGold">Plane Travel</h3>
          <br />
          <p>
            The Boise airport is small and easy to navigate. It is a 12 minute
            drive to downtown and a 6 minute drive to Kayti and Jake&apos;s
            house.
          </p>
          <br />
          <p>Both Uber and Lyft pickup and drop off at the airport.</p>
          <p>
            <a
              href="https://www.iflyboise.com/parking-transportation/planning-for-an-easy-airport-arrival/#:~:text=Pick%2Dup%20Location%20%2D%20Upper%20Curb,Rideshare%20Pick%2DUp%20Area.%22"
              target="blank"
            >
              See rideshare pickup details
            </a>
          </p>
        </div>
        <div className="my-4 md:w-1/4">
          <h3 className="font-extrabold text-greenGold">Car Rental</h3>
          <br />
          <p>
            Boise public transportation is all but non-existent but both Lyft
            and Uber are available in Boise and tend to be pretty quick (unless
            you are downtown at 2 am).
          </p>
          <br />
          <p>If you choose to rent a car you can do so from the airport.</p>
          <p>
            <a
              href="https://www.iflyboise.com/parking-transportation/rental-cars/"
              target="blank"
            >
              Boise airport rental car info
            </a>
          </p>
        </div>
        <div className="my-4 md:w-1/4">
          <h3 className="font-extrabold text-greenGold">Hotel Parking</h3>
          <br />
          <p>
            The Grove Hotel offers self-parking for $15 per night, valet service
            for $22 per night, and an airport shuttle that can be requested by
            calling 208-333-8000.
          </p>
          <br />
          <p>
            Home2 Suites by Hilton offers self-parking for $17 per day. No
            airport shuttle is available.
          </p>
          <br />
          <p>
            The Best Western offers self-parking for $10 per night and a free
            airport shuttle.
          </p>
          <br />
        </div>
      </div>
    </div>
  )
}

export default TravelDetails
