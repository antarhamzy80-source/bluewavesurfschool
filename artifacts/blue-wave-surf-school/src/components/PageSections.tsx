import { ArrowDown, ArrowUpRight, Waves } from 'lucide-react';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, LESSONS, NAV_ITEMS, PHONE_DISPLAY, whatsappLink } from '../lib/blue-wave';

export function HeroSection() {
  return (
    <>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <img className="hero-photo" src="/images/gallery/hero.jpg" alt="" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">JACK BEACH · DAR BOUAZZA · MOROCCO</p>
          <h1 id="hero-title">Ride the<span>blue wave.</span></h1>
          <p className="hero-copy">Learn to surf, improve your technique and enjoy the ocean with our friendly team of instructors.</p>
          <div className="hero-actions">
            <a className="button button-cyan" href="#lessons">Discover lessons <ArrowDown size={15} /></a>
            <a className="button button-outline" href={whatsappLink('Hello Blue Wave! I would like to ask about surf lessons at Jack Beach.')} target="_blank" rel="noopener noreferrer">WhatsApp us <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="hero-stamp"><span className="stamp-ring">BLUE<br />WAVE<br />SCHOOL</span><span>Learn · progress · enjoy</span></div>
      </section>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Jack Beach, Morocco</span><span>·</span><span>Lessons for every level</span><span>·</span><span>Find your rhythm in the ocean</span><span>·</span><span>Blue Wave Surf School</span><span>·</span><span>Jack Beach, Morocco</span><span>·</span><span>Lessons for every level</span><span>·</span><span>Find your rhythm in the ocean</span>
        </div>
      </div>
    </>
  );
}

export function WelcomeSection() {
  return (
    <section className="section intro" aria-labelledby="intro-title">
      <div className="section-index"><span>01</span> / WELCOME</div>
      <div className="intro-grid">
        <div>
          <p className="kicker">MORE THAN A LESSON</p>
          <h2 id="intro-title">Find your rhythm<br /><em>in the ocean.</em></h2>
        </div>
        <div className="intro-aside">
          <p>Blue Wave Surf School is a place to learn, progress and have fun in the water. From your first pop-up to more confident turns, we adapt each session to your level.</p>
          <a className="text-link" href="#about">Get to know Blue Wave <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}

export function LessonsSection() {
  return (
    <section className="section lessons" id="lessons" aria-labelledby="lessons-title">
      <div className="section-index"><span>02</span> / SURF LESSONS</div>
      <div className="section-head">
        <div><p className="kicker">CHOOSE YOUR SESSION</p><h2 id="lessons-title">Surf with us.</h2></div>
        <p>Professional coaching, boards and a relaxed atmosphere — all you need to enjoy the waves.</p>
      </div>
      <div className="lesson-list">
        {LESSONS.map((lesson) => (
          <article className="lesson-card" key={lesson.title}>
            <div className="lesson-meta"><span className="lesson-number">{lesson.number} / LEVEL</span><Waves className="lesson-icon" size={21} /></div>
            <h3>{lesson.title}</h3>
            <p>{lesson.description}</p>
            <a className="lesson-link" href={whatsappLink(`Hello Blue Wave! I want a ${lesson.title.toLowerCase()} surf lesson at Jack Beach.`)} target="_blank" rel="noopener noreferrer">
              Book this lesson <ArrowUpRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about-photo"><img src="/images/gallery/surf-school.jpeg" alt="Blue Wave surfers sharing a moment on the shore" loading="lazy" /></div>
      <div className="about-copy">
        <div className="section-index"><span>03</span> / ABOUT BLUE WAVE</div>
        <p className="kicker">LOCAL SURF · REAL EXPERIENCE</p>
        <h2 id="about-title">Good waves.<br />Good people.</h2>
        <p>We believe surfing should feel welcoming from the first minute. Our instructors guide you through the session while keeping safety, progress and fun at the center.</p>
        <div className="about-notes">
          <div><strong>ALL</strong><span>Levels</span></div>
          <div><strong>JACK</strong><span>Beach</span></div>
          <div><strong>OCEAN</strong><span>Every session</span></div>
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section className="section pricing" aria-labelledby="pricing-title">
      <div className="section-index"><span>05</span> / PRICING</div>
      <div className="pricing-grid">
        <div className="pricing-intro">
          <p className="kicker">SIMPLE & CLEAR</p>
          <h2 id="pricing-title">Pick your<br />way to surf.</h2>
          <p>Contact us on WhatsApp to check the day’s conditions and reserve your place.</p>
          <a className="text-link" href={whatsappLink('Hello Blue Wave! I would like to ask about lesson availability and pricing.')} target="_blank" rel="noopener noreferrer">Ask about a lesson <ArrowUpRight size={15} /></a>
        </div>
        <div className="price-list">
          <div className="price-row">
            <div><span>Single lesson</span><small>2 hours · equipment & coaching</small></div>
            <strong>200 <i>DH</i></strong>
          </div>
          <div className="price-row featured">
            <div><span>10-lesson package</span><small>10 × 2-hour sessions</small></div>
            <strong>1,500 <i>DH</i></strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section className="section gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="section-index"><span>06</span> / THE BLUE WAVE</div>
      <div className="section-head">
        <div><p className="kicker">MOMENTS IN THE WATER</p><h2 id="gallery-title">Made for the ocean.</h2></div>
        <p>Follow our sessions and daily surf programme on Instagram.</p>
      </div>
      <div className="gallery-tiles">
        <figure className="gallery-tile"><img src="/images/gallery/family.jpeg" alt="Blue Wave surfers together at the beach" loading="lazy" /><figcaption>Good people at Jack Beach</figcaption></figure>
        <figure className="gallery-tile"><img src="/images/gallery/surf-session.jpeg" alt="A surfer practises on a yellow board in shallow water" loading="lazy" /><figcaption>Time in the water</figcaption></figure>
        <figure className="gallery-tile"><img src="/images/gallery/group-surf.jpeg" alt="Surfers warm up together on the beach" loading="lazy" /><figcaption>Before the waves</figcaption></figure>
        <div className="gallery-note">
          <strong>Surf. Learn.<br />Enjoy.</strong>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">{INSTAGRAM_HANDLE} <ArrowUpRight size={14} /></a>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-content">
        <p className="eyebrow">READY TO GET IN THE WATER?</p>
        <h2 id="contact-title">Your next wave<br />starts here.</h2>
        <a className="button" href={whatsappLink('Hello Blue Wave! I would like to book a surf lesson at Jack Beach.')} target="_blank" rel="noopener noreferrer">Book on WhatsApp <ArrowUpRight size={16} /></a>
        <p className="contact-phone">{PHONE_DISPLAY}</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#home" aria-label="Blue Wave Surf School home">
        <img src="/images/brand/blue-wave-logo.jpeg" alt="Blue Wave Surf School" loading="lazy" />
        <span className="brand-copy"><strong>BLUE WAVE</strong><span>SURF SCHOOL</span></span>
      </a>
      <nav className="footer-nav" aria-label="Footer navigation">
        {NAV_ITEMS.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <div className="footer-bottom">
        <span>© 2026 Blue Wave Surf School · Jack Beach, Morocco</span>
        <a className="social-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">{INSTAGRAM_HANDLE} <ArrowUpRight size={12} /></a>
      </div>
    </footer>
  );
}