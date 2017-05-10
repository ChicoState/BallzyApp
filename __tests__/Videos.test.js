'use strict';

import 'react-native';
import React from 'react';
//import React from 'react';
import Videos from '../src/components/videos/Videos';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Videos />
  ).toJSON();
  expect(tree).toMatchSnapshot();

});
