/*
 * Copyright 2011-2012 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Whitelist = require("../../lib/policy/whitelist").Whitelist,
    _whitelist = new Whitelist(),
    _utils = require("../../lib/utils"),
    _applicationEvents = require("../../lib/events/applicationEvents"),
    _deviceEvents = require("../../lib/events/deviceEvents"),
    _actionMap = {
        batterystatus: {
            context: _deviceEvents,
            event: "battery.statusChange",
            triggerEvent: "batterystatus",
            trigger: function (pluginResult, data) {
                pluginResult.callbackOk(data, true);
            }
        },
        batterylow: {
            context: _deviceEvents,
            event: "battery.chargeLow",
            triggerEvent: "batterylow",
            trigger: function (pluginResult, data) {
                pluginResult.callbackOk(data, true);
            }
        },
        batterycritical: {
            context: _deviceEvents,
            event: "battery.chargeCritical",
            triggerEvent: "batterycritical",
            trigger: function (pluginResult, data) {
                pluginResult.callbackOk(data, true);
            }
        },
        languagechanged: {
            context: _applicationEvents,
            event: "systemLanguageChange",
            triggerEvent: "languagechanged",
            trigger: function (pluginResult, language) {
                pluginResult.callbackOk(language, true);
            }
        },
        regionchanged: {
            context: _applicationEvents,
            event: "systemRegionChange",
            triggerEvent: "regionchanged",
            trigger: function (pluginResult, region) {
                pluginResult.callbackOk(region, true);
            }
        },
        fontchanged: {
            context: _applicationEvents,
            event: "fontchanged",
            triggerEvent: "fontchanged",
            trigger: function (pluginResult, fontFamily, fontSize) {
                pluginResult.callbackOk({'fontFamily': fontFamily, 'fontSize': fontSize}, true);
            }
        },
        perimeterlocked: {
            context: _applicationEvents,
            event: "windowLock",
            triggerEvent: "perimeterlocked",
            trigger: function (pluginResult) {
                pluginResult.callbackOk(null, true);
            }
        },
        perimeterunlocked: {
            context: _applicationEvents,
            event: "windowUnlock",
            triggerEvent: "perimeterunlocked",
            trigger: function (pluginResult) {
                pluginResult.callbackOk(null, true);
            }
        }
    },
    _listeners = {};

module.exports = {

    startEvent: function (success, fail, args, env) {
        var result = new PluginResult(args, env),
            eventName = JSON.parse(decodeURIComponent(args.eventName)),
            context = _actionMap[eventName].context,
            systemEvent = _actionMap[eventName].event,
            listener = _actionMap[eventName].trigger.bind(null, result);

        if (!_listeners[eventName]) {
            _listeners[eventName] = {};
        }

        if (_listeners[eventName][env.webview.id]) {
            //TODO: Change back to erroring out after reset is implemented
            //result.error("Underlying listener for " + eventName + " already running for webview " + env.webview.id);
            context.removeEventListener(systemEvent, _listeners[eventName][env.webview.id]);
        }

        context.addEventListener(systemEvent, listener);
        _listeners[eventName][env.webview.id] = listener;
        result.noResult(true);
    },

    stopEvent: function (success, fail, args, env) {
        var result = new PluginResult(args, env),
            eventName = JSON.parse(decodeURIComponent(args.eventName)),
            listener = _listeners[eventName][env.webview.id],
            context = _actionMap[eventName].context,
            systemEvent = _actionMap[eventName].event;

        if (!listener) {
            result.error("Underlying listener for " + eventName + " never started for webview " + env.webview.id);
        } else {
            context.removeEventListener(systemEvent, listener);
            delete _listeners[eventName][env.webview.id];
            result.noResult(false);
        }
    },

    hasCapability: function (success, fail, args, env) {
        var result = new PluginResult(args, env),
            SUPPORTED_CAPABILITIES = [
                "input.touch",
                "location.gps",
                "media.audio.capture",
                "media.video.capture",
                "media.recording",
                "network.bluetooth",
                "network.wlan"
            ],
            // TODO string argument surrounded by %22
            // preserve dot for capabiliity
            capability = args.capability.replace(/[^a-zA-Z.]+/g, "");

        result.ok(SUPPORTED_CAPABILITIES.indexOf(capability) >= 0, false);
    },

    getFontInfo: function (success, fail, args, env) {
        var result = new PluginResult(args, env),
            fontFamily,
            fontSize;

        try {
            fontFamily = window.qnx.webplatform.getApplication().getSystemFontFamily();
            fontSize = window.qnx.webplatform.getApplication().getSystemFontSize();

            result.ok({'fontFamily': fontFamily, 'fontSize': fontSize}, false);
        } catch (e) {
            result.error(e, false);
        }
    },

    getDeviceProperties: function (success, fail, args, env) {
        var result = new PluginResult(args, env),
            returnObj;
        try {
            returnObj = {
                "hardwareId" : window.qnx.webplatform.device.hardwareId,
                "softwareVersion" : window.qnx.webplatform.device.scmBundle,
                "name" : window.qnx.webplatform.device.deviceName
            };
            result.ok(returnObj, false);
        } catch (err) {
            result.error(err.message, false);
        }
    },

    region: function (success, fail, args, env) {
        var result = new PluginResult(args, env),
            region;
        try {
            region = window.qnx.webplatform.getApplication().systemRegion;
            result.ok(region, false);
        } catch (e) {
            result.error(e.message, false);
        }
    },

    getCurrentTimezone: function (success, fail, args, env) {
        var result = new PluginResult(args, env);
        try {
            result.ok(window.qnx.webplatform.device.timezone, false);
        } catch (err) {
            result.error(err.message, false);
        }
    },

    getTimezones: function (success, fail, args, env) {
        var result = new PluginResult(args, env);
        try {
            window.qnx.webplatform.device.getTimezones(function (zones) {
                result.ok(zones, false);
            });
        } catch (err) {
            result.error(err.message, false);
        }
    },

    setWallpaper: function (success, fail, args, env) {
        var result = new PluginResult(args, env),
            path;
        try {
            path = _utils.translatePath(JSON.parse(decodeURIComponent(args.wallpaper)));
            // Removing file:// form the path because newWallpaper can't handle it.
            path = path.replace(/file:\/\//, '');
            window.qnx.webplatform.getApplication().newWallpaper(path);
            result.ok(null, false);
        } catch (err) {
            result.error(err.message, false);
        }
    },

    deviceLockedStatus: function (success, fail, args, env) {
        var result = new PluginResult(args, env),
            callback;

        try {
            callback = function (state) {
                result.ok(state, false);
            };
            window.qnx.webplatform.getApplication().isDeviceLocked(callback);
        } catch (err) {
            result.error(err.message, false);
        }
    }
};
