import { WebPlugin } from '@capacitor/core';
import type { CapReadNativeSettingsPlugin } from './definitions';
export declare class CapReadNativeSettingsWeb extends WebPlugin implements CapReadNativeSettingsPlugin {
    read(options: {
        key: string;
    }): Promise<{
        key: string;
    }>;
}
