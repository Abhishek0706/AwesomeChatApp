import ActionsTypes from '../ActionTypes';

export const setCurrentRoomId = roomId => {
  return { type: ActionsTypes.SETCURRENTROOMID, payload: { roomId } };
};
