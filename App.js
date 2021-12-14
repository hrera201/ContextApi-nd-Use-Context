import React, { createContext } from "react";
import ComponentA from "./components/ComponentA";

const FirstName=createContext();
const LastName=createContext();


function App() {
  return (
    <>
    <FirstName.Provider value={"Muhammad"}> 
  
    <LastName.Provider value={"Hrera"}>
      <ComponentA/>
    </LastName.Provider>

        </FirstName.Provider>
  </>)
}

export default App;
export {FirstName,LastName};
