import styled from "styled-components";

export const GridWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  background: #f0f5f5;

  display: grid;
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows: 200px 1fr 1fr;
`;
