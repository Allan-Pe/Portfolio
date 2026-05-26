export const profile = {
  name: "Allan Pereira",
  title: "Développeur Fullstack",
  tagline: "Front-end expérimenté · Back-end & API · Approche Agile",
  about: "Développeur fullstack passionné par la qualité du code et l'expérience utilisateur. J'aime transformer des architectures complexes en solutions claires, maintenables et performantes. Curieux de nature, j'apprends rapidement et m'adapte à chaque contexte technique.",
  location: "Achères, 78260",
  email: "allan76440@gmail.com",
  phone: "06 15 45 37 43",
  github: "https://github.com/Allan-Pe",
  linkedin: "https://www.linkedin.com/in/pereira-allan-dev-web/",
}

export const skills = {
  advanced: ["Vue.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Git", "Agile / Scrum"],
  intermediate: ["PHP", "Laravel", "SQL", "Node.js", "Postman", "Figma", "Jira"],
  learning: ["React", "TypeScript", "Python", "Kotlin", "Angular", "Cursor"],
}

export const experiences = [
  {
    id: 1,
    role: "Responsable Développement Front-End",
    company: "Charlie Solutions",
    period: "Août 2024 – Février 2026",
    description: "Application de localisation de parc matériel",
    highlights: [
      "Gestion et structuration de l'architecture front-end",
      "Refactorisation d'un monolithe ~1 000 lignes → composant parent réduit à 300 lignes",
      "Migration legacy vers Vue.js / Laravel",
      "Conception d'une carte interactive avec géolocalisation",
      "Mise en place Agile : tickets non livrés réduits de 50 % à 20 %",
    ],
    stack: ["Vue.js", "JavaScript", "PHP", "Laravel", "Tailwind CSS", "SQL", "Figma"],
    color: "#6C63FF",
  },
  {
    id: 2,
    role: "Développeur Full-Stack",
    company: "Dataraise",
    period: "Novembre 2021 – Août 2024",
    description: "Produit interne d'analyse de qualité de code Talend",
    highlights: [
      "Migration Vue.js 2 → Vue.js 3 + intégration Electron pour desktop",
      "Gestion des flux Talend (Java) via back-end Node.js",
      "Optimisation des traitements : x3 plus rapide",
      "Développement de composants et graphiques complexes",
      "Mise en place Vuex & Vue Router",
    ],
    stack: ["Vue.js", "Vuetify", "Node.js", "JavaScript", "Electron", "Talend", "SQL"],
    color: "#00B4D8",
  },
  {
    id: 3,
    role: "Développeur Front-End",
    company: "Kompara",
    period: "Avril 2021 – Juillet 2021 (Stage)",
    description: "Comparateur de sociétés d'envoi d'argent à l'international",
    highlights: [
      "Développement d'un système de conversion de devises",
      "Site vitrine responsive",
      "Travail en équipe de stagiaires",
    ],
    stack: ["Angular", "TypeScript", "Bootstrap", "HTML", "CSS"],
    color: "#F77F00",
  },
]

export const projects = [
  {
    id: 1,
    name: "Pokekrai",
    description: "Pokédex avancé avec base de données locale et système de seed pour les données.",
    status: "En cours",
    stack: ["React", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "Docker", "Figma"],
    color: "#6C63FF",
    icon: "⚡",
  },
  {
    id: 2,
    name: "Scraper Leboncoin",
    description: "Outil de scraping pour analyser des annonces voitures sur Leboncoin.",
    status: "En cours",
    stack: ["Vue.js", "Python", "Flask"],
    color: "#00B4D8",
    icon: "🔍",
  },
  {
    id: 4,
    name: "Fractal Multiplex",
    description: "Application de génération de fractales interactives (Mandelbrot / Julia) avec zoom et navigation.",
    status: "Terminé",
    stack: ["Kotlin (Ktor)", "Vite", "JavaScript", "Node.js", "Gradle"],
    color: "#6C5CE7",
    icon: "🌀",
  },
  {
    id: 5,
    name: "Mini Jeu Rugby – Salon de la Data",
    description: "Jeu interactif de rugby avec analyse de statistiques pour un salon de la data.",
    status: "Terminé",
    stack: ["Unity", "C#", "Node.js"],
    color: "#2DC653",
    icon: "🏉",
  },
  {
    id: 5,
    name: "CreatePlayer Electron",
    description: "Outil demandé par un commercial pour générer rapidement des graphiques de compétences à partir de CV anonymisés.",
    status: "Terminé",
    stack: ["Electron", "Vue.js", "JavaScript", "Node.js"],
    color: "#00B4D8",
    icon: "📊",
  },
  {
    id: 6,
    name: "Gloomy Fantasy",
    description: "Projet annuel de RPG mobile immersif mêlant monde réel et univers fantasy. Le gameplay repose sur la géolocalisation avec exploration de lieux réels influençant la progression du joueur.",
    status: "Terminé",
    stack: ["Unity", "Blender", "Node.js", "SQL", "C#"],
    color: "#8E7CC3",
    icon: "🌑",
  }
]

export const education = [
  {
    degree: "Manager en ingénierie informatique – Parcours Lead Dev",
    school: "Coding Factory by ESIEE-IT",
    location: "Cergy-Pontoise",
    period: "2023 – 2025",
    level: "Master",
  },
  {
    degree: "Développeur chargé de projets en solutions mobiles et connectées",
    school: "Coding Factory by ESIEE-IT",
    location: "Paris – Montparnasse",
    period: "2022 – 2023",
    level: "Bachelor",
  },
  {
    degree: "Analyste développeur d'applications informatiques",
    school: "Coding Factory by Itescia",
    location: "Paris – Champerret",
    period: "2020 – 2022",
    level: "Bachelor",
  },
]
