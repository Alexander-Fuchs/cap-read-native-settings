import Foundation

@objc public class CapReadNativeSettings: NSObject {
    @objc public func read(_ key: String) -> String {
        let value = Bundle.main.object(forInfoDictionaryKey: key) as? String
        return value ?? ""
    }
}
