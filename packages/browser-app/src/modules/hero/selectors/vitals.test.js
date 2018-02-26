import * as selectors from '../selectors/vitals';

describe('Hero vitals selectors', () => {
  it('should return the level of energy', () => {
    expect(selectors.getEnergy({ hero: { vitals: { energy: 0 } } })).toEqual(0);
  });

  it('should return the level of fatigue', () => {
    expect(selectors.getFatigue({ hero: { vitals: { fatigue: 0 } } })).toEqual(0);
  });

  it('should return the level of hunger', () => {
    expect(selectors.getHunger({ hero: { vitals: { hunger: 0 } } })).toEqual(0);
  });

  it('should return the level of thirst', () => {
    expect(selectors.getThirst({ hero: { vitals: { thirst: 0 } } })).toEqual(0);
  });
});
