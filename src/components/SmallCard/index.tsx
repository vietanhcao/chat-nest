import React from 'react';
import './style.scss';

interface PT {
  className?: string;
  headerTitle: string;
  children: React.ReactNode;
}

const SmallCard: React.FC<PT> = ({ className, headerTitle, children }) => {
  return (
    <div className={`small-card ${className}`}>
      <div className="small-card-title">{headerTitle}</div>
      {children}
    </div>
  );
};

export default SmallCard;
