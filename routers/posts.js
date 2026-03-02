const express = require("express");
const router = express.Router();

const posts = require("../data/posts");


router.get("/", (req, res) => {
  res.send("Lista dei post");
});


router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Dettaglio del post ${id}`);
});


router.post("/", (req, res) => {
  res.send("Creazione nuovo post");
});


router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Modifica del post ${id}`);
});


router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Cancellazione del post ${id}`);
});

module.exports = router;