import { configure } from '@kadira/storybook';

const requireContext = require.context('../src/components', true, /\.stories\.js$/);

configure(() => requireContext.keys().map(requireContext), module);

