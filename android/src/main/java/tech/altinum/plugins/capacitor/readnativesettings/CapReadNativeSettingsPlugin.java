package tech.altinum.plugins.capacitor.readnativesettings;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import android.app.Activity;

@CapacitorPlugin(name = "CapReadNativeSettings")
public class CapReadNativeSettingsPlugin extends Plugin {

    private CapReadNativeSettings implementation = new CapReadNativeSettings();

    @PluginMethod
    public void read(PluginCall call) {
        String key = call.getString("key");

        final Activity activity = getActivity();

        String packageName = activity.getPackageName();

        int resId = activity.getResources().getIdentifier(key, "string", packageName);
        String value = activity.getString(resId);

        JSObject ret = new JSObject();
        ret.put("value", implementation.read(value));
        call.resolve(ret);
    }
}
