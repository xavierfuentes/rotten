import * as actionCreators from '../actions/character';
import reducer, { DEFAULT_STATE } from './character';

describe('Actor vitals reducer', () => {
  test('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(DEFAULT_STATE);
  });

  test('sets the options passed to the character', () => {
    const genderState = { gender: 'FEMALE' };
    const ageState = { age: 36 };
    expect(reducer({}, actionCreators.spawn(genderState))).toEqual(genderState);
    expect(reducer(genderState, actionCreators.spawn(ageState))).toEqual({
      ...genderState,
      ...ageState
    });
  });
});
