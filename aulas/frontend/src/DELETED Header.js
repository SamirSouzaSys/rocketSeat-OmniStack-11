import React from 'react';

// export default function Header
// function Header(props) {
function Header( {children }) {
  return (
    <header>
      {/* <h1>Be The Hero</h1> */}
      {/* <h1>{props.title}</h1> */}
      <h1>{children}</h1>
    </header>
  );
}
 export default Header;