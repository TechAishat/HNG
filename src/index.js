const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

const userProfile = {
  email: process.env.USER_EMAIL || "aaishat122@gmail.com",
  name: process.env.USER_NAME || "techaishat",
  stack: process.env.USER_STACK || "Node.js/Express",
  username: process.env.USER_USERNAME || "TechAishat"
};

const catFactClient = axios.create({
  baseURL: "https://catfact.ninja",
  timeout: Number(process.env.CAT_FACT_TIMEOUT_MS) || 5000
});

app.get("/me", async (req, res) => {
  let fact = "Cat fact service is currently unavailable.";

  try {
    const response = await catFactClient.get("/fact");
    if (response.data && response.data.fact) {
      fact = response.data.fact;
    }
  } catch (error) {
    fact = process.env.CAT_FACT_FALLBACK || fact;
  }

  res.set("Content-Type", "application/json");
  res.status(200).json({
    status: "success",
    user: {
      email: userProfile.email,
      name: userProfile.name,
      stack: userProfile.stack
    },
    timestamp: new Date().toISOString(),
    fact
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
