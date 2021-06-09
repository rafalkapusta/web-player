import React, { useEffect } from "react";
import { axiosInstance } from "../helpers/axios";
import Notification from "../components/Notification";
import { GridWrapper } from "../styled/GridWrapper";
import MediaList from "../components/MediaList";
import PLayer from "../components/ReactPlayer";
import SignOut from "../components/SignOut";
import Loading from "../components/Loading";
import RangeSelector from "../components/RangeSelector";
import { GridItemWrapper } from "../styled/GridItemWrapper";

const url = "/Media/GetMediaList";

const Home = ({ setState, state }) => {
  const getMediaList = (id) => {
    setState({ type: "loading" });
    const token = sessionStorage.getItem("token");
    (async () => {
      try {
        const response = await axiosInstance.post(
          url,
          {
            MediaListId: Number(id),
            IncludeCategories: false,
            IncludeImages: true,
            IncludeMedia: false,
            PageNumber: 1,
            PageSize: 15,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setState({ type: "getMediaList", payload: response.data });
      } catch (e) {
        if (e.response.status === 401) {
          setState({ type: "signOut" });
        }
        setState({ type: "error", payload: "mediaList" });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    })();
  };
  useEffect(() => {
    getMediaList(state.listId);
  }, []);

  return (
    <Loading loading={state.loading}>
      <GridWrapper>
        <RangeSelector
          state={state}
          setState={setState}
          getMediaList={getMediaList}
        />
        <SignOut setState={setState} />
        {state.errors.mediaList ? (
          <GridItemWrapper row="3/4" column="2/3">
            <Notification>Media list is unavailable.</Notification>
          </GridItemWrapper>
        ) : (
          <MediaList state={state} setState={setState} />
        )}
        {state.errors.player ? (
          <GridItemWrapper row="2/3" column="2/3">
            <Notification>Player is unavailable.</Notification>
          </GridItemWrapper>
        ) : (
          <PLayer state={state} />
        )}
      </GridWrapper>
    </Loading>
  );
};

export default Home;
