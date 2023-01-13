import { createService, findAllService } from "../services/news.service.js";
import { ObjectId } from "mongoose";

const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.status(400).send({ message: "Submit all fields for registration" });
    }

    await createService({
      title,
      text,
      banner,
      user: req.userId,
    });

    res.send(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
const findAll = async (req, res) => {
  const news = await findAllService();
  if (news.lenght === 0) {
    return res.status(400).send({ message: "There are no registered news" });
  }
  res.send(news);
};

export { create, findAll };
