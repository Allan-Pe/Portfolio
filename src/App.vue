<template>
  <div id="app">
    <Analytics />
    <nav class="nav" :class="{ scrolled: isScrolled }">
      <div class="nav-inner">
        <a href="#hero" class="nav-logo" @click.prevent="scrollTo('hero')">AP</a>
        <ul class="nav-links">
          <li v-for="link in navLinks" :key="link.id">
            <a :href="'#' + link.id" @click.prevent="scrollTo(link.id)" :class="{ active: activeSection === link.id }">
              {{ link.label }}
            </a>
          </li>
        </ul>
        <button class="nav-toggle" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="mobile-menu" :class="{ open: menuOpen }">
        <a v-for="link in navLinks" :key="link.id" :href="'#' + link.id"
           @click.prevent="scrollTo(link.id); menuOpen = false">{{ link.label }}</a>
      </div>
    </nav>

    <main>
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <SkillsSection id="skills" />
      <ExperienceSection id="experience" />
      <ProjectsSection id="projects" />
      <EducationSection id="education" />
      <ContactSection id="contact" />
    </main>

    <footer class="footer">
      <p>Allan Pereira · Développeur Fullstack · <a :href="profile.github" target="_blank">GitHub</a> · <a :href="profile.linkedin" target="_blank">LinkedIn</a></p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Analytics } from '@vercel/analytics/vue'
import { profile } from './data/portfolio.js'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'

const isScrolled = ref(false)
const activeSection = ref('hero')
const menuOpen = ref(false)

const navLinks = [
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Expériences' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function onScroll() {
  isScrolled.value = window.scrollY > 50
  const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact']
  for (const s of sections.slice().reverse()) {
    const el = document.getElementById(s)
    if (el && window.scrollY >= el.offsetTop - 120) {
      activeSection.value = s
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;700;800&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0a0a0f;
  --bg2: #111118;
  --bg3: #18181f;
  --accent: #6C63FF;
  --accent2: #00B4D8;
  --accent3: #F77F00;
  --text: #f0f0f5;
  --text2: #9999bb;
  --text3: #55556a;
  --border: rgba(255,255,255,0.07);
  --radius: 12px;
  --font: 'Space Grotesk', sans-serif;
  --font-display: 'Syne', sans-serif;
}

html { scroll-behavior: smooth; }
body { font-family: var(--font); background: var(--bg); color: var(--text); line-height: 1.6; overflow-x: hidden; }
a { color: inherit; text-decoration: none; }

section { padding: 100px 0; position: relative; }

.container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }

.section-label {
  font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--accent); margin-bottom: 0.75rem; display: block;
}

.section-title {
  font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800; line-height: 1.1; margin-bottom: 3rem; color: var(--text);
}

.tag {
  display: inline-block; font-size: 11px; font-weight: 500; padding: 3px 10px;
  border-radius: 999px; background: rgba(108,99,255,0.15); color: var(--accent);
  border: 1px solid rgba(108,99,255,0.25); letter-spacing: 0.02em;
}
.tag.teal { background: rgba(0,180,216,0.12); color: var(--accent2); border-color: rgba(0,180,216,0.25); }
.tag.orange { background: rgba(247,127,0,0.12); color: var(--accent3); border-color: rgba(247,127,0,0.25); }
.tag.green { background: rgba(45,198,83,0.12); color: #2DC653; border-color: rgba(45,198,83,0.25); }
.tag.gray { background: rgba(150,150,180,0.1); color: var(--text2); border-color: rgba(150,150,180,0.2); }

.nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; transition: all 0.3s ease; padding: 1.25rem 0; }
.nav.scrolled { background: rgba(10,10,15,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); padding: 0.85rem 0; }
.nav-inner { max-width: 1100px; margin: 0 auto; padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; }
.nav-logo { font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; color: var(--accent); letter-spacing: 0.05em; }
.nav-links { display: flex; gap: 2rem; list-style: none; }
.nav-links a { font-size: 0.875rem; font-weight: 500; color: var(--text2); transition: color 0.2s; position: relative; }
.nav-links a::after { content: ''; position: absolute; bottom: -4px; left: 0; right: 0; height: 1px; background: var(--accent); transform: scaleX(0); transition: transform 0.2s; }
.nav-links a:hover, .nav-links a.active { color: var(--text); }
.nav-links a.active::after, .nav-links a:hover::after { transform: scaleX(1); }

.nav-toggle { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 4px; }
.nav-toggle span { display: block; width: 24px; height: 1.5px; background: var(--text2); transition: all 0.3s; }
.nav-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(4.5px, 4.5px); }
.nav-toggle.open span:nth-child(2) { opacity: 0; }
.nav-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(4.5px, -4.5px); }

.mobile-menu { display: none; flex-direction: column; padding: 1rem 2rem; gap: 1rem; border-top: 1px solid var(--border); background: rgba(10,10,15,0.97); }
.mobile-menu a { font-size: 1rem; color: var(--text2); }
.mobile-menu.open { display: flex; }

@media (max-width: 700px) { .nav-links { display: none; } .nav-toggle { display: flex; } }

.footer { border-top: 1px solid var(--border); padding: 2rem; text-align: center; font-size: 0.8rem; color: var(--text3); }
.footer a { color: var(--accent); }
.footer a:hover { text-decoration: underline; }
</style>
