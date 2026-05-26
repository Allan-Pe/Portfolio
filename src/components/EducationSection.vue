<template>
  <section class="education">
    <div class="container">
      <span class="section-label">// 05. Formation</span>
      <h2 class="section-title">Parcours académique</h2>
      <div class="edu-note">
        Formation basée sur des <strong>projets courts</strong>, avec 80 % de pratique et une technologie différente à chaque projet, renforçant l'adaptabilité et l'esprit d'analyse.
      </div>
      <div class="edu-grid">
        <div v-for="(edu, i) in education" :key="i" class="edu-card">
          <div class="edu-badge">{{ edu.level }}</div>
          <h3 class="edu-degree">{{ edu.degree }}</h3>
          <p class="edu-school">{{ edu.school }}</p>
          <p class="edu-meta">{{ edu.location }} · {{ edu.period }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { education } from '../data/portfolio.js'
</script>

<style scoped>
.education { background: var(--bg2); }

.edu-note {
  background: rgba(108,99,255,0.08);
  border: 1px solid rgba(108,99,255,0.2);
  border-left: 3px solid var(--accent);
  border-radius: 0 8px 8px 0;
  padding: 1rem 1.25rem;
  font-size: 0.9rem;
  color: var(--text2);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}
.edu-note strong { color: var(--text); }

.edu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}
@media (max-width: 768px) { .edu-grid { grid-template-columns: 1fr; } }

.edu-card {
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: border-color 0.2s, transform 0.2s;
  position: relative;
  overflow: hidden;
}
.edu-card:hover { border-color: rgba(108,99,255,0.3); transform: translateY(-2px); }
.edu-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
}

.edu-badge {
  display: inline-block;
  font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; padding: 3px 8px; border-radius: 4px;
  background: rgba(108,99,255,0.15); color: var(--accent);
  border: 1px solid rgba(108,99,255,0.2);
  margin-bottom: 0.75rem;
}

.edu-degree {
  font-size: 0.95rem; font-weight: 600; color: var(--text);
  line-height: 1.4; margin-bottom: 0.5rem;
}

.edu-school { font-size: 0.875rem; color: var(--accent2); margin-bottom: 0.25rem; }

.edu-meta { font-size: 0.8rem; color: var(--text3); }
</style>
