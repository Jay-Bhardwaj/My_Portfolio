import { useState } from "react";
import { createRoot } from "react-dom/client";
import { profile, projects, skills } from "./data/portfolio";
import "./styles.css";

const Icon = ({ name, size = 18 }) => {
  const paths = {
    github: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.21.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.26-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.68-4.57 4.94.36.31.68.9.68 1.81v2.68c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    ),
    linkedin: (
      <path d="M6.5 8.5H3.4V21h3.1V8.5ZM4.95 3A1.8 1.8 0 1 0 5 6.6 1.8 1.8 0 0 0 4.95 3ZM21 13.8c0-3.8-2-5.6-4.7-5.6-2.17 0-3.14 1.2-3.68 2.04V8.5H9.5V21h3.12v-6.19c0-1.63.3-3.2 2.32-3.2 1.98 0 2 1.85 2 3.31V21H20v-7.2Z" />
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    download: <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    external: (
      <path d="M14 4h6v6M20 4l-9 9M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
    ),
    mail: <path d="M4 5h16v14H4zM4 7l8 6 8-6" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

function App() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const nav = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact",
  ];
  const close = () => setOpen(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <>
      <header className="nav-wrap">
        <nav className="nav" aria-label="Main navigation">
          <a href="#home" className="brand" onClick={close}>
            <span>&lt;/&gt;</span> JB.
          </a>
          <button
            className="menu"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
          <div className={`nav-links ${open ? "open" : ""}`}>
            {nav.map((x) => (
              <a onClick={close} href={`#${x.toLowerCase()}`} key={x}>
                {x}
              </a>
            ))}
            <a className="resume mini" href={profile.resume} download>
              <Icon name="download" size={15} /> Resume
            </a>
          </div>
        </nav>
      </header>
      <main>
        <section id="home" className="hero section">
          <div className="hero-copy fade-up">
            <p className="eyebrow">
              <i /> AVAILABLE FOR OPPORTUNITIES
            </p>
            <p className="overline">Hello, I’m</p>
            <h1>
              Jay <em>Bhardwaj.</em>
            </h1>
            <h2>
              Building dependable systems, one thoughtful detail at a time.
            </h2>
            <p className="intro">
              Computer Science graduate and Software developer with hands-on
              internship experience in software development, APIs, databases, and
              software testing.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button primary">
                View my projects <Icon name="arrow" size={17} />
              </a>
              <a href={profile.resume} download className="button secondary">
                <Icon name="download" size={17} /> Download resume
              </a>
            </div>
            <div className="socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Icon name="github" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" />
              </a>
            </div>
          </div>
          <div
            className="code-scene fade-up"
            aria-label="Developer code illustration"
          >
            <div className="orb one" />
            <div className="orb two" />
            <div className="terminal">
              <div className="terminal-head">
                <span />
                <span />
                <span />
                <b>jay@portfolio:~</b>
              </div>
              <pre>
                <code>
                  <span className="purple">class</span>{" "}
                  <span className="blue">Developer</span> {"{"}
                  {`\n`} <span className="purple">String</span> passion ={" "}
                  <span className="green">"Building and Testing"</span>;{`\n\n`}{" "}
                  <span className="purple">void</span>{" "}
                  <span className="blue">build</span>() {"{"}
                  {`\n`} learn();{`\n`} solve();{`\n`} improve();{`\n`} {"}"}
                  {`\n`}
                  {"}"}
                </code>
              </pre>
              <div className="terminal-foot">
                <span className="pulse" /> system.status: building
              </div>
            </div>
            <div className="floating-card">
              <span>⌘</span>
              <div>
                <b>Java & Spring Boot</b>
                <small>Software developer</small>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="section split">
          <div>
            <p className="eyebrow">01 / ABOUT</p>
            <h2 className="section-title">
              A practical approach to <em>software.</em>
            </h2>
          </div>
          <div className="body-copy">
            <p>
              I’m a Computer Science graduate with a B.Tech degree and a genuine
              interest in backend engineering. I enjoy translating real
              workflows into clear, maintainable applications.
            </p>
            <p>
              My internship at Infosys strengthened my foundation in Java,
              Spring Boot, MySQL, REST APIs, and the testing practices that help
              software earn trust. I learn by building, debugging, and steadily
              refining the details.
            </p>
            <div className="quick-facts">
              <div>
                <b>01 year</b>
                <span>Internship experience</span>
              </div>
              <div>
                <b>2025</b>
                <span>B.Tech graduate</span>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="section">
          <p className="eyebrow">02 / TOOLKIT</p>
          <h2 className="section-title">
            Technologies I use to <em>ship.</em>
          </h2>
          <div className="skill-grid">
            {skills.map((s) => (
              <article className="skill-card" key={s.title}>
                <div className="skill-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <div className="tags">
                  {s.items.map((i) => (
                    <span key={i}>{i}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="experience" className="section">
          <p className="eyebrow">03 / EXPERIENCE</p>
          <h2 className="section-title">
            Learning in a real <em>engineering</em> environment.
          </h2>
          <article className="experience-card">
            <div className="timeline-dot" />
            <div className="experience-top">
              <div>
                <p className="date">1 YEAR</p>
                <h3>Software Development Intern</h3>
                <p className="company">Infosys</p>
              </div>
              <span className="status">Completed</span>
            </div>
            <p>
              Built practical experience across the software development
              lifecycle—developing with Java and Spring Boot, working with
              MySQL-backed applications, testing features, and investigating
              application workflows and defects.
            </p>
            <div className="tags">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
              <span>Selenium</span>
              <span>Manual Testing</span>
            </div>
          </article>
        </section>
        <section id="projects" className="section projects">
          <div className="projects-head">
            <div>
              <p className="eyebrow">04 / SELECTED WORK</p>
              <h2 className="section-title">
                Projects with a <em>purpose.</em>
              </h2>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              See GitHub <Icon name="arrow" size={16} />
            </a>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className={`project-card ${p.accent}`} key={p.id}>
                <div className="project-visual">
                  <span className="project-number">0{i + 1}</span>
                  <div className="window">
                    <div />
                    <div />
                    <div />
                  </div>
                  <div className="visual-lines">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <span className="visual-label">
                    {p.id === "ecommerce" ? "commerce.core" : "eluno.pos"}
                  </span>
                </div>
                <div className="project-content">
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <ul>
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {p.technologies.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="button dark"
                    >
                      <Icon name="github" size={16} /> Repository
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="education" className="section split education">
          <div>
            <p className="eyebrow">05 / EDUCATION</p>
            <h2 className="section-title">
              The foundation for a <em>curious</em> career.
            </h2>
          </div>
          <article className="education-card">
            <span className="cap">B.TECH</span>
            <h3>Computer Science & Engineering</h3>
            {/* <p>Panipat Institute of Engineering & Technology</p> */}
            <p>Kurukshetra University</p>
            <div>
              <b>Graduated 2025</b>
            </div>
          </article>
        </section>
        <section id="contact" className="section contact">
          <div className="contact-copy">
            <p className="eyebrow">06 / CONTACT</p>
            <h2 className="section-title">
              Let’s build something <em>useful.</em>
            </h2>
            <p>
              I’m open to entry-level software engineering opportunities and
              conversations about thoughtful backend systems.
            </p>
            <a className="email-link" href={`mailto:${profile.email}`}>
              <Icon name="mail" /> {profile.email}
            </a>
          </div>
          <form onSubmit={onSubmit} noValidate>
            <label>
              Name
              <input required name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input
                required
                name="email"
                type="email"
                placeholder="you@example.com"
              />
            </label>
            <label>
              Message
              <textarea
                required
                name="message"
                rows="4"
                placeholder="Tell me a little about your opportunity..."
              />
            </label>
            <button className="button primary" type="submit">
              {sent ? "Thanks — I’ll be in touch." : "Send a message"}{" "}
              <Icon name="arrow" size={17} />
            </button>
            {sent && (
              <p className="form-note">
                This demo form has no email service connected. Please email me
                directly.
              </p>
            )}
          </form>
        </section>
      </main>
      <footer>
        <a href="#home" className="brand">
          <span>&lt;/&gt;</span> JB.
        </a>
        <p>© {new Date().getFullYear()} Jay Bhardwaj · Java Developer</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
