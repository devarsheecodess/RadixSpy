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
import Footer from './components/Footer';
import Team from './components/Team';
import Home from './components/pages/Home';
import Post from './components/pages/Post';
import TraceAccounts from './components/pages/TraceAccounts';
import Video from './components/pages/Video';
import Control from './components/pages/Control';
import History from './components/pages/History';
import Alerts from './components/pages/Alerts';
import Navbar from './components/pages/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Landing />
        <Footer />
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
    path: "/team",
    element: (
      <div>
        <Header />
        <Team />
        <Footer />
      </div>
    ),
  },
  {
    path: "/features",
    element: (
      <div>
        <Header />
        <Features />
        <Footer />
      </div>
    ),
  },
  {
    path: "/home",
    element: (
      <div className='flex lg:flex-row flex-col'>
        <Navbar />
        <Control />
        <Home />
      </div>
    ),
  },
  {
    path: "/post",
    element: (
      <div className='flex lg:flex-row flex-col'>
        <Navbar />
        <Control />
        <Post />
      </div>
    ),
  },
  {
    path: "/trace-accounts",
    element: (
      <div className='flex lg:flex-row flex-col'>
        <Navbar />
        <Control />
        <TraceAccounts />
      </div>
    ),
  },
  {
    path: "/video",
    element: (
      <div className='flex lg:flex-row flex-col'>
        <Navbar />
        <Control />
        <Video />
      </div>
    ),
  },
  {
    path: "/history",
    element: (
      <div className='flex lg:flex-row flex-col'>
        <Navbar />
        <Control />
        <History />
      </div>
    ),
  },
  {
    path: "/alerts",
    element: (
        <div className='flex lg:flex-row flex-col'>
        <Navbar />
        <Control />
        <Alerts />
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
