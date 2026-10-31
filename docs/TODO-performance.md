# TODO — Performance dei siti clienti

Misurazioni Lighthouse mobile reali (simulated throttling), raccolte il 2026-10-31
durante S4 di gnwebagency.com. Non mostrate sul sito (solo Accessibilità è
pubblica, nelle card Lavori); questo file è il riferimento interno per capire
cosa ottimizzare.

| Sito | Performance | Accessibilità | FCP | LCP | TBT | CLS |
|---|---|---|---|---|---|---|
| condass.it | 93 | 100 | 1.1s | **3.1s** | 0ms | 0 |
| terrazzapartenopea.it | 91 | 96 | 2.1s | 2.1s | 70ms | 0 |
| bebnapule.it | 93 | 100 | 1.7s | 1.7s | 0ms | 0.001 |
| difrancocompany.it | **74** | 95 | 2.8s | **4.1s** | 300ms | 0 |

## Da ottimizzare

- **Di Franco Company** — performance 74/100, LCP 4.1s, TBT 300ms. È il sito
  più lento del gruppo. L'hero mostra un render 3D del prodotto (immagine
  pesante): da comprimere/servire in formato moderno (WebP/AVIF) e
  ridimensionare correttamente per mobile. TBT alto suggerisce JS da
  ottimizzare o differire (analisi ulteriore needed).
- **Condass** — LCP 3.1s nonostante performance complessiva alta (93):
  probabile immagine hero (foto aerea impianto) non ottimizzata per il primo
  paint. Da verificare `loading`/dimensioni/formato dell'immagine hero.
- **Terrazza Partenopea** — TBT 70ms, nella norma ma migliorabile; non
  prioritario rispetto ai due sopra.

## Non toccare in questo step

Questi siti sono progetti clienti già consegnati, fuori dallo scope del
redesign di gnwebagency.com. Questo file serve solo a tracciare interventi
futuri (manutenzione) se/quando concordati con i clienti.
