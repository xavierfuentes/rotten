import * as selectors from '../selectors/character';

describe('Actor character selectors', () => {
  const state = {
    actor: {
      character: {
        gender: 'FEMALE'
      }
    }
  };

  test('returns the gender', () => {
    expect(selectors.getGender(state)).toEqual('FEMALE');
  });
});
