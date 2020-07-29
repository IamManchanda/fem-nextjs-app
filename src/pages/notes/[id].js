import { Fragment } from "react";
import { useRouter } from "next/router";

const CurrentNotePageById = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Fragment>
      <h1>Current note page by id: {id}</h1>
    </Fragment>
  );
};

export default CurrentNotePageById;
