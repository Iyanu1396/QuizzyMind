import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import blobDown from "./assets/down.svg";
import blobUp from "./assets/up.svg";

import "./App.css";
import StartPage from "../components/StartPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <StartPage blobUp={blobUp} blobDown={blobDown} />
    </main>
  );
}

export default App;
