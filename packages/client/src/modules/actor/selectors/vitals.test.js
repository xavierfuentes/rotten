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

  test('returns whether the actor is alive', () => {
    expect(selectors.isAlive({ actor: { vitals: { energy: 1, hydration: 1, stamina: 1 } } })).toEqual(true);
    expect(selectors.isAlive({ actor: { vitals: { energy: 0, hydration: 0, stamina: 0 } } })).toEqual(false);
    expect(selectors.isAlive({ actor: { vitals: { energy: 0, hydration: 1, stamina: 1 } } })).toEqual(false);
    expect(selectors.isAlive({ actor: { vitals: { energy: 1, hydration: 0, stamina: 1 } } })).toEqual(false);
    expect(selectors.isAlive({ actor: { vitals: { energy: 1, hydration: 1, stamina: 0 } } })).toEqual(false);
  });
});
