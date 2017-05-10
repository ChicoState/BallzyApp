'use strict';

import 'react-native';
import React from 'react';
//import React from 'react';
import Chat from '../src/components/chat/Chat';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Chat />
  ).toJSON();
  expect(tree).toMatchSnapshot();

});
