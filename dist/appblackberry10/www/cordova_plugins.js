cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.blackberry.system/www/client.js",
        "id": "com.blackberry.system.client",
        "clobbers": [
            "blackberry.system"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.blackberry.system": "1.0.0",
    "com.blackberry.utils": "1.0.0",
    "com.blackberry.jpps": "1.0.0"
}
// BOTTOM OF METADATA
});