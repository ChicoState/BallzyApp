'use strict';

import 'react-native';
import React from 'react';
//import React from 'react';
import Signup from '../src/components/rootlogin/Signup';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Signup />
  ).toJSON();
  expect(tree).toMatchSnapshot();

});
