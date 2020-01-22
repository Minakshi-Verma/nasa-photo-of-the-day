import React from "react"; //imported React

import CardContainer from "./CardContainer" //imported CardContainer(Card's parent)
import "./App.css";

function App() {
 

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
       <CardContainer />
    </div>
  );
}

export default App;
