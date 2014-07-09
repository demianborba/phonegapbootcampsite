cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.blackberry.system/www/client.js",
        "id": "com.blackberry.system.client",
        "clobbers": [
            "blackberry.system"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/blackberry10/beep.js",
        "id": "org.apache.cordova.dialogs.beep",
        "clobbers": [
            "window.navigator.notification.beep"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.blackberry.system": "1.0.0",
    "org.apache.cordova.dialogs": "0.2.8",
    "org.apache.cordova.inappbrowser": "0.5.0",
    "com.blackberry.utils": "1.0.0",
    "com.blackberry.jpps": "1.0.0",
    "com.blackberry.pim.lib": "1.0.0"
}
// BOTTOM OF METADATA
});