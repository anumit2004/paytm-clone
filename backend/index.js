const express = require('express');
const rootRouter = require('./routers/index');
const cors = require("cors");
const app = express();
const { PORT } = require('./config');
require('./db');
app.use(cors());
app.use(express.json());
app.use("/api/v1",rootRouter)

app.listen(PORT);