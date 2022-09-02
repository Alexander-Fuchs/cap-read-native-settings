export interface CapReadNativeSettingsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
