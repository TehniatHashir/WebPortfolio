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
    <>
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
            fontSize: '24px',
            cursor: 'pointer',
            zIndex: 1001,
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Dropdown Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={dropdownRef} 
          className="mobile-dropdown-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="mobile-dropdown-menu" onClick={(e) => e.stopPropagation()}>
            <div className="dropdown-header">
              <h3>Menu</h3>
            </div>
            
            <div className="dropdown-links">
              <Link 
                to="/" 
                className="dropdown-link"
                style={isActive('/') ? activeLinkStyle : linkStyle}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaHome className="link-icon" />
                Home
              </Link>
              <Link 
                to="/skills" 
                className="dropdown-link"
                style={isActive('/skills') ? activeLinkStyle : linkStyle}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaBolt className="link-icon" />
                Skills
              </Link>
              <Link 
                to="/aboutus" 
                className="dropdown-link"
                style={isActive('/aboutus') ? activeLinkStyle : linkStyle}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaUser className="link-icon" />
                About
              </Link>
              <Link 
                to="/portfolio" 
                className="dropdown-link"
                style={isActive('/portfolio') ? activeLinkStyle : linkStyle}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaProjectDiagram className="link-icon" />
                Projects
              </Link>
              <Link 
                to="/contact" 
                className="dropdown-link"
                style={isActive('/contact') ? activeLinkStyle : linkStyle}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaEnvelope className="link-icon" />
                Contact
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                to="/contact"
                className="get-started-link"
                onClick={() => setIsMobileMenuOpen(false)}
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
        }
        
        .mobile-dropdown-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          animation: fadeIn 0.3s ease;
        }
        
        .mobile-dropdown-menu {
          position: fixed;
          top: 60px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #000;
          overflow-y: auto;
          padding: 20px;
        }
        
        .dropdown-header {
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 2px solid ${green};
        }
        
        .dropdown-header h3 {
          margin: 0;
          color: ${green};
          font-size: 24px;
          font-weight: 600;
        }
        
        .dropdown-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .dropdown-link {
          display: flex !important;
          align-items: center;
          gap: 15px;
          padding: 16px 20px !important;
          border-radius: 12px;
          transition: all 0.3s ease;
          background: rgba(255,255,255,0.05);
          font-size: 18px !important;
        }
        
        .dropdown-link:hover {
          background: rgba(116, 12, 116, 0.2);
          transform: translateX(5px);
        }
        
        .link-icon {
          font-size: 22px;
          color: ${green};
        }
        
        .dropdown-divider {
          height: 1px;
          background: linear-gradient(90deg, ${green}, transparent);
          margin: 10px 0;
        }
        
        .get-started-link {
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background-color: ${green};
          color: #fff;
          text-decoration: none;
          padding: 16px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 18px;
          transition: all 0.3s ease;
          margin-top: 10px;
        }
        
        .get-started-link:hover {
          background-color: ${greenHover};
          transform: translateY(-2px);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        /* Desktop styles */
        @media (min-width: 769px) {
          .mobile-dropdown-overlay {
            background-color: rgba(0, 0, 0, 0.8);
          }
          
          .mobile-dropdown-menu {
            top: 70px;
            left: auto;
            right: 20px;
            bottom: auto;
            width: 320px;
            border-radius: 16px;
            border: 1px solid rgba(116, 12, 116, 0.3);
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
            padding: 20px;
          }
          
          .dropdown-header h3 {
            font-size: 20px;
          }
          
          .dropdown-link {
            padding: 12px 16px !important;
            font-size: 15px !important;
          }
          
          .link-icon {
            font-size: 18px;
          }
          
          .get-started-link {
            padding: 12px 16px;
            font-size: 15px;
          }
        }
        
        /* Hide original nav links */
        .zebra-nav-links {
          display: none !important;
        }
      `}</style>
    </>
  );
};

export default Navbar;