# Roqus Analytics Futuristinis Favicon

Šis dokumentas aprašo, kaip naudoti naują futuristinį Roqus Analytics faviconą.

## Failai

Favicon paketas susideda iš šių failų:

- `favicon.svg` - Vektorinis favicon failas, kuris jau yra sukurtas ir išsaugotas
- `favicon-16x16.png` - 16x16 dydžio PNG favicon
- `favicon-32x32.png` - 32x32 dydžio PNG favicon
- `favicon-48x48.png` - 48x48 dydžio PNG favicon
- `favicon-64x64.png` - 64x64 dydžio PNG favicon
- `favicon-128x128.png` - 128x128 dydžio PNG favicon
- `favicon-192x192.png` - 192x192 dydžio PNG favicon
- `apple-touch-icon.png` - 180x180 dydžio PNG favicon, skirtas Apple įrenginiams

## Kaip sugeneruoti PNG faviconus

1. Atidarykite `favicon-export.html` failą naršyklėje
2. Spauskite "Atsisiųsti" mygtuką prie kiekvieno dydžio
3. Išsaugokite failus `public` kataloge

## Kaip naudoti

Favicon nuorodos jau yra įtrauktos į `index.html` failą:

```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
<link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
<link rel="icon" href="/favicon-64x64.png" sizes="64x64" type="image/png" />
<link rel="icon" href="/favicon-128x128.png" sizes="128x128" type="image/png" />
<link rel="icon" href="/favicon-192x192.png" sizes="192x192" type="image/png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

## Favicon dizainas

Favicon atspindi Roqus Analytics duomenų analitikos ir vizualizacijos kontekstą:

- **Stulpeliai** - Reprezentuoja duomenų stulpelinę diagramą
- **Linija** - Reprezentuoja duomenų tendencijų liniją
- **Taškai** - Reprezentuoja duomenų taškus
- **Holograminis tinklelis** - Suteikia futuristinį vaizdą
- **Švytėjimo efektai** - Sukuria modernų, technologinį įspūdį

## Spalvos

- **Mėlyna (#94D2FF)** - Pagrindinė Roqus Analytics spalva
- **Ryški mėlyna (#5CEFFF)** - Švytėjimo efektams
- **Violetinė (#9B6DFF)** - Akcentinė spalva
- **Tamsiai violetinė (#7C3AED)** - Taškams
- **Neoninė violetinė (#B026FF)** - Švytėjimo efektams
- **Neoninė mėlyna (#00FFFF)** - Holograminiam tinkleliui
- **Tamsus fonas (#050510)** - Favicon fonui

## 3D versija

Jei norite naudoti interaktyvią 3D favicon versiją, galite naudoti `Favicon3D` komponentą iš `src/components/Favicon3D` katalogo:

```jsx
import { Favicon3D } from '../components/Favicon3D';

const MyComponent = () => {
  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Favicon3D />
    </div>
  );
};
```