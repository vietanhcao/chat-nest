import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const UploadPage = React.lazy(() => import('./views/UploadPage/UploadPage'));
const PostsPage = React.lazy(() => import('./features/posts/pages/PostsPage'));

let routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/upload', name: 'upload', component: UploadPage },
  { path: '/posts', name: 'posts', component: PostsPage },
  // System management
];

export default routes;
