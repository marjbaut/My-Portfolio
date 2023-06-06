import React from 'react';
// First we import our Hello component from our components folder.
import Hello from './components/Hello';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
function App() {
  return (
    <div>
      <Hello/>
      <SocialMedia/>
      <Projects/>

    </div>
  )
};

export default App;
