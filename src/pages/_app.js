import { ThemeProvider } from "theme-ui";
import NavHeader from "../components/nav-header";

import "../styles/scss/globals.scss";
import theme from "../styles/js/theme";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <div>
      <NavHeader />
      <Component {...pageProps} />
    </div>
  </ThemeProvider>
);

export default MyApp;
