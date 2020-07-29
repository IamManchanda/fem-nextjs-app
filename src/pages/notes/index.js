import { Fragment } from "react";
import Link from "next/link";

const NotesPage = () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i + 1, title: `Note: ${i + 1}` }));

  return (
    <Fragment>
      <h1>Notes Page</h1>
      {notes.map((note) => (
        <div key={note.id}>
          <Link href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>
      ))}
    </Fragment>
  );
};

export default NotesPage;
