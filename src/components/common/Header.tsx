export default {};
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { useAppDispatch } from 'app/hooks';
// import { authAction } from 'features/auth/authSlice';
// import React from 'react';
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     title: {
//       flexGrow: 1,
//     },
//   })
// );
// export interface HeaderProps {}

// export function Header(props: HeaderProps) {
//   const dispatch = useAppDispatch();
//   const handleLogoutClick = () => {
//     dispatch(authAction.logout());
//   };
//   // const buttonLogout = (
//   //   <Button
//   //     variant="contained"
//   //     color="primary"
//   //     style={{ textTransform: 'none' }}
//   //     onClick={handleLogoutClick}
//   //   >
//   //     {' '}
//   //     Fake logout
//   //   </Button>
//   // );

//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//             Student management
//           </Typography>
//           <Button color="inherit" onClick={handleLogoutClick}>
//             Logout
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
