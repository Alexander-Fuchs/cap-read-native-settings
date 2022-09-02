import { WebPlugin } from '@capacitor/core';
export class CapReadNativeSettingsWeb extends WebPlugin {
    async read(options) {
        console.log("Not implemented for Web!");
        return { value: options.key };
    }
}
//# sourceMappingURL=web.js.map