
import { useState } from "react";
// Componente mejorado para elementos hoverables usando React
const HoverableElement = ({ children, className = '', ...props }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div 
        className={`hoverable ${className} ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {children}
      </div>
    );
  };

  export default HoverableElement;