import styled from "styled-components";

export const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  // background: silver;
  text-align: center;
  background-image: linear-gradient(
    45deg,
    hsl(171, 100%, 41%) 25%,
    #f0f5f5 25%,
    #f0f5f5 50%,
    hsl(171, 100%, 41%) 50%,
    hsl(171, 100%, 41%) 75%,
    #f0f5f5 75%,
    #f0f5f5 100%
  );
  background-size: 56.57px 56.57px;
  animation: progress-bar-stripes 2s linear infinite;

  @keyframes progress-bar-stripes {
    from {
      background-position: 56.57px 0;
    }
    to {
      background-position: 0 0;
    }
  }
`;
