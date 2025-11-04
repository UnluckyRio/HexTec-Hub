import Card from "react-bootstrap/Card";
import leagueImg1 from "../assets/img/about-league-img-1.jpg";
import leagueImg2 from "../assets/img/about-league-img-2.jpg";
import leagueImg3 from "../assets/img/about-league-img-3.jpg";
import leagueImg4 from "../assets/img/about-league-img-4.png";
import leagueImg5 from "../assets/img/about-league-img-5.png";
import leagueImg6 from "../assets/img/about-league-img-6.jpg";
import "../css/Home.scss";
function Home() {
  return (
    <section className="home-section">
      {/* WHAT IS LEAGUE OF LEGENDS? */}

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

      {/* WIN MORE IN LEAGUE OF LEGENDS */}

      <div className="home-intro">
        <h2 className="home-title">WIN MORE IN LEAGUE OF LEGENDS</h2>
        <p>
          HexTech Hub is the all-in-one gaming companion that helps players of
          all skill levels improve and climb.
        </p>
      </div>

      <div className="home-cards">
        <div className="home-card-item">
          <Card className="home-card h-100">
            <Card.Img
              variant="top"
              src={leagueImg6}
              alt="League of Legends - Select a Champion"
            />
            <Card.Body>
              <Card.Title>Champions with the highest win rate</Card.Title>
              <Card.Text>
                The champions with the highest win rate are those that have the
                most experience and are the most popular among players.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="home-card-item">
          <Card className="home-card h-100">
            <Card.Img
              variant="top"
              src={leagueImg4}
              alt="League of Legends - Choose your Role"
            />
            <Card.Body>
              <Card.Title>Best build for your champion</Card.Title>
              <Card.Text>
                The best build for your champion is the one that maximizes your
                performance and gives you the best chances of winning.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="home-card-item">
          <Card className="home-card h-100">
            <Card.Img
              variant="top"
              src={leagueImg5}
              alt="League of Legends - Destroy the Base"
            />
            <Card.Body>
              <Card.Title>Skill upgrade order and runes</Card.Title>
              <Card.Text>
                The skill upgrade order and runes are the tools that help you
                optimize your champion's abilities and performance.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div>
        <a href="/Profile" className="home-link">
          Explore our Profile Section <i class="bi bi-arrow-right-short"></i>
        </a>
      </div>

      {/* WHAT'S DOMINATING THE META RIGHT NOW? */}

      <div className="home-intro">
        <h2 className="home-title">WHAT'S DOMINATING THE META RIGHT NOW?</h2>
        <p>
          Every patch, our experts rank and recommend champions to help you
          optimize your climb in the current meta.
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
      <div>
        <a href="/TierList" className="home-link">
          Explore our Meta Tier List Section
          <i class="bi bi-arrow-right-short"></i>
        </a>
      </div>

      {/* FEATURED CHAMPIONS */}

      <div className="home-intro">
        <h2 className="home-title">FEATURED CHAMPIONS</h2>
        <p>
          Looking to try out a new champion? Here are some of our favorite
          recommendations!
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
      <div>
        <a href="/Champions" className="home-link">
          Explore all Champions
          <i class="bi bi-arrow-right-short"></i>
        </a>
      </div>

      {/* LEAGUE OF LEGENDS NEWS AND GUIDES */}

      <div className="home-intro">
        <h2 className="home-title">LEAGUE OF LEGENDS NEWS AND GUIDES</h2>
        <p>
          Stay up to date with the latest news, meta content, guides, and much
          more.
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
              <Card.Title>News</Card.Title>
              <Card.Text>
                Stay up to date with the latest news, including new patches,
                events, and more.
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
              <Card.Title>Meta content</Card.Title>
              <Card.Text>
                Keep up to date with the latest meta content, including new
                champions, items, and more.
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
              <Card.Title>Guides</Card.Title>
              <Card.Text>
                Whether you're a seasoned player or just starting out, our
                guides cover everything you need to know to get started.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div>
        <a href="/Article" className="home-link">
          Explore More Articles at our Blog Section
          <i class="bi bi-arrow-right-short"></i>
        </a>
      </div>
    </section>
  );
}
export default Home;
