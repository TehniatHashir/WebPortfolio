import { useEffect, useState } from 'react';
const PageTransition = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
      transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      minHeight: '100vh',
    }}>
      {children}
    </div>
  );
};

export default PageTransition;
