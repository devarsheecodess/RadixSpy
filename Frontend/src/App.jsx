import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './components/Landing';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Features from './components/Features';
import Team from './components/Team';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Landing />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <Signup />
      </div>
    ),
  },
  {
    path: "/features",
    element: (
      <div>
        <Header />
        <Features />
      </div>
    ),
  },
  {
    path: "/team",
    element: (
      <div>
        <Header />
        <Team />
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
