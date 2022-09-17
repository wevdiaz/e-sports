import express from "express";

const app = express();

app.get("/games", (req, res) => {
  return res.json([]);
});

app.post("/ads", (req, res) => {
  return res.status(201).json(["Post!"]);
});

app.get("/games/:id/ads", (req, res) => {
  const { id } = req.params;
  const frutas = [
    { id: 1, name: "Cereja" },
    { id: 2, name: "Maracujá" },
    { id: 3, name: "Pêssego" },
    { id: 3, name: "Laranja" }
  ];

  const fruta = frutas.find((fruta) => fruta.id  === Number(id));

  if (!fruta) {
    return console.log("Registro não encontrado!");    
  }

  return res.json([fruta]);
});

app.get("/ads", (req, res) => {
  return res.json([
    { id: 1, name: "Cereja" },
    { id: 2, name: "Maracujá" },
    { id: 3, name: "Pêssego" },
    { id: 3, name: "Laranja" }
  ]);
});

app.get("/ads/:id/discord", (req, res) => {
  return res.json(["discord"])
});

app.listen(3000, () => {
  console.log("server is running!");
});