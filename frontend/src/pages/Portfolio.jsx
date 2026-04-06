import React, { useState } from 'react';
import { FaPalette, FaInbox, FaArrowUp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import Navbar from '../components/Navbar';
import SplashCursor from '../components/SplashCursor';

const Portfolio = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const pageStyle = {
    backgroundColor: '#000000',
    color: '#eee',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    minHeight: '100vh',
    overflowX: 'hidden',
    width: '100%',
    position: 'relative',
  };

  const containerStyle = {
    maxWidth: 1000,
    margin: '0 auto',
    padding: '0 24px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const projects = [
  {
    title: 'Yuni Courses Platform',
    desc: 'A modern course offering platform with responsive UI, course listings, and smooth navigation. Focused on clean UX and scalable frontend architecture.',
    tags: ['React.js', 'JavaScript', 'HTML', 'CSS', 'UI/UX', 'Figma', 'Git'],
    videoSrc: '/videos/Prototype1.webm',
  },
  {
    title: 'Cricket Player Dashboard',
    desc: 'Interactive dashboard to analyze cricket player statistics with dynamic data visualization and user-friendly layout.',
    tags: ['React.js', 'TypeScript', 'CSS', 'Dashboard UI', 'Data Visualization', 'Git'],
    videoSrc: '/videos/Prototype 2.mp4',
  },
  {
    title: 'Animated Yuni Courses Website',
    desc: 'Enhanced version of the Yuni platform with smooth animations, transitions, and engaging user experience.',
    tags: ['React.js', 'Framer Motion', 'JavaScript', 'CSS Animations', 'UI/UX' ,'Git'],
    videoSrc: '/videos/Prototype3.webm',
  },
  {
    title: 'FoodMart - Online Food Ordering',
    desc: 'Full-stack food ordering web app with menu browsing, cart system, and responsive design.',
    tags: ['React.js', 'Node.js', 'JavaScript', 'CSS', 'Full Stack', 'Git'],
    videoSrc: '/videos/Prototype4.webm',
  },
  {
    title: 'Personal Portfolio Website',
    desc: 'A sleek developer portfolio showcasing projects, skills, and prototype videos with modern UI design.',
    tags: ['React.js', 'TypeScript', 'CSS', 'UI/UX', 'Git'],
    videoSrc: '/videos/Prototype5.webm',
  },
  {
    title: 'Bird Image Generator',
    desc: 'Simple web app that generates bird images dynamically using API integration and clean UI design.',
    tags: ['JavaScript', 'React.js', 'API Integration', 'HTML', 'CSS', 'Git'],
    videoSrc: '/videos/Prototype6.mp4',
  },
  {
    title: 'Travel Beach Explorer',
    desc: 'A visually rich website showcasing the best travel beach destinations with engaging layouts and responsive design.',
    tags: ['React.js', 'HTML', 'CSS', 'UI/UX', 'Figma'],
    videoSrc: '/videos/Prototype7.mp4',
  },
];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <PageTransition>
      <div style={pageStyle}>
        <Navbar />
        <SplashCursor />
        <main style={{ paddingTop: 72, width: '100%', overflowX: 'hidden' }}>
          {/* Hero - Side projects */}
          <section style={{ padding: '80px 24px 100px', width: '100%', overflowX: 'hidden' }}>
            <div className="portfolio-hero" style={{ ...containerStyle, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
              <div>
                <h1 className="portfolio-hero" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, marginBottom: 16, color: '#fff', animation: 'fadeInUp 0.8s ease-out' }}>
                  Side projects
                </h1>
                <p style={{ fontSize: 16, color: '#aaa', lineHeight: 1.7, marginBottom: 24, animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
                  Outside of my main work, I enjoy exploring ideas through small side projects that challenge my creativity and help me learn new skills. These projects are a space where I experiment freely, build things from scratch, and turn curiosity into something tangible.
                </p>
                <button
                  style={{
                    backgroundColor: '#fff',
                    color: '#1a1a1a',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: 8,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: 14,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    animation: 'fadeInUp 0.8s ease-out 0.4s both',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 20px rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Learn more ↓
                </button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', animation: 'scaleIn 0.8s ease-out 0.2s both' }}>
                <div
                  className="portfolio-icon-circle"
                  style={{
                    width: 280,
                    height: 280,
                    borderRadius: '50%',
                    backgroundColor: '#2a2a2a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 80,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <FaPalette size={80} color="#eee" />
                </div>
              </div>
            </div>
          </section>

          {/* Projects grid */}
          <section style={{ padding: '0 24px 100px', width: '100%', overflowX: 'hidden' }}>
            <div style={containerStyle}>
              <div className="portfolio-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 24,
                }}
              >
                {projects.map((p, i) => (
                  <div
                    key={i}
                    className="portfolio-card"
                    style={{
                      backgroundColor: '#2a2a2a',
                      borderRadius: 12,
                      padding: 28,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        aspectRatio: '16/10',
                        borderRadius: 8,
                        marginBottom: 20,
                        overflow: 'hidden',
                        backgroundColor: '#1a1a1a',
                      }}
                    >
                      {p.videoSrc ? (
                        <video
                          src={p.videoSrc}
                          controls
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                          preload="metadata"
                        />
                      ) : (
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#666',
                            fontSize: 14,
                          }}
                        >
                          Add video URL in videoSrc
                        </div>
                      )}
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: '#fff' }}>{p.title}</h3>
                    <p style={{ fontSize: 14, color: '#aaa', lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="portfolio-card-tag"
                          style={{
                            backgroundColor: '#444',
                            color: '#ddd',
                            padding: '4px 12px',
                            borderRadius: 20,
                            fontSize: 12,
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#666';
                            e.target.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#444';
                            e.target.style.transform = 'scale(1)';
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Reach out for more */}
          <section className="portfolio-reach" style={{ padding: '80px 24px 100px', borderTop: '1px solid rgba(255,255,255,0.06)', width: '100%', overflowX: 'hidden' }}>
            <div style={{ ...containerStyle, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
              <div>
                <h2 className="portfolio-reach" style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, marginBottom: 16, color: '#fff', animation: 'fadeInUp 0.8s ease-out' }}>
                  Reach out for more?
                </h2>
                <p style={{ fontSize: 16, color: '#aaa', lineHeight: 1.7, marginBottom: 24, animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
                  Connect with me on{' '}
                  <a 
                    href="https://www.linkedin.com/in/tehniat-hashir-a860b025b/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      color: '#fff', 
                      textDecoration: 'underline',
                      transition: 'color 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#0077b5'}
                    onMouseLeave={(e) => e.target.style.color = '#fff'}
                  >
                    <FaLinkedin size={14} /> linkedin
                  </a>
                  {' '}— I'd love to connect and chat about opportunities, collaborations, or just tech in general!
                </p>
                <div className="portfolio-reach-buttons" style={{ display: 'flex', gap: 16, marginTop: 32, animation: 'fadeInUp 0.8s ease-out 0.4s both' }}>
                  <a 
                    href="https://github.com/TehniatHashir"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: '#2a2a2a',
                      padding: '10px 20px',
                      borderRadius: 8,
                      color: '#eee',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#333';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#2a2a2a';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <FaGithub size={18} /> GitHub
                  </a>
                  <a 
                    href="mailto:tehniathashir@gmail.com"
                    style={{
                      backgroundColor: '#2a2a2a',
                      padding: '10px 20px',
                      borderRadius: 8,
                      color: '#eee',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#333';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#2a2a2a';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <FaEnvelope size={18} /> tehniathashir@gmail.com
                  </a>
                </div>
                <form className="portfolio-email-form" onSubmit={handleEmailSubmit} style={{ display: 'flex', maxWidth: 420, marginTop: 32 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="✉️ your email will be receiving goodies"
                    required
                    style={{
                      flex: 1,
                      padding: '12px 16px',
                      border: 'none',
                      borderRadius: '8px 0 0 8px',
                      backgroundColor: '#fff',
                      color: '#1a1a1a',
                      fontSize: 14,
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: '12px 24px',
                      backgroundColor: '#fff',
                      color: '#1a1a1a',
                      border: 'none',
                      borderRadius: '0 8px 8px 0',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: 14,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f0f0f0';
                      e.target.style.transform = 'translateX(2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#fff';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    Let me in!
                  </button>
                </form>
                {submitted && (
                  <div style={{
                    marginTop: 12,
                    padding: '8px 16px',
                    backgroundColor: '#4caf50',
                    color: '#fff',
                    borderRadius: 8,
                    fontSize: 14,
                    animation: 'fadeInUp 0.3s ease-out',
                  }}>
                    Thanks! You'll hear from us soon! 🎉
                  </div>
                )}
              </div>
              <div className="reach-circle-container" style={{ display: 'flex', justifyContent: 'center', animation: 'scaleIn 0.8s ease-out 0.2s both' }}>
                <div
                  className="portfolio-icon-circle reach-icon"
                  style={{
                    width: 280,
                    height: 280,
                    borderRadius: '50%',
                    backgroundColor: '#2a2a2a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 80,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05) rotate(5deg)';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <FaInbox size={80} color="#eee" />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer
          style={{
            padding: '24px 24px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <span style={{ fontSize: 13, color: '#888' }}>© 2026 Tehniat</span>
          
          <button
            onClick={scrollToTop}
            style={{
              background: 'none',
              border: 'none',
              color: '#888',
              cursor: 'pointer',
              fontSize: 13,
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#888';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Back up <FaArrowUp size={12} />
          </button>
        </footer>

        {/* Add CSS animations */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          /* Prevent horizontal scroll on all devices */
          html, body {
            overflow-x: hidden !important;
            width: 100% !important;
            position: relative !important;
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            overflow-x: hidden;
          }

          /* Responsive Styles */
          @media (max-width: 1024px) {
            .portfolio-hero {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
              padding: 60px 24px 80px !important;
            }

            .portfolio-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }

            .portfolio-reach {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }

          @media (max-width: 768px) {
            .portfolio-hero {
              padding: 40px 16px 60px !important;
            }

            .portfolio-grid {
              gap: 16px !important;
            }

            .portfolio-card {
              padding: 20px !important;
            }

            .portfolio-reach {
              padding: 60px 16px 80px !important;
            }

            .portfolio-reach-buttons {
              flex-direction: column !important;
              gap: 10px !important;
            }

            .portfolio-reach-buttons a {
              width: 100% !important;
              justify-content: center !important;
            }

            .portfolio-email-form {
              max-width: 100% !important;
              flex-direction: column !important;
            }

            .portfolio-email-form input {
              border-radius: 8px !important;
              width: 100% !important;
              margin-bottom: 10px !important;
            }

            .portfolio-email-form button {
              border-radius: 8px !important;
              width: 100% !important;
            }

            /* Reduce circle size on mobile */
            .portfolio-icon-circle {
              width: 200px !important;
              height: 200px !important;
              font-size: 60px !important;
            }
            
            .portfolio-icon-circle svg {
              width: 60px !important;
              height: 60px !important;
            }
          }

          @media (max-width: 480px) {
            .portfolio-hero {
              padding: 30px 12px 40px !important;
            }

            .portfolio-hero h1 {
              font-size: 24px !important;
              margin-bottom: 12px !important;
            }

            .portfolio-hero p {
              font-size: 13px !important;
              margin-bottom: 16px !important;
            }

            .portfolio-grid {
              gap: 12px !important;
            }

            .portfolio-card {
              padding: 16px !important;
              border-radius: 8px !important;
            }

            .portfolio-card h3 {
              font-size: 15px !important;
              margin-bottom: 8px !important;
            }

            .portfolio-card p {
              font-size: 12px !important;
              margin-bottom: 12px !important;
            }

            .portfolio-card-tag {
              font-size: 10px !important;
              padding: 2px 8px !important;
            }

            .portfolio-reach {
              padding: 40px 12px 60px !important;
            }

            .portfolio-reach h2 {
              font-size: 22px !important;
              margin-bottom: 12px !important;
            }

            .portfolio-reach p {
              font-size: 13px !important;
              margin-bottom: 16px !important;
            }

            .portfolio-reach-buttons {
              margin-top: 20px !important;
              gap: 8px !important;
            }

            .portfolio-reach-buttons a {
              padding: 9px 16px !important;
              font-size: 12px !important;
            }

            .portfolio-email-form {
              margin-top: 20px !important;
            }

            .portfolio-email-form input,
            .portfolio-email-form button {
              font-size: 12px !important;
              padding: 10px 12px !important;
            }

            /* Further reduce circle size on very small screens */
            .portfolio-icon-circle {
              width: 150px !important;
              height: 150px !important;
              font-size: 45px !important;
            }
            
            .portfolio-icon-circle svg {
              width: 45px !important;
              height: 45px !important;
            }

            footer {
              padding: 16px 12px !important;
              font-size: 12px !important;
              flex-direction: column !important;
              text-align: center !important;
            }
          }
        `}</style>
      </div>
    </PageTransition>
  );
};

export default Portfolio;