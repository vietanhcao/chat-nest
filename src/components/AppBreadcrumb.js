import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import routes from '../routes';

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';
import './component.scss';
import CheckPermission from 'src/utils/CheckPermission1';

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname;

  const getRouteName = (pathname, routes, prev) => {
    const currentRoute = routes.find((route) => {
      // route.path.split('/')[route.path.split('/').length -2]
      if (
        route.path.includes(':') &&
        route.path.match(/:/g).length === 2 &&
        prev.length &&
        route.path.includes(prev.replace(/(\/\w+)$/g, ''))
      ) {
        // case /:id/:userId
        return true;
      }
      if (route.path.includes(':') && prev.length && route.path.includes(prev)) {
        // console.log(route.path.split('/')[route.path.split('/').length - 2])
        // console.log(prev.split('/'))
        // console.log(prev.split('/')[prev.split('/').length - 1])
        if (route.path.split('/')[route.path.split('/').length - 2] === prev.split('/')[prev.split('/').length - 1]) {
          return true;
        }
      }
      return route.path === pathname;
    });

    return currentRoute?.name;
  };

  const getBreadcrumbs = (location) => {
    const breadcrumbs = [];
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`;
      breadcrumbs.push({
        pathname: currentPathname,
        name: getRouteName(currentPathname, routes, prev),
        active: index + 1 === array.length ? true : false,
      });
      return currentPathname;
    });
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs(currentLocation);
  // const breadcrumbs = findRouteName(currentLocation)
  return (
    <CBreadcrumb className="m-0 ms-2 CBreadcrumb">
      {CheckPermission(['']) && (
        <CBreadcrumbItem>
          <Link className="Link" to="/">
            Home
          </Link>
        </CBreadcrumbItem>
      )}
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <CBreadcrumbItem
            // {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
            key={index}
          >
            <Link
              disabled={breadcrumb.active}
              className="Link"
              style={{ cursor: breadcrumb.active ? 'unset' : 'pointer' }}
              to={breadcrumb.pathname}
            >
              {breadcrumb.name}
            </Link>
          </CBreadcrumbItem>
        );
      })}
    </CBreadcrumb>
  );
};

export default React.memo(AppBreadcrumb);
