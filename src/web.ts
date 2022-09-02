import { WebPlugin } from '@capacitor/core';

import type { CapReadNativeSettingsPlugin } from './definitions';

export class CapReadNativeSettingsWeb
  extends WebPlugin
  implements CapReadNativeSettingsPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
