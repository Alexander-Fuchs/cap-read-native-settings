export interface CapReadNativeSettingsPlugin {
  read(key: string): Promise<{value: string}>;
}
