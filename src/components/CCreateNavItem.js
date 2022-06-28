import { CNavGroup, CNavGroupItems, CNavItem, CNavLink, CNavTitle } from '@coreui/react';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

export const CCreateNavItemCustom = ({ items, idx }) => {
  const renderItem = (item, index, idx) => {
    const { _component, as, anchor, items, ...rest } = item;
    const components = { CNavGroup, CNavGroupItems, CNavItem, CNavLink, CNavTitle };

    const Component = components[_component] || _component;

    const children = items ? items.map((item, index) => renderItem(item, index)) : anchor;
    return (
      <Component
        component={as}
        className="item--children"
        key={index}
        {...(items && { idx: `${idx}.${index}`, toggler: anchor })}
        {...rest}
      >
        {children}
      </Component>
    );
  };

  const generatedItems = useMemo(() => {
    return items && items.map((item, index) => renderItem(item, index, idx));
  }, [items]);

  return <React.Fragment>{generatedItems}</React.Fragment>;
};

CCreateNavItemCustom.propTypes = {
  idx: PropTypes.any,
  items: PropTypes.any, // TODO: find better solution
};
