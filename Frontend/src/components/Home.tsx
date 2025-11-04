import Card from "react-bootstrap/Card";
import leagueImg1 from "../assets/img/about-league-img-1.jpg";
import leagueImg2 from "../assets/img/about-league-img-2.jpg";
import leagueImg3 from "../assets/img/about-league-img-3.jpg";
import "../css/Home.scss";
function Home() {
  return (
    <section className="home-section container-fluid">
      <div className="home-intro">
        <h2 className="home-title">WHAT IS LEAGUE OF LEGENDS?</h2>
        <p>
          League of Legends is Riot's multiplayer online battle arena (M.O.B.A.)
          where two teams of five players wield powerful champions that have
          unique abilities to achieve victory.
        </p>
      </div>

      <div className="home-cards">
        <div className="home-card-item">
          <Card className="home-card h-100">
            <Card.Img
              variant="top"
              src={leagueImg1}
              alt="League of Legends - Select a Champion"
            />
            <Card.Body>
              <Card.Title>Select a Champion</Card.Title>
              <Card.Text>
                There are currently over 150 playable champions and new ones are
                added every few months. Find the best one for you!
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="home-card-item">
          <Card className="home-card h-100">
            <Card.Img
              variant="top"
              src={leagueImg2}
              alt="League of Legends - Choose your Role"
            />
            <Card.Body>
              <Card.Title>Choose your Role</Card.Title>
              <Card.Text>
                Each of the five players on a LoL team chooses a specific
                position on the map that offers its own experience and
                expectations.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="home-card-item">
          <Card className="home-card h-100">
            <Card.Img
              variant="top"
              src={leagueImg3}
              alt="League of Legends - Destroy the Base"
            />
            <Card.Body>
              <Card.Title>Destroy the Base</Card.Title>
              <Card.Text>
                Work together with your team to complete your ultimate goal —
                destroying the enemy Nexus, the heart of their base.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="home-intro">
        <h2 className="home-title">WIN MORE IN LEAGUE OF LEGENDS</h2>
        <p>
          HexTech Hub is the all-in-one gaming companion that helps players of
          all skill levels improve and climb.
        </p>
      </div>
    </section>
  );
}
export default Home;
