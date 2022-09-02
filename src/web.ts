import { WebPlugin } from '@capacitor/core';

import type { CapReadNativeSettingsPlugin } from './definitions';

export class CapReadNativeSettingsWeb
  extends WebPlugin
  implements CapReadNativeSettingsPlugin
{
  async read(key: string): Promise<{ value: string }> {
    console.log("Not implemented for Web!")
    return { value: key };
  }
}
