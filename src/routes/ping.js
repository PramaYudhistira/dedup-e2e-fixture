const express = require("express");
const { exec } = require("child_process");

const router = express.Router();

router.post("/", (req, res) => {
  exec("ping -c 1 " + req.body.host, (err, stdout) => {
    res.type("text/plain").send(err ? String(err) : stdout);
  });
});

module.exports = router;
