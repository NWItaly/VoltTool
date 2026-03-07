# VoltTool — Piccoli aiuti per la vita in elettrico

Strumento web per rispondere rapidamente e semplicemente ai dubbi di chi ha un'auto elettrica o sta pensando di prenderne una. 

**[→ Apri l'app](https://nwitaly.github.io/VoltTool/)**

---

## Funzionalità

### `index.html` — Costo annuale
Inserisci i tuoi dati reali e scopri subito quanto risparmi (o spendi in più) ogni anno scegliendo l'elettrico rispetto al carburante.

- Km percorsi all'anno
- Prezzo reale del carburante alla pompa (€/L)
- Prezzo reale dell'energia elettrica a casa (€/kWh)
- Consumo dell'auto a carburante (km/L) con preset per tipologia di veicolo
- Consumo dell'auto elettrica (kWh/100km) con preset per tipo di percorso
- Risultato in €/anno con dettaglio del costo al km per entrambe le motorizzazioni

### `breakeven.html` — EV o termica?
Dato il consumo delle due auto, calcola a quale prezzo dell'energia (o del carburante) le due opzioni diventano equivalenti. Utile per rispondere a *"conviene l'elettrico se la corrente la pago X?"*

- Due modalità di calcolo:
  - fissa il prezzo del carburante → calcola il prezzo massimo accettabile dell'energia
  - fissa il prezzo dell'energia → calcola il prezzo minimo a cui il carburante deve salire
- Grafico interattivo del costo al km in funzione del prezzo variabile
- Punto di pareggio evidenziato sul grafico

### `charging.html` — Tempo ed energia?
Data la potenza di ricarica, calcola l'energia o il tempo necessario alla ricarica.

- Due modalità di calcolo:
  - tempo → calcola quanti kwh verrebbero erogati dalla colonnina
  - energia → calcola quanto tempo ci vorrebbe alla colonnina per erogare l'energia desiderata
- Grafico interattivo con la visualizzazione contemporanea di più potenze di ricarica
- Funzionalità aggiuntive:
  - Batteria reale → imposta la capacità della batteria
  - Curva decresente → stima una curva di ricarica (solo DC)
  - Perdita di ricarica → stima una perdita di energia

### `range.html` — Ansia da autonomia
Data la capienza della batteria, calcola quanti km si possono percorrere.
- Due modalità di calcolo:
  - Consumo medio → calcola quanti km si fanno con il dato indicato
  - Per tipo di percorso → calcola quanti km si possono fare nei 3 scenari classici
- Grafico per evidenziare la differenza di autonomia in base al percorso
- Funzionalità aggiuntive:
  - Carica attuale e riserva → non sempre la batteria è sempre al 100% e la si vuole utilizzare interamente

---

## Struttura del progetto

```
├── index.html        # Calcolatore risparmio annuale
├── breakeven.html    # Calcolatore punto di pareggio
├── charging.html     # Calcolatore per la ricarica
├── range.html        # Calcolatore per i km disponibili
├── privacy.html      # Policy privacy
└── assets            # Risorse esterne alle pagine
    ├── css           # Fogli di stile condivisi tra le pagine
    ├── fonts         # Per questioni di privacy ho reso disponibili i fonts localmente
    └── js            # nav + i18n + chart  
```

---

## Come funziona

- **Zero build step** — HTML + CSS + JS vanilla, consultabile direttamente nel browser
- **Lingua automatica** — rileva `navigator.language` e mostra IT o EN senza configurazione
- **Stato persistente** — i valori inseriti vengono salvati in `localStorage` e ripristinati alla visita successiva
- **Responsive** — layout a colonna su mobile, sidebar + grafico su desktop; menu hamburger sotto i 700px
- **Slider + input preciso** — ogni parametro è modificabile tramite slider per esplorazione rapida o campo numerico per valori esatti

---

## Dipendenze esterne

| Libreria | Versione | Uso |
|---|---|---|
| [Chart.js](https://www.chartjs.org/) | 4.4.2 | Grafico breakeven (solo `breakeven.html`) |
| [Google Fonts](https://fonts.google.com/) | — | Syne + DM Mono |

Entrambe caricate via CDN, nessun `npm install`.

---

## Sviluppo futuro

Altre funzionalità in programma, ognuna su pagina dedicata per mantenere il codice leggero e indipendente.

## Disclaimer

Buona parte del codice è stato scritto dall'IA di Claude. Se trovi bug e vuoi segnalarmeli sarò felice di correggerli.