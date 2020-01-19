import React from 'react';
import NavBar from './NavBar.jsx'
// import logo from './logo.svg';

const App = (props) => {
  const side = 'h-screen scroll border-l border-r border-green-800'
  return (
    <div className="flex h-full w-full">
      <div className={`hidden md:w-1/3 md:block ${side}`}><NavBar/></div>
      <div className={`w-full md:w-full${side} flex flex-col`}>{props.children}</div>
    </div>
  );
}

export default App;
