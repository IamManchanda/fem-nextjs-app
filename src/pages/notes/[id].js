/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import { useRouter } from "next/router";

const CurrentNotePageById = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Fragment>
      <div
        sx={{
          variant: "containers.page",
        }}
      >
        <h1>Note Id: {id}</h1>
      </div>
    </Fragment>
  );
};

export default CurrentNotePageById;
