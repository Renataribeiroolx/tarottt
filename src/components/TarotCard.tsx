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
    // Ângulo total do semicírculo (em radianos)
    const totalAngle = Math.PI;
    
    // Ângulo para esta carta específica
    const angle = totalAngle * (index / (total - 1));
    
    // Calcular a transformação CSS
    const rotateAngle = -90 + (angle * (180 / Math.PI));
    
    return {
      transform: `rotate(${rotateAngle}deg) translateX(${50 + index}px)`,
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
        <div className="card-back">
          <img
            src={card.backImageUrl}
            alt="Verso da carta de Tarot"
            className="card-image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default TarotCard;