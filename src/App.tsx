import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useUserContext } from "./context/User/UserContext";

function App() {
  const {
    state: { user },
  } = useUserContext();

  const { dispath } = useUserContext();

  const login = () => {
    dispath({
      type: "LOG_IN",
      payload: { user: "test" },
    });
  };

  const checkLogin = () => {
    console.log(user, "login state");
  };

  return (
    <div className="App">
      <button type="button" onClick={login}>
        Login
      </button>
      <button onClick={checkLogin}>Check Login</button>
      {/* <h1>{state.user}</h1> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
