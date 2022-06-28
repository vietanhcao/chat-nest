import React from 'react';
import './style.scss';
import { Tabs } from 'antd';

interface PT {
  className?: string;
  activeKey: string;
  tabItems: {
    key: string;
    name: string;
  }[];
  onChange: (string: string) => void;
  disabled?: boolean;
}

const TabNavigation: React.FC<PT> = ({ tabItems, className, activeKey, onChange, disabled }) => {
  return (
    <div className={`tab-navigation ${className} ${disabled ? 'tab-navigation-disabled' : ''}`}>
      <Tabs centered activeKey={activeKey} onChange={onChange}>
        {tabItems.map((value) => (
          <Tabs.TabPane
            tab={
              <div className="tab-navigation-item">
                <div className={`tab-navigation-name ${activeKey === value.key ? 'tab-navigation-active' : ''}`}>
                  {value.name}
                </div>
                <div className={`tab-border-bottom ${activeKey === value.key ? 'active-bottom-border' : ''}`}></div>
              </div>
            }
            key={value.key}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default TabNavigation;
