import { store } from 'src/app/store';

export default class CheckPermission {
  static isAllowed(permissions) {
    if (!permissions) return true;

    let permissionToCheck = [];

    if (!Array.isArray(permissions)) {
      if (typeof permissions === 'object') {
        for (let key in permissions) {
          if (permissions.hasOwnProperty(key)) permissionToCheck.push(permissions[key]);
        }
      } else {
        permissionToCheck = [permissions];
      }
    } else {
      permissionToCheck = permissions;
    }
    // const token = JSON.parse(JSON.parse(window.localStorage['persist:admin-news']).auth)
    // ?.accessToken
    // if (token) {
    //   config.headers['Authorization'] = `Token ${token}`
    // }
    // let sessionAuthorities = LocalStore.getInstance().read(ConstVar.loginPermistion)

    let state = store.getState();
    let sessionAuthorities = state?.auth?.accessToken;

    if (sessionAuthorities) {
      if (!Array.isArray(sessionAuthorities)) {
        sessionAuthorities = [];
      }

      for (let permission of permissionToCheck) {
        if (sessionAuthorities.indexOf(permission) >= 0) {
          return true;
        }
      }
    }
    // parseObjectToQueryString({})
    return false;
  }

  static isAllowedRoute(permissions) {
    if (!permissions) return true;

    let permissionToCheck = [];

    if (!Array.isArray(permissions)) {
      if (typeof permissions === 'object') {
        for (let key in permissions) {
          if (permissions.hasOwnProperty(key)) permissionToCheck.push(permissions[key]);
        }
      } else {
        permissionToCheck = [permissions];
      }
    } else {
      permissionToCheck = permissions;
    }

    let state = store.getState();
    let sessionAuthorities = state?.auth?.accessToken;
    if (sessionAuthorities) {
      if (!Array.isArray(sessionAuthorities)) {
        sessionAuthorities = [];
      }

      return permissionToCheck.some((permission) =>
        sessionAuthorities.some((p) => {
          if (permission.includes('.')) {
            return p.includes(permission);
          }
          return p.match(/^\w+/gm)[0] === permission;
        })
      );
    }
    return false;
  }
}
