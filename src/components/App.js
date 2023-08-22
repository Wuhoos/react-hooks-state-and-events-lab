import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const [isOn, lightIsOn] = useState(true)
  // console.log({isOn, lightIsOn})


  function handleSwitch(){
    lightIsOn(!isOn)
  }
  
  
  const appClass = isOn ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleSwitch}> Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
