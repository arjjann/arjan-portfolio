'use client';

import { useMemo, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Box,
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Wrench,
  X
} from 'lucide-react';

// Helper to ensure basePath is applied in production for HTML <img> tags
const basePath = process.env.NODE_ENV === 'production' ? '/arjan-portfolio' : '';
const getImagePath = (path: string) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};

type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
  alt: string;
  summary: string;
  role: string;
  details: string[];
  gallery?: { src: string; caption: string; description?: string; points?: string[] }[];
};

const projects: Project[] = [
  {
    id: 'robocon',
    number: '01',
    title: 'ABU Robocon',
    category: 'Robotics',
    tags: ['Robotics', 'Mechanical Design', 'Fabrication'],
    image: '/models/IMG_E6202.JPG',
    alt: 'Robocon Team 2025',
    summary: 'Designed, fabricated and assembled competition robots as part of the Robotics Club, Pulchowk Campus team.',
    role: 'Robot design, fabrication, assembly and team coordination across the 2023, 2024 and 2025 seasons.',
    details: [
      'Contributed to iterative robot design and mechanical integration.',
      'Worked with fabrication, assembly and testing.',
      'Participated in ABU Robocon seasons in 2023, 2024 and 2025.'
    ],
    gallery: [
      {
        src: '/models/R1.png',
        caption: 'Fig. 1: Robot One (R1)',
        description: 'This is Robot one R1.'
      },
      {
        src: '/models/robor2.o_bg.png',
        caption: 'Fig. 2: Robot Two (R2)',
        description: 'This is Robot Two'
      }
    ]
  },
  {
    id: 'clay-printer',
    number: '02',
    title: 'Clay 3D Printer',
    category: 'Manufacturing',
    tags: ['Manufacturing', 'Prototyping', 'Mechanisms'],
    image: '/models/IMG_E9894.JPG', // Fixed leading slash
    alt: '3D printing machine',
    summary: 'Adapted an FDM-style 3D printer for clay extrusion as part of the STEAM initiative in Nepal.',
    role: 'Mechanical conversion, extrusion mechanism and prototype development.',
    details: [
      'Worked on a piston/screw-driven clay extrusion setup.',
      'Integrated the extrusion mechanism with a motion platform.',
      'Explored nozzle size, material flow and layer consistency.'
    ],
    gallery: [
      {
        src: '/models/IMG_E9898.JPG',
        caption: 'Fig. 1: Nozzle layout',
      },
      {
        src: '/models/clay_printer_pump.png',
        caption: 'Fig. 2: Exploded View of pump',
      },
      {
        src: '/models/section_view_pump.png',
        caption: 'Fig. 3: Section View of the Pump Extrusion System in CAD',
      }
    ]
  },
  {
    id: 'roller',
    number: '03',
    title: 'Zip Coaster Roller Assembly',
    category: 'Mechanical Design',
    tags: ['CAD', 'Mechanical Design', 'Optimization'],
    image: '/models/Roller_IV.png', // Fixed leading slash
    alt: 'Mechanical engineering workshop',
    summary: 'Designed a roller assembly for the roller pipe coaster at Nagarkot Zip Coaster.',
    role: 'CAD design, assembly development, manufacturing drawings and optimization',
    details: [
      'Developed parts and assemblies in CAD.',
      'Considered fit, manufacturability, compactness and assembly access.',
      'Prepared engineering drawings to support fabrication.'
    ]
  },
  {
    id: 'rl-arm',
    number: '04',
    title: 'Robotic Arm Manipulation with RL',
    category: 'AI & Simulation',
    tags: ['Robotics', 'Simulation', 'Python'],
    image: '/models/Rl robotic arm.png', // Fixed leading slash
    alt: 'Robotic arm in a laboratory',
    summary: 'Trained a simulated robotic arm to reach a target using Proximal Policy Optimization (PPO).',
    role: 'Simulation environment, reward design and reinforcement-learning experiments.',
    details: [
      'Created a robot description from CAD and simulated it in PyBullet.',
      'Used Stable-Baselines3 PPO to train a reaching policy.',
      'Designed rewards around progress, target success and step penalty.'
    ]
  },
  {
    id: 'topology',
    number: '05',
    title: 'Compliant Mechanism Topology Optimization',
    category: 'AI & Simulation',
    tags: ['MATLAB', 'FEA', 'Optimization'],
    image: '/models/WhatsApp Image 2026-10-13 at 17.36.57.jpeg',
    alt: 'Engineering analysis and design work',
    summary: 'Final-year thesis work on SIMP topology optimization for a compliant double-displacement lever.',
    role: 'MATLAB implementation, sensitivity analysis and optimization workflow.',
    details: [
      'Implemented density-based topology optimization using SIMP.',
      'Applied sensitivity analysis, filtering and penalization.',
      'Completed and verified the optimization portion of the work.'
    ]
  }
];

const filters = ['All', 'Mechanical Design', 'Robotics', 'Manufacturing', 'AI & Simulation'];

function ArmIllustration() {
  const preventSave = (e: React.SyntheticEvent) => e.preventDefault();

  return (
    <div className="arm-stage" aria-label="Mechanical systems project showcase">
      <div className="arm-visual-wrapper">
        <img
          src={getImagePath('/models/cover3.png')}
          alt="Engineering projects collage background"
          className="bg-cover-image"
          loading="eager"
          draggable={false}
          onContextMenu={preventSave}
          onDragStart={preventSave}
        />
        <img
          src={getImagePath('/models/arm.png')}
          alt="Floating robotic arm cutout"
          className="floating-arm-image"
          loading="eager"
          draggable={false}
          onContextMenu={preventSave}
          onDragStart={preventSave}
        />
      </div>

      <div className="arm-caption">
        <span>Robotics &amp; mechanical design</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const visibleProjects = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter || p.tags.includes(activeFilter))),
    [activeFilter]
  );

  const closeMenu = () => setMobileOpen(false);

  return (
    <main>
      {/* Navigation Header */}
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Arjan Bista home">
          <span className="brand-mark"> <span></span></span>
          <span className="brand-name">
            ARJAN BISTA<small>MECHANICAL ENGINEERING STUDENT</small>
          </span>
        </a>

        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={mobileOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#resume" onClick={closeMenu}>
            Resume <ArrowUpRight size={13} />
          </a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Contact <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" /> MECHANICAL ENGINEERING · ROBOTICS
          </div>
          <h1>
            Arjan Bista<br />
            <em></em>
          </h1>
          <p className="hero-description">
            I’m an undergraduate mechanical engineering student at Pulchowk Campus(IOE).
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <ArrowDownRight size={16} />
            </a>
            <a className="button button-light" href="#resume">
              View resume <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <ArmIllustration />
      </section>

      {/* About Section */}
      <section className="about-section section-pad" id="about">
        <div className="about-left">
          <div className="eyebrow">A LITTLE ABOUT ME</div>
          <h2>
            Curious by nature.<br />
            <em>Engineer by practice.</em>
          </h2>
          <p>I’m an undergraduate mechanical engineering student at Pulchowk Campus, Institute of Engineering, Tribhuvan University. I enjoy working across the full engineering process—from sketching and CAD to fabrication, simulation and testing.</p>
          <p>My work sits at the intersection of mechanical design, robotics and intelligent systems. I’m especially interested in how thoughtful design and accessible technology can solve practical problems.</p>
          <a className="text-link" href="#contact">
            More about my work <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="about-right">
          <div className="about-stat">
            <span>01</span>
            <div>
              <strong>Design &amp; fabricate</strong>
              <p>Mechanical assemblies, robot structures and prototypes.</p>
            </div>
          </div>

          <div className="about-stat">
            <span>02</span>
            <div>
              <strong>Simulate &amp; improve</strong>
              <p>Numerical analysis, optimization and virtual testing.</p>
            </div>
          </div>

          <div className="about-stat">
            <span>03</span>
            <div>
              <strong>Connect disciplines</strong>
              <p>Mechanical engineering, programming and robotics.</p>
            </div>
          </div>

          <div className="education-card">
            <span>EDUCATION / 2022—PRESENT</span>
            <strong>B.E. Mechanical Engineering</strong>
            <p>
              Pulchowk Campus · Institute of Engineering<br />
              Tribhuvan University, Nepal
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="work-section section-pad" id="work">
        <div className="section-heading">
          <div>
            <div className="eyebrow">ENGINEERING PROJECTS</div>
            <h2>
              My<br />
              <em>Projects</em>
            </h2>
          </div>
          <p>Robotics, mechanical design, and automation projects built through hands-on engineering, prototyping, and experimentation.</p>
        </div>

        <div className="filter-row" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button key={f} className={activeFilter === f ? 'filter active' : 'filter'} onClick={() => setActiveFilter(f)}>
              {f}
              <span>{f === 'All' ? projects.length : projects.filter((p) => p.category === f || p.tags.includes(f)).length}</span>
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visibleProjects.map((p) => (
            <button key={p.id} className="project-card" onClick={() => setSelected(p)}>
              <div className={`project-image image-${p.id}`}>
                <img src={getImagePath(p.image)} alt={p.alt} loading="lazy" />
                <span className="image-number">{p.number} / PROJECT</span>
                <span className="card-arrow">
                  <ArrowUpRight size={19} />
                </span>
              </div>
              <div className="project-meta">
                <span>{p.category}</span>
                <span>
                  {p.number} — 0{projects.length}
                </span>
              </div>
              <div className="project-title-row">
                <h3>{p.title}</h3>
                <ArrowUpRight className="title-arrow" size={17} />
              </div>
              <p>{p.summary}</p>
              <div className="tag-row">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </button>
          ))}
        </div>

        <div className="project-note">
          <span>HAVE A PROJECT IN MIND?</span>
          <a href="#contact">
            Let’s talk about it <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section section-pad">
        <div className="gallery-heading">
          <div>
            <div className="eyebrow">MECHANICAL DESIGN GALLERY</div>
            <h2>
              Built in CAD.<br />
              <em>Made to work.</em>
            </h2>
          </div>
          <p>A growing collection of mechanisms, assemblies, prototypes and simulations. Interactive 3D models can be added here as GLB/glTF files.</p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-tile gallery-large">
            <div className="wireframe">
              <Box size={40} strokeWidth={1} />
              <span>CAD / ASSEMBLIES</span>
            </div>
            <div className="gallery-tile-caption">
              <span>01 / CAD &amp; ASSEMBLIES</span>
              <strong>Parts that fit together.</strong>
            </div>
          </div>

          <div className="gallery-tile gallery-dark">
            <div className="gear-art">
              <Wrench size={48} strokeWidth={1} />
              <span>MECHANISM STUDIES</span>
            </div>
            <div className="gallery-tile-caption">
              <span>02 / MECHANISMS</span>
              <strong>Motion with purpose.</strong>
            </div>
          </div>

          <div className="gallery-tile gallery-orange">
            <div className="blueprint">
              <div className="blueprint-circle" />
              <div className="blueprint-line l1" />
              <div className="blueprint-line l2" />
              <div className="blueprint-line l3" />
              <span>DESIGN / 2D DRAWING</span>
            </div>
            <div className="gallery-tile-caption">
              <span>03 / ENGINEERING DRAWINGS</span>
              <strong>Designed for fabrication.</strong>
            </div>
          </div>

          <div className="gallery-tile gallery-sand">
            <div className="model-symbol">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="gallery-tile-caption">
              <span>04 / SIMULATION</span>
              <strong>Test before you build.</strong>
            </div>
          </div>
        </div>

        <p className="gallery-footnote">Replace these graphic placeholders with your own CAD renders, drawings, workshop photos or embedded 3D models.</p>
      </section>

      {/* Experience Section */}
      <section className="experience-section section-pad">
        <div className="eyebrow">EXPERIENCE &amp; MILESTONES</div>
        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-date">2023 — 2025</span>
            <div>
              <h3>ABU Robocon · Robotics Club, Pulchowk Campus</h3>
              <p>Contributed to robot design, fabrication, assembly and testing across three competition seasons.</p>
            </div>
            <span className="timeline-type">ROBOTICS</span>
          </div>

          <div className="timeline-item">
            <span className="timeline-date">PROJECT</span>
            <div>
              <h3>Clay 3D Printer · STEAM, MoEST Nepal</h3>
              <p>Worked on adapting a 3D printer platform for clay-based extrusion and prototyping.</p>
            </div>
            <span className="timeline-type">MANUFACTURING</span>
          </div>

          <div className="timeline-item">
            <span className="timeline-date">PROJECT</span>
            <div>
              <h3>Mechanical CAD · Nagarkot Zip Coaster</h3>
              <p>Designed a roller assembly and prepared manufacturing-focused CAD documentation.</p>
            </div>
            <span className="timeline-type">MECHANICAL</span>
          </div>

          <div className="timeline-item">
            <span className="timeline-date">PROJECT</span>
            <div>
              <h3>Reinforcement Learning · Robotic Arm</h3>
              <p>Explored target-reaching control in PyBullet using a PPO reinforcement-learning policy.</p>
            </div>
            <span className="timeline-type">SIMULATION</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section section-pad" id="skills">
        <div className="skills-intro">
          <div className="eyebrow">TOOLS OF THE TRADE</div>
          <h2>
            What I work<br />
            <em>with.</em>
          </h2>
          <p>Tools are part of the process. The goal is to choose the right one to understand, design, build and improve a system.</p>
        </div>

        <div className="skills-list">
          <div className="skill-group">
            <span>01</span>
            <div>
              <h3>Mechanical design</h3>
              <p>SolidWorks · CAD assemblies · Engineering drawings · Design for manufacturing</p>
            </div>
          </div>

          <div className="skill-group">
            <span>02</span>
            <div>
              <h3>Simulation &amp; analysis</h3>
              <p>ANSYS · MATLAB · PyBullet · Finite element analysis · Topology optimization</p>
            </div>
          </div>

          <div className="skill-group">
            <span>03</span>
            <div>
              <h3>Robotics &amp; control</h3>
              <p>ROS 2 · Gazebo · Reinforcement learning · Arduino · Sensors &amp; actuators</p>
            </div>
          </div>

          <div className="skill-group">
            <span>04</span>
            <div>
              <h3>Programming &amp; making</h3>
              <p>Python · C/C++ · Git · 3D printing · CNC · Workshop fabrication</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="resume-section section-pad" id="resume">
        <div>
          <div className="eyebrow">WANT THE FULL PICTURE?</div>
          <h2>
            Let the work<br />
            <em>speak for itself.</em>
          </h2>
          <p>Explore the projects above or get in touch to discuss my experience, technical interests and availability.</p>
        </div>
        <a className="button button-dark" href="./Arjan-Bista-CV.pdf" target="_blank" rel="noreferrer">
          Download CV <Download size={16} />
        </a>
      </section>

      {/* Contact Section */}
      <footer className="contact-section section-pad" id="contact">
        <div className="contact-top">
          <div>
            <div className="eyebrow">HAVE A CHALLENGE TO SOLVE?</div>
            <h2>
              Let’s build something<br />
              <em>meaningful.</em>
            </h2>
          </div>
          <p>Open to engineering internships, research opportunities and robotics collaborations.</p>
        </div>

        <div className="contact-bottom">
          <a className="contact-email" href="mailto:arjanbista@gmail.com">
            Get in touch <ArrowUpRight size={18} />
          </a>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/arjan-bista/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={17} /> LinkedIn <ExternalLink size={12} />
            </a>
            <a href="https://github.com/arjjann" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={17} /> GitHub <ExternalLink size={12} />
            </a>
            <a href="mailto:arjanbista@gmail.com">
              <Mail size={17} /> Email <ExternalLink size={12} />
            </a>
          </div>
        </div>

        <div className="footer-legal">
          <span>© {new Date().getFullYear()} ARJAN BISTA</span>
          <span>DESIGNED WITH CURIOSITY · BUILT WITH INTENTION</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>

      {/* Project Details Modal */}
      {selected && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close project details">
              <X size={20} />
            </button>
            <div className="modal-image">
              <img src={getImagePath(selected.image)} alt={selected.alt} />
            </div>
            <div className="modal-content">
              <div className="eyebrow">
                PROJECT {selected.number} / {selected.category.toUpperCase()}
              </div>
              <h2 id="modal-title">{selected.title}</h2>
              <p>{selected.summary}</p>
              <h3>My contribution</h3>
              <p>{selected.role}</p>
              <ul>
                {selected.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              {selected.gallery && selected.gallery.length > 0 && (
                <div className="modal-gallery">
                  {selected.gallery.map((g) => (
                    <figure key={g.src}>
                      <img src={getImagePath(g.src)} alt={g.caption} />
                      <figcaption>{g.caption}</figcaption>
                      {g.description && <p className="gallery-description">{g.description}</p>}
                    </figure>
                  ))}
                </div>
              )}
              <div className="tag-row">
                {selected.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Floating Contact Button */}
      <a className="floating-contact" href="#contact" aria-label="Contact Arjan">
        <Mail size={18} />
      </a>
    </main>
  );
}