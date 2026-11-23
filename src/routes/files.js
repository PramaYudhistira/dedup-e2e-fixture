const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../../uploads", req.query.name);
  fs.readFile(filePath, (err, contents) => {
    if (err) return res.status(404).end();
    res.send(contents);
  });
});

module.exports = router;
