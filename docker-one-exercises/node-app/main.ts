import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send("<h1 style='color:blue; font-size:50px;'>Hello from Express + TypeScript!</h1>")
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
