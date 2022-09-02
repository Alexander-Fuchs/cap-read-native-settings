export interface CapReadNativeSettingsPlugin {
  read(options: { key: string }): Promise<{ value: string }>;
}
