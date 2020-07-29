/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";

const CurrentNotePageById = ({ note: { title } = {} }) => {
  return (
    <Fragment>
      <div
        sx={{
          variant: "containers.page",
        }}
      >
        <h1>{title}</h1>
      </div>
    </Fragment>
  );
};

export const getServerSideProps = async ({ params, req, res }) => {
  const response = await fetch(`${process.env.API_URL}/api/notes/${params.id}`);
  if (!response.ok) {
    res.writeHead(302, {
      Location: "/notes",
    });
    res.end();
    return {
      props: {},
    };
  }
  const { data } = await response.json();
  return {
    props: {
      note: data,
    },
  };
};

export default CurrentNotePageById;
