const SET_WEBSOCKET = "socket/SET_WEBSOCKET";

export const setWebSocket = (webSocket) => {
  return { type: SET_WEBSOCKET, webSocket };
};

const initialState = {
  webSocket: null,
};

export default function socketReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WEBSOCKET:
      return {
        ...state,
        webSocket: action.webSocket,
      };
    default:
      return state;
  }
}
