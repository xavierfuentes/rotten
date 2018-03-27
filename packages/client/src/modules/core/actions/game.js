import v4 from 'uuid';

export const actionTypes = {
  START_GAME: 'CORE/GAME/START',
}

export const createGame = () => async dispatch => {
  const newGameID = v4();
  try {
    dispatch(startGame(newGameID));
  } catch (error) {}
};

export const startGame = id => ({
  type: actionTypes.START_GAME,
  payload: { id },
});
