import React, { useState, useEffect } from 'react';
import { 
  FaCode, FaCogs, FaMobileAlt, FaPaintBrush, 
  FaRocket, FaBoxes, FaPhoneAlt, FaEnvelope,
  FaArrowRight, FaDownload, FaUserTie, FaStar
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import SplashCursor from '../components/SplashCursor';

const Home = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: <FaCode size={28} />, title: 'Front-End Development', desc: 'React, HTML, CSS & modern JavaScript.' },
    { icon: <FaCogs size={28} />, title: 'Back-End & APIs', desc: 'Node.js, REST APIs, and databases.' },
    { icon: <FaMobileAlt size={28} />, title: 'Responsive Web Design', desc: 'Mobile-first, cross-browser sites.' },
    { icon: <FaPaintBrush size={28} />, title: 'UI / UX', desc: 'Clean interfaces and user experience.' },
    { icon: <FaRocket size={28} />, title: 'Performance & SEO', desc: 'Fast, accessible, search-friendly sites.' },
    { icon: <FaBoxes size={28} />, title: 'Full-Stack Projects', desc: 'End-to-end web applications.' },
  ];

  
  const featuredBrands = ['/images/logo1.png', '/images/logo2.png', '/images/logo3.png', '/images/logo5.png'];
  const certificationImages = ['/images/certificate1.png', '/images/certificate2.jpeg', '/images/certificate3.jpeg', '/images/certificate4.jpeg'];

  const projects = [
    { 
      title: 'Yuni Courses Platform', 
      desc: 'A modern course offering platform with responsive UI, course listings, and smooth navigation. Focused on clean UX and scalable frontend architecture.',
      image: '/images/Project1.png' 
    },
    { 
      title: 'Cricket Player Dashboard', 
      desc: 'Interactive dashboard to analyze cricket player statistics with dynamic data visualization and user-friendly layout.',
      image: '/images/Project2.png' 
    },
    { 
      title: 'Animated Yuni Courses Website', 
      desc: 'Enhanced version of the Yuni platform with smooth animations, transitions, and engaging user experience.',
      image: '/images/Project3.png' 
    },
  ];

  const testimonials = [
    { 
      name: 'Client One', 
      role: 'Project Manager', 
      quote: 'Tehniat delivered a fast, responsive site and was great to work with.',
      avatar: '/images/avatar1.jpg' 
    },
    { 
      name: 'Client Two', 
      role: 'Startup Founder', 
      quote: 'Professional web development and clear communication throughout.',
      avatar: '/images/avatar2.jpg' 
    },
    { 
      name: 'Client Three', 
      role: 'Marketing Lead', 
      quote: 'Our new site improved performance and user experience significantly.',
      avatar: '/images/avatar3.jpg' 
    },
  ];

  const baseStyles = {
    page: { backgroundColor: '#0a0a0a', color: '#fff', fontFamily: "'Inter', 'Segoe UI', sans-serif", overflowX: 'hidden', width: '100%' },
    container: { maxWidth: 1200, margin: '0 auto', padding: '0 24px' },
    green: '#740c74',
    greenHover: '#680980',
  };

  return (
    <div style={baseStyles.page}>
      <SplashCursor />
      <Navbar visible={isVisible.nav} />
      
      <section
        id="home"
        data-animate
        style={{
          minHeight: '100vh',
          backgroundColor: '#000',
          padding: '120px 24px 80px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="hero-container" style={{ ...baseStyles.container, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', position: 'relative' }}>
          <div
            className="hero-content"
            style={{
              flex: '1 1 50%',
              opacity: isVisible.home !== undefined ? 1 : 0,
              transform: isVisible.home ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            }}
          >
            <h1 className="hero-heading" style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.02em' }}>
              Hi, I'm Tehniat Hashir
            </h1>
            <p className="hero-description" style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
              I'm a web developer who builds fast, responsive websites and web apps. I work with React, Node.js, and modern front-end and back-end tools to create clean, user-friendly experiences.
            </p>
            <div className="hero-buttons" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                className="hero-button"
                style={{
                  backgroundColor: baseStyles.green,
                  color: '#fff',
                  border: 'none',
                  padding: '14px 32px',
                  borderRadius: 8,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: 16,
                  transition: 'background-color 0.2s, transform 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = baseStyles.greenHover; e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = baseStyles.green; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                Get in touch <FaArrowRight size={14} />
              </button>
              <a
                href="/Tehniat-Cv (2).pdf"
                download="Tehniat-Cv (2).pdf"
                className="hero-button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'transparent',
                  color: '#fff',
                  border: '2px solid #fff',
                  padding: '12px 30px',
                  borderRadius: 8,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: 16,
                  textDecoration: 'none',
                  transition: 'background-color 0.2s, color 0.2s, transform 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.color = '#000';
                  e.currentTarget.style.transform = 'scale(1.03)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <FaDownload size={14} /> Download CV
              </a>
            </div>
          </div>
          <div
            className="hero-image"
            style={{
              flex: '1 1 45%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              opacity: isVisible.home !== undefined ? 1 : 0,
              transform: isVisible.home ? 'translateX(0)' : 'translateX(40px)',
              transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
            }}
          >
            <div style={{ position: 'relative', width: '85%', maxWidth: 480, aspectRatio: '4/5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div
                className="hero-orbit-track"
                style={{
                  position: 'absolute',
                  width: '110%',
                  height: '110%',
                  top: '-5%',
                  left: '-5%',
                  animation: 'hero-orbit 20s linear infinite',
                  zIndex: 2,
                }}
              >
                <a
                  href="#contact"
                  className="hero-orbit-btn"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: baseStyles.green,
                    color: '#fff',
                    border: 'none',
                    padding: '10px 24px',
                    borderRadius: 8,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: 14,
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 14px rgb(117, 24, 160)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  Hire now <FaUserTie size={12} />
                </a>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: 480,
                  aspectRatio: '4/5',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backgroundImage: 'url(/profile.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="featured"
        data-animate
        style={{
          backgroundColor: '#000',
          padding: '60px 24px 80px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div style={{ ...baseStyles.container }}>
          <div className="featured-tabs" style={{ display: 'flex', justifyContent: 'center', gap: 40, marginBottom: 40 }}>
            <button
              onClick={() => setActiveTab('featured')}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === 'featured' ? '#fff' : '#71717a',
                fontSize: 18,
                fontWeight: 600,
                cursor: 'pointer',
                paddingBottom: 8,
                borderBottom: activeTab === 'featured' ? `3px solid ${baseStyles.green}` : '3px solid transparent',
                transition: 'color 0.2s',
              }}
            >
              Featured In
            </button>
            <button
              onClick={() => setActiveTab('cert')}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === 'cert' ? '#fff' : '#71717a',
                fontSize: 18,
                fontWeight: 600,
                cursor: 'pointer',
                paddingBottom: 8,
                borderBottom: activeTab === 'cert' ? `3px solid ${baseStyles.green}` : '3px solid transparent',
                transition: 'color 0.2s',
              }}
            >
              Certification
            </button>
          </div>
          <div
            className="featured-items"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 20,
              opacity: isVisible.featured !== undefined ? 1 : 0,
              transform: isVisible.featured ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            {(activeTab === 'featured' ? featuredBrands : certificationImages).map((src, i) => (
              <div
                key={src + i}
                className="featured-item"
                style={{
                  width: 190,
                  height: 110,
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.15)',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 12,
                  transition: 'border-color 0.2s, transform 0.2s',
                  overflow: 'hidden',
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = baseStyles.green; e.currentTarget.style.transform = 'scale(1.02)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <img src={src} alt={activeTab === 'featured' ? 'Featured brand' : 'Certification'} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        data-animate
        style={{
          backgroundColor: '#000',
          padding: '80px 24px 100px',
        }}
      >
        <div style={{ ...baseStyles.container }}>
          {/* Heading first */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: 60,
              opacity: isVisible.services !== undefined ? 1 : 0,
              transform: isVisible.services ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3vw, 38px)', fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>
              My Web Development Stack
            </h2>
            <p className="section-description" style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.7 }}>
              I build modern web applications with React, JavaScript, and Node.js. From responsive front-ends to REST APIs and databases, I focus on clean code, performance, and a smooth user experience.
            </p>
          </div>

          {/* All services in a single grid */}
          <div
            className="services-grid-all"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
              opacity: isVisible.services !== undefined ? 1 : 0,
              transform: isVisible.services ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                className="card-padding"
                style={{
                  padding: 28,
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(82, 10, 104, 0.97)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12, color: baseStyles.green }}>{s.icon}</div>
                <h3 className="service-card-title" style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{s.title}</h3>
                <p className="service-card-desc" style={{ fontSize: 13, color: '#71717a', lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        data-animate
        style={{
          backgroundColor: '#000',
          padding: '80px 24px 100px',
        }}
      >
        <div className="about-container" style={{ ...baseStyles.container, display: 'flex', alignItems: 'center', gap: 80 }}>
          <div
            className="about-image"
            style={{
              flex: '1 1 45%',
              position: 'relative',
              opacity: isVisible.about !== undefined ? 1 : 0,
              transform: isVisible.about ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: 420,
                aspectRatio: '4/5',
                borderRadius: '50%',
                backgroundColor: '#1a1a1a',
                border: '1px solid rgba(255,255,255,0.08)',
                backgroundImage: 'url(/profile.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="about-badges" style={{ position: 'absolute', bottom: 40, left: 20, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <div className="about-badge" style={{ backgroundColor: '#fff', color: baseStyles.green, padding: '12px 20px', borderRadius: 8, fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FaCode size={14} /> React · JS
              </div>
              <div className="about-badge" style={{ backgroundColor: '#fff', color: baseStyles.green, padding: '12px 20px', borderRadius: 8, fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FaRocket size={14} /> Web Apps
              </div>
            </div>
          </div>
          <div
            className="about-content"
            style={{
              flex: '1 1 50%',
              opacity: isVisible.about !== undefined ? 1 : 0,
              transform: isVisible.about ? 'translateX(0)' : 'translateX(40px)',
              transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            }}
          >
            <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>
              Why hire me
            </h2>
            <p className="section-description" style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.7, marginBottom: 32 }}>
              I'm Tehniat Hashir, a dedicated web developer with a focus on delivering quality front-end and full-stack projects. I keep code maintainable, communicate clearly, and aim to ship on time.
            </p>
            <button
              style={{
                backgroundColor: baseStyles.green,
                color: '#fff',
                border: 'none',
                padding: '14px 32px',
                borderRadius: 8,
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: 16,
                transition: 'background-color 0.2s, transform 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = baseStyles.greenHover; e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = baseStyles.green; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Get Started <FaArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        data-animate
        style={{
          backgroundColor: '#000',
          padding: '80px 24px 100px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div style={{ ...baseStyles.container }}>
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(28px, 3vw, 38px)',
              fontWeight: 800,
              marginBottom: 48,
              opacity: isVisible.portfolio !== undefined ? 1 : 0,
              transform: isVisible.portfolio ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            My latest work
          </h2>
          <div
            className="portfolio-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 28,
              opacity: isVisible.portfolio !== undefined ? 1 : 0,
              transform: isVisible.portfolio ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s',
            }}
          >
            {projects.map((p, i) => (
              <div
                key={p.title}
                style={{
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(79, 18, 107, 0.94)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="portfolio-image-height"
                  style={{
                    height: 220,
                    backgroundColor: '#1a1a1a',
                    backgroundImage: `url(${p.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="portfolio-card-content" style={{ padding: 24 }}>
                  <h3 className="portfolio-card-title" style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{p.title}</h3>
                  <p className="portfolio-card-desc" style={{ fontSize: 14, color: '#71717a', lineHeight: 1.5 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        data-animate
        style={{
          backgroundColor: '#000',
          padding: '80px 24px 100px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div style={{ ...baseStyles.container }}>
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(28px, 3vw, 38px)',
              fontWeight: 800,
              marginBottom: 48,
              opacity: isVisible.testimonials !== undefined ? 1 : 0,
              transform: isVisible.testimonials ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              justifyContent: 'center',
            }}
          >
            <FaStar size={28} color="#740c74" /> Testimonials <FaStar size={28} color="#740c74" />
          </h2>
          <div
            className="testimonials-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 28,
              opacity: isVisible.testimonials !== undefined ? 1 : 0,
              transform: isVisible.testimonials ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="testimonial-padding"
                style={{
                  padding: 32,
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor ='rgba(79, 18, 107, 0.94)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                  <div
                    className="testimonial-avatar"
                    style={{
                      width: 78,
                      height: 78,
                      borderRadius: '50%',
                      backgroundColor: '#333',
                      backgroundImage: `url(${t.avatar})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div>
                    <div className="testimonial-name" style={{ fontWeight: 600, fontSize: 16 }}>{t.name}</div>
                    <div className="testimonial-role" style={{ fontSize: 13, color: '#71717a' }}>{t.role}</div>
                  </div>
                </div>
                <p className="testimonial-quote" style={{ fontSize: 14, color: '#a1a1aa', lineHeight: 1.6 }}>"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contact"
        data-animate
        style={{
          backgroundColor: '#000',
          padding: '100px 24px 80px',
        }}
      >
        <div className="footer-container" style={{ ...baseStyles.container, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 60 }}>
          <div
            className="footer-content"
            style={{
              flex: '1 1 50%',
              opacity: isVisible.contact !== undefined ? 1 : 0,
              transform: isVisible.contact ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <h2 className="footer-heading" style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>
              Let's work together
            </h2>
            <p className="footer-description" style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.7, marginBottom: 28, maxWidth: 480 }}>
              I'm Tehniat Hashir, a web developer ready for your next project. Get in touch for websites, web apps, or collaboration.
            </p>
            <div className="footer-buttons" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
              <button
                style={{
                  backgroundColor: baseStyles.green,
                  color: '#fff',
                  border: 'none',
                  padding: '14px 32px',
                  borderRadius: 8,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: 16,
                  transition: 'background-color 0.2s, transform 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = baseStyles.greenHover; e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = baseStyles.green; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                Get in touch <FaArrowRight size={14} />
              </button>
            </div>
            <div className="footer-contact" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div className="footer-contact-item" style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#a1a1aa', fontSize: 14 }}>
                <FaPhoneAlt size={16} /> +92 336 0925493
              </div>
              <div className="footer-contact-item" style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#a1a1aa', fontSize: 14 }}>
                <FaEnvelope size={16} /> tehniathashir@gmail.com
              </div>
            </div>
          </div>
          {/* Removed the image from footer - Let's work together section */}
        </div>
      </footer>

      <style>{`
        @keyframes hero-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .hero-orbit-btn {
          animation: hero-orbit-counter 20s linear infinite;
        }
        @keyframes hero-orbit-counter {
          from { transform: translateX(-50%) rotate(0deg); }
          to { transform: translateX(-50%) rotate(-360deg); }
        }
        @media (max-width: 968px) {
          .zebra-nav-links { display: none !important; }
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          overflow-x: hidden;
        }

        /* MOBILE RESPONSIVE STYLES */
        @media (max-width: 1024px) {
          .hero-container {
            flex-direction: column !important;
            gap: 40px !important;
            padding: 40px 24px 60px !important;
          }
          
          .hero-image {
            min-height: 300px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .hero-image > div {
            width: 220px !important;
            height: 275px !important;
            max-width: none !important;
          }

          .services-grid-1 {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            margin-bottom: 40px !important;
          }

          .services-grid-2 {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .services-grid-all {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }

          .about-container {
            flex-direction: column !important;
            gap: 50px !important;
          }

          .about-image {
            min-height: 300px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .about-image > div {
            width: 220px !important;
            height: 275px !important;
            max-width: none !important;
          }

          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }

          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }

          .footer-container {
            flex-direction: column !important;
            gap: 40px !important;
            justify-content: center !important;
          }

          .footer-content, .footer-image {
            flex: 1 1 100% !important;
            justify-content: center !important;
          }

          .featured-tabs {
            gap: 20px !important;
          }

          .featured-items {
            gap: 15px !important;
          }

          .featured-item {
            width: 170px !important;
            height: 110px !important;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 30px 16px 40px !important;
          }

          .service-cards {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          .services-grid-all {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          .card-padding {
            padding: 20px !important;
          }

          .portfolio-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          .portfolio-image-height {
            height: 160px !important;
          }

          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          .testimonial-padding {
            padding: 20px !important;
          }

          .testimonial-avatar {
            width: 60px !important;
            height: 60px !important;
          }

          .featured-items {
            gap: 12px !important;
          }

          .featured-item {
            width: 160px !important;
            height: 100px !important;
          }

          .footer-buttons {
            flex-direction: column !important;
            gap: 10px !important;
          }

          .footer-buttons button,
          .footer-buttons a {
            width: 100% !important;
            justify-content: center !important;
          }

          .about-badges {
            bottom: 20px !important;
            left: 10px !important;
            gap: 8px !important;
            flex-direction: column !important;
          }

          .about-badge {
            padding: 6px 12px !important;
            font-size: 11px !important;
          }

          /* Mobile navbar spacing */
          #nav {
            padding: 12px 16px !important;
          }

          /* Reduce gap between hero heading and description */
          .hero-heading {
            margin-bottom: 8px !important;
          }

          /* Reduce button widths */
          .hero-button {
            padding: 10px 16px !important;
            font-size: 13px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            padding: 20px 12px 30px !important;
            gap: 20px !important;
          }

          .hero-heading {
            font-size: 24px !important;
            margin-bottom: 8px !important;
          }

          .hero-description {
            font-size: 14px !important;
            margin-bottom: 20px !important;
          }

          .hero-buttons {
            gap: 8px !important;
            flex-direction: column !important;
          }

          .hero-button {
            width: auto !important;
            min-width: 140px !important;
            padding: 10px 16px !important;
            font-size: 13px !important;
          }

          .section-padding {
            padding: 40px 12px !important;
          }

          .featured-tabs {
            gap: 12px !important;
            margin-bottom: 20px !important;
          }

          .featured-tabs button {
            font-size: 14px !important;
            padding: 8px 12px !important;
          }

          .featured-items {
            gap: 12px !important;
          }

          .featured-item {
            width: 160px !important;
            height: 100px !important;
          }

          .service-grid-container {
            margin-bottom: 30px !important;
          }

          .service-cards {
            gap: 12px !important;
          }

          .card-padding {
            padding: 16px !important;
          }

          .service-card-title {
            font-size: 14px !important;
          }

          .service-card-desc {
            font-size: 11px !important;
          }

          .section-title {
            font-size: 22px !important;
            margin-bottom: 12px !important;
          }

          .section-description {
            font-size: 13px !important;
          }

          .about-image {
            max-width: 220px !important;
            max-height: 275px !important;
            width: 220px !important;
            height: 275px !important;
          }

          .portfolio-grid {
            gap: 12px !important;
          }

          .portfolio-image-height {
            height: 140px !important;
          }

          .portfolio-card-content {
            padding: 16px !important;
          }

          .portfolio-card-title {
            font-size: 15px !important;
            margin-bottom: 8px !important;
          }

          .portfolio-card-desc {
            font-size: 12px !important;
          }

          .testimonials-grid {
            gap: 12px !important;
          }

          .testimonial-padding {
            padding: 16px !important;
          }

          .testimonial-avatar {
            width: 50px !important;
            height: 50px !important;
          }

          .testimonial-name {
            font-size: 13px !important;
          }

          .testimonial-role {
            font-size: 11px !important;
          }

          .testimonial-quote {
            font-size: 12px !important;
          }

          .footer-container {
            text-align: center !important;
          }

          .footer-heading {
            font-size: 24px !important;
            margin-bottom: 12px !important;
          }

          .footer-description {
            font-size: 13px !important;
            margin-bottom: 20px !important;
          }

          .footer-contact {
            flex-direction: column !important;
            align-items: center !important;
          }

          .footer-contact-item {
            font-size: 12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;