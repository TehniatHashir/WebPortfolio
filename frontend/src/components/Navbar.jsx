import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ visible }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const green = '#740c74';
  const greenHover = '#680980';
  const location = useLocation();

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
    fontSize: 'clamp(12px, 2vw, 14px)',
    transition: 'color 0.2s',
    position: 'relative',
    paddingBottom: '4px',
    whiteSpace: 'nowrap',
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
    <nav
      data-animate
      id="nav"
      style={navStyle}
    >
      <Link 
        to="/" 
        style={{ 
          ...linkStyle, 
          fontSize: 'clamp(18px, 3vw, 24px)', 
          fontWeight: 700, 
          letterSpacing: '-0.5px', 
          color: '#fff',
          flex: 1,
        }}
      >
        Tehniat Hashir
      </Link>
      
      {/* Mobile Menu Toggle */}
      <button
        className="mobile-menu-toggle"
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: '#fff',
          fontSize: 24,
          cursor: 'pointer',
          zIndex: 1001,
          padding: '8px',
        }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      <div 
        className="zebra-nav-links"
      >
        <Link 
          to="/" 
          style={isActive('/') ? activeLinkStyle : linkStyle}
          onClick={() => setIsMobileMenuOpen(false)}
          onMouseEnter={(e) => {
            if (!isActive('/')) e.currentTarget.style.color = green;
          }}
          onMouseLeave={(e) => {
            if (!isActive('/')) e.currentTarget.style.color = '#fff';
          }}
        >
          Home
        </Link>
        <Link 
          to="/skills" 
          style={isActive('/skills') ? activeLinkStyle : linkStyle}
          onClick={() => setIsMobileMenuOpen(false)}
          onMouseEnter={(e) => {
            if (!isActive('/skills')) e.currentTarget.style.color = green;
          }}
          onMouseLeave={(e) => {
            if (!isActive('/skills')) e.currentTarget.style.color = '#fff';
          }}
        >
          Skills
        </Link>
        <Link 
          to="/aboutus" 
          style={isActive('/aboutus') ? activeLinkStyle : linkStyle}
          onClick={() => setIsMobileMenuOpen(false)}
          onMouseEnter={(e) => {
            if (!isActive('/aboutus')) e.currentTarget.style.color = green;
          }}
          onMouseLeave={(e) => {
            if (!isActive('/aboutus')) e.currentTarget.style.color = '#fff';
          }}
        >
          About
        </Link>
        <Link 
          to="/portfolio" 
          style={isActive('/portfolio') ? activeLinkStyle : linkStyle}
          onClick={() => setIsMobileMenuOpen(false)}
          onMouseEnter={(e) => {
            if (!isActive('/portfolio')) e.currentTarget.style.color = green;
          }}
          onMouseLeave={(e) => {
            if (!isActive('/portfolio')) e.currentTarget.style.color = '#fff';
          }}
        >
          Projects
        </Link>
        <Link 
          to="/contact" 
          style={isActive('/contact') ? activeLinkStyle : linkStyle}
          onClick={() => setIsMobileMenuOpen(false)}
          onMouseEnter={(e) => {
            if (!isActive('/contact')) e.currentTarget.style.color = green;
          }}
          onMouseLeave={(e) => {
            if (!isActive('/contact')) e.currentTarget.style.color = '#fff';
          }}
        >
          Contact
        </Link>
        <Link
          to="/contact"
          style={{
            backgroundColor: green,
            color: '#fff',
            border: 'none',
            padding: 'clamp(8px, 1.5vw, 10px) clamp(16px, 3vw, 24px)',
            borderRadius: 8,
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: 'clamp(11px, 1.5vw, 14px)',
            transition: 'background-color 0.2s, transform 0.2s',
            textDecoration: 'none',
            display: 'inline-block',
            whiteSpace: 'nowrap',
          }}
          onClick={() => setIsMobileMenuOpen(false)}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = greenHover;
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = green;
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Get Started
        </Link>
      </div>

      <style>{`
        .mobile-menu-toggle {
          display: none;
        }
        
        .zebra-nav-links {
          display: flex;
          align-items: center;
          gap: clamp(12px, 2vw, 32px);
        }
        
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: flex !important;
          }
          .zebra-nav-links {
            display: ${isMobileMenuOpen ? 'flex' : 'none'} !important;
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            flexDirection: column;
            alignItems: flex-start;
            backgroundColor: #000;
            padding: 20px;
            gap: 16px;
            borderTop: 1px solid rgba(255,255,255,0.1);
            borderBottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 20px;
            zIndex: 999;
          }
          
          .zebra-nav-links a,
          .zebra-nav-links button {
            width: 100%;
            text-align: left;
          }
          
          .zebra-nav-links button {
            width: 100%;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;