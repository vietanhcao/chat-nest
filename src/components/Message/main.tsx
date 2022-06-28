import React from 'react';
import './style.scss';

interface PT {
  title: string;
  text: string;
  type: string;
}

const Main: React.FC<PT> = ({ title, text, type }) => {
  return (
    <div className="message-container">
      <div className="message-container-title" style={{ color: type === 'error' ? '#EE4F46' : '#2EAD90' }}>
        {title !== '' ? title : type === 'error' ? 'Xảy ra lỗi !!!' : 'Thành công !!!'}
      </div>
      <div className="message-container-text">{text}</div>
    </div>
  );
};

export default Main;
