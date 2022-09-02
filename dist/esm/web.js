import { WebPlugin } from '@capacitor/core';
export class CapReadNativeSettingsWeb extends WebPlugin {
    async read(key) {
        console.log("Not implemented for Web!");
        return { value: key };
    }
}
//# sourceMappingURL=web.js.map