# Roqus Analytics Futuristinis 3D Favicon

Modernus, futuristinis 3D faviconas su "wow" efektais, atspindintis duomenų analitiką ir vizualizaciją. Sukurtas naudojant Three.js, React Three Fiber ir pažangius vizualinius efektus.

## Apžvalga

Šis komponentas sukuria interaktyvų 3D faviconą, kuris rodo futuristinį duomenų analizės grafiką su stulpeliais, linija ir įvairiais vizualiniais efektais. Faviconas naudoja svetainės mėlyną spalvą (#94D2FF) ir kitas spalvas iš dizaino dokumentacijos, papildytas neoniniais atspalviais.

## Futuristiniai Efektai

- **Holograminis efektas** - Tinklelis ir cilindras su permatomomis linijomis
- **Švytėjimas (Bloom)** - Ryškus elementų švytėjimas su post-processing efektais
- **Dinamiškos animacijos** - Stulpelių aukščio kitimas ir bendras sukimasis
- **Chromatinė aberacija** - Subtilus spalvų išsiskyrimas kraštinėse zonose
- **Dalelių sistema** - Švytinčios dalelės aplink grafiką
- **Neoninės spalvos** - Ryškios, futuristinės spalvos su švytėjimu
- **Distortion efektai** - Subtilus elementų iškraipymas
- **Interaktyvumas** - Reakcija į pelės judesius

## Komponentai

- `Favicon3D.tsx` - Pagrindinis komponentas, kuris renderina 3D grafiką su post-processing efektais
- `AnimatedChart.tsx` - Komponentas, kuris sukuria futuristinį 3D grafiką su stulpeliais, linija ir efektais
- `FaviconGenerator.tsx` - Komponentas, kuris generuoja faviconą kaip PNG paveikslėlį

## Naudojamos Bibliotekos

- **Three.js** - 3D grafikos variklis
- **React Three Fiber** - React renderis Three.js
- **React Three Drei** - Pagalbiniai komponentai ir funkcijos (Float, Trail, Sparkles, ContactShadows, Environment)
- **React Three Postprocessing** - Post-processing efektai (Bloom, ChromaticAberration, Noise)
- **React Spring Three** - Fizika pagrįstos animacijos

## Kaip naudoti

### Komponentą svetainėje

```tsx
import { Favicon3D } from '../components/Favicon3D';

const MyPage = () => {
  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Favicon3D />
    </div>
  );
};
```

### Generuoti faviconą

#### Naudojant FaviconGenerator komponentą

```tsx
import { FaviconGenerator } from '../components/Favicon3D';

const MyPage = () => {
  const handleFaviconGenerated = (dataUrl: string) => {
    // Čia galite išsaugoti arba naudoti sugeneruotą faviconą
    console.log('Favicon generated:', dataUrl);
  };

  return (
    <div>
      <FaviconGenerator onGenerate={handleFaviconGenerated} />
    </div>
  );
};
```

#### Naudojant generavimo skriptą

Paleiskite šią komandą terminale:

```bash
node scripts/generate-favicon.js
```

Skriptas sugeneruos faviconą skirtingais dydžiais ir išsaugos juos `public` kataloge.

## Faviconų dydžiai

Skriptas generuoja šiuos faviconų dydžius:

- 16x16
- 32x32
- 48x48
- 64x64
- 128x128
- 256x256
- Originalus dydis (512x512)

## Peržiūra

Galite peržiūrėti sugeneruotą faviconą atsidarę `public/favicon-preview.html` failą naršyklėje.

## Pritaikymas

Jei norite pakeisti favicono išvaizdą, galite redaguoti `AnimatedChart.tsx` failą:

- Pakeisti spalvas ir efektus
- Pakeisti stulpelių aukštį ir pozicijas
- Pridėti papildomų elementų
- Pakeisti animacijos parametrus
- Modifikuoti post-processing efektus

## Techninės detalės

### 3D elementai
- Stulpeliai (boxGeometry) su distortion efektu
- Linija (lineGeometry) su švytėjimu
- Taškai (sphereGeometry) su wobble efektu
- Holograminis tinklelis (gridHelper)
- Holograminis cilindras (cylinderGeometry)
- Dalelių sistema (Sparkles)

### Efektai
- Bloom - švytėjimo efektas
- Chromatinė aberacija - spalvų išsiskyrimas kraštinėse zonose
- Noise - subtilus triukšmas holograminiam efektui
- Distortion - elementų iškraipymas
- Wobble - elementų svyravimas
- Trail - šleifas už judančių elementų

### Animacijos
- Sukimasis aplink Y ašį
- Svyravimas aplink X ašį
- Dinamiškas stulpelių aukščio kitimas
- Pulsuojantis švytėjimas
- Float - elementų plūduriavimas

### Apšvietimas
- Ambient light - bendras apšvietimas
- Spot light - pagrindinis šviesos šaltinis
- Point lights - spalvoti šviesos šaltiniai
- Environment - aplinkos apšvietimas

## Įdiegimas į svetainę

1. Sugeneruokite faviconą naudodami skriptą arba komponentą
2. Įdėkite sugeneruotus faviconus į `public` katalogą
3. Pridėkite šias eilutes į `index.html` failo `<head>` dalį:

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16">
<link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32">
<link rel="icon" href="/favicon-48x48.png" type="image/png" sizes="48x48">
<link rel="icon" href="/favicon-64x64.png" type="image/png" sizes="64x64">
<link rel="icon" href="/favicon-128x128.png" type="image/png" sizes="128x128">
<link rel="icon" href="/favicon-256x256.png" type="image/png" sizes="256x256">
<link rel="apple-touch-icon" href="/favicon-128x128.png">
```