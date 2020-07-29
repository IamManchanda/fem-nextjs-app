import nc from "next-connect";
import cors from "cors";

const handler = nc()
  .use(cors())
  .get((req, res) => {
    res.json({
      message: "Readed.",
    });
  })
  .post((req, res) => {
    res.json({
      message: "Posted.",
    });
  })
  .put(async (req, res) => {
    res.json({
      message: "Putted.",
    });
  });

export default handler;
