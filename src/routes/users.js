const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/:id", (req, res) => {
  db.get("SELECT id, email FROM users WHERE id = " + req.params.id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row ?? null);
  });
});

module.exports = router;
