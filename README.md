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
      trackID: YOUR_LIVESESSION_TRACKID,
    },
  },
];
```

## FAQ

1. Where can i find a tracking ID?
   - Log into your account in [LiveSession](https://app.livesession.io/)
   - Go to **Settings** > **Websites** and click on **Tracking code**
   - You'll see a TrackID on the right side above the tracking code
