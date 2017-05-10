'use strict';

import 'react-native';
import React from 'react';
//import React from 'react';
import Pay from '../src/components/payments/Payments';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Pay />
  ).toJSON();
  expect(tree).toMatchSnapshot();

});
