/**
 * Copyright (c) Lineage, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

import Size from './Size';

const fontFamily = Platform.select({
  android: 'sans-serif',
  ios: "-apple-system, BlinkMacSystemFont",
  macos: "-apple-system, BlinkMacSystemFont",
  windows: 'Century Schoolbook',
});

export default {
  body: {
    fontFamily,
    fontSize: Size.s5,
    lineHeight: Size.s6,
  },
  title: {
    fontFamily: Platform.OS === 'macos' || 'ios' ? "Baskerville" : "Century Schoolbook",
    fontSize: Size.s7,
    lineHeight: Size.s8,
  },
  heading: {
    fontFamily: Platform.OS === 'macos' || 'ios' ? "Baskerville" : "Century Schoolbook",
    fontSize: Size.s6,
    lineHeight: Size.s7,
  }
}
