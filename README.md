# Portfolio — Allan Pereira

Portfolio personnel développé avec **Vue.js 3** et **Vite**.

## Stack

- Vue.js 3 (Composition API)
- Vite
- CSS custom (variables, scoped)
- Google Fonts — Space Grotesk + Syne

## Lancer en local

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```

## Déploiement

Le projet est déployé via **Vercel**. Chaque `git push` sur `main` déclenche un redéploiement automatique.

## Structure

```
src/
├── components/
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── SkillsSection.vue
│   ├── ExperienceSection.vue
│   ├── ProjectsSection.vue
│   ├── EducationSection.vue
│   └── ContactSection.vue
├── data/
│   └── portfolio.js   ← toutes les données à modifier ici
├── App.vue
└── main.js
```

## Mise à jour du contenu

Toutes les données (expériences, projets, compétences, infos de contact) sont centralisées dans **`src/data/portfolio.js`**. C'est le seul fichier à modifier pour mettre le portfolio à jour.

## Contact

**Allan Pereira** — [allan76440@gmail.com](mailto:allan76440@gmail.com) — [LinkedIn](https://www.linkedin.com/in/pereira-allan-dev-web/) — [GitHub](https://github.com/Allan-Pe)
