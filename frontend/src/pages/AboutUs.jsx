import { useEffect, useState } from 'react';
import { 
  FaBullseye, FaBolt, FaRecycle, FaHandshake, 
  FaReact, FaCss3Alt
} from 'react-icons/fa';
import { SiTypescript, SiThreedotjs } from 'react-icons/si';
import Navbar from '../components/Navbar';
import SplashCursor from '../components/SplashCursor';
import PageTransition from '../components/PageTransition';

const About = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [hoveredTimeline, setHoveredTimeline] = useState(null);

  useEffect(() => {
    const onMove = (e) => setMouse({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <PageTransition>
      <Navbar />
      <SplashCursor />
      <div style={s.page}>
        <div style={s.bgShape1} />
        <div style={s.bgShape2} />

        {/* ===== HERO SPLIT ===== */}
        <section style={s.split}>
          <div style={s.textSide}>
            <span style={s.tag}>About Me</span>
            <h1 style={s.heading}>
              Passionate about <span style={s.highlight}>creative coding</span>
            </h1>
            <p style={s.body}>
              I'm a frontend developer and creative technologist with experience in building 
              interactive, performance-focused web experiences. I specialize in motion design, 3D interfaces, 
              and products that feel alive.
            </p>
            <p style={s.body}>
              My approach combines technical excellence with creative thinking. I believe every pixel matters, 
              every animation should have purpose, and every interaction should feel natural.
            </p>
            <p style={s.body}>
              When I'm not coding, I'm exploring generative art, experimenting with WebGL shaders, 
              or contributing to open-source projects.
            </p>
            <div style={s.statsRow}>
              {aboutStats.map((st, i) => (
                <div key={i} style={s.statItem}>
                  <span style={s.statNum}>{st.num}</span>
                  <span style={s.statLabel}>{st.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side with mouse parallax */}
          <div style={s.visualSide}>
            <div style={{
              ...s.visualCard,
              transform: `perspective(900px) rotateY(${mouse.x * 0.4}deg) rotateX(${-mouse.y * 0.4}deg)`,
            }}>
              <div style={{ ...s.layer, ...s.layerBack, transform: `translate(${mouse.x * -0.3}px, ${mouse.y * -0.3}px)` }} />
              <div style={{ ...s.layer, ...s.layerMid, transform: `translate(${mouse.x * 0.2}px, ${mouse.y * 0.2}px)` }}>
                <span style={s.codeText}>{'<Developer />'}</span>
              </div>
              <div style={{ ...s.layer, ...s.layerFront, transform: `translate(${mouse.x * 0.5}px, ${mouse.y * 0.5}px)` }}>
                <div style={s.badge}><FaReact style={{ marginRight: '6px' }} /> React</div>
                <div style={{ ...s.badge, ...s.badge2 }}><SiTypescript style={{ marginRight: '6px' }} /> TypeScript</div>
                <div style={{ ...s.badge, ...s.badge3 }}><FaCss3Alt style={{ marginRight: '6px' }} /> CSS3</div>
                <div style={{ ...s.badge, ...s.badge4 }}><SiThreedotjs style={{ marginRight: '6px' }} /> Three.js</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MY VALUES ===== */}
        <section style={s.sectionValues}>
          <div style={s.sectionInner}>
            <span style={s.sectionTag}>My Values</span>
            <h2 style={s.sectionTitle}>What Drives Me</h2>
            <div style={s.valuesGrid}>
              {values.map((v, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredValue(i)}
                  onMouseLeave={() => setHoveredValue(null)}
                  style={{
                    ...s.valueCard,
                    transform: hoveredValue === i ? 'translateY(-8px) rotate(-1deg)' : 'translateY(0) rotate(0)',
                    boxShadow: hoveredValue === i
                      ? `0 16px 40px ${v.color}18`
                      : '0 2px 10px rgba(0,0,0,0.04)',
                    borderColor: hoveredValue === i ? v.color + '35' : 'rgba(0,0,0,0.06)',
                  }}
                >
                  <span style={{ ...s.valueIcon, color: v.color, background: v.color + '10' }}>
                    {v.icon}
                  </span>
                  <h3 style={s.valueTitle}>{v.title}</h3>
                  <p style={s.valueDesc}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TIMELINE ===== */}
        <section style={{
          ...s.sectionTimeline,
          transform: `translateY(${Math.max(0, (scrollY - 600) * -0.05)}px)`,
        }}>
          <div style={s.sectionInner}>
            <span style={s.sectionTag}>Experience</span>
            <h2 style={s.sectionTitle}>My Journey</h2>
            <div style={s.timeline}>
              {timeline.map((item, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredTimeline(i)}
                  onMouseLeave={() => setHoveredTimeline(null)}
                  style={{
                    ...s.timelineItem,
                    transform: hoveredTimeline === i ? 'translateX(8px)' : 'translateX(0)',
                  }}
                >
                  <div style={{
                    ...s.dot,
                    transform: hoveredTimeline === i ? 'scale(1.5)' : 'scale(1)',
                    background: hoveredTimeline === i ? '#7c3aed' : '#a78bfa',
                  }} />
                  <div style={{
                    ...s.timeCard,
                    boxShadow: hoveredTimeline === i ? '0 8px 30px rgba(124,58,237,0.1)' : '0 2px 8px rgba(0,0,0,0.04)',
                  }}>
                    <span style={s.year}>{item.year}</span>
                    <h3 style={s.role}>{item.role}</h3>
                    <p style={s.company}>{item.company}</p>
                    <p style={s.timeDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TOOLS ===== */}
        <section style={s.sectionTools}>
          <div style={s.sectionInner}>
            <span style={s.sectionTag}>Tools</span>
            <h2 style={s.sectionTitle}>Technologies I Love</h2>
            <div className="tools-row" style={s.toolsRow}>
              {tools.map((t, i) => (
                <div key={i} className="tool-item" style={s.toolItem}>
                  <span className="tool-emoji" style={s.toolEmoji}>{t.icon}</span>
                  <span className="tool-name" style={s.toolName}>{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          overflow-x: hidden;
        }

        /* Mobile Responsive Styles - Only for mobile, desktop unchanged */
        @media (max-width: 768px) {
          /* Decrease white developer card size */
          .visual-card {
            width: 280px !important;
            height: 340px !important;
          }
          
          .layer {
            border-radius: 20px !important;
          }
          
          .code-text {
            font-size: 1.2rem !important;
          }
          
          .badge {
            padding: 6px 12px !important;
            font-size: 0.7rem !important;
          }
          
          .badge svg {
            font-size: 0.7rem !important;
          }
          
          /* Make tools grid 2 cards per row */
          .tools-row {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          
          .tool-item {
            min-width: auto !important;
            padding: 20px 16px !important;
          }
        }

        @media (max-width: 480px) {
          /* Further reduce card size on very small screens */
          .visual-card {
            width: 240px !important;
            height: 300px !important;
          }
          
          .badge {
            padding: 4px 10px !important;
            font-size: 0.6rem !important;
          }
          
          .badge svg {
            font-size: 0.6rem !important;
          }
          
          .code-text {
            font-size: 1rem !important;
          }
          
          .tools-row {
            gap: 12px !important;
          }
          
          .tool-item {
            padding: 16px 12px !important;
          }
          
          .tool-emoji {
            font-size: 2rem !important;
          }
          
          .tool-name {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </PageTransition>
  );
};

const aboutStats = [
  { num: '3+', label: 'Years Exp.' },
  { num: '20+', label: 'Projects' },
  { num: '15+', label: 'Clients' },
];

const values = [
  { icon: <FaBullseye size={24} />, title: 'Pixel Perfect', desc: 'Every detail matters. I obsess over alignment, spacing, and visual harmony.', color: '#7c3aed' },
  { icon: <FaBolt size={24} />, title: 'Performance', desc: 'Speed is a feature. I optimize for the fastest possible experience.', color: '#f59e0b' },
  { icon: <FaRecycle size={24} />, title: 'Clean Code', desc: 'Maintainable, readable, and well-documented code that teams love.', color: '#10b981' },
  { icon: <FaHandshake size={24} />, title: 'Collaboration', desc: 'Great products come from great teamwork and clear communication.', color: '#0ea5e9' },
];

const timeline = [
  {
    year: '2025 – Present',
    role: 'Frontend Developer + Product Lead + Graphic Designer',
    company: 'Yuni & Technospot (NASTP)',
    desc: 'Developing and managing course-based web platforms, leading product strategy and digital initiatives, and enhancing user experience through structured UI and responsive design.'
  },
  {
    year: '2025',
    role: 'Frontend Developer Intern (React)',
    company: 'Explorer Bees – NASTP NICAT',
    desc: 'Built responsive and reusable UI components using React, contributed to real-world projects, and improved overall user experience through clean and structured frontend development.'
  },
  {
    year: '2024',
    role: 'Business Developer Intern + Graphic Designer',
    company: 'NASTP NICAT',
    desc: 'Supported business strategy, client communication, and project planning while designing professional proposals and visual assets.'
  },
  {
    year: '2023',
    role: 'Digital Marketing Executive',
    company: 'Econex & Pak e Store, Rawalpindi',
    desc: 'Managed social media campaigns, increased brand visibility, and improved audience engagement through targeted digital marketing strategies.'
  }
];

const tools = [
  { icon: '⚛️', name: 'React' },
  { icon: '📘', name: 'TypeScript' },
  { icon: '🎨', name: 'CSS3' },
  { icon: '🔮', name: 'Three.js' },
  { icon: '⚡', name: 'Vite' },
  { icon: '🔀', name: 'Git' },
  { icon: '🎯', name: 'Figma' },
  { icon: '🟢', name: 'Node.js' },
];

const s = {
  sectionValues: {
    padding: '100px 32px',
    color: '#9c17d1e3',
  },
  sectionTimeline: {
    padding: '100px 32px',
    color: '#9c17d1e3',
  },
  sectionTools: {
    padding: '100px 32px',
    color: '#9c17d1e3',
  },
  page: {
    minHeight: '100vh',
    backgroundColor: '#000000',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    position: 'relative',
    overflowX: 'hidden',
    width: '100%',
  },
  bgShape1: {
    position: 'fixed',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
    filter: 'blur(80px)',
    top: '-5%',
    right: '0%',
    pointerEvents: 'none',
    animation: 'pulse 6s ease-in-out infinite',
  },
  bgShape2: {
    position: 'fixed',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)',
    filter: 'blur(80px)',
    bottom: '0%',
    left: '10%',
    pointerEvents: 'none',
    animation: 'pulse 8s ease-in-out infinite',
  },
  split: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '80px',
    padding: '140px 50px 100px',
    maxWidth: '1300px',
    margin: '0 auto',
    flexWrap: 'wrap',
    position: 'relative',
    zIndex: 1,
  },
  textSide: {
    flex: '1 1 450px',
    maxWidth: '620px',
    animation: 'fadeSlideUp 0.8s ease-out forwards',
  },
  tag: {
    display: 'inline-block',
    padding: '8px 22px',
    background: 'rgba(124,58,237,0.06)',
    border: '1px solid rgba(124,58,237,0.12)',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#7c3aed',
    fontWeight: 600,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '20px',
  },
  heading: {
    fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: '28px',
    color: '#ffffff',
  },
  highlight: {
    background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  body: {
    fontSize: '1.15rem',
    color: '#ffffff',
    lineHeight: 1.8,
    marginBottom: '18px',
  },
  statsRow: {
    display: 'flex',
    gap: '48px',
    marginTop: '35px',
    flexWrap: 'wrap',
  },
  statItem: { display: 'flex', flexDirection: 'column' },
  statNum: {
    fontSize: '2.4rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  statLabel: { fontSize: '0.9rem', color: '#ccc', letterSpacing: '1px' },

  /* Visual */
  visualSide: {
    flex: '1 1 380px',
    display: 'flex',
    justifyContent: 'center',
    animation: 'fadeSlideUp 0.8s ease-out 0.2s forwards',
    opacity: 0,
  },
  visualCard: {
    width: '380px',
    height: '440px',
    position: 'relative',
    transition: 'transform 0.15s ease-out',
    transformStyle: 'preserve-3d',
  },
  layer: {
    position: 'absolute',
    inset: 0,
    borderRadius: '28px',
    transition: 'transform 0.15s ease-out',
  },
  layerBack: {
    background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(236,72,153,0.08))',
    border: '1px solid rgba(124,58,237,0.1)',
  },
  layerMid: {
    background: '#fff',
    border: '1px solid rgba(0,0,0,0.06)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  layerFront: { pointerEvents: 'none' },
  codeText: {
    fontSize: '1.8rem',
    fontFamily: "'Courier New', monospace",
    color: '#7c3aed',
    fontWeight: 700,
  },
  badge: {
    position: 'absolute',
    padding: '10px 20px',
    background: '#fff',
    border: '1px solid rgba(124,58,237,0.2)',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#7c3aed',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
    animation: 'float 3s ease-in-out infinite',
    top: '15px',
    right: '-15px',
    display: 'flex',
    alignItems: 'center',
  },
  badge2: {
    top: 'auto',
    right: 'auto',
    bottom: '25px',
    left: '-10px',
    color: '#ec4899',
    borderColor: 'rgba(236,72,153,0.2)',
    animationDelay: '1s',
  },
  badge3: {
    top: 'auto',
    right: '-10px',
    bottom: '80px',
    color: '#0ea5e9',
    borderColor: 'rgba(14,165,233,0.2)',
    animationDelay: '2s',
  },
  badge4: {
    top: '70px',
    right: 'auto',
    left: '-20px',
    color: '#10b981',
    borderColor: 'rgba(16,185,129,0.2)',
    animationDelay: '1.5s',
  },

  /* Section */
  section: {
    position: 'relative',
    zIndex: 1,
    padding: '100px 32px',
  },
  sectionInner: { maxWidth: '1100px', margin: '0 auto', textAlign: 'center' },
  sectionTag: {
    display: 'inline-block',
    padding: '8px 22px',
    background: 'rgba(124,58,237,0.06)',
    border: '1px solid rgba(124,58,237,0.1)',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#7c3aed',
    fontWeight: 600,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '18px',
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 700,
    marginBottom: '50px',
    color: '#ffffff',
  },

  /* Values */
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '28px',
    textAlign: 'left',
  },
  valueCard: {
    background: '#1a1a1a',
    borderRadius: '20px',
    padding: '32px 28px',
    border: '1px solid',
    transition: 'all 0.35s ease',
    cursor: 'default',
  },
  valueIcon: {
    width: '54px',
    height: '54px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.6rem',
    marginBottom: '18px',
  },
  valueTitle: { fontSize: '1.2rem', fontWeight: 600, marginBottom: '10px', color: '#ffffff' },
  valueDesc: { fontSize: '1rem', color: '#cccccc', lineHeight: 1.6 },

  /* Timeline */
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
    borderLeft: '2px solid rgba(124,58,237,0.15)',
    paddingLeft: '40px',
    textAlign: 'left',
    maxWidth: '800px',
    margin: '0 auto',
  },
  timelineItem: {
    position: 'relative',
    transition: 'transform 0.3s ease',
  },
  dot: {
    position: 'absolute',
    left: '-49px',
    top: '24px',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 10px rgba(124,58,237,0.3)',
  },
  timeCard: {
    background: '#1a1a1a',
    borderRadius: '18px',
    padding: '28px',
    border: '1px solid rgba(255,255,255,0.06)',
    transition: 'box-shadow 0.3s ease',
  },
  year: { fontSize: '0.85rem', color: '#7c3aed', fontWeight: 700, letterSpacing: '2px' },
  role: { fontSize: '1.25rem', fontWeight: 600, margin: '8px 0 4px', color: '#ffffff' },
  company: { fontSize: '1rem', color: '#cccccc', marginBottom: '10px' },
  timeDesc: { fontSize: '0.95rem', color: '#aaaaaa', lineHeight: 1.6 },

  /* Tools - Enhanced with larger sizes */
  toolsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '28px',
    justifyContent: 'center',
  },
  toolItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    padding: '28px 32px',
    background: '#1a1a1a',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.06)',
    minWidth: '130px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
  },
  toolEmoji: { fontSize: '3rem' },
  toolName: { fontSize: '1.1rem', color: '#ffffff', fontWeight: 600 },
};

export default About;