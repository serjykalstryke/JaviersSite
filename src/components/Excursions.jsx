import { Row, Col, ListGroup, Tab, Image } from "react-bootstrap";

const Excursions = () => {
  return (
    <div
      className="excursionsContainer px-4 justify-content-evenly"
      id="excursions"
    >
      <Tab.Container
        id="list-group-tabs-example tabContainer"
        defaultActiveKey="#link1"
      >
        <Row className="tabs row row-cols-lg-5 g-2">
          <Col lg={3} className="p-4">
            <ListGroup>
              <ListGroup.Item action href="#link1">
                <span className="excursionTitle">
                  Horse Back Riding, Sloth Hangout and Tour
                </span>
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                <span className="excursionTitle">Sloth and Monkey Hangout</span>
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                <span className="excursionTitle">Best of Roatan Tour</span>
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                <span className="excursionTitle">Tour to the Beach</span>
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                <span className="excursionTitle">ATV Tours</span>
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                <span className="excursionTitle">
                  Little French Key Day Pass
                </span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={9} className="p-10">
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <Image className="excursionOneImage" />{" "}
                <p className="excursionText">
                  <span>Price: $85.00 P.P.</span>
                  <div className="heroLine" />
                  This package includes: round way transportation, sightseeing
                  city tour, animal sanctuary, horse back riding inland & in the
                  beautiful caribbean sea along with stops at the Roatan sign
                  for pictures.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <Image className="excursionTwoImage" />{" "}
                <p className="excursionText">
                  <span>Price: $85.00 P.P.</span>
                  <div className="heroLine" />
                  What Included: Round trip A.C Vehicle and English speaking
                  tour guide for the day, free entrance to our preservation
                  Monkeys & Sloth Park, Snorkeling trip out to our colorful
                  coral reef and Ship wreck.
                  <br />
                  <br />
                  Discover the highlight of roatan and enjoy an spectacular
                  scenery of our island culture during your day, When you meet
                  up with your tour representative at your cruise ship terminal
                  you will be introduced to your English speaking tour guide
                  that will ensure you have a great and unforgettable experience
                  here on Our beautiful island of roatan, Your guide will take
                  you on a unique sightseeing cultural and historical tour of
                  the Bay Island of Roatan Honduras and will certainly make
                  several stops along the way, allowing you to get out of the
                  vehicle for some great photo opportunities of our overlook
                  hill top views, as you go on your tour your guide will be
                  taking for visit at our preservation Monkey Park where you can
                  get the opportunity to interact with our monkeys and Sloths,
                  macaws, parrots and many others even feed and play with them
                  as they jump on your shoulders,( they are very friendly ) as
                  your tour will continue then your tour guide will be taking
                  you over to our beach palapa Snorkeling destination where you
                  will be changing into your swimsuits to get ready to head out
                  on our Snorkel boat for an unforgettable Snorkel trip, at our
                  surrounding colorful coral reef and Ship wreck in the company
                  of your snorkeling guide, were you will be exploring our
                  underworld marine life, fishes, lobster, stingray, turtle and
                  much more, when your Snorkeling is done and you are back at
                  our beach Palapa you can just kick back and relax yourself
                  making use of our Wi-If Service as we prepare a nice Local
                  Island Style Lunch for you.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <Image className="excursionThreeImage" />{" "}
                <p className="excursionText">
                  <span>Price: $85.00 P.P.</span>
                  <div className="heroLine" />
                  What's included: Zip line Tour, monkeys interaction and
                  Snorkeling Adventure <br />
                  <br />
                  Mahogany Bay Isla Roatan Tours – The best of Roatan Tour, Zip
                  line tour monkeys interaction and snorkeling adventure: This
                  tour is for anyone who is looking to enjoy a memorable Roatan
                  sightseeing and adventurous day on our beautiful island of
                  Roatan Honduras. The tour will start with you learning some of
                  the wonderful history of Roatan Island culture. During this
                  tour there are certainly many stops that we will be make for
                  you during your day, Among these are our Monkey Park were you
                  will be visiting to interact with our local animals, Monkeys,
                  birds, and others as well we will be driving you up to some of
                  our overlook sightseeing views for you to get some outstanding
                  photos of our lush Green and beautiful Island of roatan. This
                  island sightseeing tour will take roughly two hours and when
                  it’s done we will head over to our Canopy Zip Line Adventure
                  Tour. Here you will enjoy 55-65 minutes of fun-filled
                  adventure through the jungle of Roatan Zip lining. After you
                  are finish with your Zip Line Adventure Tour, then your tour
                  guide will be taking you over to our Snorkeling location where
                  you will be changing into your swimsuits to get ready to head
                  out on our boat for an unforgettable Snorkel trip, at our
                  surrounding colorful coral reef in the company of your
                  snorkeling guide, were you will be exploring our underworld
                  marine life, fishes, lobster, stingray, turtle and much more.
                  This fun-filled adventurous Best of Roatan tour Package is
                  designed just for you and your group. The fact that you’ll
                  have your own private guide and vehicle for the entire day
                  that you’ll be on our beautiful island makes this an even
                  better proposition. To accomplish the entire excursion it will
                  takes about 4 hours or more. The cost is inclusive of your
                  private transportation for the entire day, your island tour,
                  your visiting to interact with our monkeys, your Canopy Zip
                  Line Adventure Tour, and your Snorkeling trip as well as all
                  of your necessary snorkeling equipment
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <Image className="excursionFourImage" />{" "}
                <p className="excursionText">
                  <span>Price: $20.00 P.P.</span>
                  <div className="heroLine" />
                  Cruise Excursions Beach Tours in Roatan Honduras: Come and
                  enjoy a wonderful relaxing day at our beautiful white sand
                  West Bay Tabyana Beach, a breathtaking natural beach that is
                  truly an amazing destination worth visiting. At the beach you
                  will find a variety of beach activities that you are sure to
                  enjoy during your time there. Such as: Banana boats,
                  parasailing trip, jet skis rental, ocean kayaks, snorkeling
                  trip, glass bottom boat tour and others, as well there are
                  beach chairs and umbrellas available at the beach that you can
                  rent for your convenience. If you are interested in any of
                  these activities just let us know as you do your booking and
                  we’ll ensure that all you need is set up for you. Remember
                  that these activities will require additional fees that must
                  be paid to those in charge of them at the beach. On the beach
                  there are lots of great places to get food and drinks and it
                  is generally a great place where you can simply kick back and
                  relax, swim, and do whatever else will make your day. You will
                  have your private guide and transportation for the entire day
                  you’ll spend on our beautiful island and you can choose to
                  head back to your cruise ship at any time you wish to do so.
                  This excursion costs $20 per person depending on the size of
                  your group. The cost will therefore be $35 each for 2 persons,
                  $30 each for 3 persons, and $20 each if it is 4 persons and
                  more. If you have kids under 5 years old the tour
                  transportation service will be freely offered for the kids.
                  Additionally, we’ll be sure to get you back to your ship’s
                  terminal with plenty of time to spare before the cruise ship
                  is scheduled to leave.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <Image className="excursionFiveImage" />{" "}
                <p className="excursionText">
                  <span>Price: $100.00 P.P.</span>
                  <div className="heroLine" />
                  Upon arrival to the tour operator facilities, you will be
                  provided with the necessary safety gear, such as a helmet,
                  goggles, and bandanas. Your bilingual tour guide will provide
                  a safety briefing and will explain the use of units before
                  starting the tour.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <Image className="excursionSixImage" />{" "}
                <p className="excursionText">
                  <span>Price: $85.00 P.P.</span>
                  <div className="heroLine" />
                  One Of The Nice Features Of Little French Key Is Our
                  All-Inclusive Model. Our Key Might Be Small, But It Offers A
                  Wide Range Of Activities. We Offer Scuba Diving, Snorkeling,
                  Kayaking, Jet Ski Rental, Massages, Manicure, Pedicures,
                  Horseback Riding, Sunbathing, And Some Of The Best Rope Swings
                  On Roatan. Best Of All, We Have A Lovely Mini Zoo With Macaws,
                  Parrots, Monkeys, And Much More!
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Excursions;
