/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "tailwindcss/dist/base.min.css";
import "./typography.css";

import React from "react";
import TextContextProvider from "./src/utils/text/textProvider";

const wrapRootElement = ({ element }) => {
  return (
    <TextContextProvider>
      {element}
    </TextContextProvider>
  )
};
export { wrapRootElement };
