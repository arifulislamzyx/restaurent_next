import Connection from "@/libs/db.connection";

await Connection();

export function handler(req, res) {
  res.status(200).send({ message: "Hello World" });
}
