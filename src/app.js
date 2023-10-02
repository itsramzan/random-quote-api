import express from "express";
import quotes from "./data/quotes.js";
import getRandomInt from "./utils/getRandomInt.js";

const app = express();

app.get("/", async (req, res) => {
  try {
    const nth = getRandomInt(0, quotes.length);
    const quote = quotes[nth];

    res.json({
      quote,
    });
  } catch (err) {
    res.json({
      error: "Something went wrong..",
    });
  }
});

app.listen(8080, () => {
  console.log(`Server running...`);
});
