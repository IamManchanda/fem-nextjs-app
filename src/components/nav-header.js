/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import Link from "next/link";

const NavHeader = () => (
  <Fragment>
    <header
      sx={{
        height: "60px",
        width: "100vw",
        bg: "primary",
        borderBottom: "1px solid",
        borderColor: "primary",
      }}
    >
      <nav
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          variant: "containers.page",
          height: "100%",
          color: "white",
        }}
      >
        <Link href="/">
          <a
            sx={{
              fontWeight: "bold",
              fontSize: 4,
              cursor: "pointer",
            }}
          >
            Note App
          </a>
        </Link>

        <Link href="/notes">
          <a
            sx={{
              fontSize: 3,
              cursor: "pointer",
            }}
          >
            All Notes
          </a>
        </Link>

        <a
          sx={{
            fontSize: 3,
            cursor: "pointer",
          }}
          href={process.env.HELP_APP_URL}
          target="_blank"
        >
          Help
        </a>
      </nav>
    </header>
  </Fragment>
);

export default NavHeader;
