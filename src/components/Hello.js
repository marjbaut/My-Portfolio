import React from 'react';

// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Hello` component is a child of our `App` component and is responsible for rendering the "Hello World" header.
const style = {
  backgroundImage: "url('../images/reactCode.png')",
};

function Hello() {
  const name = 'MARJORIE BAUTISTA';
  const description = 'I am a software developer';
  const languages = 'JavaScrip: Node, express, react,  '
  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  return (
    <div className='homeBG screen-height' id="hello">
      
      <div className='intro'>
        < h1 className='animate__animated  animate__bounceInUp '>{name} </h1>
        <img src='https://media.giphy.com/media/Q2T7BXRiDFPJcPoA7Z/giphy.gif'></img>
        <p lassName='intro p' >{description}</p>
        <p>{languages}</p>
      </div>
    </div>

  );
};

export default Hello;
