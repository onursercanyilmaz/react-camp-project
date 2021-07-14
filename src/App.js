import logo from './logo.svg';
import './App.css';
import Dashboard from "./layouts/Dashboard";
import 'semantic-ui-css/semantic.min.css'
import {Container} from "semantic-ui-react";
import Navig from "./layouts/Navig";
import React from "react";

function App() {
  return (
    <div className="App">
        <Navig/>
        <Container className={"main"}>
<Dashboard >

</Dashboard>
        </Container>


    </div>
  );
}

export default App;
