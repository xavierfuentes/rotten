import * as selectors from '../selectors/vitals';

describe('Actor vitals selectors', () => {
  it('should return the level of energy', () => {
    expect(selectors.getEnergy({ actor: { vitals: { energy: 0 } } })).toEqual(
      0
    );
  });

  it('should return the level of fatigue', () => {
    expect(selectors.getFatigue({ actor: { vitals: { fatigue: 0 } } })).toEqual(
      0
    );
  });

  it('should return the level of hunger', () => {
    expect(selectors.getHunger({ actor: { vitals: { hunger: 0 } } })).toEqual(
      0
    );
  });

  it('should return the level of thirst', () => {
    expect(selectors.getThirst({ actor: { vitals: { thirst: 0 } } })).toEqual(
      0
    );
  });
});
