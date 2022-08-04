// Imports
import cors from "cors";
import express from "express";

// Routes
import steamRouter from "./routes/steam.routes.js";
import twitchRouter from "./routes/twitch.routes.js";

// Middlewares
import errorMiddleware from "./middlewares/error.middleware.js";
import ipsMiddleware from "./middlewares/ips.middleware.js";
import logMiddleware from "./middlewares/log.middleware.js";
import rateMiddleware from "./middlewares/rate.middleware.js";

// Express
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Express Middlewares
app.use(ipsMiddleware);
app.use(rateMiddleware);
app.use(logMiddleware);
app.use("/steam-workshop-stats", steamRouter);
app.use("/twitch-stats", twitchRouter);
app.use(errorMiddleware);

export default app;
