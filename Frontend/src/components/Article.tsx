import { useMemo, useState } from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import "../css/Article.scss";
import { ARTICLES, type ArticleCategory } from "../data/articles";

export default function Article() {
  const [filter, setFilter] = useState<ArticleCategory | "All">("All");

  const filtered = useMemo(() => {
    if (filter === "All") return ARTICLES;
    return ARTICLES.filter((a) => a.category === filter);
  }, [filter]);

  const sorted = useMemo(() => {
    return [...filtered].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [filtered]);

  return (
    <section className="home-section article-section">
      <div className="home-intro">
        <h2 className="home-title">Articles</h2>
        <p>Leggi News, Meta Content e Guides dalla community.</p>
      </div>

      <div
        className="article-filter"
        role="group"
        aria-label="Filtra articoli per categoria"
      >
        {(["All", "News", "Meta Content", "Guides"] as const).map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${active ? "active" : ""}`}
              onClick={() => setFilter(cat)}
              aria-pressed={active}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="home-cards fade-in">
        {sorted.map((a) => (
          <div className="home-card-item" key={a.id}>
            <Card className="home-card h-100">
              <Card.Header style={{ backgroundColor: "transparent" }}>
                {a.category}
              </Card.Header>
              <Card.Body>
                <div className="article-item">
                  <div className="article-texts">
                    <Card.Title>
                      <NavLink to={`/Article/${a.id}`} className="home-link">
                        {a.title}
                      </NavLink>
                    </Card.Title>
                    <Card.Text>
                      <span>{a.excerpt}</span>
                    </Card.Text>
                    <div
                      className="article-meta"
                      aria-label="Data pubblicazione"
                    >
                      <small>{new Date(a.date).toLocaleDateString()}</small>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
