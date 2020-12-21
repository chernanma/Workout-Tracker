const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));

require("./routes/html-routes.js")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
var routesApi = require("./routes/api.js");
var routesHtml = require("./routes/html-routes.js");

app.use(routesApi);
app.use(routesHtml);


// app.use(require("./routes/api.js"));
// app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

