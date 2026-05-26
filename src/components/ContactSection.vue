<template>
  <section class="contact">
    <div class="container">
      <span class="section-label">// 06. Contact</span>
      <h2 class="section-title">Travaillons ensemble</h2>
      <div class="contact-grid">
        <div class="contact-info">
          <p class="contact-intro">
            Je suis ouvert à de nouvelles opportunités, que ce soit pour un CDI, un CDD ou un projet ambitieux.
            N'hésitez pas à me contacter !
          </p>
          <div class="contact-links">
            <a :href="'mailto:' + profile.email" class="contact-item">
              <div class="contact-icon">✉</div>
              <div>
                <span class="contact-item-label">Email</span>
                <span class="contact-item-value">{{ profile.email }}</span>
              </div>
            </a>
            <a :href="'tel:' + profile.phone" class="contact-item">
              <div class="contact-icon">📱</div>
              <div>
                <span class="contact-item-label">Téléphone</span>
                <span class="contact-item-value">{{ profile.phone }}</span>
              </div>
            </a>
            <a :href="profile.linkedin" target="_blank" class="contact-item">
              <div class="contact-icon">💼</div>
              <div>
                <span class="contact-item-label">LinkedIn</span>
                <span class="contact-item-value">pereira-allan-dev-web</span>
              </div>
            </a>
            <a :href="profile.github" target="_blank" class="contact-item">
              <div class="contact-icon">⚙</div>
              <div>
                <span class="contact-item-label">GitHub</span>
                <span class="contact-item-value">Allan-Pe</span>
              </div>
            </a>
          </div>
        </div>
        <div class="contact-cta">
          <div class="cta-card">
            <div class="cta-emoji">👋</div>
            <h3>Envie de discuter ?</h3>
            <p>Que vous ayez un projet, une offre, ou juste une question technique, je suis là.</p>
            <a :href="'mailto:' + profile.email" class="cta-btn">
              Envoyer un email
            </a>
            <a :href="profile.linkedin" target="_blank" class="cta-btn-ghost">
              Me contacter sur LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { profile } from '../data/portfolio.js'
</script>

<style scoped>
.contact-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 4rem; align-items: start;
}
@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; } }

.contact-intro {
  font-size: 1rem; color: var(--text2); line-height: 1.8;
  margin-bottom: 2rem;
}

.contact-links { display: flex; flex-direction: column; gap: 0.75rem; }

.contact-item {
  display: flex; align-items: center; gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: var(--radius); transition: all 0.2s;
}
.contact-item:hover { border-color: var(--accent); transform: translateX(4px); }

.contact-icon {
  width: 36px; height: 36px; border-radius: 8px;
  background: rgba(108,99,255,0.12); border: 1px solid rgba(108,99,255,0.2);
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; flex-shrink: 0;
}

.contact-item-label { display: block; font-size: 11px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--text3); }
.contact-item-value { display: block; font-size: 0.9rem; color: var(--text); }

.cta-card {
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: 16px; padding: 2.5rem;
  text-align: center; position: relative; overflow: hidden;
}
.cta-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
}

.cta-emoji { font-size: 2.5rem; margin-bottom: 1rem; }

.cta-card h3 {
  font-family: var(--font-display); font-size: 1.5rem; font-weight: 800;
  margin-bottom: 0.75rem;
}

.cta-card p { font-size: 0.9rem; color: var(--text2); margin-bottom: 1.5rem; line-height: 1.6; }

.cta-btn {
  display: block; padding: 12px 24px;
  background: var(--accent); color: white; border-radius: 8px;
  font-weight: 600; font-size: 0.9rem; margin-bottom: 0.75rem;
  transition: all 0.2s; text-align: center;
}
.cta-btn:hover { background: #7c75ff; transform: translateY(-1px); }

.cta-btn-ghost {
  display: block; padding: 11px 24px;
  border: 1px solid var(--border); color: var(--text2); border-radius: 8px;
  font-weight: 500; font-size: 0.9rem;
  transition: all 0.2s; text-align: center;
}
.cta-btn-ghost:hover { border-color: var(--accent); color: var(--text); }
</style>
