/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import Link from "next/link";

const NotesPage = ({ notes }) => {
  return (
    <Fragment>
      <div
        sx={{
          variant: "containers.page",
        }}
      >
        <h1>My Notes</h1>
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {notes.map((note) => (
            <div
              key={note.id}
              sx={{
                width: "33%",
                p: 2,
              }}
            >
              <Link href="/notes/[id]" as={`/notes/${note.id}`}>
                <a
                  sx={{
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <div
                    sx={{
                      variant: "containers.card",
                    }}
                  >
                    <strong>{note.title}</strong>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.API_URL}/api/notes`);
  const { data } = await res.json();
  return {
    props: {
      notes: data,
    },
  };
};

export default NotesPage;
