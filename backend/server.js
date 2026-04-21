import express from "express";
import "dotenv/config";
import cors from "cors";
import Hero from "./handlers/sendHero.js";
import handleTest from "./handlers/handleTestimony.js";
import handleDeletePort from "./handlers/handleDeletePort.js";
import handleApprove from "./handlers/handleApprove.js";
import handleRoot from "./handlers/handlRoot.js";
import handlePortfolio from "./handlers/handlePortfolio.js";
import handleGetPort from "./handlers/handleGetPort.js";
import handleDeleteTest from "./handlers/handleDeleteTest.js";
import helmet from "helmet"
import rateLimit from "express-rate-limit"

const app = express();
const port = process.env.PORT || 5687;

app.use(helmet())

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests from this IP, please try again after 15 minutes"
});

app.use(limiter);

app.use(cors({
  origin: "https://videoweb.onrender.com/",
  optionsSuccessStatus: 200
}));

app.get("/", handleRoot);
app.get("/portfolio", handleGetPort);

app.post("/POST/testimony", handleTest);
app.post("/POST/portfolio", handlePortfolio);

app.patch("/:id/approve", handleApprove);

app.delete("/DELETE/portfolio/:id", handleDeletePort);
app.delete("/DELETE/testimonial/:id", handleDeleteTest);

app.post("/POST/send", Hero); // testing connectivity of apis not working

app.listen(port, () => {
    console.log("App listening on port: ", port);
});