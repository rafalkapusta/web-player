import React from "react";
import ReactPlayer from "react-player";
import { GridItemWrapper } from "../styled/GridItemWrapper";
import Notification from "./Notification";

const PLayer = ({ state }) => {
  if (state.contentUrl === "" && !state.errors.mediaList) {
    return (
      <GridItemWrapper row="2/3" column="2/3">
        Chose video from list below
      </GridItemWrapper>
    );
  }
  if (state.errors.mediaList || state.contentUrl === undefined) {
    return (
      <GridItemWrapper row="2/3" column="2/3">
        <Notification>
          Video is currently unavailable. Pleas try again later.
        </Notification>
      </GridItemWrapper>
    );
  }
  return (
    <GridItemWrapper row="2/3" column="2/3">
      <ReactPlayer url={state.contentUrl} playing controls muted />
    </GridItemWrapper>
  );
};

export default PLayer;
