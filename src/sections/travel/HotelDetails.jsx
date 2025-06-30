const HotelDetails = () => {
  return (
    <div className="text-center">
      <div className="standardPageLayout">
        <p className="header-lg">Hotels</p>
        <p>
          We have blocks of standard rooms reserved at the Grove Hotel and Home2
          Suites by Hilton in downtown Boise for Friday, August 30 through
          Sunday, September 1, 2024. If you would like to stay at either of
          these hotels <b>we encourage you to book ASAP</b>.
        </p>
      </div>
      <div className="m-8 flex flex-wrap justify-around">
        <div className="my-4 md:w-1/4">
          <a
            href="https://www.grovehotelboise.com/"
            target="blank"
            className="text-greenGold"
          >
            <h3 className="font-extrabold">Boise Grove Hotel</h3>
          </a>
          <p>245 S. Capitol Blvd</p>
          <p>Boise, ID 83702</p>
          <p></p>
          <br />
          <p className="text-sm text-gray">
            Courtesy group rate: $209 per night
          </p>
          <p className="text-sm text-gray">
            Group name: The Proctor-Dahlgren Wedding
          </p>
          <br />
          <p>
            <b>
              Call 208-489-2222, select option 3 or book&nbsp;
              <a
                href="https://bookings.travelclick.com/76224?domain=portal.travelclick.com&groupID=4303696#/guestsandrooms"
                target="bank"
              >
                here
              </a>
              &nbsp;by 7/31/2024
            </b>
          </p>
          <br />
          <p>15 minutes from Kayti and Jake</p>
          <p>
            <a
              href="https://www.google.com/maps/dir/The+Grove+Hotel,+245+S+Capitol+Blvd,+Boise,+ID+83702/2707+Malibu+Rd,+Boise,+ID+83705/@43.5952215,-116.2383261,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x54aef8e5212b8227:0xd10c1691121e4ea9!2m2!1d-116.2037792!2d43.6139805!1m5!1m1!1s0x54ae57e771e1c4d9:0x4afa883c20147fbb!2m2!1d-116.2281049!2d43.5779182!3e0?entry=ttu"
              target="blank"
            >
              See directions
            </a>
          </p>
        </div>
        <div className="my-4 md:w-1/4">
          <a
            href="https://www.grovehotelboise.com/"
            target="blank"
            className="text-greenGold"
          >
            <h3 className="font-extrabold">Home2 Suites by Hilton</h3>
          </a>
          <p>202 S. 6th Street</p>
          <p>Boise, ID 83702</p>
          <p></p>
          <br />
          <p className="text-sm text-gray">
            Courtesy group rate: $189 per night
          </p>
          <p className="text-sm text-gray">Group name: Dahlgren Reception</p>
          <br />
          <p>
            <b>
              Call 208-336-8277 or book&nbsp;
              <a
                href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=BOIBDHT&arrivalDate=2024-08-30&departureDate=2024-09-01&groupCode=CHT911&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink"
                target="bank"
              >
                here
              </a>
              &nbsp;by 8/17/2024
            </b>
          </p>
          <br />
          <p>12 minutes from Kayti and Jake</p>
          <p>
            <a
              href="https://www.google.com/maps/dir/Home2+Suites+by+Hilton+Boise+Downtown,+South+6th+Street,+Boise,+ID/2707+Malibu+Rd,+Boise,+ID+83705/@43.5975917,-116.2386744,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x54aef8fb3abf998b:0x3343261750eb268b!2m2!1d-116.2022243!2d43.6129504!1m5!1m1!1s0x54ae57e771e1c4d9:0x4afa883c20147fbb!2m2!1d-116.2281049!2d43.5779182!3e0?entry=ttu"
              target="blank"
            >
              See directions
            </a>
          </p>
        </div>
        <div className="my-4 md:w-1/4">
          <a
            href="https://www.bestwestern.com/en_US/book/hotels-in-boise/best-western-vista-inn-at-the-airport/propertyCode.13029.html"
            target="blank"
            className="text-greenGold"
          >
            <h3 className="font-extrabold">Best Western Vista Inn</h3>
          </a>
          <p>2645 Airport Way</p>
          <p>Boise, ID 83705</p>
          <p></p>
          <br />
          <p className="text-sm text-gray">Current rate: $159-170 per night</p>
          <p className="text-sm text-gray">Book early for a discounted rate!</p>
          <br />
          <p>
            <b>
              Call 208-336-8100 or book&nbsp;
              <a
                href="https://www.bestwestern.com/en_US/book/hotels-in-boise/best-western-vista-inn-at-the-airport/propertyCode.13029.html"
                target="bank"
              >
                here
              </a>
            </b>
          </p>
          <br />
          <p>5 minutes from Kayti and Jake</p>
          <p>
            <a
              href="https://www.google.com/maps/dir/2645+W+Airport+Way,+Boise,+ID+83705/2707+Malibu+Rd,+Boise,+ID+83705/@43.5732794,-116.226273,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x54ae57fc15e9e7db:0xac5cc380d8f357a!2m2!1d-116.2142754!2d43.5686253!1m5!1m1!1s0x54ae57e771e1c4d9:0x4afa883c20147fbb!2m2!1d-116.2281049!2d43.5779182!3e0?entry=ttu"
              target="blank"
            >
              See directions
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default HotelDetails
