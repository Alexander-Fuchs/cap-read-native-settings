var capacitorCapReadNativeSettings = (function (exports, core) {
    'use strict';

    const CapReadNativeSettings = core.registerPlugin('CapReadNativeSettings', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapReadNativeSettingsWeb()),
    });

    class CapReadNativeSettingsWeb extends core.WebPlugin {
        async read(options) {
            console.log("Not implemented for Web!");
            return { value: options.key };
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CapReadNativeSettingsWeb: CapReadNativeSettingsWeb
    });

    exports.CapReadNativeSettings = CapReadNativeSettings;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
