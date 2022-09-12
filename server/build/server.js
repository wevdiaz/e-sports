import express from "express";
const app = express();
app.get("/ads", (req, res) => {
    return res.json([
        { id: 1, name: "Cereja" },
        { id: 2, name: "Maracujá" },
        { id: 3, name: "Pêssego" },
        { id: 3, name: "Laranja" }
    ]);
});
app.listen(3000, () => {
    console.log("server is running!");
});
