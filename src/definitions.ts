export interface CapReadNativeSettingsPlugin {
  read(key: string): Promise<string>;
}
