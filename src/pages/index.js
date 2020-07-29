import { Fragment } from "react";
import Link from "next/link";

const HomePage = () => (
  <Fragment>
    <h1>Home Page</h1>
    <Link href="/notes">
      <a>Notes Page</a>
    </Link>
  </Fragment>
);

export default HomePage;
