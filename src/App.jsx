import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { UserView } from "./features/user/UserView";
import { CakeView } from "./features/cake/CakeView";
import { IcecreamView } from "./features/icecream/IcecreamView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
