<template>
  <section class="about">
    <div class="container">
      <span class="section-label">// 01. Qui suis-je</span>
      <div class="about-grid">
        <div class="about-text">
          <h2 class="section-title">À propos</h2>
          <p>{{ profile.about }}</p>
          <p style="margin-top:1rem; color: var(--text2);">
            Basé à <strong style="color:var(--text)">Achères (78)</strong>, je travaille en remote ou en présentiel selon les projets.
            Mon parcours à la <strong style="color:var(--text)">Coding Factory by ESIEE-IT</strong> m'a donné une approche orientée
            projet, avec 80 % de pratique et une techno différente à chaque sprint.
          </p>
          <div class="about-links">
            <a :href="profile.github" target="_blank" class="about-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              github.com/Allan-Pe
            </a>
            <a :href="profile.linkedin" target="_blank" class="about-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
        <div class="about-stats">
          <div class="stat-card" v-for="stat in stats" :key="stat.label">
            <span class="stat-num">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
          <div class="soft-skills">
            <h4>Soft Skills</h4>
            <div class="ss-list">
              <span v-for="s in softSkills" :key="s" class="ss-item">{{ s }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { profile } from '../data/portfolio.js'
const stats = [
  { value: '4+', label: 'Ans d\'expérience' },
  { value: '3', label: 'Entreprises' },
  { value: '6+', label: 'Projets perso' },
  { value: 'Master', label: 'Niveau d\'études' },
]
const softSkills = ['Adaptabilité rapide', 'Esprit d\'analyse', 'Autonomie progressive', 'Curiosité technique', 'Esprit d\'équipe', 'Communication claire']
</script>

<style scoped>
.about { background: var(--bg2); }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; gap: 2rem; } }

.about-text p { color: var(--text2); line-height: 1.8; }

.about-links {
  display: flex; gap: 1.5rem; margin-top: 1.5rem; flex-wrap: wrap;
}

.about-link {
  display: flex; align-items: center; gap: 8px;
  font-size: 0.875rem; color: var(--text2);
  transition: color 0.2s;
}
.about-link:hover { color: var(--accent); }

.about-stats { display: flex; flex-direction: column; gap: 1rem; }

.stat-card {
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem 1.5rem;
  display: flex; align-items: center; gap: 1rem;
}

.stat-num {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
  min-width: 60px;
}

.stat-label { font-size: 0.875rem; color: var(--text2); }

.soft-skills {
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem 1.5rem;
}

.soft-skills h4 { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text3); margin-bottom: 0.75rem; }

.ss-list { display: flex; flex-wrap: wrap; gap: 6px; }

.ss-item {
  font-size: 12px; padding: 4px 10px; border-radius: 999px;
  background: rgba(255,255,255,0.05); border: 1px solid var(--border);
  color: var(--text2);
}
</style>
