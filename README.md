# Wi-Fi Aware for Titanium SDK

## Requirements

- Titanium SDK 13.0.0 or later
- Android 8.0 or later

## Methods
* isAvailable(): if WiFi-Aware is enabled. Will fire `available` event
* send(text): send a message
* publish(text): publish a channel
* subscribe(text): subscribe to a channel

## Properties
* hasFeature (bool): if WiFi-Aware is available on the phone

## Events
* available
* message
* subscribed
* discovered
* published

## Flow

On Android you'll need to request the NEARBY_WIFI_DEVICES permissions first:
```js
Ti.Android.requestPermissions(['android.permission.NEARBY_WIFI_DEVICES'], function (e) {
  if (e.success) {}
})
```

and then you can publish a channel and subscribe to one. If you discovered another device you can send a message.

## Example

Check the examples/app.js file for a full example.
