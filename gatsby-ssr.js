/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")
const TextContextProvider = require('./src/utils/text/textProvider').default;

exports.wrapRootElement = ({ element }) => {
  return (
    <TextContextProvider>
      {element}
    </TextContextProvider>
  );
}
