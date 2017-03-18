import React from 'react';
import { action } from '@kadira/storybook';
import { boolean } from '@kadira/storybook-addon-knobs';
import '@material/checkbox/dist/mdc.checkbox.css';

import stories from '../stories';

import Checkbox from './Checkbox';

stories
  .add('Checkbox', () => (
    <Checkbox
      dark={boolean('Dark', false)}
      checked={boolean('Checked', false)}
      indeterminate={boolean('Indeterminate', false)}
      disabled={boolean('Disabled', false)}
      onChange={action('click')}
    />
  ));

