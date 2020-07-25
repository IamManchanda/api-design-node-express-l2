import { Router } from "express";

const router = Router();

const mockController = (req, res) => {
  res.send({ message: "Hello World" });
};

router.route("/").get(mockController).post(mockController);

router
  .route("/:id")
  .get(mockController)
  .put(mockController)
  .delete(mockController);

export default router;
