import React from 'react';
import './style.scss';

interface PT {
  className?: string;
  headerTitle: string;
  children: React.ReactNode;
}

const WhiteCard: React.FC<PT> = ({ className, headerTitle, children }) => {
  return (
    <div className={`white-card ${className}`}>
      <div className="white-card-title">{headerTitle}</div>
      {children}
    </div>
  );
};

export default WhiteCard;
