import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapReadNativeSettingsPlugin)
public class CapReadNativeSettingsPlugin: CAPPlugin {
    private let implementation = CapReadNativeSettings()

    @objc func read(_ call: CAPPluginCall) {
        let key = call.getString("key") ?? ""
        let value = Bundle.main.object(forInfoDictionaryKey: key) as? String
        call.resolve([
            "value": value as Any
        ])
    }
}
