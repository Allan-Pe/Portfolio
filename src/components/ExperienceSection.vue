<template>
  <section class="experience">
    <div class="container">
      <span class="section-label">// 03. Expériences</span>
      <h2 class="section-title">Parcours professionnel</h2>
      <div class="timeline">
        <div
          v-for="(exp, i) in experiences"
          :key="exp.id"
          class="timeline-item"
          :class="{ active: activeExp === i }"
          @mouseenter="activeExp = i"
        >
          <div class="timeline-line">
            <div class="timeline-dot" :style="{ background: exp.color }"></div>
            <div class="timeline-connector" v-if="i < experiences.length - 1"></div>
          </div>
          <div class="timeline-content">
            <div class="exp-header">
              <div>
                <h3 class="exp-role">{{ exp.role }}</h3>
                <p class="exp-company">{{ exp.company }} <span class="exp-desc">- {{ exp.description }}</span></p>
              </div>
              <span class="exp-period">{{ exp.period }}</span>
            </div>
            <ul class="exp-highlights">
              <li v-for="h in exp.highlights" :key="h">{{ h }}</li>
            </ul>
            <div class="exp-stack">
              <span v-for="tech in exp.stack" :key="tech" class="tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { experiences } from '../data/portfolio.js'
const activeExp = ref(0)
</script>

<style scoped>
.experience { background: var(--bg2); }

.timeline { display: flex; flex-direction: column; gap: 0; }

.timeline-item {
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 1.5rem;
  cursor: default;
}

.timeline-line { display: flex; flex-direction: column; align-items: center; padding-top: 4px; }

.timeline-dot {
  width: 14px; height: 14px; border-radius: 50%; flex-shrink: 0;
  box-shadow: 0 0 0 3px rgba(255,255,255,0.05);
  transition: all 0.3s;
  z-index: 1;
}

.timeline-item.active .timeline-dot {
  box-shadow: 0 0 0 5px rgba(108,99,255,0.15), 0 0 20px rgba(108,99,255,0.3);
  transform: scale(1.2);
}

.timeline-connector {
  width: 1px; flex: 1; min-height: 24px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.03));
}

.timeline-content {
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: border-color 0.3s, transform 0.2s;
}

.timeline-item.active .timeline-content {
  border-color: rgba(108,99,255,0.3);
  transform: translateX(4px);
}

.exp-header {
  display: flex; justify-content: space-between; align-items: flex-start;
  gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;
}

.exp-role { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.25rem; }

.exp-company { font-size: 0.875rem; color: var(--accent2); }

.exp-desc { color: var(--text3); }

.exp-period {
  font-size: 11px; font-weight: 500; letter-spacing: 0.05em;
  color: var(--text3); white-space: nowrap;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  padding: 4px 10px; border-radius: 4px;
}

.exp-highlights {
  list-style: none; padding: 0; margin-bottom: 1rem;
  display: flex; flex-direction: column; gap: 0.4rem;
}

.exp-highlights li {
  font-size: 0.875rem; color: var(--text2); padding-left: 1rem; position: relative;
}

.exp-highlights li::before {
  content: '›'; position: absolute; left: 0; color: var(--accent); font-weight: 700;
}

.exp-stack { display: flex; flex-wrap: wrap; gap: 6px; }
</style>
