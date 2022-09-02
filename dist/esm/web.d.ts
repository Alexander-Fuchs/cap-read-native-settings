import { WebPlugin } from '@capacitor/core';
import type { CapReadNativeSettingsPlugin } from './definitions';
export declare class CapReadNativeSettingsWeb extends WebPlugin implements CapReadNativeSettingsPlugin {
    read(key: string): Promise<string>;
}
