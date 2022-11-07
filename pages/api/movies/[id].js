import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const { id } = req.query;
  console.log(req.query);

  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const movie = await db.collection("movies").findOne({ _id: ObjectId(id) });

    res.json(movie);
  } catch (e) {
    console.error(e);
  }
};
