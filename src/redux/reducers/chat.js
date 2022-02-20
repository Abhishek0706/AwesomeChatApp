import ActionsTypes from '../ActionTypes';

const initialState = {
  currentRoomId: 'General',
  roomIdList: [
    'General',
    'Trading',
    'React Native',
    'Roorkee Tour',
    'Apna Adda',
  ],
};

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.SETCURRENTROOMID:
      return {
        ...state,
        currentRoomId: action.payload.roomId,
      };
    case ActionsTypes.ADDROOMID:
      return {
        ...state,
        roomIdList: [...state.roomIdList, action.payload.roomId],
      };

    default:
      return state;
  }
};

export default ChatReducer;
