import i18next from 'i18next';

import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import Settings from './Settings';

i18next.addResourceBundle('en', 'settingPage', en);
i18next.addResourceBundle('tr', 'settingPage', tr);
i18next.addResourceBundle('ar', 'settingPage', ar);

const SettingsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'settings',
      element: <Settings />,
    },
  ],
};

export default SettingsConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';

const Example = lazy(() => import('./Example'));

const SettingsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'example',
      element: <Example />,
    },
  ],
};

export default SettingsConfig;
*/
