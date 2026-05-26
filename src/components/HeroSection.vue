<template>
  <section class="hero">
    <div class="hero-bg">
      <div class="orb orb1"></div>
      <div class="orb orb2"></div>
      <div class="grid-lines"></div>
    </div>
    <div class="container hero-content">
      <div class="hero-badge">
        <span class="pulse"></span>
        Disponible pour de nouvelles opportunités
      </div>
      <h1 class="hero-name">
        <span class="hero-hi">Bonjour, je suis</span>
        Allan <span class="accent">Pereira</span>
      </h1>
      <p class="hero-title">Développeur <span class="gradient-text">Fullstack</span></p>
      <p class="hero-desc">
        Front-end expérimenté · Back-end & API · Vue.js & Laravel · Approche Agile
      </p>
      <div class="hero-actions">
        <a href="#contact" @click.prevent="scrollTo('contact')" class="btn-primary">Me contacter</a>
        <a href="#projects" @click.prevent="scrollTo('projects')" class="btn-ghost">Voir mes projets</a>
        <a :href="github" target="_blank" class="btn-icon" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
        <a :href="linkedin" target="_blank" class="btn-icon" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>
      <div class="hero-scroll" @click="scrollTo('about')">
        <span>Découvrir</span>
        <div class="scroll-arrow">↓</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { profile } from '../data/portfolio.js'
const github = profile.github
const linkedin = profile.linkedin
function scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-bg { position: absolute; inset: 0; z-index: 0; }

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.25;
}
.orb1 {
  width: 600px; height: 600px;
  background: var(--accent);
  top: -200px; right: -100px;
  animation: float 8s ease-in-out infinite;
}
.orb2 {
  width: 400px; height: 400px;
  background: var(--accent2);
  bottom: -100px; left: -100px;
  animation: float 10s ease-in-out infinite reverse;
}

.grid-lines {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}

.hero-content {
  position: relative;
  z-index: 1;
  padding-top: 120px;
  padding-bottom: 80px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text2);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 2rem;
  letter-spacing: 0.02em;
}

.pulse {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #2DC653;
  box-shadow: 0 0 0 0 rgba(45,198,83,0.4);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(45,198,83,0.4); }
  70% { box-shadow: 0 0 0 8px rgba(45,198,83,0); }
  100% { box-shadow: 0 0 0 0 rgba(45,198,83,0); }
}

.hero-hi {
  display: block;
  font-family: var(--font);
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 400;
  color: var(--text2);
  margin-bottom: 0.25rem;
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 800;
  line-height: 1.0;
  margin-bottom: 0.5rem;
}

.accent { color: var(--accent); }

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 400;
  color: var(--text2);
  margin-bottom: 1.25rem;
}

.gradient-text {
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 1rem;
  color: var(--text3);
  margin-bottom: 2.5rem;
  max-width: 500px;
  letter-spacing: 0.02em;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 4rem;
}

.btn-primary {
  padding: 12px 28px;
  background: var(--accent);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;
  letter-spacing: 0.02em;
}
.btn-primary:hover { background: #7c75ff; transform: translateY(-1px); }

.btn-ghost {
  padding: 12px 28px;
  border: 1px solid var(--border);
  color: var(--text2);
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s;
}
.btn-ghost:hover { border-color: var(--accent); color: var(--text); }

.btn-icon {
  width: 44px; height: 44px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text2);
  transition: all 0.2s;
}
.btn-icon:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-1px); }

.hero-scroll {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; color: var(--text3); font-size: 12px;
  letter-spacing: 0.1em; text-transform: uppercase;
  transition: color 0.2s;
}
.hero-scroll:hover { color: var(--text2); }

.scroll-arrow {
  animation: bounce 2s infinite;
  font-size: 1rem;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}
</style>
