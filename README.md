# HexTec Hub

🏆 Capstone Project: HexTec Hub - Analisi delle Statistiche di League of Legends

📝 Descrizione del Progetto:

HexTec Hub è una piattaforma web fullstack progettata per analizzare e visualizzare in tempo reale le statistiche chiave dei Campioni e le build ottimali del videogioco League of Legends di Riot Games.

Il progetto nasce dall'esigenza di superare le limitazioni delle API esterne (Riot Games API) in termini di frequenza di chiamata e di elaborazione dei dati, trasformando i dati grezzi delle partite in statistiche aggregate di valore (es. Win Rate per Campione, Build ottimali).

Questo Capstone funge da vetrina per le competenze di sviluppo fullstack, con particolare enfasi sulla gestione del caching e sull'ottimizzazione del backend per la gestione di un alto volume di dati.

🎮 Funzionalitá Prinicpali:

-

-

-

🛠️ Stack Tecnologico:

Il progetto è sviluppato utilizzando un'architettura moderna a microservizi (simulata in un unico progetto fullstack), che dimostra la capacità di integrare diverse tecnologie.

🎯 Obiettivi Tecnici Chiave:

Gli obiettivi tecnici di questo progetto vanno oltre il semplice CRUD e dimostrano competenze avanzate:

1. Gestione Caching e Rate Limits:

- Implementazione di una strategia di caching multi-livello (TTL) in PostgreSQL per servire dati veloci e aggiornati.

- Sviluppo di una logica in Java per controllare e ritardare le chiamate outbound alla Riot Games API, rispettando i limiti (20 calls/1 sec. e 100 calls/2 min.).

2. Engine di Aggregazione Dati:

- Utilizzo di Java/OOP per creare un servizio che scarica i dati grezzi delle partite e li trasforma in metriche significative come Win Rate e Frequenza di Pick/Ban.

3. Gestione dello Stato Complesso (Frontend):

- Applicazione di Redux e TypeScript per gestire lo stato dell'applicazione (es. filtri per regione, elo, campione selezionato) in modo prevedibile e robusto.

🚀 Rilasci:

- Il progetto è stato suddiviso in fasi incrementali per garantire la fattibilità entro le quattro settimane e per avere una Minimum Viable Product (V1) pronta per il Demo Day.

🗒️ TO-DO LIST :

FASE 0: PREPARAZIONE E APPROVAZIONE

- 0.1. Crea Repository GitHub ✔️
- 0.2. Scrivi il README.md ✔️
- 0.3. Ottieni la Chiave API di Riot Games ✔️
- 0.4. Configura il Progetto Base Spring Boot ✔️
- 0.5. Configura il Progetto React con TypeScript, Redux e Bootstrap-React ✔️

FASE 1: CORE FEATURES & INTEGRAZIONE API (V1 - Obiettivo Demo Day)

- 1.1. Database Setup (PostgreSQL): Crea le tabelle base per: CampioneStatico e CacheDatiSummoner.
- 1.2. Popolamento Statico: Crea un servizio Java per scaricare la lista di tutti i Campioni e salvarla in CampioneStatico (da fare solo una volta).
- 1.3. Endpoint di Ricerca: Crea l'endpoint REST /api/summoner/{nome} in Spring.
- 1.4. Logica del Caching Breve: Implementa in Java la logica: "Cerca prima in CacheDatiSummoner (TTL 5 min). Se presente, servi da lì.
- 1.5. Integrazione API (Chiamata Singola): Implementa la chiamata all'API Riot per recuperare l'ID di un Summoner e i dati di base se non sono in cache.
- 1.6. Frontend Componente Ricerca: Crea il componente React con un campo di ricerca per il Summoner Name.
- 1.7. Frontend Visualizzazione Base: Crea una pagina che mostra il nome, l'icona e il livello base del Summoner.
- 1.8. Deployment Base: Fai un deploy minimo per avere qualcosa di funzionante online.

FASE 2: AGGREGAZIONE E ANALYTICS (V2)

- 2.1. Model Statistiche (PostgreSQL): Crea la tabella StatisticheAggregateCampione (Campione ID, Win Rate, Pick Rate, ecc.)
- 2.2. Logica Rate Limiting (Interna): Implementa la logica Java per mettere in coda/ritardare le chiamate outbound alla Riot API per rispettare il limite di 20/1ec e 100/2min (vedi il tuo codice per il Thread.sleep e i contatori).
- 2.3. Aggregatore Partite: Crea un servizio in Spring che, in base alla logica del Rate Limit, scarica un batch di partite recenti e le analizza.
- 2.4. Calcolo e Caching Lungo: Implementa la logica per calcolare il Win Rate e salvare/aggiornare il risultato in StatisticheAggregateCampione (TTL 24h).
- 2.5. Frontend Griglia Campioni: Crea la pagina principale con la griglia di tutti i campioni statici.
- 2.6. Frontend Pagina Dettaglio: Visualizza le statistiche aggregate (Win Rate, Pick Rate) per il campione selezionato, usando i dati dal DB.

FASE 3: BUILD, REFACTORING E POLISH (V3/V4)

- 3.1. Logica Best Build: Aggiungi la logica Java per estrarre la build più performante in base ai dati grezzi analizzati.
- 3.2. Frontend Visualizzazione Build: Mostra la "Best Build" con le icone degli oggetti sulla pagina del campione.
- 3.3. Unit Testing: Scrivi test unitari (JUnit) per la logica di calcolo del Win Rate e per i servizi Spring.
- 3.4. Design (UX/UI): Pulisci il CSS/SASS, rendi il sito totalmente responsive (Bootstrap) e cura l'aspetto grafico per l'esposizione.
- 3.5. Preparazione Demo: Rivedi il progetto, prepara i punti chiave da discutere e assicurati che il README.md sia una vetrina delle tue competenze.

🪄 COMPETENZE UTILIZZATE NEL PROGETTO:

Backend & Data Management:

- Java/OOP: Strutturazione della logica di business: creazione di classi per la gestione dei Campioni, delle Partite, delle Statistiche Aggregate e del Servizio di Rate Limiting.
- Framework Spring: Creazione dell'architettura RESTful API (Controller, Service, Repository) per servire i dati al frontend. Gestione della Sicurezza (autenticazione base).
- PostgreSQL/SQL: Persistenza dei Dati, salvataggio della lista statica dei Campioni, delle partite grezze e, soprattutto, delle Statistiche Aggregate (Win Rate, Build).
- Gestione File/Caching: Implementazione del meccanismo di Time To Live (TTL) nel DB per le statistiche, riducendo le chiamate alla Riot API.
- JUnit: Scrittura di test unitari per garantire la correttezza della logica di calcolo del Win Rate e del Rate Limiting.
- Maven: Gestione delle dipendenze del progetto Spring e pacchettizzazione del backend (build tool standard).

Frontend & User Experience:

- React.js: Sviluppo di componenti riutilizzabili (Es. CardCampione, StatisticheCampione, HeaderRicerca) per costruire l'interfaccia utente.
- Redux: Gestione dello Stato Globale complesso, come la lista filtrabile dei Campioni o lo stato di un Summoner. Utile per gestire filtri e dati tra diverse pagine.
- TypeScript: Miglioramento della robustezza del frontend, definendo interfacce chiare per i dati dei Campioni e delle Statistiche provenienti dal backend (API).
  JavaScript: Logica client-side di base, interazione con le API del tuo backend (chiamate fetch o axios) e manipolazione del DOM.
  HTML/CSS/SASS: Struttura e stile del sito, con l'uso di SASS per organizzare gli stili in modo modulare.
  Bootstrap: Creazione di un design responsive e accattivante, gestendo la visualizzazione corretta su desktop e mobile.

Tooling & Metodologia:

- Git: Controllo versione, gestione dei rilasci incrementali (V1, V2, V3).
- Postman: Test delle API di Riot per capire il payload dei dati e testare i tuoi endpoint Spring REST prima di connetterli a React.
