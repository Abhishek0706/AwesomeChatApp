import ActionsTypes from '../ActionTypes';

const initialState = {
  currentRoomId: 'General',
};

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.SETCURRENTROOMID:
      return {
        ...state,
        currentRoomId: action.payload.roomId,
      };

    default:
      return state;
  }
};

export default ChatReducer;
