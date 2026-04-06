import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBolt, FaUser, FaProjectDiagram, FaEnvelope, FaRocket, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ visible }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const green = '#740c74';
  const greenHover = '#680980';
  const location = useLocation();
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: '#000',
    padding: 'clamp(12px, 3vw, 16px) clamp(16px, 4vw, 24px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 20px rgba(0,0,0,0.3)',
    ...(visible !== undefined && {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(-20px)',
      transition: 'opacity 0.6s ease, transform 0.6s ease',
    }),
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: 'clamp(14px, 2vw, 16px)',
    transition: 'all 0.3s ease',
    position: 'relative',
    paddingBottom: '4px',
    display: 'block',
    fontWeight: '500',
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: green,
    fontWeight: 600,
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav data-animate id="nav" style={navStyle}>
      <Link 
        to="/" 
        style={{ 
          ...linkStyle, 
          fontSize: 'clamp(18px, 3vw, 24px)', 
          fontWeight: 700, 
          letterSpacing: '-0.5px', 
          color: '#fff',
          flex: 1,
          display: 'inline-block',
        }}
      >
        Tehniat Hashir
      </Link>
      
      {/* Hamburger Menu Button */}
      <button
        ref={buttonRef}
        className="hamburger-menu"
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: '#fff',
          fontSize: '28px',
          cursor: 'pointer',
          zIndex: 1002,
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          borderRadius: '8px',
        }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(116, 12, 116, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Dropdown Menu */}
      {isMobileMenuOpen && (
        <div ref={dropdownRef} className="dropdown-menu">
          <div className="dropdown-content">
            <div className="dropdown-header">
              <h3>Menu</h3>
              <div className="dropdown-indicator"></div>
            </div>
            
            <div className="dropdown-links">
              <Link 
                to="/" 
                className="dropdown-link"
                style={isActive('/') ? activeLinkStyle : linkStyle}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  if (!isActive('/')) e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/')) e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <FaHome className="link-icon" style={{ marginRight: '12px', fontSize: '18px' }} />
                Home
              </Link>
              <Link 
                to="/skills" 
                className="dropdown-link"
                style={isActive('/skills') ? activeLinkStyle : linkStyle}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  if (!isActive('/skills')) e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/skills')) e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <FaBolt className="link-icon" style={{ marginRight: '12px', fontSize: '18px' }} />
                Skills
              </Link>
              <Link 
                to="/aboutus" 
                className="dropdown-link"
                style={isActive('/aboutus') ? activeLinkStyle : linkStyle}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  if (!isActive('/aboutus')) e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/aboutus')) e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <FaUser className="link-icon" style={{ marginRight: '12px', fontSize: '18px' }} />
                About
              </Link>
              <Link 
                to="/portfolio" 
                className="dropdown-link"
                style={isActive('/portfolio') ? activeLinkStyle : linkStyle}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  if (!isActive('/portfolio')) e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/portfolio')) e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <FaProjectDiagram className="link-icon" style={{ marginRight: '12px', fontSize: '18px' }} />
                Projects
              </Link>
              <Link 
                to="/contact" 
                className="dropdown-link"
                style={isActive('/contact') ? activeLinkStyle : linkStyle}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  if (!isActive('/contact')) e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/contact')) e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <FaEnvelope className="link-icon" style={{ marginRight: '12px', fontSize: '18px' }} />
                Contact
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                to="/contact"
                className="get-started-link"
                style={{
                  backgroundColor: green,
                  color: '#fff',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: 8,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  width: '100%',
                  marginTop: '10px',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = greenHover;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = green;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaRocket />
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .hamburger-menu {
          display: flex !important;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
        }
        
        .dropdown-menu {
          position: fixed;
          top: 70px;
          right: 20px;
          width: 320px;
          max-width: calc(100vw - 40px);
          background: linear-gradient(135deg, rgba(0,0,0,0.98) 0%, rgba(10,10,10,0.98) 100%);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          border: 1px solid rgba(116, 12, 116, 0.3);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(116, 12, 116, 0.1);
          z-index: 999;
          animation: slideDown 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          overflow: hidden;
        }
        
        .dropdown-content {
          padding: 20px;
        }
        
        .dropdown-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid rgba(116, 12, 116, 0.3);
        }
        
        .dropdown-header h3 {
          margin: 0;
          color: ${green};
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 1px;
        }
        
        .dropdown-indicator {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, ${green}, transparent);
          border-radius: 3px;
        }
        
        .dropdown-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .dropdown-link {
          display: flex !important;
          align-items: center;
          padding: 12px 15px !important;
          border-radius: 10px;
          transition: all 0.3s ease;
          background: rgba(255,255,255,0.03);
        }
        
        .dropdown-link:hover {
          background: rgba(116, 12, 116, 0.15);
          transform: translateX(5px);
        }
        
        .link-icon {
          margin-right: 12px;
          font-size: 18px;
          color: ${green};
        }
        
        .dropdown-divider {
          height: 1px;
          background: linear-gradient(90deg, ${green}, transparent);
          margin: 10px 0;
        }
        
        .get-started-link {
          box-shadow: 0 4px 15px rgba(116, 12, 116, 0.3);
        }
        
        .get-started-link:hover {
          box-shadow: 0 6px 20px rgba(116, 12, 116, 0.5);
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .dropdown-menu {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            max-width: 100%;
            border-radius: 0;
            animation: slideUp 0.3s ease;
            background: linear-gradient(135deg, rgba(0,0,0,0.98) 0%, rgba(5,5,5,0.98) 100%);
          }
          
          .dropdown-content {
            padding: 80px 25px 40px;
            height: 100%;
            overflow-y: auto;
          }
          
          .dropdown-header {
            margin-bottom: 30px;
          }
          
          .dropdown-header h3 {
            font-size: 24px;
          }
          
          .dropdown-links {
            gap: 16px;
          }
          
          .dropdown-link {
            padding: 16px 20px !important;
            font-size: 18px !important;
          }
          
          .link-icon {
            font-size: 22px !important;
            margin-right: 15px;
          }
          
          .get-started-link {
            padding: 16px 20px !important;
            font-size: 18px !important;
            margin-top: 20px;
          }
          
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(100%);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
        
        /* Desktop hover effects */
        @media (min-width: 769px) {
          .dropdown-menu::before {
            content: '';
            position: absolute;
            top: -8px;
            right: 20px;
            width: 16px;
            height: 16px;
            background: #000;
            border-left: 1px solid rgba(116, 12, 116, 0.3);
            border-top: 1px solid rgba(116, 12, 116, 0.3);
            transform: rotate(45deg);
            background: rgba(0,0,0,0.98);
          }
        }
        
        /* Hide original nav links */
        .zebra-nav-links {
          display: none !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;