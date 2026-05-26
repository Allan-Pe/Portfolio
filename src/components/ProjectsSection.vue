<template>
  <section class="projects">
    <div class="container">
      <span class="section-label">// 04. Projets</span>
      <h2 class="section-title">Projets personnels</h2>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card" :style="{'--card-accent': project.color}">
          <div class="card-top">
            <span class="project-icon">{{ project.icon }}</span>
            <span class="project-status" :class="project.status === 'En cours' ? 'active' : 'done'">
              <span class="status-dot"></span>
              {{ project.status }}
            </span>
          </div>
          <h3 class="project-name">{{ project.name }}</h3>
          <p class="project-desc">{{ project.description }}</p>
          <div class="project-stack">
            <span v-for="tech in project.stack" :key="tech" class="tag gray">{{ tech }}</span>
          </div>
          <div class="card-glow"></div>
        </div>
      </div>
      <div class="github-cta">
        <a :href="github" target="_blank" class="github-btn">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          Voir tous mes projets sur GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects, profile } from '../data/portfolio.js'
const github = profile.github
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}
@media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr; } }

.project-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.25s;
}

.project-card:hover {
  border-color: var(--card-accent, var(--accent));
  transform: translateY(-3px);
}

.card-glow {
  position: absolute;
  bottom: -40px; right: -40px;
  width: 120px; height: 120px;
  border-radius: 50%;
  background: var(--card-accent, var(--accent));
  opacity: 0;
  filter: blur(40px);
  transition: opacity 0.3s;
  pointer-events: none;
}
.project-card:hover .card-glow { opacity: 0.12; }

.card-top {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 1rem;
}

.project-icon { font-size: 1.75rem; }

.project-status {
  display: flex; align-items: center; gap: 5px;
  font-size: 11px; font-weight: 500; padding: 3px 10px;
  border-radius: 999px;
}

.project-status.active { background: rgba(45,198,83,0.12); color: #2DC653; border: 1px solid rgba(45,198,83,0.25); }
.project-status.done { background: rgba(150,150,180,0.1); color: var(--text2); border: 1px solid var(--border); }

.status-dot {
  width: 6px; height: 6px; border-radius: 50%; background: currentColor;
}
.project-status.active .status-dot { animation: pulse-small 2s infinite; }
@keyframes pulse-small {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.project-name {
  font-family: var(--font-display); font-size: 1.25rem; font-weight: 700;
  margin-bottom: 0.5rem; color: var(--text);
}

.project-desc {
  font-size: 0.875rem; color: var(--text2); line-height: 1.6;
  margin-bottom: 1rem;
}

.project-stack { display: flex; flex-wrap: wrap; gap: 5px; }

.github-cta { text-align: center; }

.github-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 28px;
  border: 1px solid var(--border);
  border-radius: 8px; color: var(--text2);
  font-size: 0.9rem; font-weight: 500;
  transition: all 0.2s;
}
.github-btn:hover { border-color: var(--accent); color: var(--text); transform: translateY(-1px); }
</style>
