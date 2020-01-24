import React from "react"; //imported React
import styled from "styled-components";

import CardContainer from "./CardContainer" //imported CardContainer(Card's parent)
import "./App.css";

const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: #99ccff;
    
`;

function App() {
 

  return (
    <WrapperDiv className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
       <CardContainer />
    </WrapperDiv>
  );
}

export default App;
