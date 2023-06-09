import React from 'react';
import './styles/bg.css';
import 'animate.css';
// First we import our Hello component from our components folder.
import Hello from './components/Hello';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import Navbar from './components/Navbar';
import projectData from './projectData';
import ContactMe from './components/ContactMe';
// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.


export default function App() {
  return (
    
      <div className='mainBG ' >
       <Navbar />  
      <Hello />
      <Projects projectData={projectData} />
      <ContactMe/>
      <SocialMedia />
      </div>


  );
};

