# Roqus Analytics Dizaino Dokumentacija

Šis dokumentas aprašo Roqus Analytics svetainės dizaino gaires, spalvas, komponentus ir kitus svarbius elementus. Dokumentas skirtas padėti dizaineriams ir programuotojams išlaikyti vientisą dizainą ir lengvai rasti reikiamą informaciją.

## Turinys

1. [Spalvų paletė](#spalvų-paletė)
2. [Tipografija](#tipografija)
3. [Komponentai](#komponentai)
   - [Kortelės](#kortelės)
   - [Mygtukai](#mygtukai)
   - [Įvesties laukai](#įvesties-laukai)
4. [Išdėstymas](#išdėstymas)
   - [Z-išdėstymas](#z-išdėstymas)
   - [Tinklelio sistema](#tinklelio-sistema)
5. [Diagramos ir vizualizacijos](#diagramos-ir-vizualizacijos)
   - [Srautų diagramos](#srautų-diagramos)
   - [Duomenų vizualizacijos](#duomenų-vizualizacijos)
6. [Animacijos ir perėjimai](#animacijos-ir-perėjimai)
7. [Ikonos](#ikonos)
8. [Responsive dizainas](#responsive-dizainas)

## Spalvų paletė

### Pagrindinės spalvos

- **Tamsus fonas**: `#121212` (bg-nexos-dark)
- **Šviesesnis tamsus fonas**: `#1a1a1a` (bg-nexos-dark-light)
- **Violetinė (akcentinė)**: `#9B6DFF` (bg-nexos-purple)
- **Tamsesnė violetinė**: `#7C3AED` (indigo-600)
- **Ryški violetinė**: `#4338ca` (indigo-800) - naudojama diagramų linijoms

### Teksto spalvos

- **Pagrindinis teksto spalva**: `#262B30` (text-[#262B30])
- **Baltas tekstas**: `#FFFFFF` (text-white)
- **Šviesiai pilkas tekstas**: `#D1D5DB` (text-gray-300)
- **Pilkas tekstas**: `#9CA3AF` (text-gray-400)
- **Šviesiai pilkas/melsvas aprašymų tekstas**: `#7A8999` (process-description)

### Gradientai

- **Violetinis gradientas**: `bg-gradient-to-r from-indigo-500 to-purple-500` (nexos-gradient)
- **Kortelių gradientas**: `bg-gradient-to-br from-nexos-purple/30 to-transparent opacity-20`

## Tipografija

### Šriftai

- **Pagrindinis šriftas**: Inter (sans-serif)
- **Antraštės**: Inter, svoris 700 (bold) arba 600 (semibold)
- **Pastraipų tekstas**: Inter, svoris 400 (regular)

### Dydžiai

- **Didžiosios antraštės (H1)**: 3rem (48px) - `text-5xl`
- **Antraštės (H2)**: 2.25rem (36px) - `text-4xl`
- **Mažesnės antraštės (H3)**: 1.5rem (24px) - `text-2xl`
- **Pastraipų tekstas**: 1rem (16px) - `text-base`
- **Mažas tekstas**: 0.875rem (14px) - `text-sm`

## Komponentai

### Kortelės

#### Standartinė kortelė (nexos-card)

```html
<div className="nexos-card p-6 rounded-xl">
  <!-- Turinys -->
</div>
```

- **Klasė**: `nexos-card`
- **Fonas**: Tamsus su subtiliu gradientu
- **Kampų apvalinimas**: `rounded-xl` (0.75rem)
- **Šešėlis**: Subtilus violetinis šešėlis
- **Padding**: `p-6` (1.5rem)

#### Kortelė su švytėjimu (nexos-glow)

```html
<div className="nexos-card nexos-glow p-6 rounded-xl">
  <!-- Turinys -->
</div>
```

- **Papildoma klasė**: `nexos-glow`
- **Efektas**: Subtilus violetinis švytėjimas aplink kortelę

### Mygtukai

#### Standartinis mygtukų stilius

Visi svetainės mygtukai naudoja standartizuotą stilių, kuris užtikrina vientisą išvaizdą visoje svetainėje.

```html
<button className="nexos-button-standard">
  Tekstas
</button>
```

- **Klasė**: `nexos-button-standard`
- **Kampų apvalinimas**: `rounded-xl` (0.75rem)
- **Padding**: `px-8 py-4`
- **Šrifto storis**: `font-medium`
- **Hover efektas**: Subtilus pakėlimas `hover:translate-y-[-2px]`
- **Perėjimo efektas**: `transition-all transform`

#### Pirminis mygtukas

```html
<button className="nexos-button-primary">
  Tekstas
</button>
```

- **Klasė**: `nexos-button-primary`
- **Paveldi**: `nexos-button-standard`
- **Fonas**: Violetinis gradientas `bg-gradient-to-r from-nexos-purple to-nexos-purple-dark`
- **Teksto spalva**: Balta
- **Hover efektas**: Šviesesnis gradientas `hover:opacity-90` ir šešėlis `hover:shadow-lg`

#### Antrinis mygtukas

```html
<button className="nexos-button-secondary">
  Tekstas
</button>
```

- **Klasė**: `nexos-button-secondary`
- **Paveldi**: `nexos-button-standard`
- **Fonas**: Permatomas `bg-nexos-dark-light`
- **Rėmelis**: `border border-white/20`
- **Teksto spalva**: Balta
- **Hover efektas**: Violetinis rėmelis `hover:border-nexos-purple/50`, violetinis tekstas `hover:text-nexos-purple` ir subtilus fonas `hover:bg-white/5`

#### Navigacijos mygtukai

Navigacijos juostoje naudojami mažesni mygtukai su pritaikytu dydžiu:

```html
<button className="nexos-button-primary text-sm py-2 px-4 rounded-lg">
  Tekstas
</button>
```

- **Papildomos klasės**: `text-sm py-2 px-4 rounded-lg`
- **Naudojimas**: Navigacijos juostoje ir footer'yje

## Išdėstymas

### Z-išdėstymas

Z-išdėstymas naudojamas "Kodėl tai naudinga" sekcijoje, kur elementai išdėstyti zigzago forma:

```html
<!-- Pirma eilutė: tekstas kairėje, paveikslas dešinėje -->
<div className="flex flex-col md:flex-row items-center">
  <div className="md:w-1/2 md:pr-12">
    <!-- Tekstas -->
  </div>
  <div className="md:w-1/2">
    <!-- Paveikslas -->
  </div>
</div>

<!-- Antra eilutė: paveikslas kairėje, tekstas dešinėje -->
<div className="flex flex-col md:flex-row-reverse items-center">
  <div className="md:w-1/2 md:pl-12">
    <!-- Tekstas -->
  </div>
  <div className="md:w-1/2">
    <!-- Paveikslas -->
  </div>
</div>
```

### Tinklelio sistema

Naudojame Tailwind CSS tinklelio sistemą:

- **Konteineris**: `nexos-container` (max-width: 1280px, mx-auto, px-4)
- **Eilutė**: `flex flex-col md:flex-row`
- **Stulpeliai**: `md:w-1/2`, `md:w-1/3`, `md:w-1/4` ir t.t.
- **Tarpai**: `gap-4`, `gap-6`, `gap-8` ir t.t.

## Diagramos ir vizualizacijos

### Srautų diagramos

#### Duomenų srauto diagrama

Diagrama, rodanti duomenų srautą iš įvairių šaltinių į centrinį elementą (Power BI) ir tada į rezultatus.

```jsx
<div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-12 relative">
  {/* SVG linijos */}
  <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
      {/* Linijos iš kairės pusės komponentų */}
      <path
        d="M 300,50 C 400,50 500,150 600,200"
        stroke="#4338ca"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Kitos linijos... */}
    </svg>
  </div>

  {/* Kairė pusė - duomenų šaltiniai */}
  <div className="flex flex-col space-y-6 md:w-1/3 relative" style={{ zIndex: 10 }}>
    {/* Duomenų šaltinių kortelės */}
  </div>

  {/* Centras - Power BI */}
  <div className="flex items-center justify-center md:w-1/3" style={{ zIndex: 10 }}>
    {/* Centrinis elementas */}
  </div>

  {/* Dešinė pusė - rezultatai */}
  <div className="flex flex-col space-y-6 md:w-1/3 relative" style={{ zIndex: 10 }}>
    {/* Rezultatų kortelės */}
  </div>
</div>
```

**Linijų stilius**:
- **Spalva**: `#4338ca` (indigo-800)
- **Storis**: `2.5px`
- **Užapvalinimas**: `strokeLinecap="round"`
- **Kreivės**: Kubinės Bezier kreivės, jungiančios elementus

### Duomenų vizualizacijos

Naudojame Recharts biblioteką duomenų vizualizacijoms:

```jsx
<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="value" fill="#9B6DFF" />
  </BarChart>
</ResponsiveContainer>
```

## Animacijos ir perėjimai

### Fade-in animacija

```jsx
<div
  className={`transition-all duration-1000 transform ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`}
>
  <!-- Turinys -->
</div>
```

### Pulsavimo animacija

```jsx
<div className="animate-pulse-glow">
  <!-- Turinys -->
</div>
```

## Ikonos

Naudojame Lucide React ikonų biblioteką:

```jsx
import { BarChart3, ArrowRight, FileSearch } from "lucide-react";

// Naudojimas
<BarChart3 className="h-5 w-5 text-nexos-purple" />
```

## Responsive dizainas

### Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Mobilios versijos pritaikymai

```jsx
<div className="flex flex-col lg:flex-row">
  <div className="lg:w-1/2">
    <!-- Turinys, kuris užima visą plotį mobiliuose ir pusę ekrano didesniuose ekranuose -->
  </div>
</div>
```

### Mobilios versijos diagramos

Mobilios versijos diagramoms naudojame vertikalų išdėstymą su vertikaliomis jungiančiomis linijomis:

```jsx
<div className="sm:hidden flex flex-col items-center my-6 w-full">
  {/* Viršutinė dalis - duomenų šaltiniai */}
  <div className="w-full grid grid-cols-2 gap-4 mb-6 relative">
    {/* Duomenų šaltinių kortelės */}

    {/* Jungiančios linijos */}
    <div className="absolute bottom-[-20px] left-1/4 w-[2.5px] h-[20px] bg-indigo-800 rounded-full"></div>
    <div className="absolute bottom-[-20px] right-1/4 w-[2.5px] h-[20px] bg-indigo-800 rounded-full"></div>
  </div>

  {/* Vertikali jungianti linija */}
  <div className="h-16 w-[2.5px] bg-indigo-800 rounded-full mb-6"></div>

  {/* Centrinis elementas */}

  {/* Vertikali jungianti linija */}
  <div className="h-16 w-[2.5px] bg-indigo-800 rounded-full mb-6"></div>

  {/* Apatinė dalis - rezultatai */}
  <div className="w-full grid grid-cols-2 gap-4 relative">
    {/* Jungiančios linijos */}
    <div className="absolute top-[-20px] left-1/4 w-[2.5px] h-[20px] bg-indigo-800 rounded-full"></div>
    <div className="absolute top-[-20px] right-1/4 w-[2.5px] h-[20px] bg-indigo-800 rounded-full"></div>

    {/* Rezultatų kortelės */}
  </div>
</div>
```
