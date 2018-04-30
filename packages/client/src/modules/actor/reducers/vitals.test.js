import * as actionCreators from '../actions/vitals';
import reducer, { DEFAULT_STATE } from './vitals';

describe('Actor vitals reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(DEFAULT_STATE);
  });

  it('should update the energy level', () => {
    expect(reducer({ energy: 5 }, actionCreators.updateEnergy(10))).toEqual({
      energy: 15
    });
    expect(reducer({ energy: 11 }, actionCreators.updateEnergy(-1))).toEqual({
      energy: 10
    });
  });

  it('should update the hydration level', () => {
    expect(reducer({ hydration: 5 }, actionCreators.updateHydration(10))).toEqual({
      hydration: 15
    });
    expect(reducer({ hydration: 11 }, actionCreators.updateHydration(-1))).toEqual({
      hydration: 10
    });
  });

  it('should update the stamina level', () => {
    expect(reducer({ stamina: 5 }, actionCreators.updateStamina(10))).toEqual({
      stamina: 15
    });
    expect(reducer({ stamina: 11 }, actionCreators.updateStamina(-1))).toEqual({
      stamina: 10
    });
  });
});
