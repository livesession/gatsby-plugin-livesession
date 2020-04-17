# gatsby-plugin-livesession

This is a plugin that let you easily add LiveSession tracking code to your Gatsby website.
Plugin adds code only in production mode.
Follow the instruction to configure it properly.

1. Install
   `npm i gatsby-plugin-livesession` or `yarn add gatsby-plugin-livesession`

2. Configure

```javascript
// In gatsby-config.js

plugins: [
  {
    resolve: `gatsby-plugin-livesession`,
    options: {
      trackID: YOUR_LIVESESSION_TRACKID, // Required, string
      keystrokes: true || false, // Optional, default to false
      rootHostname: '.example.com', // Optional
    },
  },
];
```

## Options

`trackID`

This is a place for your Tracking ID, you can get it from your [LiveSession account](https://app.livesession.io/).
Tracking code won't be genereated without it.

`keystrokes`

Enable global keystroke tracking, read more [here](https://livesession.io/help/how-to-record-keystrokes/)

`rootHostname`

Set this to the highest-level hostname to record session across different subdomains on your site. (e.g. .your-domain.com)

## FAQ

1. Where can i find a tracking ID?
   - Log into your account in [LiveSession](https://app.livesession.io/)
   - Go to **Settings** > **Websites** and click on **Tracking code**
   - You'll see a TrackID on the right side above the tracking code
2. How to check if my tracking script works?
   Simply add **\_\_ls_validation** query to string parameter in your web browser URL, for more informations check out [this article](https://livesession.io/help/how-to-check-if-my-tracking-script-works/)

More informations about configuration and methods go to [LiveSession Developers page](https://developers.livesession.io/)

For support contact us at [hello@livesession.io](mailto:hello@livesession.io) or visit [https://www.livesession.io](https://www.livesession.io/)
