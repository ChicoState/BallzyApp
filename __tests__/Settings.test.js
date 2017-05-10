'use strict';

import 'react-native';
import React from 'react';
//import React from 'react';
import Settings from '../src/components/settings/Settings';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Settings />
  ).toJSON();
  expect(tree).toMatchSnapshot();

});
