import React from "react";
import { GridItemWrapper } from "../styled/GridItemWrapper";
import bulmaSlider from "bulma-slider/dist/js/bulma-slider";
import Button from "./Button";
import styled from "styled-components";
import Notification from "./Notification";

const FormWrapper = styled(GridItemWrapper)`
  flex-direction: column;
`;

const RangeSelector = ({ state, setState, getMediaList }) => {
  return (
    <>
      <GridItemWrapper row="1/2" column="2/3">
        <Notification color="is-primary">
          Change value on the slider and click search to fetch new media list.
        </Notification>
      </GridItemWrapper>
      <FormWrapper
        as="form"
        row="1"
        column="3/4"
        onSubmit={(e) => {
          e.preventDefault();
          getMediaList(state.listId);
          setState({ type: "getMedia" });
        }}
      >
        <Button>Search</Button>
        <input
          id="sliderWithValue"
          className="slider has-output mr-4"
          step="1"
          min="2"
          max="6"
          value={state.listId}
          onChange={(e) => {
            bulmaSlider.attach();
            setState({ type: "changeListId", payload: e.target.value });
          }}
          type="range"
        />
        <output htmlFor="sliderWithValue">{state.listId}</output>
      </FormWrapper>
    </>
  );
};

export default RangeSelector;
