import { WebPlugin } from '@capacitor/core';

import type { CapReadNativeSettingsPlugin } from './definitions';

export class CapReadNativeSettingsWeb
  extends WebPlugin
  implements CapReadNativeSettingsPlugin
{
  async read(options: { key: string }): Promise<{ key: string }> {
    console.log('Read', options);
    return options;
  }
}
