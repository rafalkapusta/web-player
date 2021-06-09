import React, { useReducer, useEffect } from "react";
import { reducer, initialState } from "./reducer";
import { GlobalStyle } from "./styled/GlobalStyle";
import Home from "./views/Home";
import Notification from "./components/Notification";
import Splash from "./views/Splash";

const App = () => {
  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setState({ type: "signIn" });
      return;
    }
    setState({ type: "signOut" });
  }, []);

  return (
    <>
      <GlobalStyle />
      {state.errors.signIn && (
        <Notification>
          Something went wrong. Please sign in again or try later.
        </Notification>
      )}
      {state.isUserSignedIn ? (
        <Home setState={setState} state={state} />
      ) : (
        <Splash setState={setState} state={state} />
      )}
    </>
  );
};

export default App;
