/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { testCustomHook } from '../../test/internal';
import { useEuiTheme } from '../../services';

import { TEXT_SIZES } from '../text/text';
import { euiMarkdownFormatStyles } from './markdown_format.styles';

describe('euiMarkdownFormat text sizes', () => {
  TEXT_SIZES.forEach((size) => {
    test(size, () => {
      const emotionReturn = testCustomHook(() =>
        euiMarkdownFormatStyles(useEuiTheme())
      ).return as any;
      expect(emotionReturn[size].styles).toMatchSnapshot();
    });
  });
});
