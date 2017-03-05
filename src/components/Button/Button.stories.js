import React from 'react';
import { action } from '@kadira/storybook';
import { boolean } from '@kadira/storybook-addon-knobs';
import '@material/button/dist/mdc.button.css';

import stories from '../stories';

import Button from './Button';

stories
  .add('Button', () => (
    <Button
      dense={boolean('Dense', false)}
      raised={boolean('Raised', false)}
      compact={boolean('Compact', false)}
      primary={boolean('Primary', false)}
      accent={boolean('Accent', false)}
      disabled={boolean('Disabled', false)}
      onClick={action('click')}
    >
      Button
    </Button>
  ));

