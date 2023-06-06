import React from 'react';

// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Hello` component is a child of our `App` component and is responsible for rendering the "Hello World" header.
function Hello() {
  const name = 'Marjorie Bautista';
  const description ='I am a software developer';
  const languages = 'JavaScrip: Node, express, react,  '
  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  return (
    <div className="container">
      <h1>{name}</h1>
      <h2>{description}</h2>
      <h2>{languages}</h2>
    </div>
  );
}

export default Hello;
