import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);
  const trailsContainerRef = useRef(null);
  
  // Estados para las posiciones, escala y movimiento
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bigBallPosition, setBigBallPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [isMoving, setIsMoving] = useState(false);
  const [lastPositions, setLastPositions] = useState([]);
  const [trails, setTrails] = useState([]);
  
  // Referencia para ID del timeout
  const timeoutRef = useRef(null);
  const trailTimeoutRef = useRef(null);
  
  // Manejar el movimiento del ratón
  const handleMouseMove = (e) => {
    const currentPosition = { x: e.clientX, y: e.clientY };
    setMousePosition(currentPosition);
    
    // Actualizar el historial de posiciones (máximo 10 posiciones)
    setLastPositions(prevPositions => {
      const newPositions = [...prevPositions, currentPosition];
      if (newPositions.length > 10) {
        return newPositions.slice(1);
      }
      return newPositions;
    });
    
    // Crear efectos de trail/estela
    if (isMoving) {
      createTrail(currentPosition);
    }
    
    setIsMoving(true);
    
    // Reiniciar el timeout cada vez que el ratón se mueve
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Configurar un timeout para detectar cuando el ratón se detiene
    timeoutRef.current = setTimeout(() => {
      setIsMoving(false);
    }, 100);
  };
  
  // Función para crear elementos de trail/estela
  const createTrail = (position) => {
    // Crear un nuevo ID único para este trail
    const trailId = Date.now();
    
    // Añadir el nuevo trail al estado
    setTrails(prevTrails => [...prevTrails, {
      id: trailId,
      x: position.x,
      y: position.y
    }]);
    
    // Configurar un timeout para eliminar este trail después de un tiempo
    setTimeout(() => {
      setTrails(prevTrails => prevTrails.filter(trail => trail.id !== trailId));
    }, 800);
  };
  
  // Manejar entrada y salida de elementos hover
  const handleMouseEnter = () => {
    setScale(4);
  };
  
  const handleMouseLeave = () => {
    setScale(1);
  };
  
  // Registrar evento de movimiento global
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (trailTimeoutRef.current) {
        clearTimeout(trailTimeoutRef.current);
      }
    };
  }, [isMoving]);
  
  // Efecto que aplica los hover handlers a elementos con la clase 'hoverable'
  useEffect(() => {
    const hoverableElements = document.querySelectorAll('.hoverable');
    
    hoverableElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      hoverableElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  
  // Actualizar la posición de la bola grande basado en la posición del ratón
  useEffect(() => {
    if (bigBallRef.current) {
      gsap.to(bigBallRef.current, {
        duration: 0.3,
        x: mousePosition.x,
        y: mousePosition.y,
        scale: scale,
        ease: "power2.out",
        onUpdate: () => {
          // Actualizar la posición actual del círculo grande en cada paso de la animación
          const bigBallRect = bigBallRef.current.getBoundingClientRect();
          setBigBallPosition({
            x: bigBallRect.left + bigBallRect.width/2,
            y: bigBallRect.top + bigBallRect.height/2
          });
        }
      });
    }
  }, [mousePosition, scale]);
  
  // Efecto para animar la pequeña bola roja (que sigue como cola)
  useEffect(() => {
    if (smallBallRef.current) {
      if (isMoving && lastPositions.length >= 5) {
        // Cuando está en movimiento, usa una posición anterior (5 posiciones atrás)
        const trailingPosition = lastPositions[0];
        
        gsap.to(smallBallRef.current, {
          duration: 0.5,
          x: trailingPosition.x,
          y: trailingPosition.y,
          ease: "power2.out"
        });
      } else if (!isMoving) {
        // Cuando se detiene, anima el punto rojo para que se mueva hacia el centro del círculo grande
        gsap.to(smallBallRef.current, {
          duration: 0.8,
          x: bigBallPosition.x,
          y: bigBallPosition.y,
          ease: "elastic.out(1, 0.3)"
        });
      }
    }
  }, [lastPositions, isMoving, bigBallPosition]);
  
  // Efecto para animar los trails
  useEffect(() => {
    trails.forEach((trail) => {
      const trailElement = document.getElementById(`trail-${trail.id}`);
      if (trailElement) {
        gsap.to(trailElement, {
          duration: 0.8,
          opacity: 0,
          scale: 0.5,
          ease: "power2.out"
        });
      }
    });
  }, [trails]);
  
  return (
    <>
      <div className="cursor">
        <div ref={bigBallRef} className="cursor__ball cursor__ball--big">
          <svg height="40" width="40">
            <circle cx="20" cy="20" r="18" strokeWidth="1"></circle>
          </svg>
        </div>
        <div ref={smallBallRef} className="cursor__ball cursor__ball--small">
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
          </svg>
        </div>
      </div>
      <div ref={trailsContainerRef} className="trails-container">
        {trails.map((trail) => (
          <div
            key={trail.id}
            id={`trail-${trail.id}`}
            className="trail"
            style={{
              left: trail.x,
              top: trail.y
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CustomCursor;