const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
  res.status(201).json({ message: "ok" });
});

module.exports = router;
