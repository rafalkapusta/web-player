import React from "react";
import styled from "styled-components";
import { axiosInstance } from "../helpers/axios";

const ListItem = styled.li`
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    transition: transform 0.5s;
  }
`;

const Placeholder = styled.div`
  width: 200px;
  min-height: 100px;
  background-color: hsl(171, 100%, 41%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IMG = styled(Placeholder)`
  background-image: ${({ Url }) => `url(${Url})`};
  background-size: cover;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  height: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const url = "/Media/GetMediaPlayInfo";

const MediaListItem = ({ id, title, images, setState }) => {
  const handleData = () => {
    const token = sessionStorage.getItem("token");
    (async () => {
      try {
        const response = await axiosInstance.post(
          url,
          {
            MediaId: id,
            StreamType: "TRIAL",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setState({ type: "getMedia", payload: response.data });
      } catch (e) {
        if (e.response.status === 401) {
          setState({ type: "signOut" });
        }
        setState({ type: "error", payload: "player" });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    })();
  };

  const img = images.reduce(
    (acc, curr) =>
      acc.ImageTypeCode === "FRAME" ? acc : Object.assign(acc, curr),
    {}
  );
  return (
    <ListItem key={id} onClick={handleData}>
      <Title>{title}</Title>
      {img.ImageTypeCode === "FRAME" ? (
        <IMG key={img.Id} Url={img.Url} />
      ) : (
        <Placeholder key={img.Id}>No cover</Placeholder>
      )}
    </ListItem>
  );
};

export default MediaListItem;
