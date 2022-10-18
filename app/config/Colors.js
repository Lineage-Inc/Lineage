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

import Palette from './ColorScheme';

const Colors = {
  container: {
    backgroundColor: Palette.background,
  },
  scrollView: {
    backgroundColor: Palette.background,
  },
  body: {
    backgroundColor: Palette.surface,
    borderWidth: 1,
    borderColor: Palette.borderColor,
  },
  sectionTitle: {
    color: Palette.titleText,
  },
  sectionDescription: {
    color: Palette.bodyText,
  },
  highlight: {
    color: Palette.bodyTextHighlight,
  },
};

export default Colors;
