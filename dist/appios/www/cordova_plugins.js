cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugin.statusbar/www/statusbar.js",
        "id": "com.phonegap.plugin.statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugin.statusbar": "1.1.0"
}
// BOTTOM OF METADATA
});