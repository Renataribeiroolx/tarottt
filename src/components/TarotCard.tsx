import React, { useState } from 'react';

interface TarotCardProps {
  card: {
    id: number;
    name: string;
    imageUrl: string;
    backImageUrl: string;
  };
  index: number;
  total: number;
  onSelect: () => void;
}

const TarotCard: React.FC<TarotCardProps> = ({ card, index, total, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculando posição no semicírculo
  const calculatePosition = () => {
    // Ângulo total do semicírculo (180 graus em radianos)
    const totalAngle = Math.PI;
    
    // Ângulo para esta carta específica
    const angle = (index / (total - 1)) * totalAngle;
    
    // Raio do semicírculo (ajustado para melhor visualização)
    const radius = 300;
    
    // Calcular posição X e Y
    const x = Math.cos(angle - totalAngle / 2) * radius;
    const y = Math.sin(angle - totalAngle / 2) * radius;
    
    // Calcular rotação
    const rotation = (angle * (180 / Math.PI)) - 90;
    
    return {
      transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
    };
  };

  return (
    <div 
      className={`tarot-card-wrapper ${isHovered ? 'hovered' : ''}`}
      style={calculatePosition()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      <div className="tarot-card">
        <img
          src={card.backImageUrl}
          alt="Verso da carta de Tarot"
          className="card-image"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default TarotCard;