import { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import { motion } from "framer-motion";

/* =========================================================
   PORTFOLIO DATA
   ---------------------------------------------------------
   Edit your portfolio information ONLY from here.
   No MongoDB/API fetching is required.
   ========================================================= */

const PORTFOLIO_DATA = {
  /* =======================================================
     PERSONAL INFORMATION
     ======================================================= */

  personal: {
    name: "Shaiphali Jaiswal",

    role: "Web Developer",

    bio:
      "Web Developer building production-level web applications with Next.js and the MERN stack — focused on responsive UI, reusable components, SEO-friendly pages and performance.",

    location: "Varanasi, Uttar Pradesh, India",

    education: [
      {
        degree: "Bachelor of Computer Applications",
        place: "MGKVP, Varanasi",
        year: "2019 – 2022",
      },
      {
        degree: "Full Stack Web Development",
        place: "CodeHelp",
        year: "2024",
      },
    ],

    currentRole: "Web Developer",

    currentCompany: "GeoGo Info Tech",

    profileImage: "/profile.png",

    resume: "/resume.pdf",

    phone: "+91 7355510203",

    whatsapp: "https://wa.me/917355510203?text=Hello%2C%20I%20would%20like%20to%20chat",
  },

  /* =======================================================
     SOCIAL LINKS
     ======================================================= */

  social: {
    github:
      "https://github.com/Shaiphali23",

    linkedin:
      "https://www.linkedin.com/in/shaiphali-jaiswal-90960a283/",

    email:
      "shaiphalijaiswal978@gmail.com",
  },

  /* =======================================================
     HERO STATS
     ======================================================= */

  stats: {
    experience: "1+",
    projects: "4+",
    roles: "3",
  },

  /* =======================================================
     SKILLS
     ======================================================= */

  skills: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "MongoDB",
    "Mongoose",
    "Cloudinary",
    "Vercel",
    "Netlify",
    "Render",
    "Git",
    "GitHub",
    "VS Code",
    "Chrome DevTools",
  ],

  /* =======================================================
     EXPERIENCE
     ======================================================= */

  experience: [
    {
      year: "March 2026 - Present",

      title: "Web Developer",

      company: "GeoGo Info Tech Private Limited, Varanasi",

      description:
        "Working on production-level travel and booking web applications using Next.js. Developing features for a traveller website including car rental and tempo traveller booking systems. Built responsive UI components, SEO-friendly pages and dynamic routes for travel services.",
    },

    {
      year: "September 2025 - January 2026",

      title: "Software Developer Intern",

      company: "Innovilla Private Limited, Varanasi",

      description:
        "Worked on multiple production-level web applications using Next.js. Developed key features for a travel portal including blogs, cart and listing pages. Built UI components for a hotel booking platform and an e-commerce app (Blooming Cart). Focused on responsive design, reusable components and performance optimization.",
    },

    {
      year: "May 2025 - July 2025",

      title: "Junior Developer",

      company: "SG Green Logistics Pvt. Ltd., Delhi",

      description:
        "Contributed to a Transport Management System (TMS) using React.js. Built responsive dashboards and forms using CoreUI and MUI. Integrated REST APIs and developed reusable components. Collaborated with the team to ensure timely delivery and code quality.",
    },
  ],

  /* =======================================================
     PROJECTS
     ======================================================= */

  projects: [
    {
      title: "StudyNotion – EdTech Platform",

      description:
        "A full-stack EdTech platform with JWT authentication and role-based access. Implemented course management, enrollment flow and secure payments, with REST APIs and smooth state management.",

      tech:
        "MERN Stack • MongoDB • Express.js • React.js • Node.js",

      github:
        "https://github.com/Shaiphali23/StudyNotion",

      live:
        "https://study-notion-opk43aelh-shaiphali-jaiswals-projects.vercel.app/",

      featured: true,
    },

    {
      title: "Feedbackify – Feedback Management App",

      description:
        "A full-stack feedback system with Admin and User roles. Implemented secure login/signup using JWT authentication and built an Admin dashboard with real-time feedback management.",

      tech:
        "MERN Stack • MongoDB • Express.js • React.js • Node.js",

      github:
        "https://github.com/Shaiphali23/Feedbackify-App",

      live:
        "https://feedbackify-app.vercel.app/",

      featured: false,
    },

    {
      title: "Sellio – Zero Commission E-commerce Platform",

      description:
        "Contributed to frontend development of a scalable e-commerce platform. Built reusable, responsive UI components and SEO-optimized pages, and integrated REST APIs for seamless data handling.",

      tech:
        "Next.js • React.js",

      github: "",

      live: "https://sellio.in/",

      featured: false,
    },

    {
      title: "React Shopping Cart",

      description:
        "A simple shopping cart application built with React. Users can add and remove items from the cart, view the total price and proceed to checkout — responsive with a smooth, interactive user experience.",

      tech:
        "React.js",

      github:
        "https://github.com/Shaiphali23/react-shopping-cart",

      live:
        "https://react-shopping-cart-gilt-iota.vercel.app/",

      featured: false,
    },

    {
      title: "Pre-Interview UI Assignment",

      description:
        "Built as a pre-interview assignment using React, Vite, Tailwind CSS and Flowbite React — a responsive carousel and stylish cards showcasing clean layout and modern component usage.",

      tech:
        "React • Vite • Tailwind CSS • Flowbite React",

      github:
        "https://github.com/Shaiphali23/match-colab-ui-task",

      live:
        "https://match-colab-ui-task-141oohmz4-shaiphali-jaiswals-projects.vercel.app/",

      featured: false,
    },

    {
      title: "Random Password Generator",

      description:
        "A web application that generates secure, random passwords. Users can customize password length and choose to include letters, numbers and symbols for enhanced security.",

      tech:
        "JavaScript • HTML • CSS",

      github:
        "https://github.com/Shaiphali23/random-password-generator",

      live:
        "https://random-password-generator-virid-zeta.vercel.app/",

      featured: false,
    },
  ],
};


/* =========================================================
   APP
   ========================================================= */

function App() {
  const {
    personal,
    social,
    stats,
    skills,
    experience,
    projects,
  } = PORTFOLIO_DATA;

  /* =======================================================
     CONTACT FORM
     ======================================================= */

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [contactStatus, setContactStatus] = useState("");

  /* =======================================================
     NAME
     ======================================================= */

  const nameParts = personal.name.trim().split(" ");

  const firstName =
    nameParts[0] || "Shaiphali";

  const lastName =
    nameParts.slice(1).join(" ") || "Jaiswal";

  /* =======================================================
     SMOOTH NAVIGATION
     ======================================================= */

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();

    const section =
      document.getElementById(sectionId);

    if (!section) return;

    const navbarHeight = 100;

    const position =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      `#${sectionId}`
    );
  };

  /* =======================================================
     CONTACT FORM
     -------------------------------------------------------
     Opens Gmail compose with:
     - recipient
     - subject
     - visitor name
     - visitor email
     - message
     ======================================================= */

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const name =
      contactForm.name.trim();

    const email =
      contactForm.email.trim();

    const message =
      contactForm.message.trim();

    if (!name || !email || !message) {
      setContactStatus(
        "Please fill in all the fields."
      );

      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Hello Shaiphali,

Name: ${name}
Email: ${email}

Message:

${message}`
    );

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(social.email)}` +
      `&su=${subject}` +
      `&body=${body}`;

    const gmailWindow = window.open(
      gmailUrl,
      "_blank",
      "noopener,noreferrer"
    );

    if (!gmailWindow) {
      setContactStatus(
        "Please allow pop-ups for this website to open Gmail."
      );

      return;
    }

    setContactStatus(
      "Gmail opened with your message. Click Send in Gmail to send it."
    );

    setContactForm({
      name: "",
      email: "",
      message: "",
    });
  };

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <div className="app">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="navbar">

        <a
          href="#home"
          className="logo"
          onClick={(e) =>
            scrollToSection(e, "home")
          }
        >
          <span>{firstName.charAt(0)}</span>

          <strong>
            {firstName}.
          </strong>
        </a>

        <nav className="nav-links">

          <a
            href="#about"
            onClick={(e) =>
              scrollToSection(e, "about")
            }
          >
            About
          </a>

          <a
            href="#skills"
            onClick={(e) =>
              scrollToSection(e, "skills")
            }
          >
            Skills
          </a>

          <a
            href="#experience"
            onClick={(e) =>
              scrollToSection(e, "experience")
            }
          >
            Experience
          </a>

          <a
            href="#projects"
            onClick={(e) =>
              scrollToSection(e, "projects")
            }
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={(e) =>
              scrollToSection(e, "contact")
            }
          >
            Contact
          </a>

        </nav>

        <div className="nav-socials">

          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>

        </div>

      </header>


      {/* =================================================
          MAIN
      ================================================= */}

      <main>

        {/* =================================================
            HERO
        ================================================= */}

        <section
          id="home"
          className="hero"
        >

          <motion.div
            className="hero-content"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >

            <div className="status">

              <span></span>

              {`${personal.currentRole} @ ${personal.currentCompany}`}

            </div>

            <p className="small-heading">
              HELLO, I'M
            </p>

            <h1>
              {firstName}

              <br />

              <span>
                {lastName}.
              </span>
            </h1>

            <h2>
              {personal.role}
            </h2>

            <p className="hero-description">
              {personal.bio}
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
                onClick={(e) =>
                  scrollToSection(
                    e,
                    "projects"
                  )
                }
              >
                View My Work

                <FaArrowUpRightFromSquare
                  size={15}
                />
              </a>

              <a
                href={personal.resume}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                Resume

                <FaArrowUpRightFromSquare
                  size={14}
                />
              </a>

              <a
                href="#contact"
                className="secondary-button"
                onClick={(e) =>
                  scrollToSection(
                    e,
                    "contact"
                  )
                }
              >
                Let's Connect

                <FaEnvelope size={15} />
              </a>

            </div>

            <div className="hero-stats">

              <div className="stat-item">
                <strong>
                  {stats.experience}
                </strong>

                <span>
                  Years Experience
                </span>
              </div>

              <div className="stat-item">
                <strong>
                  {stats.projects}
                </strong>

                <span>
                  Projects Built
                </span>
              </div>

              <div className="stat-item">
                <strong>
                  {stats.roles}
                </strong>

                <span>
                  Professional Roles
                </span>
              </div>

            </div>

          </motion.div>


          <motion.div
            className="hero-visual"
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: "easeOut",
            }}
          >

            <div className="profile-photo-card">

              <img
                src={personal.profileImage}
                alt={`${personal.name} profile`}
                className="profile-photo"
              />

              <div className="profile-badge">

                <span></span>

                {personal.currentCompany}

              </div>

            </div>


            <div className="code-card">

              <div className="code-header">

                <div className="window-buttons">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <p>
                  developer.js
                </p>

              </div>

              <pre>
{`const developer = {
  name: "${personal.name}",
  role: "${personal.role}",

  skills: [
${skills
  .slice(0, 7)
  .map(
    (skill) =>
      `    "${skill}"`
  )
  .join(",\n")}
  ],

  location: "${personal.location}",
  currentlyAt: "${personal.currentCompany}"
};`}
              </pre>

            </div>

          </motion.div>

        </section>


        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          id="about"
          className="section"
        >

          <p className="section-label">
            01 — ABOUT
          </p>

          <h2 className="section-title">
            Building with purpose,

            <span>
              {" "}learning every day.
            </span>
          </h2>

          <div className="about-grid">

            <div className="about-text">

              <p>
                {personal.bio}
              </p>

              {personal.education.map((edu, index) => (
                <p key={index}>
                  <strong>{edu.degree}</strong>
                  {" "}— {edu.place} ({edu.year})
                </p>
              ))}

              <p>
                Based in {personal.location},
                I enjoy turning ideas into
                practical and scalable
                applications while continuously
                improving my problem-solving
                and development skills.
              </p>

            </div>

            <div className="about-highlight">

              <div>
                <strong>
                  NEXT.JS
                </strong>

                <span>
                  Production-level apps with SEO-friendly, dynamic routes
                </span>
              </div>

              <div>
                <strong>
                  MERN STACK
                </strong>

                <span>
                  Full-stack development using MongoDB, Express, React & Node
                </span>
              </div>

              <div>
                <strong>
                  RESPONSIVE UI
                </strong>

                <span>
                  Reusable components with Tailwind CSS and clean design
                </span>
              </div>

              <div>
                <strong>
                  CLOUD DEPLOYMENT
                </strong>

                <span>
                  Shipping and hosting apps on Vercel, Netlify & Render
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            SKILLS
        ================================================= */}

        <section
          id="skills"
          className="section"
        >

          <p className="section-label">
            02 — SKILLS
          </p>

          <h2 className="section-title">
            My technical

            <span>
              {" "}toolkit.
            </span>
          </h2>

          <div className="skills">

            {skills.map(
              (skill, index) => (

                <motion.div
                  className="skill-card"
                  key={`${skill}-${index}`}
                  whileHover={{
                    y: -4,
                  }}
                >

                  <span className="skill-dot"></span>

                  <span className="skill-name">
                    {skill}
                  </span>

                </motion.div>

              )
            )}

          </div>

        </section>


        {/* =================================================
            EXPERIENCE
        ================================================= */}

        <section
          id="experience"
          className="section"
        >

          <p className="section-label">
            03 — EXPERIENCE
          </p>

          <h2 className="section-title">
            Where I've

            <span>
              {" "}learned and grown.
            </span>
          </h2>

          <div className="experience-list">

            {experience.map(
              (item, index) => (

                <Experience
                  key={index}
                  year={item.year}
                  title={item.title}
                  company={item.company}
                  description={item.description}
                />

              )
            )}

          </div>

        </section>


        {/* =================================================
            PROJECTS
        ================================================= */}

        <section
          id="projects"
          className="section"
        >

          <p className="section-label">
            04 — PROJECTS
          </p>

          <h2 className="section-title">
            Things I've

            <span>
              {" "}built.
            </span>
          </h2>

          <div className="projects">

            {projects.map(
              (project, index) => (

                <Project
                  key={index}

                  number={String(
                    index + 1
                  ).padStart(2, "0")}

                  title={
                    project.title
                  }

                  description={
                    project.description
                  }

                  tech={
                    project.tech
                  }

                  github={
                    project.github
                  }

                  live={
                    project.live
                  }

                  featured={
                    project.featured
                  }
                />

              )
            )}

          </div>

        </section>


        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="contact"
          className="section contact"
        >

          <p className="section-label">
            05 — CONTACT
          </p>

          <h2 className="section-title">
            Let's build something

            <span>
              {" "}together.
            </span>
          </h2>

          <p className="contact-intro">
            I'm currently open to
            internships, entry-level
            roles, freelance projects
            and interesting collaborations.
          </p>


          <form
            className="contact-form"
            onSubmit={
              handleContactSubmit
            }
          >

            <div className="contact-fields">

              <div className="form-group">

                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      name: e.target.value,
                    })
                  }
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      email: e.target.value,
                    })
                  }
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                placeholder="Tell me about your project..."
                rows="6"
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({
                    ...contactForm,
                    message: e.target.value,
                  })
                }
                required
              />

            </div>


            <div className="contact-submit-row">

              <button
                type="submit"
                className="primary-button"
              >
                Send Message

                <FaArrowUpRightFromSquare
                  size={13}
                />
              </button>

            </div>


            {contactStatus && (
              <p className="contact-status">
                {contactStatus}
              </p>
            )}

          </form>


          <div className="contact-buttons">

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                social.email
              )}`}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              <FaEnvelope size={15} />

              Email Me
            </a>


            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              <FaGithub size={16} />

              GitHub
            </a>


            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              <FaLinkedin size={16} />

              LinkedIn
            </a>


            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              WhatsApp
            </a>


            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              Resume

              <FaArrowUpRightFromSquare
                size={13}
              />
            </a>

          </div>

        </section>

      </main>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer>

        <p>
          © {new Date().getFullYear()}{" "}
          {personal.name}
        </p>

      </footer>

    </div>
  );
}


/* =========================================================
   PROJECT COMPONENT
   ========================================================= */

function Project({
  number,
  title,
  description,
  tech,
  github,
  live,
  featured,
}) {
  return (
    <article className="project-card">

      <div className="project-top">

        <span className="project-number">
          {number}
        </span>

        {featured && (
          <span className="featured-label">
            Featured
          </span>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${title} GitHub repository`}
            className="project-github"
          >
            <FaGithub size={16} />
          </a>
        )}

      </div>


      <div className="project-content">

        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>

        {tech && (
          <div className="project-tech">
            {tech}
          </div>
        )}

      </div>


      <div className="project-links">

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            GitHub

            <FaArrowUpRightFromSquare
              size={11}
            />
          </a>
        )}

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            Live Demo

            <FaArrowUpRightFromSquare
              size={11}
            />
          </a>
        )}

      </div>

    </article>
  );
}


/* =========================================================
   EXPERIENCE COMPONENT
   ========================================================= */

function Experience({
  year,
  title,
  company,
  description,
}) {
  return (
    <article className="experience-card">

      <div className="experience-year">
        {year}
      </div>

      <div className="experience-content">

        <h3>
          {title}
        </h3>

        <h4>
          {company}
        </h4>

        <p>
          {description}
        </p>

      </div>

    </article>
  );
}


export default App;
