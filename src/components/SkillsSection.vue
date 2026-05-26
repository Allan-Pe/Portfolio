<template>
  <section class="skills">
    <div class="container">
      <span class="section-label">// 02. Compétences</span>
      <h2 class="section-title">Stack technique</h2>
      <div class="skills-grid">
        <div class="skill-group">
          <div class="skill-group-header">
            <span class="skill-dot" style="background:#6C63FF"></span>
            Maîtrise avancée
          </div>
          <div class="skill-items">
            <div v-for="s in skills.advanced" :key="s" class="skill-chip advanced">
              <span class="chip-icon">⚡</span>{{ s }}
            </div>
          </div>
        </div>
        <div class="skill-group">
          <div class="skill-group-header">
            <span class="skill-dot" style="background:#00B4D8"></span>
            Intermédiaire
          </div>
          <div class="skill-items">
            <div v-for="s in skills.intermediate" :key="s" class="skill-chip intermediate">{{ s }}</div>
          </div>
        </div>
        <div class="skill-group">
          <div class="skill-group-header">
            <span class="skill-dot" style="background:#F77F00"></span>
            En apprentissage
          </div>
          <div class="skill-items">
            <div v-for="s in skills.learning" :key="s" class="skill-chip learning">{{ s }}</div>
          </div>
        </div>
      </div>

      <div class="tools-section">
        <h3 class="tools-title">Outils & Environnement</h3>
        <div class="tools-list">
          <div v-for="tool in tools" :key="tool.name" class="tool-item">
            <span class="tool-icon">{{ tool.icon }}</span>
            <span>{{ tool.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skills } from '../data/portfolio.js'
const tools = [
  { name: 'Git / GitHub', icon: '🔧' },
  { name: 'VS Code', icon: '💻' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Postman', icon: '📡' },
  { name: 'Jira', icon: '📋' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Scrum / Kanban', icon: '🏃' },
  { name: 'Cursor', icon: '✨' },
]
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}
@media (max-width: 768px) { .skills-grid { grid-template-columns: 1fr; } }

.skill-group {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
}

.skill-group-header {
  display: flex; align-items: center; gap: 8px;
  font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--text3);
  margin-bottom: 1rem;
}

.skill-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

.skill-items { display: flex; flex-wrap: wrap; gap: 6px; }

.skill-chip {
  font-size: 12px; font-weight: 500; padding: 5px 11px;
  border-radius: 6px; display: flex; align-items: center; gap: 5px;
  transition: transform 0.15s;
}
.skill-chip:hover { transform: translateY(-2px); }

.advanced { background: rgba(108,99,255,0.12); color: #a5a0ff; border: 1px solid rgba(108,99,255,0.2); }
.intermediate { background: rgba(0,180,216,0.1); color: #5ecfec; border: 1px solid rgba(0,180,216,0.2); }
.learning { background: rgba(247,127,0,0.1); color: #f8a84b; border: 1px solid rgba(247,127,0,0.2); }

.chip-icon { font-size: 10px; }

.tools-section {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem 2rem;
}

.tools-title {
  font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--text3); margin-bottom: 1rem;
}

.tools-list { display: flex; flex-wrap: wrap; gap: 1rem; }

.tool-item {
  display: flex; align-items: center; gap: 6px;
  font-size: 13px; color: var(--text2);
  padding: 6px 14px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border);
  border-radius: 6px;
  transition: all 0.15s;
}
.tool-item:hover { border-color: rgba(255,255,255,0.15); color: var(--text); }
</style>
