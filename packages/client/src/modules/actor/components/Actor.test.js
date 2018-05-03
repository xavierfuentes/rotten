import React from 'react';
import { shallow } from 'enzyme';

import Actor from './Actor';

describe('Actor character reducer', () => {
  test('spawns a new actor when the component mounts', () => {
    const spawnFn = jest.fn();
    const wrapper = shallow(<Actor spawn={spawnFn} />);

    expect(spawnFn.mock.calls.length).toEqual(1);
  });
});
