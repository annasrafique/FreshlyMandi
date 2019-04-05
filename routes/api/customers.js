const express = require("express");
const router = express.Router();

// @route   GET api/customers/test
// @desc    Test customers route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Customers Works" }));

module.exports = router;
