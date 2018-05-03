import * as selectors from '../selectors/vitals';

describe('Actor vitals selectors', () => {
  test('returns the level of energy', () => {
    expect(selectors.getEnergy({ actor: { vitals: { energy: 0 } } })).toEqual(0);
  });

  test('returns the level of hydration', () => {
    expect(selectors.getHydration({ actor: { vitals: { hydration: 0 } } })).toEqual(0);
  });

  test('returns the level of stamina', () => {
    expect(selectors.getStamina({ actor: { vitals: { stamina: 0 } } })).toEqual(0);
  });
});
