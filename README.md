# angular-live-or-test [![Build Status](https://travis-ci.org/valet-io/angular-live-or-test.svg)](https://travis-ci.org/valet-io/angular-live-or-test) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/angular-live-or-test.svg)](https://greenkeeper.io/)

Angular service and directive for toggling and indicating "live" and "test" modes. If you've ever used [Stripe](https://stripe.com/), you've seen how you can toggle between "live" and "test" from your dashboard. In test mode, the dashboard displays a badge reminding the user that they're in test mode. This allow you to replicate that effect.

![Stripe test badge](stripe-test.png)

## Installing

```bash
$ npm install angular-live-or-test
```

## Setup

```js
angular.module('myApp', [
  require('angular-live-or-test')
]);
```

## API

### Service: `live`

##### `live.enabled([Boolean])` -> `Boolean`

When either `true` or `false` is passed, live mode is enabled or disabled, respectively. If no argument is passed, the current setting is returned. `live` is a singleton. Your application can only have one live setting.

### Directive: `testBadge`

Displays a badge that is synced to the live mode setting. 

```html
<test-badge>
  <h2>Test</h2>
</test-badge>
```
