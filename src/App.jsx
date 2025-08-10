import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import RotationBuilder from '@/pages/RotationBuilder';
import ArcheologyMaterials from '@/pages/ArcheologyMaterials';
import AppLayout from '@components/AppLayout';

// let router = createBrowserRouter([
//   {
//     path: '/',
//     Component: RotationBuilder,
//   },
//   {
//     path: '/archeologymaterials',
//     Component: ArcheologyMaterials,
//   },
// ]);

let router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      { index: true, Component: RotationBuilder },
      { path: 'archeologymaterials', Component: ArcheologyMaterials },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
