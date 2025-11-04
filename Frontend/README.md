🏆 Capstone Project: Hextech Hub - Analisi delle Statistiche di League of Legends

📝 Descrizione del Progetto:

Hextech Hub è una piattaforma web progettata per analizzare e visualizzare le statistiche chiave dei Campioni e le build ottimali del videogioco League of Legends di Riot Games.

La "sfida" in questo progetto é aggirare le limitazioni imposte da Riot Games sulle chiamate delle sue API ovvero massimo 20 richieste al secondo e 100 richieste ogni 2 minuti e trasfore i dati grezzi delle partite in statistiche aggregate di valore (es. Win Rate per Campione, Build ottimali).

Questo Capstone Project funge da vetrina per le competenze di sviluppo fullstack, con particolare enfasi sulla gestione di un alto volume di dati.

🎮 Funzionalitá Prinicpali:

- Registrazione di un nuovo utente

- Login come utente o amministratore

- Login tramite account Google o Riot

- Sezione Summoner dove l'utente può visualizzare le statistiche delle sue partite recenti

- Sezione Tier List dei campioni basata sulle percentuali di Pick Rate/Win Rate/Ban Rate

- Sezione Campione con varie statistiche relative ad esso

- Sezione Articoli dove gli amministratori posso scrivere, modificare o cancellare articoli o guide

🛠️ Stack Tecnologico:

Il progetto è sviluppato utilizzando un'architettura moderna che dimostra la capacità di integrare diverse tecnologie sia lato Frontend che Backend.

🎯 Obiettivi Tecnici Chiave:

Gli obiettivi tecnici di questo progetto vanno oltre il semplice CRUD e dimostrano competenze avanzate:

1. Gestione Rate Limits:

- Sviluppo di una logica in Java per controllare e ritardare le chiamate outbound alla Riot Games API, rispettando i limiti (20 requests/1 sec. e 100 requests/2 min.).

2. Engine di Aggregazione Dati:

- Utilizzo di Java/OOP per creare un servizio che scarica i dati grezzi delle partite e li trasforma in metriche significative come Frequenza di Win/Pick/Ban Rate.

3. Gestione del Frontend:

- Applicare Redux e TypeScript per gestire lo stato dell'applicazione (es. filtri per regione, elo, campione selezionato).

🚀 Rilasci:

- Il progetto è stato suddiviso in vari fasi al fine di garantire la consegna entro le quattro settimane stabilite e per avere una V1 pronta per il Demo Day dopo due settimane.

🪄 COMPETENZE UTILIZZATE NEL PROGETTO:

Backend & Data Management:

- Java/OOP: Strutturazione della logica: creazione di classi per la gestione dei Campioni, delle Partite, delle Statistiche Aggregate.

- Framework Spring: Creazione dell'architettura RESTful API (Controller, Service, Repository) per servire i dati al frontend. Gestione della Sicurezza (autenticazione base).

- PostgreSQL: Persistenza dei Dati, salvataggio della lista statica dei Campioni, delle partite grezze e, soprattutto, delle Statistiche Aggregate (Win Rate, Build).

- JUnit: Scrittura di test unitari per garantire la correttezza della logica di calcolo del Win Rate e del Rate Limiting.

- Maven: Gestione delle dipendenze del progetto Spring e pacchettizzazione del backend (build tool standard).

Frontend & User Experience:

- React.js: Sviluppo di componenti riutilizzabili (Es. CardCampione, StatisticheCampione, HeaderRicerca) per costruire l'interfaccia utente.

- Redux: Gestione dello Stato Globale complesso, come la lista filtrabile dei Campioni o lo stato di un Summoner. Utile per gestire filtri e dati tra diverse pagine.

- TypeScript: Miglioramento della robustezza del frontend, definendo interfacce chiare per i dati dei Campioni e delle Statistiche provenienti dal backend (API).

- JavaScript: Logica client-side di base, interazione con le API del tuo backend e manipolazione del DOM.

- HTML/CSS/SASS: Struttura e stile del sito, con l'uso di SASS per organizzare gli stili in modo modulare.

- Bootstrap: Creazione di un design responsive e accattivante, gestendo la visualizzazione corretta su tutti gli schermi.

Tooling:

- Git: Controllo versione, gestione dei rilasci incrementali (V1, V2, V3).

- Postman: Test delle API di Riot per capire il payload dei dati e testare i tuoi endpoint Spring REST prima di connetterli a React.

🗒️ TO-DO LIST :

FASE 0: PREPARAZIONE E APPROVAZIONE

- 0.1. Crea Repository GitHub ✔️
- 0.2. Scrivi il README.md ✔️
- 0.3. Ottieni la Chiave API di Riot Games ✔️

FASE 1: CORE FEATURES & INTEGRAZIONE API (V1 - Obiettivo Demo Day)

- 0.1. Impostare la struttura "base" del progetto ✔️
- 0.2. Importare le dipendenze necessarie per il progetto ✔️
- 0.3. Connettere il Frontend al Backend tramite chiamate API ✔️
- 0.4. Implementare la logica per scaricare i dati delle partite da Riot Games API ✔️
- 0.5. Creare le endpoint RESTful nel Backend per servire i dati al Frontend ✔️
- 0.6. Testare le chiamate API e assicurarsi che i dati siano arrivati correttamente al Frontend ✔️
- 0.7. Creare le componenti React necessarie per visualizzare i dati delle partite (Es. CardPartita, StatistichePartita) ✔️

FASE 2: AGGREGAZIONE E ANALYTICS (V2)

- WORK IN PROGRESS…

FASE 3: BUILD, REFACTORING E POLISH (V3/V4)

- WORK IN PROGRESS…
