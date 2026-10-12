import { useEffect, useState } from "react";
import "./App.css";

function App() {
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
const items = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.12 }
);

items.forEach((item) => observer.observe(item));

return () => observer.disconnect();

}, []);

return (
<main>
<nav className="navbar">
<a className="logo" href="#home">KKM<span>.</span></a>

    <button
      className="menu-toggle"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle navigation"
    >
      ☰
    </button>

    <div className={`nav-links ${menuOpen ? "active" : ""}`}>
      <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
      <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
      <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
      <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
      <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
    </div>
  </nav>

  <section className="hero" id="home">
    <div className="hero-content reveal">
      <p className="eyebrow"><span className="status-dot"></span> AVAILABLE TO LEARN & BUILD</p>
      <p className="intro">HELLO, I'M</p>
      <h1>Krishan Kumar <span>Mandal</span></h1>
      <h2>Future Developer <span className="typing">|</span></h2>
      <p className="hero-description">
        I am passionate about technology, creative design, and building
        beautiful digital experiences. This is my journey into the world of web development.
      </p>

      <div className="hero-buttons">
        <a className="btn btn-primary" href="#projects">Explore My Work ↗</a>
        <a className="btn btn-outline" href="#contact">Let's Connect</a>
      </div>

      <div className="social-text">
        <span>BASED IN NEPAL</span>
        <span>CREATIVE MINDSET · CONTINUOUS GROWTH</span>
      </div>
    </div>

    <div className="hero-visual reveal">
      <div className="orbit orbit-one"></div>
      <div className="orbit orbit-two"></div>
      <div className="profile-card">
        <div className="profile-top"><span>KKM / 2026</span><span>✦</span></div>
        <div className="profile-avatar">K<span>K</span></div>
        <div className="profile-name">KRISHAN KUMAR MANDAL</div>
        <div className="profile-role">ASPIRING WEB DEVELOPER</div>
        <div className="profile-line"></div>
        <div className="profile-bottom"><span>DESIGN</span><span>CODE</span><span>CREATE</span></div>
      </div>
      <div className="floating-tag tag-one">✦ Creative</div>
      <div className="floating-tag tag-two">&lt; Developer /&gt;</div>
    </div>
  </section>

  <section className="about section reveal" id="about">
    <p className="section-kicker">01 / ABOUT ME</p>
    <h2>Building my future,<br /><span>one line at a time.</span></h2>
    <p className="section-description">
      My name is Krishan Kumar Mandal. I am exploring web development
      and modern design, learning new skills and turning ideas into digital experiences.
      My goal is to create websites that look beautiful and work smoothly on every device.
    </p>
    <div className="stats">
      <div><strong>01</strong><span>Curious Mind</span></div>
      <div><strong>∞</strong><span>Ideas to Explore</span></div>
      <div><strong>100%</strong><span>Ready to Learn</span></div>
    </div>
  </section>

  <section className="section reveal" id="skills">
    <p className="section-kicker">02 / MY TOOLKIT</p>
    <h2 className="section-title">Skills I'm <span>developing.</span></h2>
    <div className="skills-grid">
      <article className="skill-card"><span>01</span><h3>HTML</h3><p>Creating structured and visually appealing web pages.</p><div className="skill-track"><i style={{width:"75%"}}></i></div></article>
      <article className="skill-card"><span>02</span><h3>C proguramming </h3><p>Learning interactive features and modern web logic.</p><div className="skill-track"><i style={{width:"45%"}}></i></div></article>
      <article className="skill-card"><span>03</span><h3>DSA and DBMS </h3><p>Building reusable components and dynamic interfaces.</p><div className="skill-track"><i style={{width:"35%"}}></i></div></article>
      <article className="skill-card"><span>04</span><h3>python</h3><p>Exploring layouts, typography, color, and motion.</p><div className="skill-track"><i style={{width:"55%"}}></i></div></article>
    </div>
  </section>

  <section className="section reveal" id="projects">
    <p className="section-kicker">03 / SELECTED WORK</p>
    <h2 className="section-title">Ideas becoming <span>reality.</span></h2>
    <div className="projects-grid">
      <article className="project-card"><div className="project-number">PROJECT / 01</div><div className="project-art art-one">01</div><h3>Personal Portfolio</h3><p>A personal website to showcase my journey, skills, and future work.</p><span className="project-tag">REACT · CSS</span></article>
      <article className="project-card"><div className="project-number">PROJECT / 02</div><div className="project-art art-two">02</div><h3>Creative Web Concept</h3><p>A modern design concept focused on clarity, smooth motion, and usability.</p><span className="project-tag">UI · RESPONSIVE</span></article>
      <article className="project-card"><div className="project-number">PROJECT / 03</div><div className="project-art art-three">03</div><h3>Coming Next</h3><p>This space is ready for the next idea I turn into a real project.</p><span className="project-tag">IN PROGRESS</span></article>
    </div>
  </section>

  <section className="contact section reveal" id="contact">
    <p className="section-kicker">04 / GET IN TOUCH</p>
    <h2>Have an idea?<br /><span>Let's build it.</span></h2>
    <p className="section-description">I'm excited to learn, connect, and explore new opportunities.</p>
    <a className="btn btn-primary" href="krishna.programmer2064@gmail.com">Send Me an Email ↗</a>
  </section>

  <footer><a className="logo" href="#home">KKM<span>.</span></a><p>Designed with curiosity by Krishan Kumar Mandal · © 2026</p><a href="#home">BACK TO TOP ↑</a></footer>
</main>

);
}

export default App;