import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isInfoHovered, setIsInfoHovered] = useState(false);
  const [isFormHovered, setIsFormHovered] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  // Main color theme
  const themeColor = '#740c74';

  const styles = {
    container: {
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${themeColor}15 0%, #2a002a 100%)`,
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Segoe UI', 'Poppins', sans-serif",
    },
    mainContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      flex: 1,
      minHeight: 'calc(100vh - 80px)',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '30px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      overflow: 'hidden',
      maxWidth: '1200px',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      transition: 'all 0.3s ease',
      animation: 'slideUp 0.6s ease-out'
    },
    infoSection: {
      flex: 1,
      background: 'white',
      padding: '40px',
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer'
    },
    formSection: {
      flex: 1,
      padding: '40px',
      background: 'white',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer'
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      fontWeight: 'bold',
      color: '#333',
      transition: 'color 0.3s ease',
      animation: 'fadeInRight 0.8s ease-out'
    },
    subtitle: {
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '30px',
      color: '#666',
      transition: 'color 0.3s ease'
    },
    contactInfo: {
      marginTop: '30px'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '25px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      padding: '10px',
      borderRadius: '12px'
    },
    iconWrapper: {
      width: '50px',
      height: '50px',
      background: '#f0f0f0',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '15px',
      fontSize: '1.3rem',
      transition: 'all 0.3s ease'
    },
    formTitle: {
      fontSize: '2rem',
      marginBottom: '30px',
      color: '#333',
      fontWeight: 'bold',
      transition: 'color 0.3s ease'
    },
    inputGroup: {
      marginBottom: '25px',
      position: 'relative'
    },
    input: {
      width: '100%',
      padding: '12px 0',
      fontSize: '1rem',
      border: 'none',
      borderBottom: '2px solid #ddd',
      outline: 'none',
      transition: 'all 0.3s ease',
      background: 'transparent',
      fontFamily: 'inherit',
      color: '#333'
    },
    textarea: {
      width: '100%',
      padding: '12px 0',
      fontSize: '1rem',
      border: 'none',
      borderBottom: '2px solid #ddd',
      outline: 'none',
      resize: 'vertical',
      minHeight: '100px',
      background: 'transparent',
      fontFamily: 'inherit',
      color: '#333',
      transition: 'all 0.3s ease'
    },
    button: {
      background: themeColor,
      color: 'white',
      padding: '14px 40px',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontWeight: 'bold',
      boxShadow: `0 4px 15px ${themeColor}40`,
      width: '100%',
      maxWidth: '200px'
    },
    successMessage: {
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: themeColor,
      color: 'white',
      padding: '15px 25px',
      borderRadius: '10px',
      animation: 'slideInRight 0.5s ease-out',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      zIndex: 1000,
      fontFamily: "'Segoe UI', sans-serif"
    }
  };

  // Add keyframes animation
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    .info-item-hover:hover {
      background: ${themeColor}10 !important;
      transform: translateX(5px) !important;
    }
    
    .icon-hover:hover {
      transform: scale(1.1) !important;
      background: ${themeColor} !important;
      color: white !important;
    }
    
    input:focus, textarea:focus {
      border-bottom-color: ${themeColor} !important;
    }
    
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px ${themeColor}80;
      background: #5a0a5a;
    }
    
    button:active {
      transform: translateY(0);
    }
  `;
  document.head.appendChild(styleSheet);

  return (
    <div style={styles.container}>
      <Navbar />
      {isSubmitted && (
        <div style={styles.successMessage}>
          ✓ Message sent successfully!
        </div>
      )}
      
      <div style={styles.mainContent}>
        <div style={styles.card}>
          <div 
            style={{
              ...styles.infoSection,
              background: isInfoHovered ? themeColor : 'white',
              color: isInfoHovered ? 'white' : '#333'
            }}
            onMouseEnter={() => setIsInfoHovered(true)}
            onMouseLeave={() => setIsInfoHovered(false)}
          >
            <h1 style={{
              ...styles.title,
              color: isInfoHovered ? 'white' : '#333'
            }}>Let's Talk</h1>
            <p style={{
              ...styles.subtitle,
              color: isInfoHovered ? 'rgba(255,255,255,0.9)' : '#666'
            }}>
              Have a project in mind or just want to say hello? We'd love to hear from you. 
              Fill up the form and we will get back to you within 24 hours.
            </p>
            
            <div style={styles.contactInfo}>
              <div 
                style={styles.infoItem}
                className="info-item-hover"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(5px)';
                  if (!isInfoHovered) {
                    e.currentTarget.style.background = `${themeColor}10`;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <div style={{
                  ...styles.iconWrapper,
                  background: isInfoHovered ? 'rgba(255,255,255,0.2)' : '#f0f0f0',
                  color: isInfoHovered ? 'white' : '#740c74'
                }} className="icon-hover">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <strong style={{ color: isInfoHovered ? 'white' : '#333' }}>Visit us</strong><br />
                  <span style={{ color: isInfoHovered ? 'rgba(255,255,255,0.9)' : '#666' }}>NASTP-Rawalpindi Pakistan</span>
                </div>
              </div>
              
              <div 
                style={styles.infoItem}
                className="info-item-hover"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(5px)';
                  if (!isInfoHovered) {
                    e.currentTarget.style.background = `${themeColor}10`;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <div style={{
                  ...styles.iconWrapper,
                  background: isInfoHovered ? 'rgba(255,255,255,0.2)' : '#f0f0f0',
                  color: isInfoHovered ? 'white' : '#740c74'
                }} className="icon-hover">
                  <FaEnvelope />
                </div>
                <div>
                  <strong style={{ color: isInfoHovered ? 'white' : '#333' }}>Email us</strong><br />
                  <span style={{ color: isInfoHovered ? 'rgba(255,255,255,0.9)' : '#666' }}>tehniathashir@gmail.com</span><br />
                </div>
              </div>
              
              <div 
                style={styles.infoItem}
                className="info-item-hover"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(5px)';
                  if (!isInfoHovered) {
                    e.currentTarget.style.background = `${themeColor}10`;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <div style={{
                  ...styles.iconWrapper,
                  background: isInfoHovered ? 'rgba(255,255,255,0.2)' : '#f0f0f0',
                  color: isInfoHovered ? 'white' : '#740c74'
                }} className="icon-hover">
                  <FaPhoneAlt />
                </div>
                <div>
                  <strong style={{ color: isInfoHovered ? 'white' : '#333' }}>Call us</strong><br />
                  <span style={{ color: isInfoHovered ? 'rgba(255,255,255,0.9)' : '#666' }}>+92 336 0925493</span><br />
                  <span style={{ color: isInfoHovered ? 'rgba(255,255,255,0.9)' : '#666' }}>Mon-Sun, 8am-11pm</span>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            style={{
              ...styles.formSection,
              background: isFormHovered ? themeColor : 'white'
            }}
            onMouseEnter={() => setIsFormHovered(true)}
            onMouseLeave={() => setIsFormHovered(false)}
          >
            <h2 style={{
              ...styles.formTitle,
              color: isFormHovered ? 'white' : '#333'
            }}>Send a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div style={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    ...styles.input,
                    color: isFormHovered ? 'white' : '#333',
                    borderBottomColor: isFormHovered ? 'rgba(255,255,255,0.3)' : '#ddd'
                  }}
                  placeholder="Your Name"
                  onFocus={(e) => e.target.style.borderBottomColor = themeColor}
                  onBlur={(e) => e.target.style.borderBottomColor = isFormHovered ? 'rgba(255,255,255,0.3)' : '#ddd'}
                />
              </div>
              
              <div style={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    ...styles.input,
                    color: isFormHovered ? 'white' : '#333',
                    borderBottomColor: isFormHovered ? 'rgba(255,255,255,0.3)' : '#ddd'
                  }}
                  placeholder="Email Address"
                  onFocus={(e) => e.target.style.borderBottomColor = themeColor}
                  onBlur={(e) => e.target.style.borderBottomColor = isFormHovered ? 'rgba(255,255,255,0.3)' : '#ddd'}
                />
              </div>
              
              <div style={styles.inputGroup}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    ...styles.textarea,
                    color: isFormHovered ? 'white' : '#333',
                    borderBottomColor: isFormHovered ? 'rgba(255,255,255,0.3)' : '#ddd'
                  }}
                  placeholder="Tell us about your project..."
                  onFocus={(e) => e.target.style.borderBottomColor = themeColor}
                  onBlur={(e) => e.target.style.borderBottomColor = isFormHovered ? 'rgba(255,255,255,0.3)' : '#ddd'}
                />
              </div>
              
              <button 
                type="submit" 
                style={{
                  ...styles.button,
                  background: isFormHovered ? 'white' : themeColor,
                  color: isFormHovered ? themeColor : 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;