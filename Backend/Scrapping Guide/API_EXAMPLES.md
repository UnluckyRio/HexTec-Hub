# 🧪 Esempi di Utilizzo - cURL & Postman

## 🚀 BASIC SCRAPING

### 1. Get Champion Tiers (GET)

```bash
curl -X GET http://localhost:8080/api/scraping/champions/tiers
```

**PowerShell:**

```powershell
$response = Invoke-WebRequest -Uri "http://localhost:8080/api/scraping/champions/tiers" -Method Get
$response.Content | ConvertFrom-Json | ConvertTo-Json -Depth 10
```

---

### 2. Scrape Generic Elements (POST)

```bash
curl -X POST http://localhost:8080/api/scraping/generic \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://www.amazon.com/s?k=laptop",
    "selector": "h2.s-size-mini"
  }'
```

**PowerShell:**

```powershell
$body = @{
    url = "https://www.amazon.com/s?k=laptop"
    selector = "h2.s-size-mini"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:8080/api/scraping/generic" `
  -Method Post -Body $body -ContentType "application/json"
```

---

### 3. Scrape Single Element (POST)

```bash
curl -X POST http://localhost:8080/api/scraping/single \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://www.wikipedia.org",
    "selector": "h1.firstHeading"
  }'
```

**PowerShell:**

```powershell
$body = @{
    url = "https://www.wikipedia.org"
    selector = "h1.firstHeading"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:8080/api/scraping/single" `
  -Method Post -Body $body -ContentType "application/json"
```

---

## 🚀 ADVANCED SCRAPING

### 4. Scrape with Cache (POST)

```bash
curl -X POST http://localhost:8080/api/scraping/advanced/cached \
  -H "Content-Type: application/json" \
  -d '{
    "cacheKey": "mobalytics_tiers",
    "url": "https://mobalytics.gg/lol/tier-list",
    "selector": "div.champion"
  }'
```

---

### 5. Scrape with Attributes (POST)

```bash
curl -X POST http://localhost:8080/api/scraping/advanced/attributes \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://www.example.com",
    "selector": "a.product-link",
    "attributes": ["href", "title", "data-id", "class"]
  }'
```

**Risposta attesa:**

```json
{
  "success": true,
  "data": [
    {
      "text": "Link 1",
      "href": "https://example.com/product/1",
      "title": "Product Title",
      "data-id": "123",
      "class": "product-link"
    }
  ],
  "count": 1
}
```

---

### 6. Scrape with Scroll (POST)

```bash
curl -X POST http://localhost:8080/api/scraping/advanced/scroll \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://www.instagram.com/explore/",
    "selector": "article",
    "scrolls": 5
  }'
```

---

### 7. Scrape with Click (POST)

```bash
curl -X POST http://localhost:8080/api/scraping/advanced/click \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://www.example.com/products",
    "clickSelector": "button.load-more",
    "dataSelector": "div.product-item",
    "maxClicks": 10
  }'
```

---

### 8. Scrape HTML Table (POST)

```bash
curl -X POST http://localhost:8080/api/scraping/advanced/table \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://en.wikipedia.org/wiki/List_of_countries_by_population",
    "tableSelector": "table.wikitable"
  }'
```

**Risposta attesa:**

```json
{
  "success": true,
  "data": [
    {
      "Rank": "1",
      "Country": "India",
      "Population": "1,417,173,173",
      "% of world": "17.7%"
    },
    {
      "Rank": "2",
      "Country": "China",
      "Population": "1,425,893,465",
      "% of world": "17.8%"
    }
  ],
  "rows": 2
}
```

---

### 9. Execute JavaScript (POST)

```bash
curl -X POST http://localhost:8080/api/scraping/advanced/execute-script \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://www.example.com",
    "script": "return document.querySelectorAll('"'"'p'"'"').length;"
  }'
```

---

### 10. Get Cache Stats (GET)

```bash
curl -X GET http://localhost:8080/api/scraping/advanced/cache/stats
```

---

### 11. Clear Cache (DELETE)

```bash
curl -X DELETE http://localhost:8080/api/scraping/advanced/cache/clear
```

---

## 📋 Esempi Pratici per Casi d'Uso Reali

### 📺 Scrape di Titoli da YouTube

```bash
curl -X POST http://localhost:8080/api/scraping/generic \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://www.youtube.com/results?search_query=tutorial+selenium",
    "selector": "yt-formatted-string.style-scope.ytd-video-renderer"
  }'
```

### 🛍️ Scrape Prezzi da Amazon

```bash
curl -X POST http://localhost:8080/api/scraping/generic \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://www.amazon.com/s?k=gaming+laptop",
    "selector": "span.a-price-whole"
  }'
```

### 🎮 Scrape League of Legends Champions

```bash
curl -X POST http://localhost:8080/api/scraping/generic \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://www.leagueoflegends.com/en-us/champions/",
    "selector": "div.style__ChampionCard-sc-4i2r4z-0"
  }'
```

### 📰 Scrape Notizie da News Site

```bash
curl -X POST http://localhost:8080/api/scraping/generic \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://news.ycombinator.com/",
    "selector": "span.titleline"
  }'
```

### 📊 Scrape Statistiche da Wikipedia

```bash
curl -X POST http://localhost:8080/api/scraping/advanced/table \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://en.wikipedia.org/wiki/List_of_countries_by_population",
    "tableSelector": "table.wikitable.sortable"
  }'
```

---

## 🧪 TEST LOCAL FILE

Se vuoi testare con un file HTML locale:

### Crea un file test.html:

```html
<!DOCTYPE html>
<html>
<head><title>Test Page</title></head>
<body>
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</body>
</html>
```

### Scrape il file locale:

```bash
curl -X POST http://localhost:8080/api/scraping/generic \
  -H "Content-Type: application/json" \
  -d '{
    "url": "file:///C:/path/to/test.html",
    "selector": "div.item"
  }'
```

---

## 💬 Risposte di Errore

### Parametri mancanti:

```json
{
  "success": false,
  "error": "URL e selector sono obbligatori"
}
```

### Elemento non trovato:

```json
{
  "success": false,
  "error": "No such element exception"
}
```

### Timeout:

```json
{
  "success": false,
  "error": "Timeout waiting for element"
}
```

### URL non raggiungibile:

```json
{
  "success": false,
  "error": "Connection refused"
}
```

---

## 📝 Postman Collection JSON

Importa questo in Postman:

```json
{
  "info": {
    "name": "HexTech Scraping API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Champions Tiers",
      "request": {
        "method": "GET",
        "url": "http://localhost:8080/api/scraping/champions/tiers"
      }
    },
    {
      "name": "Scrape Generic",
      "request": {
        "method": "POST",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "body": {
          "mode": "raw",
          "raw": "{\"url\": \"https://example.com\", \"selector\": \"div\"}"
        },
        "url": "http://localhost:8080/api/scraping/generic"
      }
    },
    {
      "name": "Scrape Single",
      "request": {
        "method": "POST",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "body": {
          "mode": "raw",
          "raw": "{\"url\": \"https://example.com\", \"selector\": \"h1\"}"
        },
        "url": "http://localhost:8080/api/scraping/single"
      }
    }
  ]
}
```

---

## 🔗 Risorse Utili per Trovare Selettori

1. **F12 DevTools**: Ispeziona elemento e copia il selettore
2. **CSS Selector Cheat Sheet**: https://www.w3schools.com/cssref/css_selectors.php
3. **Regex Pattern Tester**: https://regex101.com/

---

**Creato da**: GitHub Copilot
**Data**: 2025-11-12

