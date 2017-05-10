'use strict';

import 'react-native';
import React from 'react';
//import React from 'react';
import NewPay from '../src/components/payments/NewPayments';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <NewPay />
  ).toJSON();
  expect(tree).toMatchSnapshot();

});
