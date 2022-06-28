import React from 'react';
import './style.scss';

interface PT {
  className?: string;
}

const Divider: React.FC<PT> = ({ className }) => {
  return <div className={`divider ${className}`}></div>;
};

export default React.memo(Divider);
