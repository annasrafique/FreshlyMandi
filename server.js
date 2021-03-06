const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const analytics = require("./routes/api/analytics");
const channels = require("./routes/api/channels");
const customers = require("./routes/api/customers");
const dashboard = require("./routes/api/dashboard");
const orders = require("./routes/api/orders");
const products = require("./routes/api/products");
const profiles = require("./routes/api/profiles");
const settings = require("./routes/api/settings");
const users = require("./routes/api/users");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongo DB connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passpert Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/analytics", analytics);
app.use("/api/channels", channels);
app.use("/api/customers", customers);
app.use("/api/dashboard", dashboard);
app.use("/api/orders", orders);
app.use("/api/products", products);
app.use("/api/profiles", profiles);
app.use("/api/settings", settings);
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server ruunning on port ${port}`));
