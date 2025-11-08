import Card from "react-bootstrap/Card";
import "../css/Home.scss";
import { useEffect, useState } from "react";

const IMG_BASE = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading";

const DATA_URL =
  "https://ddragon.leagueoflegends.com/cdn/15.22.1/data/en_US/champion.json";

type ChampionData = { id: string; name: string; title: string };

export default function Champions() {
  const [champions, setChampions] = useState<ChampionData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(DATA_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const data =
          json && typeof json === "object"
            ? (json as Record<string, unknown>).data
            : null;
        if (!data || typeof data !== "object") {
          throw new Error(
            "Unexpected data format from Data Dragon: 'data' missing"
          );
        }

        const list: ChampionData[] = Object.values(data).map(
          (c: { id: string; name: string; title: string }) => ({
            id: c.id,
            name: c.name,
            title: c.title,
          })
        );
        setChampions(list);
        setLoading(false);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Data loading error");
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section className="home-section">
      <div className="home-intro">
        <h2 className="home-title">CHAMPIONS</h2>
        <p>Complete list of League of Legends champions.</p>
      </div>

      {loading && <p>Loading champions…</p>}
      {error && !loading && <p>Error: {error}</p>}

      {!loading && !error && (
        <>
          <div
            className="home-search"
            style={{ maxWidth: 480, margin: "0 auto 16px" }}
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cerca campione…"
              aria-label="Cerca campione per nome"
              className="form-control"
            />
          </div>

          <div className="home-cards">
            {champions
              .filter((c) =>
                c.name.toLowerCase().includes(query.toLowerCase().trim())
              )
              .map((c) => (
                <div key={c.id} className="home-card-item">
                  <Card className="home-card h-100">
                    <Card.Img
                      variant="top"
                      src={`${IMG_BASE}/${c.id}_0.jpg`}
                      alt={`${c.name} Artwork (loading)`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: 300,
                        objectFit: "contain",
                        marginTop: 10,
                        display: "block",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>{c.name}</Card.Title>
                      <Card.Text>{c.title}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </div>
        </>
      )}
    </section>
  );
}
