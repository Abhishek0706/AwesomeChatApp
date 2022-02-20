import ActionsTypes from '../ActionTypes';

export const setCurrentRoomId = roomId => {
  return { type: ActionsTypes.SETCURRENTROOMID, payload: { roomId } };
};

export const addRoomId = roomId => {
  return { type: ActionsTypes.ADDROOMID, payload: { roomId } };
};
