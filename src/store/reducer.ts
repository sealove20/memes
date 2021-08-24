const reducer = (state = {}, action: any) => {
  switch (action.type) {
    case "GET_MEME":
      return { ...state, loading: true };
    case "MEME_RECEIVED":
      return { ...state, meme: action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
