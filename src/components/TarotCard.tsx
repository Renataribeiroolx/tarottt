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
  
  const calculatePosition = () => {
    // Calcular o deslocamento horizontal entre as cartas
    const spacing = 30; // Espaçamento entre as cartas em pixels
    const totalWidth = spacing * (total - 1);
    const startX = -totalWidth / 2;
    
    // Calcular a posição X desta carta
    const x = startX + (index * spacing);
    
    // Calcular a rotação suave
    const maxRotation = 20; // Ângulo máximo de rotação
    const rotation = (index / (total - 1) - 0.5) * maxRotation;
    
    return {
      transform: `translateX(${x}px) rotate(${rotation}deg)`,
      zIndex: index,
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