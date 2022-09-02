import { registerPlugin } from '@capacitor/core';
const CapReadNativeSettings = registerPlugin('CapReadNativeSettings', {
    web: () => import('./web').then(m => new m.CapReadNativeSettingsWeb()),
});
export * from './definitions';
export { CapReadNativeSettings };
//# sourceMappingURL=index.js.map