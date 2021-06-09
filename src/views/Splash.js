import React from "react";
import Button from "../components/Button";
import { FlexWrapper } from "../styled/FlexWrapper";
import { axiosInstance } from "../helpers/axios";

const url = "/Authorization/SignIn";

const Splash = ({ setState, state }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ type: "loading" });
    (async () => {
      try {
        const { data } = await axiosInstance.post(url, {});
        setState({ type: "signIn", payload: data });
      } catch (e) {
        setState({ type: "error", payload: "signIn" });
      }
    })();
  };

  return (
    <FlexWrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Button loading={state.loading} isLarge>
          Sign In
        </Button>
      </form>
    </FlexWrapper>
  );
};

export default Splash;
