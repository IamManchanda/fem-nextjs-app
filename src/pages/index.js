/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";

const HomePage = ({ content }) => (
  <Fragment>
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div
        sx={{
          variant: "containers.page",
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1
          sx={{
            fontSize: 8,
            my: 0,
          }}
        >
          {content.title}
        </h1>
      </div>
    </div>
  </Fragment>
);

export async function getStaticProps() {
  return {
    props: {
      content: {
        title: "Look at my note app tho",
      },
    },
  };
}

export default HomePage;
