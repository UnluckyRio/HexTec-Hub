# Guida al Web Scraping con Selenium

## 📋 Prerequisiti

1. **Dipendenze nel pom.xml** (già aggiunte):
    - `selenium-java` v4.38.0
    - `webdrivermanager` v5.8.0
    - `spring-boot-starter-web`

2. **Sistema operativo**:
    - Chrome/Chromium deve essere installato
    - WebDriverManager lo gestisce automaticamente

## 🚀 Come funziona

### 1. **ScrapingService**

Il servizio principale che contiene la logica di scraping:

```java

@Service
public class ScrapingService {
    // Metodo 1: Scrape della tier list di campioni
    public List<String> getChampionTiers()

    // Metodo 2: Scrape generico con URL e selettore CSS personalizzati
    public List<String> scrapeElements(String url, String cssSelector)

    // Metodo 3: Scrape di un singolo elemento
    public String scrapeSingleElement(String url, String cssSelector)
}
```

### 2. **ScrapingController**

Espone gli endpoint REST:

```
GET    /api/scraping/champions/tiers     → Scarica tier list campioni
POST   /api/scraping/generic             → Scrape generico
POST   /api/scraping/single              → Scrape singolo elemento
```

### 3. **SeleniumConfig**

Configurazione globale del WebDriver con opzioni ottimizzate.

---

## 📌 Esempi di Utilizzo

### 1. Ottenere la Tier List dei Campioni

**Richiesta:**

```bash
curl http://localhost:8080/api/scraping/champions/tiers
```

**Risposta:**

```json
{
  "success": true,
  "data": [
    "Ahri S+",
    "Akali S",
    "Alatroc S-",
    ...
  ],
  "count": 168
}
```

### 2. Scrape Generico (multipli elementi)

**Richiesta:**

```bash
curl -X POST http://localhost:8080/api/scraping/generic \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com",
    "selector": "div.item"
  }'
```

**Risposta:**

```json
{
  "success": true,
  "data": [
    "Elemento 1",
    "Elemento 2",
    ...
  ],
  "count": 42
}
```

### 3. Scrape Singolo Elemento

**Richiesta:**

```bash
curl -X POST http://localhost:8080/api/scraping/single \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com",
    "selector": "h1.title"
  }'
```

**Risposta:**

```json
{
  "success": true,
  "data": "Titolo della pagina"
}
```

---

## 🔍 Come trovare i Selettori CSS

### Metodo 1: Ispeziona l'elemento con DevTools

1. Apri la pagina nel browser
2. Premi **F12** (o Ctrl+Shift+I)
3. Clicca su **Seleziona elemento** (il cursore)
4. Clicca sull'elemento che vuoi scrapare
5. Nel DevTools appare il codice HTML
6. Clicca destro → "Copy" → "Copy selector"

**Esempio:**

```
div.champion-tier > span.name
```

### Metodo 2: Usa espressioni CSS comuni

| Selettore        | Significato    | Esempio            |
|------------------|----------------|--------------------|
| `.class`         | Classe CSS     | `.champion`        |
| `#id`            | ID elemento    | `#main-title`      |
| `tag`            | Tag HTML       | `div`, `span`, `a` |
| `[attr="value"]` | Attributo      | `[data-tier="S"]`  |
| `>`              | Figlio diretto | `div > p`          |
| ` ` (spazio)     | Discendente    | `div span`         |
| `:nth-child(n)`  | N-esimo figlio | `li:nth-child(2)`  |

---

## ⚙️ Opzioni Chrome Disponibili

Nel `SeleniumConfig.java` puoi personalizzare:

```java
// Modalità headless (senza interfaccia grafica)
options.addArguments("--headless");

// Disabilita GPU (utile in headless)
options.

addArguments("--disable-gpu");

// No sandbox (necessario in Docker)
options.

addArguments("--no-sandbox");

// Dimensioni finestra
options.

addArguments("--window-size=1920,1080");

// User agent personalizzato
options.

addArguments("user-agent=Mozilla/5.0...");

// Disabilita notifiche
options.

addArguments("--disable-notifications");

// Accetta certificati SSL
options.

setAcceptInsecureCerts(true);
```

---

## ⏱️ Gestione del Timeout

Le attese sono configurate a **10 secondi**:

```java
private static final int TIMEOUT_SECONDS = 10;
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(TIMEOUT_SECONDS));
```

Per modificare il timeout, cambia il valore in `ScrapingService.java`:

```java
private static final int TIMEOUT_SECONDS = 20; // 20 secondi
```

---

## ⚠️ Errori Comuni e Soluzioni

### 1. "No such element exception"

**Problema**: L'elemento CSS non esiste
**Soluzione**: Verifica il selettore CSS nel DevTools

### 2. "Timeout waiting for element"

**Problema**: L'elemento impiega troppo a caricarsi
**Soluzione**: Aumenta `TIMEOUT_SECONDS` o aggiungi `Thread.sleep(ms)`

### 3. "Chrome driver not found"

**Problema**: WebDriverManager non trova Chrome
**Soluzione**: Installa Chrome o Chromium nel sistema

### 4. "Connection refused"

**Problema**: La pagina non è raggiungibile
**Soluzione**: Verifica l'URL e la connessione internet

---

## 🔒 Best Practices

1. **Rispetta i robots.txt**: Controlla se il sito permette scraping
2. **Aggiungi delay**: Usa `Thread.sleep()` tra le richieste
3. **Usa User-Agent**: Identifica il tuo bot con User-Agent
4. **Gestisci eccezioni**: Sempre dentro try-catch-finally
5. **Chiudi il driver**: Chiama `driver.quit()` sempre
6. **Test localmente**: Prima di deployare

---

## 📊 Integrazione con il Database

Per salvare i dati scrapati nel database:

```java

@Autowired
private ArticleRepository articleRepository;

public void scrapeAndSave() {
    List<String> data = scrapingService.getChampionTiers();

    data.forEach(text -> {
        Article article = new Article();
        article.setTitle(text);
        article.setDate(LocalDateTime.now());
        articleRepository.save(article);
    });
}
```

---

## 🚀 Performance Tips

1. **Disabilita immagini**: Aumenta velocità
2. **Usa headless**: Più veloce di una GUI
3. **Parallelizza**: Scrapa più pagine contemporaneamente
4. **Cache**: Salva i risultati per evitare richieste duplicate
5. **Asyncrono**: Usa `@Async` per non bloccare il server

---

## 📝 Endpoint API Completi

### GET /api/scraping/champions/tiers

Scarica la tier list corrente dei campioni da Mobalytics

- **Parametri**: Nessuno
- **Risposta**: Lista di stringhe con campioni e tier

### POST /api/scraping/generic

Scrape generico di multipli elementi

- **Body**: `{"url": "string", "selector": "string"}`
- **Risposta**: Lista di stringhe

### POST /api/scraping/single

Scrape di un singolo elemento

- **Body**: `{"url": "string", "selector": "string"}`
- **Risposta**: Stringa singola

---

**Creato da**: GitHub Copilot
**Versione**: 1.0
**Data**: 2025-11-12

