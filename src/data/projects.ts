import negativeSpaceImage from '../assets/NegativeSpace.jpg'
import beSafeImage from '../assets/BeSafeBeYourself.jpg'
import sjuSortersKakorImage from '../assets/Sjusorterskakor.jpg'
import aliceImage from '../assets/Aliceinwonderland.jpg'
import drOetkerImage from '../assets/Dr-oetker-paskkampanj.jpg'
import bookwormImage from '../assets/bookworm.jpg'

export const projects = [
  {
    title: "Negative Space",
    image: negativeSpaceImage,
     categories: ["Front-end"],
    description:
      "En responsiv landningssida för ett spel med rymdtema, utvecklad i grupp. Mitt ansvarsområde var att skapa en popup för nyhetsbrevsregistrering där besökaren kunde ange sin e-postadress.",
    technologies: [
      "HTML5",
      "SCSS",
      "JavaScript",
      "Vite",
      "ESLint",
      "Prettier",
    ],
    links: [
      {
        label: "Besök webbplats",
        url: "https://medieinstitutet.github.io/fed25d-grafiska-verktyg-negative-space/",
      },
      {
        label: "Se koden",
        url: "https://github.com/Saandrah/NegativeSpace",
      },
    ],
  },

  {
  title: "Be Safe, Be Yourself",
  image: beSafeImage,
  categories: ["Visuell kommunikation", "Grafisk design"],
  description:
    "Ett visuellt kampanjkoncept som utforskar hur mode, maskbärande och personlig stil kan kommunicera trygghet och individualitet.",
  technologies: ["Grafisk design", "Visuell kommunikation"],
  links: [
    {
      label: "Visa projekt",
      url: "https://sandrahellstrom.myportfolio.com/be-safe-be-yourself",
    },
  ],
},


{
  title: "Sju sorters kakor",
  image: sjuSortersKakorImage,
  categories: ["Visuell kommunikation", "Fotografi", "Grafisk design"],
  description:
    "Ett kokboksprojekt med fokus på grafisk form, typografi, fotografering och layout. Arbetet omfattar bokomslag, uppslag och ett sammanhållet visuellt uttryck.",
  technologies: ["Grafisk design", "Fotografi", "Layout"],
  links: [
  {
    label: "Visa projekt",
    url: "https://sandrahellstrom.myportfolio.com/sju-sorters-kakor",
  },
],
},
{
  title: "Alice in Wonderland",
  image: aliceImage,
  categories: ["Front-end"],
  description:
    "Ett grupprojekt där vi utvecklade ett Alice i Underlandet-inspirerat escape room-spel med sex rum och unika pussel. Jag ansvarade för rum 4, Kurragömma, där spelaren ska hitta och fånga Cheshire-katten som dyker upp på slumpmässiga positioner.",
  technologies: [
    "TypeScript",
    "JavaScript",
    "SCSS",
    "Vite",
    "HTML",
    "CSS",
  ],
  links: [
    {
      label: "Spela spelet",
      url: "https://Medieinstitutet.github.io/fed25d-js-intro-grupparbete-shikadi-shadowstep/",
    },
    {
      label: "Se koden",
      url: "https://github.com/Saandrah/Aliceinwonderlandgame",
    },
  ],
},
{
  title: "Dr. Oetker Påskkampanj",
  image: drOetkerImage,
  categories: ["Fotografi", "Visuell kommunikation", "Grafisk design"],
  description:
    "Ett visuellt kampanjkoncept för Dr. Oetker med fokus på receptfotografi, grafisk form och layout. Projektet omfattar utformning av receptmaterial och en sammanhållen visuell presentation av påskkampanjen.",
  technologies: [
    "Grafisk design",
    "Visuell kommunikation",
    "Fotografi",
    "Layout",
  ],
  links: [
    {
      label: "Visa projekt",
      url: "https://sandrahellstrom.myportfolio.com/dr-oetker-paskkampanj",
    },
  ],
},

{
  title: "Bookworm",
  image: bookwormImage,
  categories: ["Front-end", "Back-end"],
  description:
    "En bokkatalog utvecklad i grupp där besökare kan utforska böcker och skriva recensioner. Jag ansvarade för recensionerna och arbetade med API, integrationen mellan backend och frontend samt klientdelen.",
  technologies: [
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "Vercel",
  ],
  links: [
    {
      label: "Besök webbplats",
      url: "https://api-assignment-2-eta.vercel.app",
    },
  ],
},


]
