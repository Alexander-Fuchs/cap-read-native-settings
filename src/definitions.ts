export interface CapReadNativeSettingsPlugin {
  read(options: { key: string }): Promise<{ key: string }>;
}
