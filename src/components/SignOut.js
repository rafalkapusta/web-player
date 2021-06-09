import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { GridItemWrapper } from "../styled/GridItemWrapper";

const SignOutWrapper = styled(GridItemWrapper)`
  flex-direction: column;
`;

const SignOut = ({ setState }) => {
  return (
    <SignOutWrapper row="1" column="1/2">
      <Button onClick={() => setState({ type: "signOut" })}>Sign Out</Button>
      <span>{sessionStorage.getItem("user")}</span>
    </SignOutWrapper>
  );
};

export default SignOut;
