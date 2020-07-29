import { Fragment } from "react";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => (
  <Fragment>
    <Component {...pageProps} />
  </Fragment>
);

export default MyApp;
