import { registerPlugin } from '@capacitor/core';

import type { CapReadNativeSettingsPlugin } from './definitions';

const CapReadNativeSettings = registerPlugin<CapReadNativeSettingsPlugin>(
  'CapReadNativeSettings',
  {
    web: () => import('./web').then(m => new m.CapReadNativeSettingsWeb()),
  },
);

export * from './definitions';
export { CapReadNativeSettings };
