import { WebPlugin } from '@capacitor/core';
export class CapReadNativeSettingsWeb extends WebPlugin {
    async read(options) {
        console.log('Read', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map