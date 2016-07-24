import { configure } from '@kadira/storybook';

function loadStories() {
  const req = require.context('../', true, /\.story\.js$/)
  req.keys().forEach(req);
}

configure(loadStories, module);
