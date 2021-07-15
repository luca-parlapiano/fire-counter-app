import React from 'react';
import {TextField} from "./TextField";
//props
//hooks
//render props

//Differenza tra functional component e gli altri

const App: React.FC = () => {
  return (
    <div>
      <TextField text="hello" person={{firstName:'Luca',lastName:'pARLAPIANO'}}/>
    </div>
  );
};

export default App;
