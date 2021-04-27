express = require("express");
const {
  create,
  getAll,
  deleteUser,
  get,
  updateUser,
} = require("../controller/Controller");
const router = new express.Router();

router.post("/api", create);
router.get("/api", getAll);
router.get("/api/user", get);
router.put("/api", updateUser);
router.delete("/api", deleteUser);
// router.post('/signup', signup);
// router.post('/signin', signin);
module.exports = router;
