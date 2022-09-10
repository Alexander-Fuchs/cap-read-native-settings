package tech.altinum.plugins.capacitor.readnativesettings;

import android.util.Log;
import android.app.Activity;

public class CapReadNativeSettings {

    public String read(String value) {
        String key = call.getString("key");
        final Activity activity = getActivity();

        String packageName = activity.getPackageName();

        int resId = activity.getResources().getIdentifier(key, "string", packageName);
        String value = activity.getString(resId);
        return value;
    }
}
