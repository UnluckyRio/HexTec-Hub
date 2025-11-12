# ⚡ QUICKSTART - Scraping con Selenium

## 🏃 In 5 Minuti

### 1️⃣ Avvia l'Applicazione

**Opzione A: Maven (Locale)**

```bash
cd "C:\Users\Valerio\Desktop\Programmazione\Progetti\Corso\Caption Project\HexTech-Hub\Backend"
mvn clean install
mvn spring-boot:run
```

**Opzione B: Docker Compose**

```bash
docker-compose up -d
```

### 2️⃣ Attendi il caricamento

- Maven: ~2 minuti
- Docker: ~1 minuto

### 3️⃣ Testa subito

```bash
# Scrape della tier list di campioni
curl http://localhost:8080/api/scraping/champions/tiers

# Oppure apri nel browser:
http://localhost:8080/api/scraping/champions/tiers
```

---

## 🚀 Endpoint Più Comuni

### Scrape Generico (2 righe di JSON)

```bash
curl -X POST http://localhost:8080/api/scraping/generic \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com", "selector": "div.item"}'
```

### Scrape con Scroll

```bash
curl -X POST http://localhost:8080/api/scraping/advanced/scroll \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com", "selector": "article", "scrolls": 5}'
```

### Scrape Tabella

```bash
curl -X POST http://localhost:8080/api/scraping/advanced/table \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com", "tableSelector": "table.data"}'
```

---

## 🛠️ Troubleshooting Veloce

| Problema               | Soluzione                                                       |
|------------------------|-----------------------------------------------------------------|
| Port 8080 già in uso   | Cambia in `application.properties`: `server.port=8081`          |
| Chrome non trovato     | Installa Google Chrome dal sito ufficiale                       |
| Timeout                | Aumenta timeout in `ScrapingService.java`: `TIMEOUT_SECONDS=30` |
| Selettore non funziona | Apri DevTools (F12), ispeziona elemento, copia selettore        |
| Database non connesso  | Assicurati che PostgreSQL sia in esecuzione sulla porta 5432    |

---

## 📚 Documentazione Completa

Dopo il quickstart, leggi:

1. `SETUP_COMPLETE.md` - Overview completo
2. `SELENIUM_README.md` - Guida dettagliata
3. `API_EXAMPLES.md` - Tutti gli endpoint con esempi
4. `SCRAPING_GUIDE.md` - Guida avanzata

---

## 🎯 Primi 3 Esperimenti da Fare

### ✅ Esperimento 1: Tier List di Campioni

```bash
curl http://localhost:8080/api/scraping/champions/tiers | jq '.data | .[0:5]'
```

### ✅ Esperimento 2: Scrape di un Link

```bash
curl -X POST http://localhost:8080/api/scraping/single \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.wikipedia.org", "selector": "h1"}'
```

### ✅ Esperimento 3: Scrape con Cache

```bash
curl -X POST http://localhost:8080/api/scraping/advanced/cached \
  -H "Content-Type: application/json" \
  -d '{"cacheKey": "test", "url": "https://example.com", "selector": "p"}'
```

---

## 💾 Utili Comandi

### Verifica che il server è in esecuzione

```bash
curl http://localhost:8080/api/scraping/champions/tiers
```

### Visualizza i log (Docker)

```bash
docker-compose logs -f backend
```

### Accedi al database (Docker)

```bash
docker-compose exec postgres psql -U postgres -d hextech_hub
```

### Ferma tutto (Docker)

```bash
docker-compose down
```

---

## 🧪 Prova Online (Postman)

1. Scarica **Postman**: https://www.postman.com/downloads/
2. Crea una richiesta POST a `http://localhost:8080/api/scraping/generic`
3. Body (JSON):

```json
{
  "url": "https://www.example.com",
  "selector": "h1"
}
```

4. Premi Send ✅

---

## 📞 Hai Dubbi?

1. **Port già in uso?** Cambia `server.port` in `application.properties`
2. **Chrome non trovato?** Installa Chrome
3. **Timeout?** Aumenta `TIMEOUT_SECONDS`
4. **Selettore sbagliato?** Usa DevTools (F12)

---

## 🎉 Fatto!

Sei pronto per fare scraping! 🕷️

Consulta gli altri file `.md` per approfondire.

---

*Creato da: GitHub Copilot*  
*Data: 2025-11-12*

