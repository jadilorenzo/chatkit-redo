import React from 'react';
import NavBar from './NavBar.jsx'
// import logo from './logo.svg';

const Page = (props) => {
  const side = 'h-screen scroll md:border-l md:border-r md:border-green-800 border-white'
  return (
    <div className="flex h-screen w-full">
      <div className={`hidden md:w-1/3 md:block ${side}`}><NavBar/></div>
      <div className={`w-full h-full md:w-full${side} flex flex-col`}>{props.children}</div>
    </div>
  );
}

export default Page;
