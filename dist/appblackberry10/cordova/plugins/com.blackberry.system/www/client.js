/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

var _self = {},
    ID = "com.blackberry.system",
    deviceProperties,
    noop = function () {},
    execFunc = cordova.require("cordova/exec"),
    events = ["batterystatus", "batterylow", "batterycritical", "languagechanged", "regionchanged", "fontchanged", "perimeterlocked", "perimeterunlocked"],
    channels = events.map(function (eventName) {
        var thisChannel = cordova.addDocumentEventHandler(eventName),
            success = function (data) {
                thisChannel.fire(data);
            },
            fail = function (error) {
                console.log("Error initializing " + eventName + " listener: ", error);
            };
        thisChannel.onHasSubscribersChange = function () {
            if (this.numHandlers === 1) {
                execFunc(success, fail, ID, "startEvent", {eventName: eventName});
            } else if (this.numHandlers === 0) {
                execFunc(noop, noop, ID, "stopEvent", {eventName: eventName});
            }
        };
        return thisChannel;
    });

function getFieldValue(field, args) {
    var value = null,
        success = function (data, response) {
            value = data;
        },
        fail = function (data, response) {
            throw data;
        };

    try {
        execFunc(success, fail, ID, field, args);
    } catch (e) {
        console.error(e);
    }

    return value;
}

function getDeviceProperty(field) {
    var value;

    if (!deviceProperties) {
        deviceProperties = getFieldValue("getDeviceProperties");
    }

    value = deviceProperties ? deviceProperties[field] : null;

    return value;
}

function defineGetter(field, getterArg) {
    var getter = getterArg || function () {
        return getFieldValue(field);
    };
    Object.defineProperty(_self, field, {
        get: getter
    });
}

function defineReadOnlyField(obj, field, value) {
    Object.defineProperty(obj, field, {
        "value": value,
        "writable": false
    });
}

_self.hasPermission = function (module) {
    return getFieldValue("hasPermission", {"module": module});
};

_self.hasCapability = function (capability) {
    return getFieldValue("hasCapability", {"capability": capability});
};

_self.getFontInfo = function () {
    return getFieldValue("getFontInfo");
};

_self.getCurrentTimezone = function () {
    return getFieldValue("getCurrentTimezone");
};

_self.getTimezones = function () {
    return getFieldValue("getTimezones");
};

_self.setWallpaper = function (path) {
    execFunc(noop, noop, ID, "setWallpaper", {"wallpaper": path});
};

defineGetter("region");
defineGetter("language", function () {
    return navigator.language;
});
defineGetter("deviceLockedStatus");

defineReadOnlyField(_self, "ALLOW", 0);
defineReadOnlyField(_self, "DENY", 1);
defineReadOnlyField(_self, "hardwareId", getDeviceProperty("hardwareId"));
defineReadOnlyField(_self, "softwareVersion", getDeviceProperty("softwareVersion"));
defineReadOnlyField(_self, "name", getDeviceProperty("name"));

module.exports = _self;
