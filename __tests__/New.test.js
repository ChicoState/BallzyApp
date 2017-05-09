'use strict';

import 'react-native';
import React from 'react';
//import React from 'react';
import New from '../src/components/challenges/New';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <New />
  ).toJSON();
  expect(tree).toMatchSnapshot();

});
