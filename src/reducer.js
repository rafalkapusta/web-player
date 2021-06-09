export const initialState = {
  isUserSignedIn: false,
  loading: false,
  errors: { signIn: false, mediaList: false, player: false },
  entities: [],
  contentUrl: "",
  listId: 2,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loading: true,
      };
    case "signIn":
      if (action.payload) {
        const data = action.payload;
        sessionStorage.setItem("token", data.AuthorizationToken.Token);
        sessionStorage.setItem("user", data.User.FullName);
        return {
          ...state,
          isUserSignedIn: "User" in data,
          loading: false,
          errors: { signIn: false, mediaList: false, player: false },
        };
      }
      return {
        ...state,
        isUserSignedIn: true,
        loading: false,
      };

    case "signOut":
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      return {
        ...state,
        isUserSignedIn: false,
        loading: false,
        errors: { signIn: false, mediaList: false, player: false },
      };
    case "getMediaList":
      return {
        ...state,
        loading: false,
        entities: action.payload.Entities,
        contentUrl: "",
        errors: { ...state.errors, mediaList: false },
      };
    case "error":
      return {
        ...state,
        errors: { ...state.errors, [action.payload]: true },
        loading: false,
      };
    case "getMedia":
      if (action.payload) {
        return {
          ...state,
          contentUrl: action.payload.ContentUrl,
          errors: { ...state.errors, player: false },
        };
      }
      return {
        ...state,
        contentUrl: "",
      };
    case "changeListId":
      return {
        ...state,
        listId: action.payload,
      };
    default:
      return state;
  }
};
