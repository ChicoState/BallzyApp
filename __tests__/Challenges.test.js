'use strict';

import 'react-native';
import React from 'react';
//import React from 'react';
import Challenges from '../src/components/challenges/Challenges';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Challenges />
  ).toJSON();
  expect(tree).toMatchSnapshot();

});
