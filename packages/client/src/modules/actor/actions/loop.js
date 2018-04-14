import { updateEnergy } from './vitals';
import { die } from './status';
import { getEnergy } from '../selectors/vitals';
// import { unsubscribe } from '../../../store/enhancers/loop/actions'

export const actionTypes = {};

export function actorLoop() {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(updateEnergy(-1));
    if (getEnergy(state) <= 0) {
      dispatch(die());
      // dispatch(unsubscribe({ loop: this }))
    }
  };
}
