import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import '../styles/animated.css'; // Importar as animações

const AnimatedSection = ({ children }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`animated-section ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;