import { store } from 'src/app/store';

export default function CheckPermission(permissionToCheck?: string[]) {
  let state = store.getState();
  let sessionAuthorities = state?.auth?.functions;

  if (!permissionToCheck) return true; // No permissions means eveeryone has right to do this

  if (sessionAuthorities) permissionToCheck.some((value) => sessionAuthorities.includes(value)); // Check user has suitable right

  return false;
}
