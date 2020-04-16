exports.onPreInit = ({ reporter }, pluginOptions) => {
  const { trackID } = pluginOptions;
  if (trackID === undefined || trackID === null) {
    reporter.warn(
      "Field 'trackID' is required in gatsby-plugin-livesession, please provide it as an option in gatsby-config.js"
    );
  }
  if (process.env.NODE_ENV === 'production') {
    if (trackID === undefined || trackID === null) {
      throw new Error(
        'Option trackID is required, provide it to enable LiveSession script'
      );
    }
  }
};
