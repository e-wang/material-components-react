import { configure, addDecorator } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';

addDecorator(withKnobs);

const requireContext = require.context('../src/components', true, /\.stories\.js$/);

configure(() => requireContext.keys().map(requireContext), module);

