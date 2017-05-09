'use strict';

import 'react-native';
import React from 'react';
//import React from 'react';
import Users from '../src/components/users/UserChallenges';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Users />
  ).toJSON();
  expect(tree).toMatchSnapshot();

});
