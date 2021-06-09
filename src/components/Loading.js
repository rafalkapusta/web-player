import React from "react";
import { ProgressBar } from "./ProgressBar";
import { FlexWrapper } from "../styled/FlexWrapper";

const Loading = ({ loading, children }) => {
  if (loading)
    return (
      <FlexWrapper>
        <ProgressBar />
      </FlexWrapper>
    );
  return <>{children}</>;
};

export default Loading;
