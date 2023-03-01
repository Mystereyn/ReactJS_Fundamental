import * as React from "react";
import { useState } from "react";
function App() {
  let [count,setCount] =  useState(0);

  return ( <div>
    <p> You have clicked {count} on times</p>
    <button onClick={() => setCount(count--)}>
      Hey, Click this!
    </button>
  </div>)
}

export default App;
