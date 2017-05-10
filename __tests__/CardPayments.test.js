'use strict';

import 'react-native';
import React from 'react';
//import React from 'react';
import CardPay from '../src/components/payments/CardPayments';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <CardPay />
  ).toJSON();
  expect(tree).toMatchSnapshot();

});
