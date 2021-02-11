// ,{useState}
import React from 'react';

import './global.css';

// import Header from './Header';
// import Logon from './pages/Logon'; // automatically index

import Routes from './routes';

function App() {
  // const [counter, setCounter] = useState(1);

  // function increment(){
  //   setCounter(counter + 1);
  // }
  return (
    // <h1>Hello World!</h1>
    // <Header title="Semana Oministack" />

    // <Header> Semana Omnistack </Header>

    // <div>
    //   <Header>Contador: {counter} </Header>
    //   <button onClick={increment} > Incrementar</button>
    // </div>

    // <Logon /> 

    <Routes />
  );
}

export default App;
