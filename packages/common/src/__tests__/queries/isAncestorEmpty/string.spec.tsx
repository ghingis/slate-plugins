/** @jsx jsx */

import { jsx } from '@udecode/plate-test-utils';
import { Editor, Element } from 'slate';
import { isAncestorEmpty } from '../../../queries/index';

jsx;

const input = ((
  <hp>
    test
    <cursor />
  </hp>
) as any) as Editor;

const output = false;

it('should be', () => {
  expect(isAncestorEmpty(input, input as Element)).toEqual(output);
});
