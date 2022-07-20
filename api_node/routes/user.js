const router = require("express").Router();

// this file will contain all the references for the index file to refer to for all the routes needed for users, to delete, edit and create them.

router.get("/", (req, res) => {
  res.send("Hey its user routes");
});

module.exports = router;
