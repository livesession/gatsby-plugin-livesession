// eslint-disable-next-line no-unused-vars
import React from 'react';

const renderOptions = (keystrokes, rootHostname) => {
  if (keystrokes && rootHostname === false) {
    return `keystrokes: true`;
  }
  if (rootHostname && keystrokes === false) {
    return `rootHostname: '${rootHostname}'`;
  }
  if (rootHostname && keystrokes) {
    return `keystrokes: true, rootHostname: '${rootHostname}'`;
  }
};

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    const {
      trackID,
      keystrokes = false,
      off = false,
      debugMode = false,
      rootHostname = false,
    } = pluginOptions;

    return setPostBodyComponents([
      <script
        key={`gatsby-plugin-livesession`}
        type="text/javascript"
        async
        dangerouslySetInnerHTML={{
          __html: `
            !function(w, d, t, u) {
                if (w.__ls) return; var f = w.__ls = function() { f.push ? f.push.apply(f, arguments) : f.store.push(arguments)};
                if (!w.__ls) w.__ls = f; f.store = []; f.v = "1.0";
                var ls = d.createElement(t); ls.async = true; ls.src = u;
                var s = d.getElementsByTagName(t)[0]; s.parentNode.insertBefore(ls, s);
            }(window, document, 'script', ('https:' == window.location.protocol ? 'https://' : 'http://') + 'cdn.livesession.io/track.js');
            __ls("init", "${trackID}");
            ${
              keystrokes || rootHostname
                ? `__ls('setOptions', { ${renderOptions(
                    keystrokes,
                    rootHostname
                  )} });`
                : ``
            }
            ${off ? "__ls('off');" : ``}
            ${debugMode ? "__ls('debug', true);" : ``}
            __ls("newPageView");
            `,
        }}
      />,
    ]);
  }
  return null;
};
