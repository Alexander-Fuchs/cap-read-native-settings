import Foundation

@objc public class CapReadNativeSettings: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
