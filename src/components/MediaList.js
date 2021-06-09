import React from "react";
import styled from "styled-components";
import { GridItemWrapper } from "../styled/GridItemWrapper";
import MediaListItem from "./MediaListItem";

const List = styled(GridItemWrapper)`
  height: 300px;
  flex-direction: row;
  justify-content: flex-start;
  margin: 2rem 0;
  overflow-x: scroll;
`;

const MediaList = ({ state, setState }) => {
  return (
    <List as="ul" row="3" column="2/3">
      {state.entities.map(({ Id, Title, Images }) => (
        <MediaListItem
          key={Id}
          id={Id}
          title={Title}
          images={Images}
          setState={setState}
        />
      ))}
    </List>
  );
};

export default MediaList;
