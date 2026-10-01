# DS Polish – website

Statičan sajt (HTML/CSS/JS, bez biblioteka). Otvorite `index.html` ili ga postavite na bilo koji hosting.

## Struktura
```
index.html      sav sadržaj, SEO, JSON-LD
css/style.css   dizajn i responsive
js/main.js      meni, pre/posle klizač, animacije
images/         isečci iz vaše fotografije (proces-1..4, audi-r8)
favicon.svg  robots.txt  sitemap.xml
```

## Šta treba zameniti
U `index.html` pretražite oznake u uglastim zagradama:

| Oznaka | Gde |
|---|---|
| `[DOMEN]` (`vas-domen.rs`) | `index.html` (canonical, og:url, JSON-LD), `robots.txt`, `sitemap.xml` |
| `[ADRESA]`, `[GRAD]` | kontakt, mapa, footer, JSON-LD |
| `[GOOGLE MAPS LINK]` | dugme „Pronađi nas na Google Maps", mapa, footer, JSON-LD `hasMap` |
| `[GOOGLE MAPS EMBED]` | `src` iframe-a mape (Google Maps → Podeli → Ugradi mapu) |
| `[RADNO VREME]` | kontakt, footer, JSON-LD `openingHoursSpecification` |
| `[FOTOGRAFIJE]` | hero, usluge, o nama, Instagram, og:image |

Telefon (`065 314 4591` / `tel:+381653144591`) i Instagram (`@_ds_polish`) su već uneti.

## Pre / posle fotografija
Koriste se `images/far-pre.jpg` i `images/far-posle.jpg` (kvadratne, 1024×1024).
Za novi primer samo zamenite ta dva fajla, po mogućstvu snimljena iz istog ugla.

## Fotografije
Placeholder fotografije se učitavaju sa Unsplash-a (besplatna licenca). Za najbolji rezultat zamenite ih
sopstvenim fotografijama u `/images` (JPG/WebP, hero ~1600px, ostale ~1000px).
