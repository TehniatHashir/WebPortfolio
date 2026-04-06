import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { useMouseTilt } from '../hooks/useMouseTilt';
import Navbar from '../components/Navbar';
import SplashCursor from '../components/SplashCursor';

const SkillCard = ({ skill, index }) => {
  const { transform, onMouseMove, onMouseLeave } = useMouseTilt(18);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseMove={(e) => { onMouseMove(e); setHovered(true); }}
      onMouseLeave={() => { onMouseLeave(); setHovered(false); }}
      style={{
        ...cs.card,
        transform,
        animationDelay: `${index * 0.08}s`,
        borderColor: hovered ? skill.color + '40' : 'rgba(0,0,0,0.06)',
        boxShadow: hovered
          ? `0 16px 40px ${skill.color}15, 0 0 0 1px ${skill.color}20`
          : '0 2px 10px rgba(0,0,0,0.04)',
      }}
    >
      <div style={{
        ...cs.cardGlow,
        background: hovered ? `radial-gradient(circle, ${skill.color}10 0%, transparent 70%)` : 'transparent',
      }} />
      <span style={{
        ...cs.icon,
        color: skill.color,
        transform: hovered ? 'scale(1.2) rotate(-5deg)' : 'scale(1) rotate(0)',
      }}>{skill.icon}</span>
      <h3 style={cs.cardTitle}>{skill.name}</h3>
      <div style={cs.levelBar}>
        <div style={{ ...cs.levelFill, width: `${skill.level}%`, background: skill.color }} />
      </div>
      <span style={cs.levelText}>{skill.level}%</span>
      <p style={cs.cardDesc}>{skill.desc}</p>
    </div>
  );
};

const Skills = () => {
  const [category, setCategory] = useState('all');
  const [hoveredFilter, setHoveredFilter] = useState(null);

  const filtered = category === 'all' ? skills : skills.filter(sk => sk.category === category);

  return (
    <PageTransition>
         <Navbar />
         <SplashCursor />
      <div style={cs.page}>
        <div style={cs.bgShape} />
        <div style={cs.bgShape2} />

        <section style={cs.content}>
          <span style={cs.label}>My Skills</span>
          <h1 style={cs.heading}>Technologies & Expertise</h1>
          <p style={cs.subtitle}>
            🎯 Interactive cards with dynamic 3D tilt - just hover to see the magic! Browse through categories to discover my complete tech arsenal and creative toolkit.
          </p>

          {/* Filters */}
          <div style={cs.filters}>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setCategory(cat.key)}
                onMouseEnter={() => setHoveredFilter(cat.key)}
                onMouseLeave={() => setHoveredFilter(null)}
                style={{
                  ...cs.filterBtn,
                  background: category === cat.key
                    ? 'linear-gradient(135deg, #7c3aed, #a78bfa)'
                    : hoveredFilter === cat.key ? 'rgba(124,58,237,0.06)' : '#fff',
                  color: category === cat.key ? '#fff' : '#666',
                  borderColor: category === cat.key ? '#7c3aed' : 'rgba(0,0,0,0.08)',
                  transform: hoveredFilter === cat.key && category !== cat.key ? 'translateY(-2px)' : 'none',
                  boxShadow: category === cat.key ? '0 4px 15px rgba(124,58,237,0.25)' : 'none',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={cs.grid}>
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>

          {/* Proficiency Legend */}
          <div style={cs.legend}>
            <h3 style={cs.legendTitle}>Proficiency Guide</h3>
            <div style={cs.legendRow}>
              {[
                { label: 'Expert', range: '90-100%', color: '#10b981' },
                { label: 'Advanced', range: '80-89%', color: '#0ea5e9' },
                { label: 'Intermediate', range: '70-79%', color: '#f59e0b' },
                { label: 'Learning', range: 'Below 70%', color: '#ef4444' },
              ].map((l, i) => (
                <div key={i} style={cs.legendItem}>
                  <div style={{ ...cs.legendDot, background: l.color }} />
                  <span style={cs.legendLabel}>{l.label}</span>
                  <span style={cs.legendRange}>{l.range}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes levelGrow { from { width: 0%; } }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          overflow-x: hidden;
        }
      `}</style>
    </PageTransition>
  );
};

const categories = [
  { key: 'all', label: 'All Skills' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'tools', label: 'Tools & Backend' },
  { key: 'design', label: 'Design' },
];

const skills = [
  { name: 'React', icon: '⚛️', level: 95, color: '#0ea5e9', category: 'frontend', desc: 'Hooks, context, SSR, concurrent features' },
  { name: 'TypeScript', icon: '📘', level: 92, color: '#3178c6', category: 'frontend', desc: 'Advanced types, generics, type guards' },
  { name: 'JavaScript', icon: '⚡', level: 96, color: '#f59e0b', category: 'frontend', desc: 'ES6+, async patterns, closures' },
  { name: 'CSS & Motion', icon: '🎨', level: 94, color: '#ec4899', category: 'frontend', desc: 'Animations, transforms, perspective' },
  { name: 'HTML5', icon: '🌐', level: 95, color: '#ef4444', category: 'frontend', desc: 'Semantic, accessibility, canvas' },
  { name: 'Three.js', icon: '🔮', level: 72, color: '#8b5cf6', category: 'frontend', desc: 'Scenes, materials, shaders, postprocessing' },
  { name: 'Git & GitHub', icon: '🔀', level: 90, color: '#1a1a2e', category: 'tools', desc: 'Branching, PRs, CI/CD workflows' },
  { name: 'Vite', icon: '⚡', level: 88, color: '#646cff', category: 'tools', desc: 'Fast builds, HMR, plugin ecosystem' },
  { name: 'Node.js', icon: '🟢', level: 80, color: '#339933', category: 'tools', desc: 'REST APIs, middleware, streams' },
  { name: 'REST & GraphQL', icon: '🔗', level: 85, color: '#e535ab', category: 'tools', desc: 'API design, caching, subscriptions' },
  { name: 'Figma', icon: '🎯', level: 84, color: '#a259ff', category: 'design', desc: 'Prototyping, auto-layout, components' },
  { name: 'UI/UX Design', icon: '✨', level: 88, color: '#0ea5e9', category: 'design', desc: 'User research, wireframes, testing' },
  { name: 'Motion Design', icon: '🎬', level: 86, color: '#10b981', category: 'design', desc: 'Micro-interactions, page transitions' },
  { name: 'Responsive', icon: '📱', level: 95, color: '#f97316', category: 'design', desc: 'Mobile-first, fluid grids, breakpoints' },
];

const cs = { 

  page: {
    minHeight: '100vh', 
    backgroundColor: '#000000', 
    color: '#01010f',
    fontFamily: "'Inter', 'Segoe UI', sans-serif", 
    position: 'relative', 
    overflowX: 'hidden',
    width: '100%',
  },
  bgShape: {
    position: 'fixed', 
    width: '600px', 
    height: '600px', 
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
    filter: 'blur(100px)', 
    top: '-5%', 
    left: '0%', 
    pointerEvents: 'none',
    animation: 'pulse 7s ease-in-out infinite',
  },
  bgShape2: {
    position: 'fixed', 
    width: '500px', 
    height: '500px', 
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)',
    filter: 'blur(100px)', 
    bottom: '0%', 
    right: '10%', 
    pointerEvents: 'none',
    animation: 'pulse 9s ease-in-out infinite',
  },
  content: {
    position: 'relative', 
    zIndex: 1, 
    padding: '120px 24px 60px',
    maxWidth: '1100px', 
    margin: '0 auto', 
    textAlign: 'center',
    overflowX: 'hidden',
  },
  label: {
    display: 'inline-block', 
    padding: '6px 18px',
    background: 'rgba(124,58,237,0.06)', 
    border: '1px solid rgba(124,58,237,0.1)',
    borderRadius: '20px', 
    fontSize: '0.8rem', 
    color: '#7c3aed',
    fontWeight: 600, 
    letterSpacing: '1px', 
    textTransform: 'uppercase', 
    marginBottom: '14px',
  },
  heading: {
    fontSize: 'clamp(2rem, 5vw, 3rem)', 
    fontWeight: 700, 
    marginBottom: '14px', 
    color: '#7c3aed',
  },
  subtitle: {
    fontSize: '1.02rem', 
    color: '#ebe5e5', 
    marginBottom: '36px', 
    maxWidth: '600px', 
    margin: '0 auto 36px',
    lineHeight: 1.6,
  },
  filters: {
    display: 'flex', 
    justifyContent: 'center', 
    gap: '10px', 
    marginBottom: '44px', 
    flexWrap: 'wrap',
  },
  filterBtn: {
    padding: '10px 22px', 
    borderRadius: '30px', 
    border: '1px solid',
    fontSize: '0.88rem', 
    fontWeight: 500, 
    cursor: 'pointer',
    transition: 'all 0.3s ease', 
    fontFamily: 'inherit',
  },
  grid: {
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
    gap: '20px', 
    marginBottom: '60px',
  },
  card: {
    position: 'relative', 
    background: '#fff', 
    border: '1px solid',
    borderRadius: '18px', 
    padding: '28px 20px', 
    textAlign: 'center',
    cursor: 'default', 
    transition: 'all 0.2s ease-out',
    animation: 'fadeIn 0.5s ease-out forwards', 
    opacity: 0, 
    overflow: 'hidden',
  },
  cardGlow: {
    position: 'absolute', 
    inset: 0, 
    borderRadius: '18px', 
    pointerEvents: 'none',
    transition: 'background 0.3s ease',
  },
  icon: {
    fontSize: '2.2rem', 
    display: 'block', 
    marginBottom: '12px', 
    position: 'relative',
    transition: 'transform 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.05rem', 
    fontWeight: 600, 
    marginBottom: '12px', 
    position: 'relative',
  },
  levelBar: {
    height: '4px', 
    background: 'rgba(0,0,0,0.06)', 
    borderRadius: '2px',
    overflow: 'hidden', 
    marginBottom: '6px', 
    position: 'relative',
  },
  levelFill: {
    height: '100%', 
    borderRadius: '2px',
    transition: 'width 1s ease-out', 
    animation: 'levelGrow 1.2s ease-out',
  },
  levelText: { fontSize: '0.75rem', color: '#aaa', position: 'relative' },
  cardDesc: {
    fontSize: '0.78rem', 
    color: '#999', 
    lineHeight: 1.5, 
    marginTop: '8px', 
    position: 'relative',
  },

  /* Legend */
  legend: {
    background: '#fff', 
    borderRadius: '18px', 
    padding: '28px 32px',
    border: '1px solid rgba(0,0,0,0.06)', 
    maxWidth: '600px', 
    margin: '0 auto',
  },
  legendTitle: { fontSize: '1rem', fontWeight: 600, marginBottom: '16px' },
  legendRow: {
    display: 'flex', 
    justifyContent: 'center', 
    gap: '24px', 
    flexWrap: 'wrap',
  },
  legendItem: {
    display: 'flex', 
    alignItems: 'center', 
    gap: '8px',
  },
  legendDot: { width: '10px', height: '10px', borderRadius: '50%' },
  legendLabel: { fontSize: '0.85rem', fontWeight: 500 },
  legendRange: { fontSize: '0.75rem', color: '#aaa' },
};

export default Skills;