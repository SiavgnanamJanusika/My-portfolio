import React, { useState, useEffect } from 'react';
import './Portfolio.css'; 

function App() {
  return (
    <div className="text-white grid-bg relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}


function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="container-box">
        <h1 className="logo">~/portfolio</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = ["Full Stack Web Developer", "UI/UX Designer", "Frontend Specialist"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTypingSpeed(1500); 
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      }
    };

    const timeoutId = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="hero-section">
      <img src="image.png" className="profile-image" alt="Profile" />
      
      <div className="status-box">
        <span className="status-dot"></span>
        Available for Work
      </div>

      <p className="intro-text">HELLO I'M</p>
      <h1 className="hero-title">
        Janusika Sivagnanam<br />
        <span className="gradient-text">Developer</span>
      </h1>
      
      <h2 id="typing" className="role-text">
        {text}
        <span className="cursor"></span>
      </h2>

      <p className="description">
        I build modern responsive websites, UI designs and full stack web applications using latest technologies.
      </p>

      <div className="hero-buttons">
        <button className="primary-btn" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
          View Projects
        </button>
        <button className="secondary-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Contact Me
        </button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">
        About <span className="gradient-text">Me</span>
      </h2>
      <div className="card-grid">
        <div className="card">
          <h3>Who Am I?</h3>
          <p>
            I'm study about web development and currently learning full-stack web developer. 
            I am currently building projects using modern web technologies and continuously improving my technical knowledge.
          </p>
        </div>
        <div className="card">
          <h3>My Goal</h3>
          <p>Become a professional full stack developer.</p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skillsList = [
    "HTML", "CSS", "JavaScript", "TailwindCSS", 
    "Node.js", "MongoDB", "Mysql", "React"
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">
        My <span className="gradient-text">Skills</span>
      </h2>
      <div className="skills-box">
        {skillsList.map((skill, index) => (
          <span key={index} className="skill">{skill}</span>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <p className="contact-small-title">// LET'S TALK</p>
        <h2 className="contact-title">CONTACT</h2>
        <p className="contact-description">Let's build something useful together.</p>
      </div>

      <div className="cards-wrapper">
        <a className="card" href="mailto:janusikajanu82@gmail.com">
          <div className="icon-box">
            <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="3" /><polyline points="2,4 12,13 22,4" /></svg>
          </div>
          <span className="label">Email</span>
          <span className="main-text">janusikajanu82@gmail.com</span>
          <span className="sub-text">Address</span>
        </a>

        <a className="card" href="https://www.linkedin.com/in/janusika-sivagnanam-4840b13ba/" target="_blank" rel="noopener noreferrer">
          <div className="icon-box">
            <svg className="linkedin-icon" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </div>
          <span className="label">LinkedIn</span>
          <span className="main-text">Direct message</span>
          <span className="sub-text">Open Profile</span>
        </a>

        <a className="card" href="DevOps-CV.pdf" target="_blank" rel="noopener noreferrer">
          <div className="icon-box">
            <svg className="file-icon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>
          </div>
          <span className="label">CV</span>
          <span className="main-text">See my cv</span>
          <span className="sub-text">Open My CV</span>
        </a>
      </div>

      <div className="terminal-box">
        <div className="terminal-top">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-content">
          <span className="blue-text">$</span>
          hire janusika -- = frontend and Backend-develOper
          <span className="cursor"></span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      © 2026 Janusika Portfolio
    </footer>
  );
}

export default App;