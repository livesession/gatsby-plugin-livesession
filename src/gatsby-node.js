const checkTrackID = (trackID) => {
  return trackID === undefined || trackID === null;
};

exports.onPreInit = ({ reporter }, pluginOptions) => {
  const { trackID } = pluginOptions;
  checkTrackID(trackID) &&
    reporter.warn(
      "Field 'trackID' is required in gatsby-plugin-livesession, please provide it as an option in gatsby-config.js"
    );

  if (process.env.NODE_ENV === 'production') {
    if (checkTrackID(trackID)) {
      throw new Error(
        'Option trackID is required, provide it to enable LiveSession script'
      );
    }
  }
};
