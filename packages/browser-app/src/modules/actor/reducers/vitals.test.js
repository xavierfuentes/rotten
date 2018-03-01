import * as actionCreators from '../actions/creators';
import reducer, { DEFAULT_STATE } from './vitals';

describe('Actor vitals reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(DEFAULT_STATE);
  });

  it('should update the energy level', () => {
    expect(reducer({ energy: 5 }, actionCreators.updateEnergy(10))).toEqual({ energy: 15 });
    expect(reducer({ energy: 11 }, actionCreators.updateEnergy(-1))).toEqual({ energy: 10 });
    // never go below 0
    expect(reducer({ energy: 5 }, actionCreators.updateEnergy(-10))).toEqual(0);
  });

  it('should update the hunger level', () => {
    expect(reducer({ hunger: 5 }, actionCreators.updateHunger(10))).toEqual({ hunger: 15 });
    expect(reducer({ hunger: 11 }, actionCreators.updateHunger(-1))).toEqual({ hunger: 10 });
    // never go below 0
    expect(reducer({ hunger: 5 }, actionCreators.updateHunger(-10))).toEqual(0);
  });

  it('should update the thirst level', () => {
    expect(reducer({ thirst: 5 }, actionCreators.updateThirst(10))).toEqual({ thirst: 15 });
    expect(reducer({ thirst: 11 }, actionCreators.updateThirst(-1))).toEqual({ thirst: 10 });
    // never go below 0
    expect(reducer({ thirst: 5 }, actionCreators.updateThirst(-10))).toEqual(0);
  });

  it('should update the fatigue level', () => {
    expect(reducer({ fatigue: 5 }, actionCreators.updateFatigue(10))).toEqual({ fatigue: 15 });
    expect(reducer({ fatigue: 11 }, actionCreators.updateFatigue(-1))).toEqual({ fatigue: 10 });
    // never go below 0
    expect(reducer({ fatigue: 5 }, actionCreators.updateFatigue(-10))).toEqual(0);
  });
});
