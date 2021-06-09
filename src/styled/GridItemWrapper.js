import styled from "styled-components";

export const GridItemWrapper = styled.div`
  width: 100%;

  grid-row: ${({ row }) => row};
  grid-column: ${({ column }) => column};
  display: flex;
  justify-content: center;
  align-items: center;
`;
